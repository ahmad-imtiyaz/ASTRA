import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  CheckCircle2,
  Lightbulb,
  AlertCircle,
  FileCode,
  Zap,
  Terminal,
  Copy,
  Check,
  Code2,
  Settings,
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
            language === "php" ? "text-purple-300" : "text-green-400"
          }`}
        >
          {code}
        </code>
      </pre>
    </div>
  );
};

export default function Bab5() {
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
                30 menit
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
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 mb-6 shadow-xl">
              <Cpu className="w-12 h-12 text-white" />
            </div>

            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              BAB 5 dari 8
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Controller & Logic
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Membuat Logic CRUD di BarangController
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Intro Controller */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🧠 Apa itu Controller?
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Controller itu <strong>"otak"</strong> dari aplikasi. Dia yang
                nerima request dari user, proses datanya (via Model), terus
                kirim hasilnya ke View.
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-blue-500 font-bold mb-2 text-center">
                      👤 User
                    </div>
                    <p className="text-gray-600 text-sm text-center">
                      Klik tombol "Tambah Barang"
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-orange-500 font-bold mb-2 text-center">
                      🧠 Controller
                    </div>
                    <p className="text-gray-600 text-sm text-center">
                      Terima request, validasi data, simpan ke database
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-green-500 font-bold mb-2 text-center">
                      📄 View
                    </div>
                    <p className="text-gray-600 text-sm text-center">
                      Tampilkan pesan "Data berhasil ditambahkan!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Analogi Controller */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border-2 border-amber-200">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  💡 Analogi Sederhana
                </h2>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                Bayangkan Controller itu seperti{" "}
                <strong>pelayan di restoran</strong>:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👤</span>
                  <div>
                    <span className="text-gray-800 font-semibold">
                      User = Pelanggan
                    </span>
                    <p className="text-gray-600 text-sm">
                      Pesan makanan ke pelayan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🧑‍🍳</span>
                  <div>
                    <span className="text-gray-800 font-semibold">
                      Controller = Pelayan
                    </span>
                    <p className="text-gray-600 text-sm">
                      Terima pesanan, kasih ke dapur, ambil makanan, antar ke
                      pelanggan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍳</span>
                  <div>
                    <span className="text-gray-800 font-semibold">
                      Model = Koki
                    </span>
                    <p className="text-gray-600 text-sm">
                      Masak makanan (proses data di database)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍽️</span>
                  <div>
                    <span className="text-gray-800 font-semibold">
                      View = Piring
                    </span>
                    <p className="text-gray-600 text-sm">
                      Tempat penyajian makanan (tampilan HTML)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 1: Buat Controller */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Membuat Controller dengan Resource
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                Kita akan buat <strong>BarangController</strong> dengan flag{" "}
                <code className="bg-gray-800 text-green-400 px-2 py-1 rounded">
                  --resource
                </code>{" "}
                supaya otomatis dibuatin method CRUD lengkap!
              </p>

              <CodeBlock
                code={`php artisan make:controller BarangController --resource`}
                title="Command Terminal"
                language="bash"
              />

              <div className="mt-4 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  Penjelasan Command:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-mono">•</span>
                    <div>
                      <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm">
                        make:controller
                      </code>{" "}
                      → Perintah buat Controller baru
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-mono">•</span>
                    <div>
                      <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm">
                        BarangController
                      </code>{" "}
                      → Nama Controller (harus diakhiri "Controller")
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-mono">•</span>
                    <div>
                      <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm">
                        --resource
                      </code>{" "}
                      → Otomatis bikin 7 method CRUD (index, create, store,
                      show, edit, update, destroy)
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 font-semibold text-lg mb-2">
                      ✅ Controller Berhasil Dibuat!
                    </p>
                    <p className="text-gray-600 mb-2">
                      File controller baru akan muncul di folder:
                    </p>

                    <code
                      className="
          bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm
          whitespace-pre-wrap break-all
        "
                    >
                      app/Http/Controllers/BarangController.php
                    </code>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 font-semibold text-lg mb-2">
                      ✅ Jangan Lupa Import Model!
                    </p>
                    <p className="text-gray-600 mb-3">
                      Pastikan di bagian atas Controller ada baris:
                    </p>
                    <code className="bg-gray-800 text-purple-300 px-3 py-2 rounded block text-sm">
                      use App\Models\Barang;
                    </code>
                    <p className="text-gray-600 text-sm mt-2">
                      Kalau tidak ada, Controller ga bisa pakai Model Barang!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 7 Method Resource */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="w-7 h-7 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  7 Method Resource yang Otomatis Dibuat
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                Flag{" "}
                <code className="bg-gray-800 text-green-400 px-2 py-1 rounded">
                  --resource
                </code>{" "}
                otomatis bikin 7 method sesuai standar Laravel untuk CRUD:
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border-l-4 border-blue-500">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-blue-700 font-mono font-bold">
                      index()
                    </code>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      READ
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    → Menampilkan <strong>semua data</strong> barang (halaman
                    daftar)
                  </p>
                  <div className="mt-2 bg-white rounded px-3 py-2">
                    <span className="text-xs text-gray-500">URL:</span>{" "}
                    <code className="text-xs">GET /barang</code>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border-l-4 border-green-500">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-green-700 font-mono font-bold">
                      create()
                    </code>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      CREATE
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    → Menampilkan <strong>form tambah</strong> barang baru
                  </p>
                  <div className="mt-2 bg-white rounded px-3 py-2">
                    <span className="text-xs text-gray-500">URL:</span>{" "}
                    <code className="text-xs">GET /barang/create</code>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-l-4 border-purple-500">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-purple-700 font-mono font-bold">
                      store()
                    </code>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                      CREATE
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    → <strong>Menyimpan data</strong> barang baru ke database
                  </p>
                  <div className="mt-2 bg-white rounded px-3 py-2">
                    <span className="text-xs text-gray-500">URL:</span>{" "}
                    <code className="text-xs">POST /barang</code>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-5 border-l-4 border-amber-500">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-amber-700 font-mono font-bold">
                      show($id)
                    </code>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                      READ
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    → Menampilkan <strong>detail 1 barang</strong> berdasarkan
                    ID
                  </p>
                  <div className="mt-2 bg-white rounded px-3 py-2">
                    <span className="text-xs text-gray-500">URL:</span>{" "}
                    <code className="text-xs">GET /barang/{"{id}"}</code>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-5 border-l-4 border-cyan-500">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-cyan-700 font-mono font-bold">
                      edit($id)
                    </code>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-semibold">
                      UPDATE
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    → Menampilkan <strong>form edit</strong> barang berdasarkan
                    ID
                  </p>
                  <div className="mt-2 bg-white rounded px-3 py-2">
                    <span className="text-xs text-gray-500">URL:</span>{" "}
                    <code className="text-xs">GET /barang/{"{id}"}/edit</code>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-lg p-5 border-l-4 border-rose-500">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-rose-700 font-mono font-bold">
                      update($request, $id)
                    </code>
                    <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-semibold">
                      UPDATE
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    → <strong>Mengupdate data</strong> barang di database
                  </p>
                  <div className="mt-2 bg-white rounded px-3 py-2">
                    <span className="text-xs text-gray-500">URL:</span>{" "}
                    <code className="text-xs">PUT/PATCH /barang/{"{id}"}</code>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-5 border-l-4 border-gray-500">
                  <div className="flex items-center justify-between mb-2">
                    <code className="text-gray-700 font-mono font-bold">
                      destroy($id)
                    </code>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                      DELETE
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    → <strong>Menghapus data</strong> barang dari database
                  </p>
                  <div className="mt-2 bg-white rounded px-3 py-2">
                    <span className="text-xs text-gray-500">URL:</span>{" "}
                    <code className="text-xs">DELETE /barang/{"{id}"}</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Isi Controller - Method index */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              {/* Header */}
              <div className="flex items-center gap-2 mb-6 max-sm:flex-col max-sm:items-start">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-800 max-sm:text-xl">
                  Method index() - Tampilkan Semua Data
                </h2>
              </div>

              {/* Intro */}
              <p className="text-gray-700 text-lg mb-4 max-sm:text-base">
                Buka file{" "}
                <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded whitespace-pre-wrap break-all">
                  app/Http/Controllers/BarangController.php
                </code>
                , lalu edit method <strong>index()</strong>:
              </p>

              {/* CodeBlock */}
              <CodeBlock
                code={`public function index()
{
    // Ambil semua data barang dari database
    $barangs = Barang::all();
    
    // Kirim data ke view barang.index
    return view('barang.index', compact('barangs'));
}`}
                title="Method index() - READ"
                language="php"
              />

              {/* Box Penjelasan */}
              <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-gray-800 mb-3">
                  Penjelasan Baris per Baris:
                </h3>

                <div className="space-y-3">
                  {/* Item 1 */}
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <code className="text-blue-700 text-sm whitespace-pre-wrap break-all">
                      $barangs = Barang::all()
                    </code>
                    <p className="text-gray-600 text-sm mt-1 max-sm:text-xs">
                      → Ambil <strong>SEMUA data</strong> dari tabel barangs
                      menggunakan Eloquent ORM
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <code className="text-blue-700 text-sm whitespace-pre-wrap break-all">
                      compact('barangs')
                    </code>
                    <p className="text-gray-600 text-sm mt-1 max-sm:text-xs">
                      → Tampilkan file view{" "}
                      <strong className="max-sm:text-[10px]">
                        resources/views/barang/index.blade.php
                      </strong>
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <code className="text-blue-700 text-sm whitespace-pre-wrap break-all">
                      {`return view('barang.index', ...)`}
                    </code>

                    <p className="text-gray-600 text-sm mt-1 max-sm:text-xs break-all">
                      → Tampilkan file view{" "}
                      <strong className="max-sm:text-[10px] break-all">
                        resources/views/barang/index.blade.php
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Method create & store */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Method create() & store() - Tambah Data Baru
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                <strong>create()</strong> untuk menampilkan form,{" "}
                <strong>store()</strong> untuk menyimpan data:
              </p>

              <CodeBlock
                code={`// Menampilkan form tambah barang
