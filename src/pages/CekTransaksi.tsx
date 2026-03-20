import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockTransactions } from '@/data/games';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Receipt, Search, Check, Clock, X, Loader2 } from 'lucide-react';
import { formatPrice, formatDate, getStatusColor, getStatusLabel } from '@/utils/format';

export function CekTransaksi() {
  const [orderId, setOrderId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<typeof mockTransactions[0] | null>(null);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    setIsSearching(true);
    setError('');
    setResult(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const transaction = mockTransactions.find(
      (t) => t.orderId.toLowerCase() === orderId.toLowerCase()
    );

    if (transaction) {
      setResult(transaction);
    } else {
      setError('Transaksi tidak ditemukan');
    }

    setIsSearching(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
      case 'settlement':
        return <Check className="h-10 w-10 text-green-500" />;
      case 'pending':
        return <Clock className="h-10 w-10 text-yellow-500" />;
      case 'failed':
      case 'expired':
      case 'cancelled':
        return <X className="h-10 w-10 text-red-500" />;
      default:
        return <Loader2 className="h-10 w-10 animate-spin text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-bold text-white sm:text-3xl">Cek Transaksi</h1>
          <p className="text-gray-400">Masukkan Order ID untuk melihat status transaksi</p>
        </div>

        {/* Search Form */}
        <div className="mb-6 rounded-2xl border border-purple-500/20 bg-[#1a1429] p-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="mb-2 block text-gray-400">Order ID</label>
              <div className="relative">
                <Receipt className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <Input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value.toUpperCase())}
                  placeholder="Contoh: MRK20240101123456"
                  className="border-purple-500/30 bg-[#0f0a1e] pl-12 text-white placeholder:text-gray-500 focus:border-purple-500 uppercase"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              disabled={isSearching}
              className="w-full bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50"
            >
              {isSearching ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Mencari...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-5 w-5" />
                  Cek Status
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/20 px-4 py-3 text-center text-red-400">
            {error}
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="rounded-2xl border border-purple-500/20 bg-[#1a1429] overflow-hidden">
            {/* Header */}
            <div className="border-b border-purple-500/20 bg-gradient-to-r from-purple-600/20 to-purple-400/20 p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Order ID</span>
                <span className="font-mono font-semibold text-white">{result.orderId}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Status */}
              <div className="mb-6 text-center">
                <div className="mb-3 inline-flex flex-col items-center">
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
                    {getStatusIcon(result.status)}
                  </div>
                  <span className={`inline-flex rounded-full border px-4 py-1.5 text-sm font-medium ${getStatusColor(result.status)}`}>
                    {getStatusLabel(result.status)}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="mb-6 space-y-3">
                <div className="flex justify-between border-b border-gray-700 py-2">
                  <span className="text-gray-400">Game</span>
                  <span className="text-white">{result.gameName}</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 py-2">
                  <span className="text-gray-400">Produk</span>
                  <span className="text-white">{result.productName}</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 py-2">
                  <span className="text-gray-400">User ID</span>
                  <span className="font-mono text-white">{result.userGameId}</span>
                </div>
                {result.serverId && (
                  <div className="flex justify-between border-b border-gray-700 py-2">
                    <span className="text-gray-400">Server</span>
                    <span className="font-mono text-white">{result.serverId}</span>
                  </div>
                )}
                <div className="flex justify-between border-b border-gray-700 py-2">
                  <span className="text-gray-400">Total</span>
                  <span className="font-semibold text-purple-400">{formatPrice(result.price)}</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 py-2">
                  <span className="text-gray-400">Tanggal</span>
                  <span className="text-white">{formatDate(result.createdAt)}</span>
                </div>
              </div>

              {/* API Status */}
              {(result.status === 'settlement' || result.status === 'success') && (
                <div className="mb-6 rounded-xl border border-purple-500/20 bg-purple-500/10 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Status Pemrosesan</span>
                    <span className={`inline-flex rounded-full border px-2 py-1 text-xs font-medium ${getStatusColor(result.apiStatus)}`}>
                      {getStatusLabel(result.apiStatus)}
                    </span>
                  </div>
                </div>
              )}

              {/* Actions */}
              <Button
                asChild
                variant="outline"
                className="w-full border-purple-500/30 bg-transparent text-white hover:bg-purple-500/10"
              >
                <Link to={`/order/invoice?orderId=${result.orderId}`}>
                  Lihat Invoice
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
