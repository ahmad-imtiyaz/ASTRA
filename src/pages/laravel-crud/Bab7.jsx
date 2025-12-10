import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  TestTube,
  CheckCircle2,
  Lightbulb,
  AlertCircle,
  FileCode,
  Zap,
  Copy,
  Check,
  Play,
  Server,
  MousePointer,
  Eye,
  Edit3,
  Trash2,
  PlusCircle,
  Image as ImageIcon,
} from "lucide-react";

const CodeBlock = ({ code, title, language = "bash" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileCode className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300 font-mono">{title}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-400">Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code
          className={`text-sm font-mono ${
            language === "php"
              ? "text-purple-300"
              : language === "html"
              ? "text-orange-300"
              : "text-green-400"
          }`}
        >
          {code}
        </code>
      </pre>
    </div>
  );
};

const ScreenshotCard = ({ src, alt, caption, step }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
            {step}
          </div>
          <span className="text-sm text-white font-semibold">{caption}</span>
        </div>
        <ImageIcon className="w-4 h-4 text-white" />
      </div>
      <div className="p-4 bg-gray-50">
        <div className="relative rounded-lg overflow-hidden border-4 border-gray-300 shadow-inner">
          <img src={src} alt={alt} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default function Bab7() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/module/laravel-crud"
              className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Kembali ke Daftar Bab</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 hidden sm:block">
                20 menit
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-amber-100/50 to-yellow-100/50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 mb-6 shadow-xl">
              <TestTube className="w-12 h-12 text-white" />
            </div>

            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              BAB 7 dari 8
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Testing CRUD
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Menjalankan dan Testing Aplikasi Laravel Kita
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Intro Testing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🧪 Saatnya Testing Aplikasi!
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Setelah membuat Model, Migration, Controller, Routes, dan View,
                sekarang waktunya <strong>testing</strong> apakah semua fitur
                CRUD berfungsi dengan baik!
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-200">
                <h3 className="font-bold text-gray-800 mb-4">
                  Yang Akan Kita Test:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-green-600 font-bold mb-2 flex items-center gap-2">
                      <PlusCircle className="w-5 h-5" />
                      CREATE - Tambah Data
                    </div>
                    <p className="text-gray-600 text-sm">
                      Form tambah data baru ke database
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-blue-600 font-bold mb-2 flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      READ - Tampil Data
                    </div>
                    <p className="text-gray-600 text-sm">
                      Lihat tabel & detail data
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-amber-600 font-bold mb-2 flex items-center gap-2">
                      <Edit3 className="w-5 h-5" />
                      UPDATE - Edit Data
                    </div>
                    <p className="text-gray-600 text-sm">
                      Ubah data yang sudah ada
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-red-600 font-bold mb-2 flex items-center gap-2">
                      <Trash2 className="w-5 h-5" />
                      DELETE - Hapus Data
                    </div>
                    <p className="text-gray-600 text-sm">
                      Hapus data dari database
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 1: Run Server */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Server className="w-6 h-6" />
                  Jalankan Laravel Server
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                Pertama, pastikan server Laravel berjalan. Buka terminal di
                folder project dan jalankan:
              </p>

              <CodeBlock code={`php artisan serve`} title="Command Terminal" />

              <div className="mt-4 bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Output yang Benar:
                </h3>
                <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm">
                  <div>INFO Server running on [http://127.0.0.1:8000].</div>
                  <div className="text-gray-500 mt-1">
                    Press Ctrl+C to stop the server
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  Tips Penting:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>
                      Server harus tetap jalan selama testing (jangan tutup
                      terminal)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>
                      Kalau ada error, cek file{" "}
                      <code className="bg-gray-100 px-2 py-1 rounded">
                        storage/logs/laravel.log
                      </code>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>
                      Tekan <kbd>Ctrl+C</kbd> untuk stop server
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2: Akses Browser */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <MousePointer className="w-6 h-6" />
                  Buka Browser & Akses Aplikasi
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                Buka browser favorit kamu (Chrome/Firefox/Edge) dan akses URL
                berikut:
              </p>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 border-2 border-purple-300">
                <div className="text-center">
                  <p className="text-gray-700 font-semibold mb-3">
                    URL Aplikasi:
                  </p>
                  <code
                    className="text-base font-mono bg-white px-4 py-2 rounded-lg shadow-sm 
  border-2 border-purple-400 block break-all"
                  >
                    http://localhost:8000/barang
                  </code>
                </div>
              </div>

              <div className="mt-6">
                <ScreenshotCard
                  src="/images/bab7/laravel-home.png"
                  alt="Halaman Home Laravel"
                  caption="Tampilan Awal - Tabel Data Barang Kosong"
                  step="1"
                />
              </div>

              <div className="mt-4 bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                <h3 className="font-bold text-gray-800 mb-3">
                  🔍 Yang Harus Terlihat:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Navbar dengan title "🏪 Aplikasi CRUD"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Card dengan header "📦 Data Barang"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Tombol "➕ Tambah Barang"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Pesan "📭 Belum ada data barang" (karena database masih
                      kosong)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3: Test CREATE */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <PlusCircle className="w-6 h-6" />
                  Test CREATE - Tambah Data Baru
                </h2>
              </div>

              <div className="space-y-6">
                {/* Step 3.1 */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                      A
                    </span>
                    Klik Tombol "Tambah Barang"
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Klik tombol hijau "➕ Tambah Barang" di pojok kanan atas
                    card.
                  </p>
                  <ScreenshotCard
                    src="/images/bab7/create-form-empty.png"
                    alt="Form Tambah Data Kosong"
                    caption="Form Tambah Data (Kosong)"
                    step="2"
                  />
                </div>

                {/* Step 3.2 */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                      B
                    </span>
                    Isi Form dengan Data Test
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Isi semua field dengan data berikut untuk testing:
                  </p>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 font-semibold mb-1">
                          Kode Barang:
                        </p>
                        <code className="bg-white px-3 py-2 rounded border-2 border-green-300 block">
                          BRG001
                        </code>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-semibold mb-1">
                          Nama Barang:
                        </p>
                        <code className="bg-white px-3 py-2 rounded border-2 border-green-300 block">
                          Laptop Asus
                        </code>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-semibold mb-1">
                          Stok:
                        </p>
                        <code className="bg-white px-3 py-2 rounded border-2 border-green-300 block">
                          1
                        </code>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-semibold mb-1">
                          Harga:
                        </p>
                        <code className="bg-white px-3 py-2 rounded border-2 border-green-300 block">
                          10000000
                        </code>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-sm text-gray-600 font-semibold mb-1">
                          Deskripsi:
                        </p>
                        <code className="bg-white px-3 py-2 rounded border-2 border-green-300 block">
                          Barang Baru
                        </code>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <ScreenshotCard
                      src="/images/bab7/create-form-filled.png"
                      alt="Form Tambah Data Terisi"
                      caption="Form Sudah Diisi Lengkap"
                      step="3"
                    />
                  </div>
                </div>

                {/* Step 3.3 */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                      C
                    </span>
                    Submit Form & Lihat Hasilnya
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Klik tombol "💾 Simpan Data". Jika berhasil, akan redirect
                    ke halaman index dengan pesan sukses dan data baru muncul di
                    tabel!
                  </p>
                  <ScreenshotCard
                    src="/images/bab7/create-success.png"
                    alt="Data Berhasil Ditambahkan"
                    caption="✅ Data Berhasil Ditambahkan!"
                    step="4"
                  />
                </div>

                {/* Test Validasi */}
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    Test Validasi (PENTING!)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Sekarang coba submit form TANPA mengisi data untuk test
                    validasi:
                  </p>
                  <ol className="space-y-2 text-gray-700">
                    <li>1. Kembali ke form create (klik Tambah Barang lagi)</li>
                    <li>2. Langsung klik "Simpan Data" tanpa isi apapun</li>
                    <li>
                      3. Harusnya muncul pesan error merah di bawah setiap field
                    </li>
                  </ol>
                  <div className="mt-4">
                    <ScreenshotCard
                      src="/images/bab7/validation-errors.png"
                      alt="Error Validasi"
                      caption="❌ Pesan Error Validasi Muncul"
                      step="5"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Test READ */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Eye className="w-6 h-6" />
                  Test READ - Tampil & Detail Data
                </h2>
              </div>

              <div className="space-y-6">
                {/* Test Tabel */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    📋 Lihat Data di Tabel
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Setelah tambah data, tabel di halaman index sekarang sudah
                    menampilkan data barang yang baru ditambahkan.
                  </p>
                  <ScreenshotCard
                    src="/images/bab7/laravel-home-with-data.png"
                    alt="Tabel dengan Data"
                    caption="Tabel Data Barang (Ada Data)"
                    step="6"
                  />

                  <div className="mt-4 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                    <h4 className="font-bold text-gray-800 mb-3">
                      Yang Harus Terlihat di Tabel:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Nomor urut (1, 2, 3, ...)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Kode barang dalam box code</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Stok dengan badge (hijau jika {">"}10, kuning jika
                          ≤10)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Harga terformat (Rp 10.000.000)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>3 tombol aksi: 👁️ Detail, ✏️ Edit, 🗑️ Hapus</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Test Detail */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    🔍 Lihat Detail 1 Data
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Klik tombol "👁️" (Detail) di salah satu baris data untuk
                    melihat detail lengkap barang.
                  </p>
                  <ScreenshotCard
                    src="/images/bab7/show-detail.png"
                    alt="Halaman Detail Barang"
                    caption="Detail Lengkap 1 Barang"
                    step="7"
                  />

                  <div className="mt-4 bg-cyan-50 rounded-xl p-6 border-2 border-cyan-200">
                    <h4 className="font-bold text-gray-800 mb-3">
                      Info yang Ditampilkan:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                      <div className="bg-white rounded p-3 shadow-sm">
                        ✅ Kode Barang
                      </div>
                      <div className="bg-white rounded p-3 shadow-sm">
                        ✅ Nama Barang
                      </div>
                      <div className="bg-white rounded p-3 shadow-sm">
                        ✅ Stok (dengan badge)
                      </div>
                      <div className="bg-white rounded p-3 shadow-sm">
                        ✅ Harga (terformat)
                      </div>
                      <div className="bg-white rounded p-3 shadow-sm">
                        ✅ Deskripsi
                      </div>
                      <div className="bg-white rounded p-3 shadow-sm">
                        ✅ Tanggal Dibuat
                      </div>
                      <div className="bg-white rounded p-3 shadow-sm">
                        ✅ Tanggal Update
                      </div>
                      <div className="bg-white rounded p-3 shadow-sm">
                        ✅ Tombol Aksi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Test UPDATE */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Edit3 className="w-6 h-6" />
                  Test UPDATE - Edit Data
                </h2>
              </div>

              <div className="space-y-6">
                {/* Step 5.1 */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm">
                      A
                    </span>
                    Klik Tombol Edit
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Kembali ke halaman index, lalu klik tombol "✏️" (Edit) di
                    salah satu baris data.
                  </p>
                  <ScreenshotCard
                    src="/images/bab7/edit-form.png"
                    alt="Form Edit Data"
                    caption="Form Edit - Data Sudah Terisi"
                    step="8"
                  />
                </div>

                {/* Step 5.2 */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm">
                      B
                    </span>
                    Ubah Beberapa Data
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Coba ubah beberapa field, misalnya:
                  </p>

                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-200">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>Stok: ubah dari 1 menjadi 2</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>Harga: ubah dari 10000000 menjadi 20000000</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>Deskripsi: tambahkan text ", Barang Lama"</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 5.3 */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm">
                      C
                    </span>
                    Submit & Verifikasi Perubahan
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Klik "💾 Update Data". Jika berhasil, akan redirect ke index
                    dengan pesan sukses dan data di tabel sudah berubah!
                  </p>
                  <ScreenshotCard
                    src="/images/bab7/edit-success.png"
                    alt="Data Berhasil Diupdate"
                    caption="✅ Data Berhasil Diupdate!"
                    step="9"
                  />
                </div>

                {/* Verifikasi */}
                <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-600" />
                    Cara Verifikasi Update Berhasil:
                  </h4>
                  <ol className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">1.</span>
                      <span>Cek tabel index - data sudah berubah</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">2.</span>
                      <span>
                        Klik Detail (👁️) - data baru ditampilkan di halaman show
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">3.</span>
                      <span>
                        Cek "Terakhir Update" - tanggal/jam harus berubah jadi
                        sekarang
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Step 6: Test DELETE */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Trash2 className="w-6 h-6" />
                  Test DELETE - Hapus Data
                </h2>
              </div>

              <div className="space-y-6">
                {/* Warning */}
                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                    <h3 className="font-bold text-gray-800">
                      ⚠️ Hati-hati Saat Test Delete!
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Data yang dihapus <strong>TIDAK BISA</strong> dikembalikan
                    (kecuali pakai soft delete). Sebaiknya test delete di data
                    test/dummy, bukan data penting!
                  </p>
                </div>

                {/* Step 6.1 */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">
                      A
                    </span>
                    Tambah Data Dummy untuk Test Delete
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Sebelum test delete, tambah data dummy dulu (misalnya
                    "Barang Test"):
                  </p>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Kode: TEST001</li>
                      <li>• Nama: Barang Test Delete</li>
                      <li>• Stok: 1</li>
                      <li>• Harga: 1000</li>
                    </ul>
                  </div>
                </div>

                {/* Step 6.2 */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">
                      B
                    </span>
                    Klik Tombol Hapus
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Klik tombol "🗑️" (Hapus) di baris data yang mau dihapus.
                    Akan muncul dialog konfirmasi.
                  </p>
                  <ScreenshotCard
                    src="/images/bab7/delete-confirm.png"
                    alt="Konfirmasi Hapus Data"
                    caption="⚠️ Dialog Konfirmasi Hapus"
                    step="10"
                  />
                </div>

                {/* Step 6.3 */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">
                      C
                    </span>
                    Konfirmasi & Verifikasi
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Klik "OK" di dialog konfirmasi. Data akan dihapus dan
                    halaman refresh dengan pesan sukses.
                  </p>
                  <ScreenshotCard
                    src="/images/bab7/delete-success.png"
                    alt="Data Berhasil Dihapus"
                    caption="✅ Data Berhasil Dihapus!"
                    step="11"
                  />
                </div>

                {/* Verifikasi */}
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Cara Verifikasi Delete Berhasil:
                  </h4>
                  <ol className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">1.</span>
                      <span>Data hilang dari tabel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">2.</span>
                      <span>Nomor urut tabel otomatis re-index</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">3.</span>
                      <span>
                        Kalau semua data dihapus, muncul pesan "📭 Belum ada
                        data barang"
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">4.</span>
                      <span>
                        Coba akses URL detail data yang dihapus (misal
                        /barang/5) - harusnya error 404
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Checklist Testing */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  ✅ Checklist Testing Lengkap
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                Pastikan semua item ini sudah di-test dan berfungsi dengan baik:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {/* CREATE */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <PlusCircle className="w-5 h-5" />
                    CREATE (Tambah)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Form tambah data bisa diakses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Submit form berhasil simpan ke database</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Validasi berfungsi (form kosong = error)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Redirect ke index + pesan sukses</span>
                    </li>
                  </ul>
                </div>

                {/* READ */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    READ (Tampil)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Tabel tampil semua data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Format data benar (harga, stok badge)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Halaman detail tampil lengkap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Tanggal created_at & updated_at terformat</span>
                    </li>
                  </ul>
                </div>

                {/* UPDATE */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-amber-700 mb-3 flex items-center gap-2">
                    <Edit3 className="w-5 h-5" />
                    UPDATE (Edit)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Form edit terisi data existing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Submit update berhasil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Data di tabel berubah sesuai edit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Tanggal updated_at berubah</span>
                    </li>
                  </ul>
                </div>

                {/* DELETE */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                    <Trash2 className="w-5 h-5" />
                    DELETE (Hapus)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Dialog konfirmasi muncul</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Data berhasil dihapus dari database</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Data hilang dari tabel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>URL detail data = 404 error</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 shadow-lg border-2 border-red-200">
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  🔧 Troubleshooting Error Saat Testing
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-red-700 font-semibold mb-2">
                    ❌ Error 404: Route not found
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Penyebab:</strong> Route belum didefinisikan atau
                    salah nama
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Solusi:</strong> Cek{" "}
                    <code className="bg-gray-100 px-1 py-0.5 rounded">
                      routes/web.php
                    </code>
                    , pastikan ada{" "}
                    <code className="bg-gray-100 px-1 py-0.5 rounded">
                      Route::resource('barang', BarangController::class)
                    </code>
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-red-700 font-semibold mb-2">
                    ❌ Error 500: Server Error
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Penyebab:</strong> Ada error di Controller atau View
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Solusi:</strong> Buka{" "}
                    <code className="bg-gray-100 px-1 py-0.5 rounded">
                      storage/logs/laravel.log
                    </code>{" "}
                    untuk lihat detail error
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-red-700 font-semibold mb-2">
                    ❌ Data tidak tersimpan ke database
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Penyebab:</strong> Lupa <code>$fillable</code> di
                    Model atau salah nama field
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Solusi:</strong> Cek Model Barang, pastikan semua
                    field ada di array <code>$fillable</code>
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-red-700 font-semibold mb-2">
                    ❌ CSRF Token Mismatch
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Penyebab:</strong> Lupa <code>@csrf</code> di form
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Solusi:</strong> Tambah <code>@csrf</code> di semua
                    form POST/PUT/DELETE
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-red-700 font-semibold mb-2">
                    ❌ Validasi tidak berfungsi
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Penyebab:</strong> Rules validasi salah atau kurang
                    lengkap
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Solusi:</strong> Cek method <code>store()</code> dan{" "}
                    <code>update()</code> di Controller, pastikan ada{" "}
                    <code>$request-&gt;validate()</code>
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-red-700 font-semibold mb-2">
                    ❌ Delete tidak berfungsi
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Penyebab:</strong> Lupa{" "}
                    <code>@method('DELETE')</code> di form
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Solusi:</strong> Pastikan form delete ada{" "}
                    <code>@csrf</code> dan <code>@method('DELETE')</code>
                  </p>
                </div>
              </div>
            </div>

            {/* Tips Pro */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg border-2 border-indigo-200">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  💡 Tips Testing Profesional
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-2">
                    1. Test dengan Data Edge Case
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Coba input data ekstrem: stok 0, harga 999999999999, nama
                    sangat panjang, dll. Pastikan aplikasi handle dengan baik.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-2">
                    2. Test Responsive Design
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Buka browser DevTools (F12), test tampilan di mobile,
                    tablet, dan desktop. Pastikan semua tombol bisa diklik.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-2">
                    3. Test dengan Multiple Data
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Tambah minimal 10-20 data untuk test pagination (nanti di
                    Bab 8), sorting, dan performa tabel.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-2">
                    4. Dokumentasikan Error
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Kalau ketemu error, screenshot dan catat error message-nya.
                    Ini membantu debugging di masa depan.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-2">
                    5. Test User Experience
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Bayangkan kamu user biasa: apakah flow-nya intuitif? Apakah
                    pesan error jelas? Apakah tombol mudah ditemukan?
                  </p>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  🎯 Poin Penting Bab Ini
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Testing adalah bagian PENTING dari development - jangan
                    skip!
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Semua fitur CRUD harus di-test satu per satu (Create, Read,
                    Update, Delete)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Validasi harus berfungsi dengan baik - test dengan form
                    kosong
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Delete harus ada konfirmasi untuk hindari kesalahan hapus
                    data
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Selalu cek <code>laravel.log</code> kalau ada error untuk
                    debugging
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Test dengan berbagai skenario: data normal, edge case, dan
                    error case
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    User experience penting - pastikan flow aplikasi intuitif
                    dan mudah digunakan
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
            {/* Tombol Sebelumnya */}
            <button
              onClick={() => navigate("/module/laravel-crud/chapter/6")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold 
          bg-white text-gray-700 hover:bg-gray-50 shadow-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:block">Bab Sebelumnya</span>
            </button>

            {/* Progress */}
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Progress</div>
              <div className="text-2xl font-bold text-rose-600">7/8</div>
            </div>

            {/* Tombol Selanjutnya */}
            <button
              onClick={() => navigate("/module/laravel-crud/chapter/8")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold 
          bg-gradient-to-r from-rose-500 to-red-600 text-white 
          hover:from-rose-600 hover:to-red-700 shadow-lg transition-all"
            >
              <span className="hidden sm:block">Bab Selanjutnya</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 mb-6 shadow-xl">
            <Zap className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🎉 Selamat! Testing Selesai!
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Aplikasi CRUD Laravel kamu sudah berfungsi dengan sempurna! Sekarang
            waktunya challenge terakhir: Tugas Praktik untuk test kemampuanmu!
          </p>
          <Link
            to="/module/laravel-crud/chapter/8"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Lanjut ke Tugas Praktik
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