public function create()
{
    return view('barang.create');
}

// Menyimpan data barang baru (CREATE)
public function store(Request $request)
{
    // Validasi data yang dikirim dari form
    $request->validate([
        'kode_barang' => 'required|unique:barangs|max:10',
        'nama_barang' => 'required|max:100',
        'stok' => 'required|integer|min:0',
        'harga' => 'required|numeric|min:0',
        'deskripsi' => 'nullable'
    ]);

    // Simpan data ke database
    Barang::create($request->all());

    // Redirect ke halaman index dengan pesan sukses
    return redirect()->route('barang.index')
                    ->with('success', 'Data barang berhasil ditambahkan!');
}`}
                title="Method create() & store() - CREATE"
                language="php"
              />

              <div className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-green-600" />
                  Penjelasan Validasi:
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <code className="text-green-700 text-sm">required</code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Field <strong>wajib diisi</strong>
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <code className="text-green-700 text-sm">
                      unique:barangs
                    </code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Nilai harus <strong>unik</strong> di tabel barangs
                      (tidak boleh kembar)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <code className="text-green-700 text-sm">max:10</code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Maksimal <strong>10 karakter</strong>
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <code className="text-green-700 text-sm">integer</code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Harus berupa <strong>angka bulat</strong>
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <code className="text-green-700 text-sm">min:0</code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Minimal nilai <strong>0</strong> (tidak boleh negatif)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <code className="text-green-700 text-sm">nullable</code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Field <strong>boleh kosong</strong>
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                  <p className="text-gray-700 font-semibold mb-2">
                    💡 Kenapa Validasi Penting?
                  </p>
                  <p className="text-gray-600 text-sm">
                    Validasi melindungi database dari data yang salah atau
                    berbahaya. Misalnya tanpa validasi, user bisa input stok =
                    -999 atau harga = "abc" yang akan error di database!
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Method show, edit, update */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Method show(), edit() & update() - Lihat & Edit Data
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                Method untuk menampilkan detail, form edit, dan update data:
              </p>

              <CodeBlock
                code={`// Menampilkan detail 1 barang
