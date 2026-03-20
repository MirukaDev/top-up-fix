import { Link } from 'react-router-dom';
import { games } from '@/data/games';
import { Button } from '@/components/ui/button';
import { Gamepad2, Zap, Shield, Tag, Headphones, ChevronRight, Star, Rocket } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Proses Cepat',
    description: 'Transaksi diproses dalam hitungan menit',
  },
  {
    icon: Shield,
    title: 'Aman & Terpercaya',
    description: 'Sistem keamanan terbaik untuk data Anda',
  },
  {
    icon: Tag,
    title: 'Harga Termurah',
    description: 'Harga kompetitif dengan kualitas terbaik',
  },
  {
    icon: Headphones,
    title: 'Support 24/7',
    description: 'Tim support siap membantu kapan saja',
  },
];

const howToOrder = [
  { step: 1, title: 'Pilih Game', description: 'Pilih game favoritmu dari daftar yang tersedia' },
  { step: 2, title: 'Masukkan ID', description: 'Masukkan User ID dan pilih nominal' },
  { step: 3, title: 'Pilih Pembayaran', description: 'Pilih metode pembayaran yang tersedia' },
  { step: 4, title: 'Selesai', description: 'Diamond akan masuk otomatis ke akunmu' },
];

const testimonials = [
  {
    name: 'Ahmad Rizky',
    role: 'Mobile Legends Player',
    content: 'Top up di MirukaStore sangat cepat dan mudah. Diamond masuk dalam hitungan menit!',
    rating: 5,
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Free Fire Player',
    content: 'Harga termurah yang pernah saya temukan. Recommended banget!',
    rating: 5,
  },
  {
    name: 'Dedi Kurniawan',
    role: 'PUBG Mobile Player',
    content: 'Pelayanan customer service sangat ramah dan responsif. Top!',
    rating: 4,
  },
];

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-[#0f0a1e] to-[#1e1b4b]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-sm text-purple-300">24 Jam Online</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Top Up Game <br />
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Murah & Cepat
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-lg text-lg text-gray-400 lg:mx-0">
                Platform top up game terpercaya dengan proses instant. Tersedia
                berbagai metode pembayaran.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-purple-600 text-white hover:bg-purple-700"
                >
                  <Link to="/#games">
                    <Gamepad2 className="mr-2 h-5 w-5" />
                    Top Up Sekarang
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-purple-500/30 bg-[#0f0a1e] text-white hover:bg-purple-500/10"
                >
                  <Link to="/cek-transaksi">
                    <Zap className="mr-2 h-5 w-5" />
                    Cek Transaksi
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gray-700 pt-10">
                <div>
                  <div className="text-2xl font-bold text-white sm:text-3xl">50K+</div>
                  <div className="text-sm text-gray-400">Transaksi</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white sm:text-3xl">10+</div>
                  <div className="text-sm text-gray-400">Game</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white sm:text-3xl">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/30 to-purple-400/30 blur-3xl" />
                <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-[#1a1429]/50 p-6 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop"
                    alt="Gaming"
                    className="w-full rounded-2xl"
                  />
                  <div className="absolute -bottom-4 -left-4 rounded-xl border border-purple-500/30 bg-[#1a1429] p-3 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20">
                        <Zap className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Instant Process</div>
                        <div className="text-xs text-gray-400">Kurang dari 5 menit</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Pilih Game <span className="text-purple-400">Favoritmu</span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Tersedia berbagai game populer dengan harga termurah dan proses
              instant
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {games.map((game) => (
              <Link
                key={game.id}
                to={`/game/${game.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-[#1a1429] transition-all hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-500/10 to-purple-400/10">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1e] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-semibold text-white transition-colors group-hover:text-purple-400">
                    {game.name}
                  </h3>
                  <p className="mb-3 line-clamp-2 text-sm text-gray-400">
                    {game.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-purple-400">Top Up</span>
                    <ChevronRight className="h-4 w-4 -translate-x-2 text-purple-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#1e1b4b]/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Kenapa Memilih <span className="text-purple-400">MirukaStore?</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20">
                  <feature.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Cara <span className="text-purple-400">Order</span>
            </h2>
            <p className="text-gray-400">4 langkah mudah untuk top up game</p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {howToOrder.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="relative z-10 rounded-2xl border border-purple-500/20 bg-[#1a1429] p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
                {index < howToOrder.length - 1 && (
                  <div className="absolute top-1/2 right-0 hidden h-0.5 w-full translate-x-1/2 -translate-y-1/2 bg-purple-500/30 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#1e1b4b]/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Apa Kata <span className="text-purple-400">Mereka?</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-purple-500/20 bg-[#1a1429] p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-lg font-bold text-white">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? 'fill-yellow-500 text-yellow-500'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-purple-500 p-8 sm:p-12">
            <div className="relative text-center">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Siap Top Up Game Favoritmu?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
                Bergabung dengan ribuan pengguna yang sudah mempercayai MirukaStore
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                <Link to="/#games">
                  <Rocket className="mr-2 h-5 w-5" />
                  Mulai Top Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
