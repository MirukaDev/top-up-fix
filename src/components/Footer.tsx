import { Link } from 'react-router-dom';
import { Gamepad2, Facebook, Instagram, Send, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Cek Transaksi', href: '/cek-transaksi' },
  { label: 'Kontak Kami', href: '/kontak' },
  { label: 'Tentang Kami', href: '/tentang' },
];

const popularGames = [
  { label: 'Mobile Legends', href: '/game/mobile-legends' },
  { label: 'Free Fire', href: '/game/free-fire' },
  { label: 'PUBG Mobile', href: '/game/pubg-mobile' },
  { label: 'Genshin Impact', href: '/game/genshin-impact' },
];

export function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-[#1e1b4b]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-400">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Miruka<span className="text-purple-400">Store</span>
              </span>
            </Link>
            <p className="mb-4 text-sm text-gray-400">
              Platform top up game terpercaya dengan harga termurah dan proses
              instant.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f0a1e] text-gray-400 transition-colors hover:bg-purple-600 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f0a1e] text-gray-400 transition-colors hover:bg-purple-600 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f0a1e] text-gray-400 transition-colors hover:bg-purple-600 hover:text-white"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Menu Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-purple-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Games */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Game Populer</h3>
            <ul className="space-y-2">
              {popularGames.map((game) => (
                <li key={game.href}>
                  <Link
                    to={game.href}
                    className="text-sm text-gray-400 transition-colors hover:text-purple-400"
                  >
                    {game.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-400">0812-1974-8457</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-400">
                  support@mirukastore.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-400">24 Jam Online</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['QRIS', 'DANA', 'OVO', 'GoPay', 'BCA', 'BNI', 'BRI', 'Mandiri'].map(
              (method) => (
                <div
                  key={method}
                  className="rounded-lg bg-white px-4 py-2 text-xs font-medium text-gray-800"
                >
                  {method}
                </div>
              )
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MirukaStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
