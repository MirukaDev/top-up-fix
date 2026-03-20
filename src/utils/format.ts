export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('id-ID').format(num);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function generateOrderId(): string {
  const prefix = 'MRK';
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.random().toString(36).substr(2, 6).toUpperCase();
  return `${prefix}${date}${random}`;
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    processing: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    settlement: 'bg-green-500/20 text-green-400 border-green-500/30',
    success: 'bg-green-500/20 text-green-400 border-green-500/30',
    failed: 'bg-red-500/20 text-red-400 border-red-500/30',
    expired: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    cancelled: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  };
  return colors[status] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    pending: 'Menunggu',
    processing: 'Diproses',
    settlement: 'Berhasil',
    success: 'Berhasil',
    failed: 'Gagal',
    expired: 'Kadaluarsa',
    cancelled: 'Dibatalkan',
  };
  return labels[status] || status;
}