public function show($id)
{
    $barang = Barang::findOrFail($id);
    return view('barang.show', compact('barang'));
}

// Menampilkan form edit barang
public function edit($id)
{
    $barang = Barang::findOrFail($id);
    return view('barang.edit', compact('barang'));
}

// Update data barang (UPDATE)
public function update(Request $request, $id)
{
    // Validasi data
    $request->validate([
        'kode_barang' => 'required|max:10|unique:barangs,kode_barang,'.$id,
        'nama_barang' => 'required|max:100',
        'stok' => 'required|integer|min:0',
        'harga' => 'required|numeric|min:0',
        'deskripsi' => 'nullable'
    ]);

    // Cari barang berdasarkan ID
    $barang = Barang::findOrFail($id);
    
    // Update data
    $barang->update($request->all());

    // Redirect dengan pesan sukses
    return redirect()->route('barang.index')
                    ->with('success', 'Data barang berhasil diupdate!');
}`}
                title="Method show(), edit() & update() - READ & UPDATE"
                language="php"
              />

              <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                <h3 className="font-bold text-gray-800 mb-4">
                  Penjelasan Penting:
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <code className="text-amber-700 text-sm">
                      Barang::findOrFail($id)
                    </code>
                    <p className="text-gray-600 text-sm mt-2">
                      → Cari barang berdasarkan ID. Kalau{" "}
                      <strong>tidak ketemu</strong>, otomatis tampilkan error
                      404 (lebih aman daripada find() biasa)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <code className="text-amber-700 text-sm break-all whitespace-pre-wrap">
                      unique:barangs,kode_barang,$id
                    </code>

                    <p className="text-gray-600 text-sm mt-2">
                      → Cek unique tapi <strong>kecuali ID sendiri</strong>.
                      Jadi kalau edit tanpa ubah kode_barang, ga akan error
                      "sudah ada"
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <code className="text-amber-700 text-sm">
                      $barang-&gt;update($request-&gt;all())
                    </code>
                    <p className="text-gray-600 text-sm mt-2">
                      → Update semua field yang ada di{" "}
                      <strong>$fillable</strong> model. Lebih simple daripada
                      update satu-satu!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Method destroy */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Method destroy() - Hapus Data
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                Method terakhir untuk menghapus data barang:
              </p>

              <CodeBlock
                code={`// Hapus data barang (DELETE)
