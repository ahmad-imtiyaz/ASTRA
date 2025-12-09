import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Settings,
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

export default function Bab2() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-blue-100/50 to-indigo-100/50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 mb-6 shadow-xl">
              <Settings className="w-12 h-12 text-white" />
            </div>

            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              BAB 2 dari 8
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Persiapan Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Install XAMPP, Composer, dan Laravel
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
                🛠️ Tools yang Dibutuhkan
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Sebelum mulai coding Laravel, kita perlu install beberapa tools
                dulu. Ini kayak persiapan alat sebelum kerja bengkel. Semua
                tools ini GRATIS dan mudah diinstall!
              </p>
            </div>

            {/* Tools List */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                📦 Daftar Tools Wajib
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3">🟧</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    XAMPP
                  </h3>
                  <p className="text-gray-600">
                    Paket lengkap PHP + MySQL + Apache. Ini server lokal kamu!
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3">🎼</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    Composer
                  </h3>
                  <p className="text-gray-600">
                    Package manager untuk PHP. Kayak npm untuk Node.js
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3">💻</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    VS Code
                  </h3>
                  <p className="text-gray-600">
                    Text editor (recommended). Atau pakai editor favorit kamu
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3">🌐</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    Browser
                  </h3>
                  <p className="text-gray-600">
                    Chrome/Firefox untuk testing aplikasi
                  </p>
                </div>
              </div>
            </div>

            {/* Installation Steps */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                📥 Langkah Instalasi
              </h2>
              <div className="space-y-6">
                <CodeBlock
                  code={`1. Download di: https://www.apachefriends.org
2. Jalankan installer
3. Pilih komponen:
   ✅ Apache
   ✅ MySQL
   ✅ PHP
   ✅ phpMyAdmin
4. Pilih lokasi install (default: C:/xampp)
5. Klik Next-Next-Finish
6. Buka XAMPP Control Panel
7. Start Apache & MySQL`}
                  title="1. Install XAMPP"
                />
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold">
                    LALU
                  </span>
                </div>
                <CodeBlock
                  code={`1. Download di: https://getcomposer.org
2. Jalankan installer (Composer-Setup.exe)
3. Pilih PHP dari XAMPP:
   C:/xampp/php/php.exe
4. Klik Next sampai selesai
5. Buka CMD/Terminal, cek instalasi:
   composer --version
   
   Harusnya muncul: Composer version 2.x.x`}
                  title="2. Install Composer"
                />
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">
                      Kalau kedua command di atas berhasil, berarti tools udah
                      siap! 🎉
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Create Project */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                🚀 Membuat Project Laravel
              </h2>
              <div className="space-y-6">
                <CodeBlock
                  code={`# Buka CMD/Terminal
# Pindah ke folder C:\>

# Buat project Laravel baru
composer create-project laravel/laravel crud-barang --prefer-dist

# Tunggu proses download 
# Kalau selesai, muncul folder: crud-barang
# Setelah itu masuk ke folder project C:\> cd crud-barang
# Lalu masuk ke vscode dengan perintah C:\crud-barang>: code .`}
                  title="Via Composer (Recommended)"
                />
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-semibold">
                    HASILNYA
                  </span>
                </div>
                <CodeBlock
                  code={`crud-barang/
├── app/            ← Logic aplikasi (Controller, Model, Middleware)
├── bootstrap/      ← Inisialisasi awal Laravel
├── config/         ← File konfigurasi (app, db, mail, queue, dll)
├── database/       ← Migration, Seeder, Factory
├── public/         ← File public (index.php, CSS, JS, assets)
├── resources/      ← Blade view, CSS, JS sebelum di-build
├── routes/         ← Routing aplikasi (web.php, api.php)
├── storage/        ← File upload, logs, cache, session
├── tests/          ← Unit & feature testing
├── vendor/         ← Semua dependensi composer
│
├── .env            ← Konfigurasi database & environment
├── .env.example    ← Template .env
├── .gitignore      ← File yang diabaikan Git
├── artisan         ← Command line tool Laravel
├── composer.json   ← Daftar package PHP
├── package.json    ← Daftar package JavaScript (Vite)
├── phpunit.xml     ← Konfigurasi testing
└── vite.config.js  ← Konfigurasi Vite untuk asset
`}
                  title="Struktur Folder Project"
                />
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border-2 border-indigo-200">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">
                      Folder 'app', 'database', 'resources', dan 'routes' adalah
                      yang paling sering kita pakai!
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
                    XAMPP menyediakan PHP, MySQL, dan Apache server
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Composer adalah package manager untuk install Laravel
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Command 'composer create-project' untuk bikin project baru
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Folder penting: app/, database/, resources/, routes/
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
              onClick={() => navigate("/module/laravel-crud/chapter/1")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white text-gray-700 hover:bg-gray-50 shadow-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:block">Bab Sebelumnya</span>
            </button>

            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Progress</div>
              <div className="text-2xl font-bold text-blue-600">2/8</div>
            </div>

            <button
              onClick={() => navigate("/module/laravel-crud/chapter/3")}
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
