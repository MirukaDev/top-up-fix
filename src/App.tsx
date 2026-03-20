import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { CartProvider } from '@/contexts/CartContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { GameDetail } from '@/pages/GameDetail';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { CekTransaksi } from '@/pages/CekTransaksi';
import { OrderHistory } from '@/pages/OrderHistory';
import { Invoice } from '@/pages/Invoice';
import { Kontak } from '@/pages/Kontak';
import { AdminDashboard } from '@/pages/AdminDashboard';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="flex min-h-screen flex-col bg-[#0f0a1e]">
            <Routes>
              {/* Admin Routes - Without Navbar/Footer */}
              <Route path="/admin/*" element={<AdminDashboard />} />
              
              {/* Public Routes - With Navbar/Footer */}
              <Route
                path="/*"
                element={
                  <>
                    <Navbar />
                    <main className="flex-1">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/game/:slug" element={<GameDetail />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/cek-transaksi" element={<CekTransaksi />} />
                        <Route path="/order/history" element={<OrderHistory />} />
                        <Route path="/order/invoice" element={<Invoice />} />
                        <Route path="/kontak" element={<Kontak />} />
                      </Routes>
                    </main>
                    <Footer />
                  </>
                }
              />
            </Routes>
            <Toaster 
              position="top-right"
              toastOptions={{
                style: {
                  background: '#1a1429',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  color: '#fff',
                },
              }}
            />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
