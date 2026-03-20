import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Gamepad2, User, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';

export function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Password tidak cocok');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password minimal 6 karakter');
      return;
    }

    setIsLoading(true);

    try {
      const success = await register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        phone: formData.phone,
      });
      if (success) {
        navigate('/');
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
          <h1 className="mb-2 text-center text-2xl font-bold text-white">Buat Akun Baru</h1>
          <p className="mb-6 text-center text-gray-400">Daftar gratis dan nikmati kemudahan top up</p>

          {error && (
            <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/20 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label className="mb-2 block text-gray-400">Username</Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                  <Input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    placeholder="Username"
                    className="border-purple-500/30 bg-[#0f0a1e] pl-12 text-white placeholder:text-gray-500 focus:border-purple-500"
                    required
                  />
                </div>
              </div>
              <div>
                <Label className="mb-2 block text-gray-400">Nama Lengkap</Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                  <Input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Nama lengkap"
                    className="border-purple-500/30 bg-[#0f0a1e] pl-12 text-white placeholder:text-gray-500 focus:border-purple-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label className="mb-2 block text-gray-400">Email</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@example.com"
                  className="border-purple-500/30 bg-[#0f0a1e] pl-12 text-white placeholder:text-gray-500 focus:border-purple-500"
                  required
                />
              </div>
            </div>

            <div>
              <Label className="mb-2 block text-gray-400">Nomor Telepon</Label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="08123456789"
                  className="border-purple-500/30 bg-[#0f0a1e] pl-12 text-white placeholder:text-gray-500 focus:border-purple-500"
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
                  placeholder="Minimal 6 karakter"
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

            <div>
              <Label className="mb-2 block text-gray-400">Konfirmasi Password</Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Ulangi password"
                  className="border-purple-500/30 bg-[#0f0a1e] pl-12 pr-12 text-white placeholder:text-gray-500 focus:border-purple-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                className="mt-1 rounded border-gray-600 bg-[#0f0a1e] text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-400">
                Saya menyetujui{' '}
                <Link to="#" className="text-purple-400 hover:underline">Syarat & Ketentuan</Link> dan{' '}
                <Link to="#" className="text-purple-400 hover:underline">Kebijakan Privasi</Link>
              </span>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50"
            >
              {isLoading ? 'Memproses...' : 'Daftar'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Sudah punya akun?{' '}
              <Link to="/login" className="font-medium text-purple-400 hover:underline">
                Masuk
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
