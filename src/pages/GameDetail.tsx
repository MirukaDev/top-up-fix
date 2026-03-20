import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { games, products, paymentMethods } from '@/data/games';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Gamepad2, Info, Wallet, CreditCard, Building2, QrCode, Smartphone, Check, Loader2 } from 'lucide-react';
import { formatPrice, generateOrderId } from '@/utils/format';

const paymentIcons: Record<string, React.ElementType> = {
  qris: QrCode,
  dana: Wallet,
  ovo: CreditCard,
  gopay: Smartphone,
  bca: Building2,
  bni: Building2,
  bri: Building2,
  mandiri: Building2,
};

export function GameDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { user, isLoggedIn } = useAuth();
  const { setCartItem, selectedPayment, setSelectedPayment, useBalance, setUseBalance, clearCart } = useCart();
  
  const [userId, setUserId] = useState('');
  const [serverId, setServerId] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState('');

  const game = games.find((g) => g.slug === slug);
  const gameProducts = products.filter((p) => p.gameId === game?.id && p.isActive);

  if (!game) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <Gamepad2 className="mx-auto mb-4 h-16 w-16 text-gray-600" />
          <h2 className="mb-2 text-2xl font-bold text-white">Game Tidak Ditemukan</h2>
          <p className="mb-4 text-gray-400">Game yang Anda cari tidak tersedia</p>
          <Button asChild className="bg-purple-600 text-white hover:bg-purple-700">
            <Link to="/">Kembali ke Beranda</Link>
          </Button>
        </div>
      </div>
    );
  }

  const selectedProductData = gameProducts.find((p) => p.id === selectedProduct);
  const selectedPaymentData = paymentMethods.find((p) => p.id === selectedPayment?.id);

  const calculateTotal = () => {
    if (!selectedProductData) return { subtotal: 0, discount: 0, total: 0 };
    const subtotal = selectedProductData.price;
    let discount = 0;
    if (useBalance && user) {
      discount = Math.min(user.balance, subtotal);
    }
    return { subtotal, discount, total: subtotal - discount };
  };

  const { subtotal, discount, total } = calculateTotal();

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId);
    const product = gameProducts.find((p) => p.id === productId);
    if (product) {
      setCartItem({
        product,
        game,
        userId: userId || '',
        serverId: serverId || undefined,
      });
    }
  };

  const handleOrder = async () => {
    if (!selectedProductData || !userId || !selectedPaymentData) return;
    
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const newOrderId = generateOrderId();
    setOrderId(newOrderId);
    setIsProcessing(false);
    setShowSuccessDialog(true);
    clearCart();
  };

  const isFormValid = selectedProduct && userId && selectedPayment?.id;

  return (
    <div className="min-h-screen py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="text-gray-400 hover:text-white">Beranda</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-600" />
            <BreadcrumbItem>
              <span className="text-purple-400">{game.name}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Game Header */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/20 to-purple-400/20">
            <img
              src={game.image}
              alt={game.name}
              className="h-16 w-16 rounded-xl object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">{game.name}</h1>
            <p className="text-gray-400">{game.description}</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form Section */}
          <div className="space-y-6 lg:col-span-2">
            {/* Step 1: Input ID */}
            <div className="rounded-2xl border border-purple-500/20 bg-[#1a1429] p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">1</div>
                <h2 className="text-lg font-semibold text-white">Masukkan User ID</h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className="mb-2 block text-gray-400">User ID</Label>
                  <Input
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Masukkan User ID"
                    className="border-purple-500/30 bg-[#0f0a1e] text-white placeholder:text-gray-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <Label className="mb-2 block text-gray-400">Server ID (Opsional)</Label>
                  <Input
                    value={serverId}
                    onChange={(e) => setServerId(e.target.value)}
                    placeholder="Contoh: 1234"
                    className="border-purple-500/30 bg-[#0f0a1e] text-white placeholder:text-gray-500 focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-purple-500/20 bg-purple-500/10 p-4">
                <div className="flex items-start gap-3">
                  <Info className="mt-0.5 h-5 w-5 text-purple-400" />
                  <div className="text-sm text-gray-300">
                    <p className="mb-1 font-medium text-white">Cara menemukan User ID:</p>
                    <p>Buka profil game Anda, User ID biasanya terlihat di bagian atas profil.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Select Nominal */}
            <div className="rounded-2xl border border-purple-500/20 bg-[#1a1429] p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">2</div>
                <h2 className="text-lg font-semibold text-white">Pilih Nominal</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gameProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductSelect(product.id)}
                    className={`relative rounded-xl border p-4 text-left transition-all ${
                      selectedProduct === product.id
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-purple-500/30 bg-[#0f0a1e] hover:border-purple-500/50'
                    }`}
                  >
                    {selectedProduct === product.id && (
                      <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    )}
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-semibold text-white">{product.name}</span>
                      <Gamepad2 className="h-5 w-5 text-purple-400" />
                    </div>
                    <div className="text-lg font-bold text-purple-400">
                      {formatPrice(product.price)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div className="rounded-2xl border border-purple-500/20 bg-[#1a1429] p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">3</div>
                <h2 className="text-lg font-semibold text-white">Pilih Pembayaran</h2>
              </div>

              <RadioGroup
                value={selectedPayment?.id}
                onValueChange={(value) => {
                  const payment = paymentMethods.find((p) => p.id === value);
                  setSelectedPayment(payment || null);
                }}
                className="space-y-3"
              >
                {paymentMethods.map((payment) => {
                  const Icon = paymentIcons[payment.code] || CreditCard;
                  return (
                    <label
                      key={payment.id}
                      className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition-all ${
                        selectedPayment?.id === payment.id
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-purple-500/30 bg-[#0f0a1e] hover:border-purple-500/50'
                      }`}
                    >
                      <RadioGroupItem value={payment.id} className="border-purple-500 text-purple-500" />
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                        <Icon className="h-6 w-6 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white">{payment.name}</div>
                        <div className="text-sm text-gray-400">
                          Fee: {payment.fee < 1 ? `${(payment.fee * 100).toFixed(1)}%` : formatPrice(payment.fee)}
                        </div>
                      </div>
                    </label>
                  );
                })}
              </RadioGroup>
            </div>

            {/* Use Balance */}
            {isLoggedIn && user && user.balance > 0 && (
              <div className="rounded-2xl border border-purple-500/20 bg-[#1a1429] p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Wallet className="h-5 w-5 text-purple-400" />
                    <div>
                      <div className="font-medium text-white">Gunakan Saldo</div>
                      <div className="text-sm text-gray-400">
                        Saldo Anda: {formatPrice(user.balance)}
                      </div>
                    </div>
                  </div>
                  <Switch
                    checked={useBalance}
                    onCheckedChange={setUseBalance}
                    className="data-[state=checked]:bg-purple-600"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-purple-500/20 bg-[#1a1429] p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Ringkasan Pesanan</h3>

              <div className="mb-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Game</span>
                  <span className="text-white">{game.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Produk</span>
                  <span className="text-white">{selectedProductData?.name || '-'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">User ID</span>
                  <span className="text-white">{userId || '-'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Server</span>
                  <span className="text-white">{serverId || '-'}</span>
                </div>
              </div>

              <div className="mb-4 border-t border-gray-700 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Harga</span>
                  <span className="text-white">{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-gray-400">Potongan Saldo</span>
                    <span className="text-green-400">-{formatPrice(discount)}</span>
                  </div>
                )}
              </div>

              <div className="mb-6 border-t border-gray-700 pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Total Bayar</span>
                  <span className="text-2xl font-bold text-purple-400">{formatPrice(total)}</span>
                </div>
              </div>

              <Button
                onClick={handleOrder}
                disabled={!isFormValid || isProcessing}
                className="w-full bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Memproses...
                  </>
                ) : (
                  <>
                    <CreditCard className="mr-2 h-5 w-5" />
                    Bayar Sekarang
                  </>
                )}
              </Button>

              <p className="mt-4 text-center text-xs text-gray-500">
                Dengan melakukan pembayaran, Anda menyetujui{' '}
                <Link to="#" className="text-purple-400 hover:underline">Syarat & Ketentuan</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="border-purple-500/20 bg-[#1a1429] text-white">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
              <Check className="h-10 w-10 text-green-500" />
            </div>
            <DialogTitle className="text-2xl">Pesanan Berhasil!</DialogTitle>
            <DialogDescription className="text-gray-400">
              Terima kasih telah melakukan pembelian. Pesanan Anda sedang diproses.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 rounded-xl border border-purple-500/20 bg-[#0f0a1e] p-4">
            <div className="flex justify-between py-2">
              <span className="text-gray-400">Order ID</span>
              <span className="font-mono font-semibold text-white">{orderId}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-400">Game</span>
              <span className="text-white">{game.name}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-400">Produk</span>
              <span className="text-white">{selectedProductData?.name}</span>
            </div>
            <div className="flex justify-between border-t border-gray-700 pt-2">
              <span className="text-gray-400">Total</span>
              <span className="font-bold text-purple-400">{formatPrice(total)}</span>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <Button
              asChild
              className="flex-1 bg-purple-600 text-white hover:bg-purple-700"
            >
              <Link to={`/order/invoice?orderId=${orderId}`}>
                Lihat Invoice
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 border-purple-500/30 bg-transparent text-white hover:bg-purple-500/10"
            >
              <Link to="/">Kembali ke Beranda</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
