import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Wrench,
  CheckCircle2,
  Lightbulb,
  AlertCircle,
  FileCode,
  Zap,
  Terminal,
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

export default function Bab3() {
  const navigate = useNavigate();
  const { id } = useParams();
  const CHAPTER_ID = `bab${id}`;

  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem(CHAPTER_ID);
    return saved ? JSON.parse(saved) : false;
  });

  const toggleComplete = () => {
    const newState = !completed;
    setCompleted(newState);
    localStorage.setItem(CHAPTER_ID, JSON.stringify(newState));
  };

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
                onClick={toggleComplete}
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
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 mb-6 shadow-xl">
              <Wrench className="w-12 h-12 text-white" />
            </div>

            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              BAB 3 dari 8
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Setup Project
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Konfigurasi Database dan Environment
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
                ⚙️ Konfigurasi File .env
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Sebelum Laravel bisa nyimpen data, kita perlu setting koneksi
                database dulu. Caranya GAMPANG, tinggal edit file{" "}
                <strong>.env</strong> aja. Nanti database-nya akan otomatis
                dibuat sama Laravel!
              </p>
            </div>

            {/* Configure .env */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                📝 Edit File .env
              </h2>
              <div className="space-y-6">
                <CodeBlock
                  code={`Masuk file .env di Visual Studio Code:

File ini berisi konfigurasi penting!
Kalau ga ketemu, coba:
1. Tampilkan hidden files
2. Atau copy dari .env.example jadi .env`}
                  title="Lokasi File .env"
                />
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-semibold">
                    EDIT
                  </span>
                </div>
                <CodeBlock
                  code={`# Cari baris DB_CONNECTION (sekitar baris 23-28)
# Edit jadi seperti ini:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_barang    ← Nama database yang akan dibuat
DB_USERNAME=root         ← Default XAMPP
DB_PASSWORD=             ← Kosong (default XAMPP)`}
                  title="Edit Bagian Database"
                />
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-800 font-semibold text-lg mb-2">
                        💡 Tips: Nama Database Bebas!
                      </p>
                      <p className="text-gray-600">
                        Kamu bisa pakai nama apa aja untuk{" "}
                        <strong>DB_DATABASE</strong>, misalnya: laravel_db,
                        toko_barang, crud_app, dll. Yang penting nanti konsisten
                        pakai nama yang sama!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Auto Create Database */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Terminal className="w-7 h-7 text-purple-600" />
                🚀 Jalankan Migration
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  Setelah edit <strong>.env</strong>, sekarang kita bikin
                  database-nya! Caranya pakai command Laravel Migration.
                  <strong> Database akan otomatis dibuat!</strong>
                </p>

                <CodeBlock
                  code={`# Buka CMD/Terminal di folder project
# shortcut : ctrl + "backtick" (ada di atas tombol Tab )

# Jalankan migration
php artisan migrate`}
                  title="Command Terminal"
                />

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-200">
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-800 font-semibold text-lg mb-3">
                        🎯 Apa yang Akan Terjadi?
                      </p>
                      <p className="text-gray-700 mb-3">
                        Setelah kamu ketik{" "}
                        <code className="bg-gray-800 text-green-400 px-2 py-1 rounded">
                          php artisan migrate
                        </code>
                        , Laravel akan cek apakah database "db_barang" sudah ada
                        atau belum.
                      </p>
                      <div className="bg-white rounded-lg p-4 border-l-4 border-amber-400">
                        <p className="text-gray-600 mb-2">
                          Kalau database <strong>BELUM ADA</strong>, muncul
                          pesan:
                        </p>
                        <CodeBlock
                          code={`  WARN  The database 'db_barang' does not exist on the 'mysql' connection.  

  Would you like to create it? (yes/no) [yes]
❯ yes    ← Ketik "yes" terus Enter`}
                          title="Pesan di Terminal"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-800 font-semibold text-lg mb-3">
                        ✅ Berhasil!
                      </p>
                      <p className="text-gray-700 mb-3">
                        Kalau berhasil, muncul pesan kayak gini:
                      </p>
                      <CodeBlock
                        code={`INFO  Preparing database.

Creating migration table ........................... 16ms DONE

INFO  Running migrations.

2014_10_12_000000_create_users_table ............... 25ms DONE
2014_10_12_100000_create_password_resets_table ..... 12ms DONE
2019_08_19_000000_create_failed_jobs_table ......... 10ms DONE`}
                        title="Output Berhasil"
                      />
                      <p className="text-gray-600 mt-3">
                        Sekarang database <strong>db_barang</strong> sudah
                        dibuat otomatis! Tabel-tabel default Laravel juga udah
                        jadi!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cek phpMyAdmin */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                🔍 Cek Database di phpMyAdmin
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-lg">
                  Biar yakin database-nya beneran udah jadi, kita cek di
                  phpMyAdmin:
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </span>
                      <span>
                        Buka browser, ketik:{" "}
                        <code className="bg-gray-800 text-green-400 px-2 py-1 rounded">
                          http://localhost/phpmyadmin
                        </code>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </span>
                      <span>
                        Di sidebar kiri, cari nama database{" "}
                        <strong>"db_barang"</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </span>
                      <span>
                        Klik database-nya, harusnya udah ada tabel:{" "}
                        <strong>
                          users, password_resets, failed_jobs, migrations
                        </strong>
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Folder Structure */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                📁 Penjelasan Struktur Folder Laravel
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3">📱</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    app/Models/
                  </h3>
                  <p className="text-gray-600">
                    Tempat Model (representasi tabel database)
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3">🎮</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    app/Http/Controllers/
                  </h3>
                  <p className="text-gray-600">
                    Tempat Controller (logic CRUD)
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3">🗂️</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    database/migrations/
                  </h3>
                  <p className="text-gray-600">
                    Tempat Migration (blueprint tabel)
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    resources/views/
                  </h3>
                  <p className="text-gray-600">
                    Tempat View/Blade (tampilan HTML)
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3">🛣️</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    routes/web.php
                  </h3>
                  <p className="text-gray-600">
                    Daftar URL dan routing aplikasi
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                  <div className="text-4xl mb-3">🔧</div>
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">.env</h3>
                  <p className="text-gray-600">
                    File konfigurasi (database, API key, dll)
                  </p>
                </div>
              </div>
            </div>

            {/* MVC Analogy */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border-2 border-amber-200">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  💡 Analogi MVC (Model-View-Controller)
                </h2>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                Laravel pakai pola MVC. Bayangin kayak restoran:
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="font-bold text-gray-800 mb-2 text-lg">
                    Model (Koki)
                  </div>
                  <div className="text-gray-600">
                    Ngolah data dari database. Koki masak makanan dari bahan
                    mentah
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="font-bold text-gray-800 mb-2 text-lg">
                    View (Menu)
                  </div>
                  <div className="text-gray-600">
                    Tampilan yang dilihat user. Menu yang dilihat pelanggan
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="font-bold text-gray-800 mb-2 text-lg">
                    Controller (Pelayan)
                  </div>
                  <div className="text-gray-600">
                    Penghubung Model & View. Pelayan terima order, kasih ke
                    koki, antar makanan
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
                    Edit file .env untuk setting koneksi database
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Command "php artisan migrate" untuk membuat database
                    otomatis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Tidak perlu buat database manual di phpMyAdmin
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Laravel menggunakan pola MVC: Model-View-Controller
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
              onClick={() => navigate("/module/laravel-crud/chapter/2")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white text-gray-700 hover:bg-gray-50 shadow-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:block">Bab Sebelumnya</span>
            </button>

            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Progress</div>
              <div className="text-2xl font-bold text-blue-600">3/8</div>
            </div>

            <button
              onClick={() => navigate("/module/laravel-crud/chapter/4")}
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