public function destroy($id)
{
    // Cari barang berdasarkan ID
    $barang = Barang::findOrFail($id);
    
    // Hapus data
    $barang->delete();

    // Redirect dengan pesan sukses
    return redirect()->route('barang.index')
                    ->with('success', 'Data barang berhasil dihapus!');
}`}
                title="Method destroy() - DELETE"
                language="php"
              />

              <div className="mt-4 bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 border-2 border-red-200">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  ⚠️ Peringatan Penting!
                </h3>
                <p className="text-gray-700 mb-3">
                  Method{" "}
                  <code className="bg-gray-800 text-red-300 px-2 py-1 rounded">
                    delete()
                  </code>{" "}
                  akan <strong>menghapus data permanen</strong> dari database.
                  Pastikan selalu ada konfirmasi dari user sebelum hapus!
                </p>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-gray-600 text-sm">
                    <strong>Best Practice:</strong> Nanti di View, kita akan
                    tambahkan JavaScript confirm() agar user harus klik "OK"
                    dulu sebelum data benar-benar terhapus.
                  </p>
                </div>
              </div>
            </div>

            {/* Full Controller Code */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-100">
              <div className="flex items-center gap-2 mb-6">
                <FileCode className="w-7 h-7 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Kode Lengkap BarangController
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                Ini adalah kode lengkap dari{" "}
                <strong>BarangController.php</strong> yang sudah diisi semua
                method CRUD:
              </p>

              <CodeBlock
                code={`<?php

namespace App\\Http\\Controllers;

use App\\Models\\Barang;
use Illuminate\\Http\\Request;

class BarangController extends Controller
{
    // Menampilkan semua data barang (READ)
    public function index()
    {
        $barangs = Barang::all();
        return view('barang.index', compact('barangs'));
    }

    // Menampilkan form tambah barang
    public function create()
    {
        return view('barang.create');
    }

    // Menyimpan data barang baru (CREATE)
    public function store(Request $request)
    {
        $request->validate([
            'kode_barang' => 'required|unique:barangs|max:10',
            'nama_barang' => 'required|max:100',
            'stok' => 'required|integer|min:0',
            'harga' => 'required|numeric|min:0',
            'deskripsi' => 'nullable'
        ]);

        Barang::create($request->all());

        return redirect()->route('barang.index')
                        ->with('success', 'Data barang berhasil ditambahkan!');
    }

