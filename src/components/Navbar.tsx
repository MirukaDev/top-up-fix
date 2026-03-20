import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Gamepad2, Menu, User, Wallet, History, Settings, LogOut, ChevronDown } from 'lucide-react';
import { formatPrice } from '@/utils/format';

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Cek Transaksi', href: '/cek-transaksi' },
  { label: 'Kontak', href: '/kontak' },
];

export function Navbar() {
  const { user, isLoggedIn, logout } = useAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-purple-500/20 bg-[#1e1b4b]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-400">
            <Gamepad2 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">
            Miruka<span className="text-purple-400">Store</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'text-purple-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-4">
          {isLoggedIn && user ? (
            <>
              {/* Balance */}
              <div className="hidden items-center gap-2 rounded-lg border border-purple-500/30 bg-[#0f0a1e] px-3 py-1.5 sm:flex">
                <Wallet className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium text-white">
                  {formatPrice(user.balance)}
                </span>
              </div>

              {/* User Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-[#0f0a1e]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="hidden text-sm font-medium text-white sm:block">
                      {user.username}
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 border-purple-500/20 bg-[#1a1429]"
                >
                  <DropdownMenuItem asChild>
                    <Link
                      to="/order/history"
                      className="cursor-pointer text-gray-300 focus:bg-purple-500/20 focus:text-white"
                    >
                      <History className="mr-2 h-4 w-4" />
                      Riwayat Transaksi
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/profile"
                      className="cursor-pointer text-gray-300 focus:bg-purple-500/20 focus:text-white"
                    >
                      <User className="mr-2 h-4 w-4" />
                      Profil
                    </Link>
                  </DropdownMenuItem>
                  {user.role === 'admin' && (
                    <DropdownMenuItem asChild>
                      <Link
                        to="/admin"
                        className="cursor-pointer text-gray-300 focus:bg-purple-500/20 focus:text-white"
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        Admin Panel
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator className="bg-purple-500/20" />
                  <DropdownMenuItem
                    onClick={logout}
                    className="cursor-pointer text-red-400 focus:bg-red-500/20 focus:text-red-300"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="hidden items-center gap-3 sm:flex">
              <Button
                variant="ghost"
                asChild
                className="text-gray-300 hover:text-white"
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button
                asChild
                className="bg-purple-600 text-white hover:bg-purple-700"
              >
                <Link to="/register">Daftar</Link>
              </Button>
            </div>
          )}

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-300">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-purple-500/20 bg-[#1a1429]"
            >
              <div className="mt-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'text-gray-300 hover:bg-purple-500/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                {!isLoggedIn && (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 hover:bg-purple-500/10 hover:text-white"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg bg-purple-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-purple-700"
                    >
                      Daftar
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
