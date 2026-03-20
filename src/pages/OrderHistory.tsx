import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { mockTransactions } from '@/data/games';
import { Button } from '@/components/ui/button';
import { Gamepad2, ShoppingCart, Eye } from 'lucide-react';
import { formatPrice, formatDate, getStatusColor, getStatusLabel } from '@/utils/format';

export function OrderHistory() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <Gamepad2 className="mx-auto mb-4 h-16 w-16 text-gray-600" />
          <h2 className="mb-2 text-2xl font-bold text-white">Silakan Login</h2>
          <p className="mb-4 text-gray-400">Anda perlu login untuk melihat riwayat transaksi</p>
          <Button asChild className="bg-purple-600 text-white hover:bg-purple-700">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold text-white sm:text-3xl">Riwayat Transaksi</h1>
          <p className="text-gray-400">Lihat semua transaksi yang pernah Anda lakukan</p>
        </div>

        {/* Transactions List */}
        <div className="rounded-2xl border border-purple-500/20 bg-[#1a1429] overflow-hidden">
          {mockTransactions.length === 0 ? (
            <div className="p-12 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-500/20">
                <ShoppingCart className="h-10 w-10 text-purple-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Belum Ada Transaksi</h3>
              <p className="mb-4 text-gray-400">Anda belum melakukan transaksi apapun</p>
              <Button asChild className="bg-purple-600 text-white hover:bg-purple-700">
                <Link to="/">Mulai Belanja</Link>
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0f0a1e]">
                  <tr>
                    <th className="px-4 py-4 text-left text-sm font-medium text-gray-400">Order ID</th>
                    <th className="px-4 py-4 text-left text-sm font-medium text-gray-400">Game</th>
                    <th className="px-4 py-4 text-left text-sm font-medium text-gray-400">Produk</th>
                    <th className="px-4 py-4 text-left text-sm font-medium text-gray-400">User ID</th>
                    <th className="px-4 py-4 text-left text-sm font-medium text-gray-400">Harga</th>
                    <th className="px-4 py-4 text-left text-sm font-medium text-gray-400">Status</th>
                    <th className="px-4 py-4 text-left text-sm font-medium text-gray-400">Tanggal</th>
                    <th className="px-4 py-4 text-left text-sm font-medium text-gray-400">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-500/10">
                  {mockTransactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-purple-500/5 transition-colors">
                      <td className="px-4 py-4">
                        <span className="font-mono text-sm text-white">{transaction.orderId}</span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <Gamepad2 className="h-4 w-4 text-purple-400" />
                          <span className="text-sm text-white">{transaction.gameName}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-white">{transaction.productName}</span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="font-mono text-sm text-white">{transaction.userGameId}</span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="font-semibold text-purple-400">{formatPrice(transaction.price)}</span>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex rounded-full border px-2 py-1 text-xs font-medium ${getStatusColor(transaction.status)}`}>
                          {getStatusLabel(transaction.status)}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-sm text-gray-400">{formatDate(transaction.createdAt)}</span>
                      </td>
                      <td className="px-4 py-4">
                        <Link
                          to={`/order/invoice?orderId=${transaction.orderId}`}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 transition-colors hover:bg-blue-500/30"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
