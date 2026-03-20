import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { adminStats, mockTransactions } from '@/data/games';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Gamepad2, 
  Package, 
  ShoppingCart, 
  Users, 
  Wallet,
  TrendingUp,
  Eye
} from 'lucide-react';
import { formatPrice, formatNumber, getStatusColor, getStatusLabel } from '@/utils/format';

const sidebarItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Game', href: '/admin/games', icon: Gamepad2 },
  { label: 'Produk', href: '/admin/products', icon: Package },
  { label: 'Transaksi', href: '/admin/transactions', icon: ShoppingCart },
  { label: 'Users', href: '/admin/users', icon: Users },
];

export function AdminDashboard() {
  const { user } = useAuth();

  if (user?.role !== 'admin') {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">Akses Ditolak</h2>
          <p className="mb-4 text-gray-400">Anda tidak memiliki izin untuk mengakses halaman ini</p>
          <Button asChild className="bg-purple-600 text-white hover:bg-purple-700">
            <Link to="/">Kembali ke Beranda</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-shrink-0 flex-col border-r border-purple-500/20 bg-[#1a1429] md:flex">
        {/* Logo */}
        <div className="border-b border-purple-500/20 p-6">
          <Link to="/admin" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-400">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-white">
                Miruka<span className="text-purple-400">Store</span>
              </span>
              <div className="text-xs text-gray-400">Admin Panel</div>
            </div>
          </Link>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  item.href === '/admin'
                    ? 'border border-purple-500/30 bg-purple-500/20 text-white'
                    : 'text-gray-400 hover:bg-purple-500/10 hover:text-white'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <div className="mb-2 px-4 text-xs font-semibold uppercase text-gray-500">Lainnya</div>
            <Link
              to="/"
              target="_blank"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition-colors hover:bg-purple-500/10 hover:text-white"
            >
              <Eye className="h-5 w-5" />
              Lihat Website
            </Link>
          </div>
        </nav>

        {/* User */}
        <div className="border-t border-purple-500/20 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">{user?.username}</div>
              <div className="text-xs text-gray-400">Administrator</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b border-purple-500/20 bg-[#1e1b4b]/95 px-8 py-4 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="hidden items-center gap-2 rounded-lg border border-purple-500/30 bg-[#0f0a1e] px-3 py-1.5 sm:flex">
                <Wallet className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-400">Digiflazz:</span>
                <span className="text-sm text-white">Cek Saldo</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          {/* Stats Cards */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-purple-500/20 bg-[#1a1429] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                  <Wallet className="h-6 w-6 text-purple-400" />
                </div>
                <span className="text-sm font-medium text-green-400">+12%</span>
              </div>
              <div className="text-sm text-gray-400">Pendapatan Hari Ini</div>
              <div className="text-xl font-bold text-white">{formatPrice(adminStats.todayRevenue)}</div>
            </div>

            <div className="rounded-xl border border-purple-500/20 bg-[#1a1429] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                  <ShoppingCart className="h-6 w-6 text-blue-400" />
                </div>
                <span className="text-sm font-medium text-green-400">+5%</span>
              </div>
              <div className="text-sm text-gray-400">Transaksi Hari Ini</div>
              <div className="text-xl font-bold text-white">{adminStats.todayTransactions}</div>
            </div>

            <div className="rounded-xl border border-purple-500/20 bg-[#1a1429] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <span className="text-sm font-medium text-green-400">+8%</span>
              </div>
              <div className="text-sm text-gray-400">Total Users</div>
              <div className="text-xl font-bold text-white">{formatNumber(adminStats.totalUsers)}</div>
            </div>

            <div className="rounded-xl border border-purple-500/20 bg-[#1a1429] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/20">
                  <TrendingUp className="h-6 w-6 text-yellow-400" />
                </div>
                <span className="text-sm font-medium text-gray-400">0%</span>
              </div>
              <div className="text-sm text-gray-400">Total Reseller</div>
              <div className="text-xl font-bold text-white">{formatNumber(adminStats.totalResellers)}</div>
            </div>
          </div>

          {/* Weekly Stats */}
          <div className="mb-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-purple-500/20 bg-[#1a1429] p-6 lg:col-span-2">
              <h3 className="mb-4 font-semibold text-white">Statistik Mingguan</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-[#0f0a1e] p-4 text-center">
                  <div className="mb-2 text-sm text-gray-400">7 Hari Terakhir</div>
                  <div className="text-xl font-bold text-white">{formatPrice(adminStats.weekRevenue)}</div>
                  <div className="text-sm text-green-400">{adminStats.weekTransactions} transaksi</div>
                </div>
                <div className="rounded-xl bg-[#0f0a1e] p-4 text-center">
                  <div className="mb-2 text-sm text-gray-400">30 Hari Terakhir</div>
                  <div className="text-xl font-bold text-white">{formatPrice(adminStats.monthRevenue)}</div>
                  <div className="text-sm text-green-400">{adminStats.monthTransactions} transaksi</div>
                </div>
                <div className="rounded-xl bg-[#0f0a1e] p-4 text-center">
                  <div className="mb-2 text-sm text-gray-400">Pending Hari Ini</div>
                  <div className="text-xl font-bold text-white">{adminStats.pendingTransactions}</div>
                  <div className="text-sm text-yellow-400">Menunggu</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-xl border border-purple-500/20 bg-[#1a1429] p-6">
              <h3 className="mb-4 font-semibold text-white">Aksi Cepat</h3>
              <div className="space-y-3">
                <Link
                  to="/admin/games/add"
                  className="flex items-center gap-3 rounded-xl bg-[#0f0a1e] p-3 transition-colors hover:bg-purple-500/20"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
                    <Gamepad2 className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Tambah Game</div>
                    <div className="text-xs text-gray-400">Tambah game baru</div>
                  </div>
                </Link>
                <Link
                  to="/admin/products/add"
                  className="flex items-center gap-3 rounded-xl bg-[#0f0a1e] p-3 transition-colors hover:bg-purple-500/20"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                    <Package className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Tambah Produk</div>
                    <div className="text-xs text-gray-400">Tambah produk baru</div>
                  </div>
                </Link>
                <Link
                  to="/admin/transactions"
                  className="flex items-center gap-3 rounded-xl bg-[#0f0a1e] p-3 transition-colors hover:bg-purple-500/20"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20">
                    <ShoppingCart className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Lihat Transaksi</div>
                    <div className="text-xs text-gray-400">Kelola transaksi</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="rounded-xl border border-purple-500/20 bg-[#1a1429] overflow-hidden">
            <div className="flex items-center justify-between border-b border-purple-500/20 p-4">
              <h3 className="font-semibold text-white">Transaksi Terbaru</h3>
              <Link
                to="/admin/transactions"
                className="text-sm text-purple-400 hover:underline"
              >
                Lihat Semua
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0f0a1e]">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Order ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Game</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Produk</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Harga</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-500/10">
                  {mockTransactions.slice(0, 5).map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-purple-500/5 transition-colors">
                      <td className="px-4 py-3">
                        <span className="font-mono text-sm text-white">{transaction.orderId}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm text-white">{transaction.gameName}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm text-white">{transaction.productName}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="font-semibold text-purple-400">{formatPrice(transaction.price)}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex rounded-full border px-2 py-1 text-xs font-medium ${getStatusColor(transaction.status)}`}>
                          {getStatusLabel(transaction.status)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
