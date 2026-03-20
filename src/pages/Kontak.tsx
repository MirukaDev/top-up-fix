import { Mail, Clock, MessageCircle, Send, Facebook, Instagram, ChevronDown } from 'lucide-react';

const contactInfo = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '0812-1974-8457',
    href: 'https://wa.me/081219748457',
    color: 'green',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'support@mirukastore.com',
    href: 'mailto:support@mirukastore.com',
    color: 'blue',
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    value: '24 Jam Online',
    href: null,
    color: 'purple',
  },
];

const faqs = [
  {
    question: 'Berapa lama proses top up?',
    answer: 'Proses top up biasanya memakan waktu 1-5 menit setelah pembayaran berhasil. Dalam kondisi tertentu bisa memakan waktu lebih lama.',
  },
  {
    question: 'Metode pembayaran apa saja yang tersedia?',
    answer: 'Kami menerima pembayaran via QRIS, DANA, OVO, GoPay, dan Virtual Account (BCA, BNI, BRI, Mandiri).',
  },
  {
    question: 'Apakah transaksi saya aman?',
    answer: 'Ya, semua transaksi di MirukaStore menggunakan sistem keamanan terbaik dan terintegrasi dengan payment gateway terpercaya.',
  },
  {
    question: 'Bagaimana cara menjadi reseller?',
    answer: 'Anda dapat menghubungi kami via WhatsApp untuk informasi lebih lanjut tentang program reseller.',
  },
];

export function Kontak() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Hubungi Kami</h1>
          <p className="text-gray-400">Kami siap membantu Anda 24 jam sehari</p>
        </div>

        {/* Contact Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {contactInfo.map((item) => (
            <a
              key={item.title}
              href={item.href || '#'}
              target={item.href?.startsWith('http') ? '_blank' : undefined}
              rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group rounded-2xl border border-purple-500/20 bg-[#1a1429] p-6 text-center transition-all hover:border-purple-500/50"
            >
              <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-${item.color}-500/20 transition-colors group-hover:bg-${item.color}-500/30`}>
                <item.icon className={`h-8 w-8 text-${item.color}-500`} />
              </div>
              <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.value}</p>
            </a>
          ))}
        </div>

        {/* Social Media */}
        <div className="mb-12 rounded-2xl border border-purple-500/20 bg-[#1a1429] p-6">
          <h3 className="mb-6 text-center text-lg font-semibold text-white">Ikuti Kami</h3>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0f0a1e] text-gray-400 transition-colors hover:bg-blue-600 hover:text-white"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0f0a1e] text-gray-400 transition-colors hover:bg-pink-600 hover:text-white"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0f0a1e] text-gray-400 transition-colors hover:bg-blue-400 hover:text-white"
            >
              <Send className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="rounded-2xl border border-purple-500/20 bg-[#1a1429] p-6 md:p-8">
          <h2 className="mb-6 text-center text-xl font-bold text-white">Pertanyaan yang Sering Diajukan</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group overflow-hidden rounded-xl border border-purple-500/20"
              >
                <summary className="flex cursor-pointer items-center justify-between bg-[#0f0a1e] p-4 transition-colors hover:bg-purple-500/10">
                  <span className="font-medium text-white">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="p-4 text-sm text-gray-400">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
