import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Gamepad2, User, Lock, Eye, EyeOff } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      return true; // kalau berhasil
      return false; // kalau gagal
        navigate('/');
      } else {
        setError('Email atau password salah');
      }
    } catch {
      setError('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-400">
              <Gamepad2 className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              Miruka<span className="text-purple-400">Store</span>
            </span>
          </Link>
        </div>

        {/* Auth Card */}
        <div className="rounded-2xl border border-purple-500/20 bg-[#1a1429]/90 p-8 backdrop-blur-sm">
          <h1 className="mb-2 text-center text-2xl font-bold text-white">Selamat Datang Kembali</h1>
          <p className="mb-6 text-center text-gray-400">Masuk ke akun Anda untuk melanjutkan</p>

          {error && (
            <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/20 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="mb-2 block text-gray-400">Username atau Email</Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <Input
                  type="text"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Masukkan username atau email"
                  className="border-purple-500/30 bg-[#0f0a1e] pl-12 text-white placeholder:text-gray-500 focus:border-purple-500"
                  required
                />
              </div>
            </div>

            <div>
              <Label className="mb-2 block text-gray-400">Password</Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Masukkan password"
                  className="border-purple-500/30 bg-[#0f0a1e] pl-12 pr-12 text-white placeholder:text-gray-500 focus:border-purple-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-600 bg-[#0f0a1e] text-purple-600 focus:ring-purple-500" />
                <span className="text-sm text-gray-400">Ingat saya</span>
              </label>
              <Link to="#" className="text-sm text-purple-400 hover:underline">Lupa password?</Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50"
            >
              {isLoading ? 'Memproses...' : 'Masuk'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Belum punya akun?{' '}
              <Link to="/register" className="font-medium text-purple-400 hover:underline">
                Daftar sekarang
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-gray-400 transition-colors hover:text-white">
            ← Kembali ke beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
