import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  AlertCircle,
  FileCode,
  Zap,
} from "lucide-react";

const CodeBlock = ({ code, title }) => (
  <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
    <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
      <FileCode className="w-4 h-4 text-blue-400" />
      <span className="text-sm text-gray-300 font-mono">{title}</span>
    </div>
    <pre className="p-4 overflow-x-auto">
      <code className="text-sm text-green-400 font-mono">{code}</code>
    </pre>
  </div>
);

export default function Bab1() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/module/laravel-crud"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Kembali ke Daftar Bab</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 hidden sm:block">
                15 menit
              </span>
              <button
                onClick={() => setCompleted(!completed)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  completed
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <CheckCircle2
                  className={`w-5 h-5 ${completed ? "fill-current" : ""}`}
                />
                <span className="text-sm font-medium hidden sm:block">
                  {completed ? "Selesai" : "Tandai Selesai"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-blue-100/50 to-indigo-100/50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 mb-6 shadow-xl">
              <BookOpen className="w-12 h-12 text-white" />
            </div>

            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              BAB 1 dari 8
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Pengenalan Laravel
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Apa itu Laravel dan Mengapa Menggunakannya?
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Intro */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🚀 Apa itu Laravel?
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Laravel adalah framework PHP yang bikin kamu lebih mudah dan
                cepat dalam membuat aplikasi web. Kalau dulu kalian bikin CRUD
                native PHP, pasti masih manual banget kan? Bikin koneksi
                database sendiri, bikin query SQL satu-satu, bikin form validasi
                manual. Nah, Laravel udah sediain semua itu!
              </p>
            </div>

            {/* Analogy */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border-2 border-amber-200">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  💡 Analogi Sederhana
                </h2>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                Kalau bikin aplikasi web itu kayak bikin rumah, maka:
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="font-bold text-gray-800 mb-2 text-lg">
                    PHP Native
                  </div>
                  <div className="text-gray-600">
                    Bikin rumah dari nol, mulai dari cetak bata, rakit satu-satu
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="font-bold text-gray-800 mb-2 text-lg">
                    Laravel
                  </div>
                  <div className="text-gray-600">
                    Udah ada bata jadi, rangka jadi, tinggal rakit dan desain
                    aja
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                ✨ Kenapa Pakai Laravel?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    Lebih Cepat
                  </h3>
                  <p className="text-gray-600">
                    Banyak fitur udah jadi, tinggal pakai
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3">🔒</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    Lebih Aman
                  </h3>
                  <p className="text-gray-600">
                    Udah ada proteksi dari SQL Injection, XSS, dll
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3">📁</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    Terstruktur Rapi
                  </h3>
                  <p className="text-gray-600">
                    Filenya udah diatur dengan pola MVC (Model-View-Controller)
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3">💼</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    Banyak Dipakai di Dunia Kerja
                  </h3>
                  <p className="text-gray-600">
                    Banyak perusahaan cari programmer Laravel
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                🔄 Perbedaan CRUD Native PHP vs Laravel
              </h2>
              <div className="space-y-6">
                <CodeBlock
                  code={`// Koneksi database
$conn = mysqli_connect("localhost", "root", "", "toko");

// Query ambil data
$query = "SELECT * FROM barang";
$result = mysqli_query($conn, $query);

// Tampilkan data
while($row = mysqli_fetch_assoc($result)) {
    echo $row['nama_barang'];
}`}
                  title="PHP Native"
                />
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold">
                    VS
                  </span>
                </div>
                <CodeBlock
                  code={`// Ambil semua data barang
$barangs = Barang::all();

// Tampilkan di view
return view('barang.index', compact('barangs'));`}
                  title="Laravel"
                />
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">
                      Lebih simple kan? Laravel udah handle koneksi database dan
                      query-nya!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  🎯 Poin Penting
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Laravel adalah framework PHP untuk mempercepat development
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Laravel menggunakan pola MVC yang terstruktur rapi
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Lebih aman, cepat, dan banyak dipakai di dunia kerja
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Code Laravel lebih simple dibanding PHP native
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <button
              disabled
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gray-100 text-gray-400 cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:block">Bab Sebelumnya</span>
            </button>

            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Progress</div>
              <div className="text-2xl font-bold text-blue-600">1/8</div>
            </div>

            <button
              onClick={() => navigate("/module/laravel-crud/chapter/2")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 shadow-lg transition-all"
            >
              <span className="hidden sm:block">Bab Selanjutnya</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 mb-2">
            💡 Tips: Praktikkan langsung setiap materi yang kamu pelajari!
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 ASTRA Program - Laravel CRUD Module
          </p>
        </div>
      </footer>
    </div>
  );
}