    // Menampilkan detail 1 barang
    public function show($id)
    {
        $barang = Barang::findOrFail($id);
        return view('barang.show', compact('barang'));
    }

    // Menampilkan form edit barang
    public function edit($id)
    {
        $barang = Barang::findOrFail($id);
        return view('barang.edit', compact('barang'));
    }

    // Update data barang (UPDATE)
    public function update(Request $request, $id)
    {
        $request->validate([
            'kode_barang' => 'required|max:10|unique:barangs,kode_barang,'.$id,
            'nama_barang' => 'required|max:100',
            'stok' => 'required|integer|min:0',
            'harga' => 'required|numeric|min:0',
            'deskripsi' => 'nullable'
        ]);

        $barang = Barang::findOrFail($id);
        $barang->update($request->all());

        return redirect()->route('barang.index')
                        ->with('success', 'Data barang berhasil diupdate!');
    }

    // Hapus data barang (DELETE)
    public function destroy($id)
    {
        $barang = Barang::findOrFail($id);
        $barang->delete();

        return redirect()->route('barang.index')
                        ->with('success', 'Data barang berhasil dihapus!');
    }
}`}
                title="app/Http/Controllers/BarangController.php - KODE LENGKAP"
                language="php"
              />
            </div>

            {/* Alur Kerja Controller */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  🔄 Alur Kerja Controller (Request → Response)
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                Contoh: User mau <strong>Tambah Barang Baru</strong>
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-800 font-semibold">
                      User klik tombol "Tambah Barang"
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      → Route mengarahkan ke{" "}
                      <code className="bg-gray-100 px-1 rounded">
                        BarangController@create
                      </code>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-800 font-semibold">
                      Method <code>create()</code> dijalankan
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      → Tampilkan form{" "}
                      <code className="bg-gray-100 px-1 rounded">
                        barang/create.blade.php
                      </code>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-800 font-semibold">
                      User isi form & klik "Simpan"
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      → Form kirim data (POST) ke{" "}
                      <code className="bg-gray-100 px-1 rounded">
                        BarangController@store
                      </code>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-800 font-semibold">
                      Method <code>store()</code> validasi data
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      → Jika valid, simpan ke database via{" "}
                      <code className="bg-gray-100 px-1 rounded">
                        Barang::create()
                      </code>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-800 font-semibold">
                      Redirect ke halaman index
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      → Tampilkan pesan sukses "Data berhasil ditambahkan!"
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
                  🎯 Poin Penting Bab Ini
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Controller adalah "otak" aplikasi yang menghubungkan Route,
                    Model, dan View
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Flag{" "}
                    <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-base">
                      --resource
                    </code>{" "}
                    otomatis bikin 7 method CRUD standar
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Validasi data sangat penting untuk keamanan dan integritas
                    database
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded text-base">
                      findOrFail()
                    </code>{" "}
                    lebih aman daripada{" "}
                    <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded text-base">
                      find()
                    </code>{" "}
                    karena otomatis tampilkan error 404
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Method{" "}
                    <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded text-base">
                      create()
                    </code>{" "}
                    &{" "}
                    <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded text-base">
                      edit()
                    </code>{" "}
                    untuk tampilkan form,{" "}
                    <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded text-base">
                      store()
                    </code>{" "}
                    &{" "}
                    <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded text-base">
                      update()
                    </code>{" "}
                    untuk proses data
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
              onClick={() => navigate("/module/laravel-crud/chapter/4")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white text-gray-700 hover:bg-gray-50 shadow-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:block">Bab Sebelumnya</span>
            </button>

            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Progress</div>
              <div className="text-2xl font-bold text-orange-600">5/8</div>
            </div>

            <button
              onClick={() => navigate("/module/laravel-crud/chapter/6")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 shadow-lg transition-all"
            >
              <span className="hidden sm:block">Bab Selanjutnya</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-200 mb-2">
            💡 Tips: Controller adalah jantung dari aplikasi Laravel!
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 ASTRA Program - Laravel CRUD Module
          </p>
        </div>
      </footer>
    </div>
  );
}
