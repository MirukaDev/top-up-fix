import { useSearchParams, Link } from 'react-router-dom';
import { mockTransactions } from '@/data/games';
import { Button } from '@/components/ui/button';
import { Printer, ArrowLeft, Check, X, Loader2 } from 'lucide-react';
import { formatPrice, formatDate, getStatusColor, getStatusLabel } from '@/utils/format';

export function Invoice() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  
  const transaction = mockTransactions.find((t) => t.orderId === orderId);

  if (!transaction) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">Invoice Tidak Ditemukan</h2>
          <p className="mb-4 text-gray-400">Order ID yang Anda cari tidak ditemukan</p>
          <Button asChild className="bg-purple-600 text-white hover:bg-purple-700">
            <Link to="/order/history">Kembali ke Riwayat</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <Check className="h-6 w-6 text-green-500" />;
      case 'failed':
        return <X className="h-6 w-6 text-red-500" />;
      default:
        return <Loader2 className="h-6 w-6 animate-spin text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/order/history"
          className="mb-6 inline-flex items-center text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Riwayat
        </Link>

        {/* Invoice Card */}
        <div className="overflow-hidden rounded-2xl border border-purple-500/20 bg-[#1a1429]">
          {/* Header */}
          <div className="border-b border-purple-500/20 bg-gradient-to-r from-purple-600/20 to-purple-400/20 p-6">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h1 className="text-2xl font-bold text-white">INVOICE</h1>
                <p className="text-gray-400">
                  Order ID: <span className="font-mono text-white">{transaction.orderId}</span>
                </p>
              </div>
              <span className={`inline-flex rounded-full border px-4 py-2 text-sm font-medium ${getStatusColor(transaction.status)}`}>
                {getStatusLabel(transaction.status)}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Info Grid */}
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm text-gray-400">Informasi Pelanggan</h3>
                <div className="rounded-xl border border-purple-500/10 bg-[#0f0a1e] p-4">
                  <p className="font-medium text-white">Demo User</p>
                  <p className="text-sm text-gray-400">demo@mirukastore.com</p>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm text-gray-400">Informasi Transaksi</h3>
                <div className="rounded-xl border border-purple-500/10 bg-[#0f0a1e] p-4">
                  <p className="text-sm text-white">
                    <span className="text-gray-400">Tanggal:</span> {formatDate(transaction.createdAt)}
                  </p>
                  <p className="mt-1 text-sm text-white">
                    <span className="text-gray-400">Metode:</span> {transaction.paymentMethod.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <h3 className="mb-3 text-sm text-gray-400">Detail Pesanan</h3>
            <div className="mb-6 overflow-hidden rounded-xl border border-purple-500/10">
              <table className="w-full">
                <thead className="bg-purple-500/10">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm text-gray-400">Item</th>
                    <th className="px-4 py-3 text-left text-sm text-gray-400">User ID</th>
                    <th className="px-4 py-3 text-right text-sm text-gray-400">Harga</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-purple-500/10">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
                          <Check className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{transaction.productName}</p>
                          <p className="text-sm text-gray-400">{transaction.gameName}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="font-mono text-white">{transaction.userGameId}</span>
                      {transaction.serverId && (
                        <span className="text-sm text-gray-400"> ({transaction.serverId})</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className="text-white">{formatPrice(transaction.price)}</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot className="bg-[#0f0a1e]">
                  <tr>
                    <td colSpan={2} className="px-4 py-3 text-right text-gray-400">Subtotal</td>
                    <td className="px-4 py-3 text-right text-white">{formatPrice(transaction.price)}</td>
                  </tr>
                  <tr className="border-t border-purple-500/20">
                    <td colSpan={2} className="px-4 py-4 text-right font-semibold text-white">Total</td>
                    <td className="px-4 py-4 text-right text-xl font-bold text-purple-400">
                      {formatPrice(transaction.price)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* API Status */}
            {(transaction.status === 'settlement' || transaction.status === 'success') && (
              <div className="mb-6 rounded-xl border border-purple-500/20 bg-purple-500/10 p-4">
                <h3 className="mb-2 font-medium text-white">Status Pemrosesan</h3>
                <div className="flex items-center gap-3">
                  {getStatusIcon(transaction.apiStatus)}
                  <div>
                    <p className="text-white">
                      {transaction.apiStatus === 'success'
                        ? 'Pesanan berhasil diproses'
                        : transaction.apiStatus === 'failed'
                        ? 'Pemrosesan gagal'
                        : 'Sedang diproses'}
                    </p>
                    <p className="text-sm text-gray-400">
                      {transaction.apiStatus === 'success'
                        ? 'Diamond telah dikirim ke akun game Anda'
                        : transaction.apiStatus === 'failed'
                        ? 'Silakan hubungi support untuk bantuan'
                        : 'Pesanan sedang dikirim ke server game'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                onClick={() => window.print()}
                variant="outline"
                className="flex-1 border-purple-500/30 bg-transparent text-white hover:bg-purple-500/10"
              >
                <Printer className="mr-2 h-5 w-5" />
                Cetak Invoice
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 border-purple-500/30 bg-transparent text-white hover:bg-purple-500/10"
              >
                <Link to="/cek-transaksi">
                  Cek Status
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Help */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Butuh bantuan? Hubungi kami di{' '}
            <a href="https://wa.me/081219748457" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
