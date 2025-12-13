import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Layout,
  CheckCircle2,
  Lightbulb,
  AlertCircle,
  FileCode,
  Zap,
  Copy,
  Check,
  Eye,
  Edit3,
  PlusCircle,
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

export default function Bab6() {
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/module/laravel-crud"
              className="flex items-center gap-2 text-gray-600 hover:text-rose-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Kembali ke Daftar Bab</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 hidden sm:block">
                35 menit
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
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-pink-100/50 to-red-100/50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-rose-400 to-red-500 mb-6 shadow-xl">
              <Layout className="w-12 h-12 text-white" />
            </div>

            <div className="inline-block px-4 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
              BAB 6 dari 8
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Routes & View
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Membuat Navigasi dan Tampilan Aplikasi
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Intro Routes & View */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-rose-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🛣️ Apa itu Routes & View?
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                <strong>Routes</strong> adalah "peta jalan" aplikasi yang
                menghubungkan URL dengan Controller. Sedangkan{" "}
                <strong>View</strong> adalah tampilan HTML yang dilihat user.
              </p>

              <div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-xl p-6 border-2 border-rose-200">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-blue-500 font-bold mb-2 text-center">
                      🛣️ Route
                    </div>
                    <p className="text-gray-600 text-sm text-center">
                      Menentukan URL menuju Controller mana
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-rose-500 font-bold mb-2 text-center">
                      🧠 Controller
                    </div>
                    <p className="text-gray-600 text-sm text-center">
                      Proses data dan logika bisnis
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-green-500 font-bold mb-2 text-center">
                      👁️ View
                    </div>
                    <p className="text-gray-600 text-sm text-center">
                      Tampilkan HTML yang dilihat user
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Analogi Routes */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border-2 border-amber-200">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  💡 Analogi Sederhana
                </h2>
              </div>
              <p className="text-gray-700 mb-4 text-lg">
                Routes itu seperti <strong>GPS</strong> di aplikasi:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🗺️</span>
                  <div>
                    <span className="text-gray-800 font-semibold">
                      User ketik URL: <code>/barang</code>
                    </span>
                    <p className="text-gray-600 text-sm">
                      → GPS (Route) arahkan ke BarangController method index()
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <span className="text-gray-800 font-semibold">
                      Controller ambil data dari database
                    </span>
                    <p className="text-gray-600 text-sm">
                      Method index() ambil semua barang
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👁️</span>
                  <div>
                    <span className="text-gray-800 font-semibold">
                      View tampilkan data ke user
                    </span>
                    <p className="text-gray-600 text-sm">
                      File barang/index.blade.php menampilkan tabel
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 1: Setup Routes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Setup Routes dengan Resource
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                Buka file{" "}
                <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded">
                  routes/web.php
                </code>{" "}
                dan tambahkan route resource:
              </p>

              <CodeBlock
                code={`<?php

use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\BarangController;

Route::get('/', [BarangController::class, 'index']);

// Route resource untuk CRUD Barang
Route::resource('barang', BarangController::class);
`}
                title="routes/web.php"
                language="php"
              />

              <div className="mt-4 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  Penjelasan Route Resource:
                </h3>
                <p className="text-gray-700 mb-3">
                  Satu baris{" "}
                  <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded">
                    Route::resource()
                  </code>{" "}
                  otomatis bikin 7 route untuk CRUD!
                </p>

                <div className="bg-white rounded-lg p-4 mt-3">
                  <p className="text-sm text-gray-600 mb-2">
                    Cek semua route dengan command:
                  </p>
                  <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm">
                    php artisan route:list
                  </code>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="font-bold text-gray-800 mb-4">
                  ✅ 7 Route yang Otomatis Dibuat:
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-white rounded p-3 flex items-center justify-between">
                    <span>
                      <code className="text-blue-600">GET /barang</code>
                    </span>
                    <span className="text-gray-600">
                      → index() - Tampil semua data
                    </span>
                  </div>
                  <div className="bg-white rounded p-3 flex items-center justify-between">
                    <span>
                      <code className="text-green-600">GET /barang/create</code>
                    </span>
                    <span className="text-gray-600">
                      → create() - Form tambah
                    </span>
                  </div>
                  <div className="bg-white rounded p-3 flex items-center justify-between">
                    <span>
                      <code className="text-purple-600">POST /barang</code>
                    </span>
                    <span className="text-gray-600">
                      → store() - Simpan data
                    </span>
                  </div>
                  <div className="bg-white rounded p-3 flex items-center justify-between">
                    <span>
                      <code className="text-amber-600">
                        GET /barang/{"{id}"}
                      </code>
                    </span>
                    <span className="text-gray-600">
                      → show() - Detail 1 data
                    </span>
                  </div>
                  <div className="bg-white rounded p-3 flex items-center justify-between">
                    <span>
                      <code className="text-cyan-600">
                        GET /barang/{"{id}"}/edit
                      </code>
                    </span>
                    <span className="text-gray-600">→ edit() - Form edit</span>
                  </div>
                  <div className="bg-white rounded p-3 flex items-center justify-between">
                    <span>
                      <code className="text-rose-600">
                        PUT/PATCH /barang/{"{id}"}
                      </code>
                    </span>
                    <span className="text-gray-600">
                      → update() - Update data
                    </span>
                  </div>
                  <div className="bg-white rounded p-3 flex items-center justify-between">
                    <span>
                      <code className="text-red-600">
                        DELETE /barang/{"{id}"}
                      </code>
                    </span>
                    <span className="text-gray-600">
                      → destroy() - Hapus data
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Buat Folder & Layout */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Buat Folder View & Layout
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                Pertama, buat folder <strong>barang</strong> di dalam{" "}
                <code>resources/views/</code>:
              </p>

              <CodeBlock
                code={`mkdir resources/views/barang`}
                title="Command Terminal"
                language="bash"
              />

              <p className="text-gray-700 text-lg mb-4">
                Kedua, buat folder <strong>layouts</strong> di dalam{" "}
                <code>resources/views/</code>:
              </p>

              <CodeBlock
                code={`mkdir resources/views/layouts`}
                title="Command Terminal"
                language="bash"
              />
              <p className="text-gray-700 text-lg mb-4">
                Ketiga, buat file <strong>index.blade.php</strong> di dalam
                folder <code>resources/views/barang/</code>:
              </p>

              <CodeBlock
                code={`New-Item resources/views/barang/index.blade.php -ItemType File`}
                title="Command Terminal"
                language="bash"
              />

              <p className="text-gray-700 text-lg mb-4">
                Keempat, buat file <strong>create.blade.php</strong> di dalam
                folder <code>resources/views/barang/</code>:
              </p>

              <CodeBlock
                code={`New-Item resources/views/barang/create.blade.php -ItemType File`}
                title="Command Terminal"
                language="bash"
              />

              <p className="text-gray-700 text-lg mb-4">
                Kelima, buat file <strong>edit.blade.php</strong> di dalam
                folder <code>resources/views/barang/</code>:
              </p>

              <CodeBlock
                code={`New-Item resources/views/barang/edit.blade.php -ItemType File`}
                title="Command Terminal"
                language="bash"
              />

              <p className="text-gray-700 text-lg mb-4">
                Keenam, buat file <strong>show.blade.php</strong> di dalam
                folder <code>resources/views/barang/</code>:
              </p>

              <CodeBlock
                code={`New-Item resources/views/barang/show.blade.php -ItemType File
`}
                title="Command Terminal"
                language="bash"
              />

              <p className="text-gray-700 text-lg mb-4">
                Ketujuh, buat file <strong>app.blade.php</strong> di dalam
                folder <code>resources/views/layout/</code>:
              </p>

              <CodeBlock
                code={`New-Item resources/views/layouts/app.blade.php -ItemType File
`}
                title="Command Terminal"
                language="bash"
              />

              <div className="mt-6">
                <h3 className="font-bold text-gray-800 mb-3">
                  Struktur Folder View:
                </h3>
                <div className="bg-gray-900 text-green-400 rounded-xl p-4 font-mono text-sm">
                  <div>resources/views/</div>
                  <div className="ml-4">├── barang/</div>
                  <div className="ml-8 text-yellow-400">
                    ├── index.blade.php
                  </div>
                  <div className="ml-8 text-yellow-400">
                    ├── create.blade.php
                  </div>
                  <div className="ml-8 text-yellow-400">├── edit.blade.php</div>
                  <div className="ml-8 text-yellow-400">└── show.blade.php</div>
                  <div className="ml-4">└── layouts/</div>
                  <div className="ml-8 text-cyan-400">└── app.blade.php</div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                <h3 className="font-bold text-gray-800 mb-3">
                  📁 Buat Layout Dasar (Optional tapi Recommended)
                </h3>
                <p className="text-gray-700 mb-3">
                  Layout adalah template dasar yang dipakai semua view. Buat
                  file{" "}
                  <code className="bg-gray-100 px-1 py-0.5 rounded break-all">
                    resources/views/layouts/app.blade.php
                  </code>
                  :
                </p>

                <CodeBlock
                  code={`<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Laravel CRUD')</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Custom CSS -->
    <style>
        body {
            background-color: #f8f9fa;
        }
        .navbar {
            box-shadow: 0 2px 4px rgba(0,0,0,.1);
        }
    </style>
    
    @yield('styles')
</head>
<body class="d-flex flex-column min-vh-100">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="/">🏪 Aplikasi CRUD</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('barang.index') }}">Data Barang</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Content -->
    <main class="container my-5">
        @yield('content')
    </main>

    <!-- Footer -->
      <footer class="bg-dark text-white text-center py-3 mt-auto">
    <p class="mb-0">&copy; 2025 Laravel CRUD - ASTRA Program</p>
</footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    @yield('scripts')
</body>
</html>`}
                  title="resources/views/layouts/app.blade.php"
                  language="html"
                />
              </div>
            </div>

            {/* Step 3: View index.blade.php */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Eye className="w-6 h-6" />
                  View Index - Tampil Semua Data
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                File <strong>index.blade.php</strong> menampilkan tabel semua
                data barang. Buat file{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded break-all">
                  resources/views/barang/index.blade.php
                </code>
                :
              </p>

              <CodeBlock
                code={`@extends('layouts.app')

@section('title', 'Data Barang')

@section('content')
<div class="card shadow-sm">
    <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h4 class="mb-0">📦 Data Barang</h4>
        <a href="{{ route('barang.create') }}" class="btn btn-light btn-sm">
            ➕ Tambah Barang
        </a>
    </div>
    <div class="card-body">
        <!-- Pesan Sukses -->
        @if(session('success'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                {{ session('success') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        @endif

        <!-- Tabel Data -->
        @if($barangs->count() > 0)
            <div class="table-responsive">
                <table class="table table-striped table-hover">
                    <thead class="table-dark">
                        <tr>
                            <th>No</th>
                            <th>Kode Barang</th>
                            <th>Nama Barang</th>
                            <th>Stok</th>
                            <th>Harga</th>
                            <th class="text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($barangs as $index => $barang)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td><code>{{ $barang->kode_barang }}</code></td>
                            <td>{{ $barang->nama_barang }}</td>
                            <td>
                                <span class="badge {{ $barang->stok > 10 ? 'bg-success' : 'bg-warning' }}">
                                    {{ $barang->stok }} unit
                                </span>
                            </td>
                            <td>Rp {{ number_format($barang->harga, 0, ',', '.') }}</td>
                            <td class="text-center">
                                <div class="btn-group btn-group-sm">
                                    <!-- Tombol Detail -->
                                    <a href="{{ route('barang.show', $barang->id) }}" 
                                       class="btn btn-info" title="Detail">
                                        👁️
                                    </a>
                                    
                                    <!-- Tombol Edit -->
                                    <a href="{{ route('barang.edit', $barang->id) }}" 
                                       class="btn btn-warning" title="Edit">
                                        ✏️
                                    </a>
                                    
                                    <!-- Tombol Hapus -->
                                    <form action="{{ route('barang.destroy', $barang->id) }}" 
                                          method="POST" 
                                          style="display:inline;"
                                          onsubmit="return confirm('Yakin ingin menghapus data ini?')">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger" title="Hapus">
                                            🗑️
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        @else
            <div class="alert alert-info">
                📭 Belum ada data barang. <a href="{{ route('barang.create') }}">Tambah sekarang!</a>
            </div>
        @endif
    </div>
</div>
@endsection`}
                title="resources/views/barang/index.blade.php"
                language="html"
              />

              <div className="mt-4 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-gray-800 mb-3">
                  Penjelasan Blade Template:
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <code className="text-blue-700">
                      @extends('layouts.app')
                    </code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Pakai layout dasar dari file app.blade.php
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <code className="text-blue-700">@section('content')</code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Konten ini akan masuk ke bagian @yield('content') di
                      layout
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <code className="text-blue-700">
                      {"{{ route('barang.index') }}"}
                    </code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Generate URL otomatis berdasarkan nama route
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <code className="text-blue-700">@if, @foreach, @endif</code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Directive Blade untuk control flow (seperti PHP tapi
                      lebih clean)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <code className="text-blue-700">@csrf</code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Token keamanan Laravel (wajib ada di semua form
                      POST/PUT/DELETE)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: View create.blade.php */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <PlusCircle className="w-6 h-6" />
                  View Create - Form Tambah Data
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                File <strong>create.blade.php</strong> berisi form untuk tambah
                data baru. Buat file{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded break-all">
                  resources/views/barang/create.blade.php
                </code>
                :
              </p>

              <CodeBlock
                code={`@extends('layouts.app')

@section('title', 'Tambah Barang')

@section('content')
<div class="card shadow-sm">
    <div class="card-header bg-success text-white">
        <h4 class="mb-0">➕ Tambah Barang Baru</h4>
    </div>
    <div class="card-body">
        <form action="{{ route('barang.store') }}" method="POST">
            @csrf
            
            <!-- Kode Barang -->
            <div class="mb-3">
                <label class="form-label">Kode Barang <span class="text-danger">*</span></label>
                <input type="text" 
                       name="kode_barang" 
                       class="form-control @error('kode_barang') is-invalid @enderror" 
                       value="{{ old('kode_barang') }}"
                       placeholder="Contoh: BRG001"
                       maxlength="10">
                @error('kode_barang')
                    <div class="invalid-feedback">{{ $message }}</div>
                @enderror
            </div>

            <!-- Nama Barang -->
            <div class="mb-3">
                <label class="form-label">Nama Barang <span class="text-danger">*</span></label>
                <input type="text" 
                       name="nama_barang" 
                       class="form-control @error('nama_barang') is-invalid @enderror" 
                       value="{{ old('nama_barang') }}"
                       placeholder="Contoh: Laptop ASUS"
                       maxlength="100">
                @error('nama_barang')
                    <div class="invalid-feedback">{{ $message }}</div>
                @enderror
            </div>

            <!-- Stok -->
            <div class="mb-3">
                <label class="form-label">Stok <span class="text-danger">*</span></label>
                <input type="number" 
                       name="stok" 
                       class="form-control @error('stok') is-invalid @enderror" 
                       value="{{ old('stok') }}"
                       placeholder="0"
                       min="0">
                @error('stok')
                    <div class="invalid-feedback">{{ $message }}</div>
                @enderror
            </div>

            <!-- Harga -->
            <div class="mb-3">
                <label class="form-label">Harga <span class="text-danger">*</span></label>
                <input type="number" 
                       name="harga" 
                       class="form-control @error('harga') is-invalid @enderror" 
                       value="{{ old('harga') }}"
                       placeholder="0"
                       min="0"
                       step="0.01">
                @error('harga')
                    <div class="invalid-feedback">{{ $message }}</div>
                @enderror
            </div>

            <!-- Daftar Tombol -->
            <function_calls>
<invoke name="artifacts">
<parameter name="old_str">            <!-- Deskripsi --></parameter>
<parameter name="new_str">            <!-- Deskripsi -->
<div class="mb-3">
<label class="form-label">Deskripsi (Opsional)</label>
<textarea name="deskripsi" 
                       class="form-control @error('deskripsi') is-invalid @enderror" 
                       rows="4"
                       placeholder="Deskripsi barang...">{{ old('deskripsi') }}</textarea>
@error('deskripsi')
<div class="invalid-feedback">{{ $message }}</div>
@enderror
</div>
        <!-- Tombol Submit -->
        <div class="d-flex gap-2">
            <button type="submit" class="btn btn-success">
                💾 Simpan Data
            </button>
            <a href="{{ route('barang.index') }}" class="btn btn-secondary">
                ↩️ Kembali
            </a>
        </div>
    </form>
</div>
</div>
@endsection`}
                title="resources/views/barang/create.blade.php"
                language="html"
              />
              <div className="mt-4 bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="font-bold text-gray-800 mb-3">
                  Penjelasan Penting Form:
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <code className="text-green-700">
                      {"action=\"{{ route('barang.store') }}\""}
                    </code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Form dikirim ke route barang.store (method POST)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <code className="text-green-700">@csrf</code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Token keamanan Laravel, WAJIB ada di setiap form!
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <code className="text-green-700">old('nama_field')</code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Isi kembali form jika validasi gagal (user ga perlu
                      input ulang)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <code className="text-green-700">@error('nama_field')</code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Tampilkan pesan error validasi dari Controller
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: View edit.blade.php */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Edit3 className="w-6 h-6" />
                  View Edit - Form Edit Data
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                File <strong>edit.blade.php</strong> mirip dengan create, tapi
                sudah ada data yang di-isi. Buat file{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded break-all">
                  resources/views/barang/edit.blade.php
                </code>
                :
              </p>

              <CodeBlock
                code={`@extends('layouts.app')
@section('title', 'Edit Barang')
@section('content')
<div class="card shadow-sm">
    <div class="card-header bg-warning text-dark">
        <h4 class="mb-0">✏️ Edit Barang: {{ $barang->nama_barang }}</h4>
    </div>
    <div class="card-body">
        <form action="{{ route('barang.update', $barang->id) }}" method="POST">
            @csrf
            @method('PUT')
        <!-- Kode Barang -->
        <div class="mb-3">
            <label class="form-label">Kode Barang <span class="text-danger">*</span></label>
            <input type="text" 
                   name="kode_barang" 
                   class="form-control @error('kode_barang') is-invalid @enderror" 
                   value="{{ old('kode_barang', $barang->kode_barang) }}"
                   maxlength="10">
            @error('kode_barang')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
        </div>

        <!-- Nama Barang -->
        <div class="mb-3">
            <label class="form-label">Nama Barang <span class="text-danger">*</span></label>
            <input type="text" 
                   name="nama_barang" 
                   class="form-control @error('nama_barang') is-invalid @enderror" 
                   value="{{ old('nama_barang', $barang->nama_barang) }}"
                   maxlength="100">
            @error('nama_barang')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
        </div>

        <!-- Stok -->
        <div class="mb-3">
            <label class="form-label">Stok <span class="text-danger">*</span></label>
            <input type="number" 
                   name="stok" 
                   class="form-control @error('stok') is-invalid @enderror" 
                   value="{{ old('stok', $barang->stok) }}"
                   min="0">
            @error('stok')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
        </div>

        <!-- Harga -->
        <div class="mb-3">
            <label class="form-label">Harga <span class="text-danger">*</span></label>
            <input type="number" 
                   name="harga" 
                   class="form-control @error('harga') is-invalid @enderror" 
                   value="{{ old('harga', $barang->harga) }}"
                   min="0"
                   step="0.01">
            @error('harga')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
        </div>

        <!-- Deskripsi -->
        <div class="mb-3">
            <label class="form-label">Deskripsi (Opsional)</label>
            <textarea name="deskripsi" 
                      class="form-control @error('deskripsi') is-invalid @enderror" 
                      rows="4">{{ old('deskripsi', $barang->deskripsi) }}</textarea>
            @error('deskripsi')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
        </div>

        <!-- Tombol Submit -->
        <div class="d-flex gap-2">
            <button type="submit" class="btn btn-warning">
                💾 Update Data
            </button>
            <a href="{{ route('barang.index') }}" class="btn btn-secondary">
                ↩️ Kembali
            </a>
        </div>
    </form>
</div>
</div>
@endsection`}
                title="resources/views/barang/edit.blade.php"
                language="html"
              />
              <div className="mt-4 bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                <h3 className="font-bold text-gray-800 mb-3">
                  Perbedaan Edit vs Create:
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <code className="text-amber-700">@method('PUT')</code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Pakai method PUT untuk update (HTML form hanya support
                      GET/POST, jadi Laravel fake pakai @method)
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <code className="text-amber-700">
                      {"old('field', $barang->field)"}
                    </code>

                    <p className="text-gray-600 text-sm mt-1">
                      → Prioritaskan old() kalau ada error validasi, kalau tidak
                      ada pakai data dari $barang
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <code className="text-amber-700">
                      {"route('barang.update', $barang->id)"}
                    </code>

                    <p className="text-gray-600 text-sm mt-1">
                      → Kirim data ke route update dengan parameter ID barang
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6: View show.blade.php */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-cyan-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Eye className="w-6 h-6" />
                  View Show - Detail 1 Data
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                File <strong>show.blade.php</strong> menampilkan detail lengkap
                1 barang. Buat file{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded break-all">
                  resources/views/barang/show.blade.php
                </code>
                :
              </p>

              <CodeBlock
                code={`@extends('layouts.app')
@section('title', 'Detail Barang')
@section('content')
<div class="card shadow-sm">
    <div class="card-header bg-info text-white">
        <h4 class="mb-0">👁️ Detail Barang</h4>
    </div>
    <div class="card-body">
        <table class="table table-bordered">
            <tr>
                <th width="200">Kode Barang</th>
                <td><code class="fs-5">{{ $barang->kode_barang }}</code></td>
            </tr>
            <tr>
                <th>Nama Barang</th>
                <td class="fs-5">{{ $barang->nama_barang }}</td>
            </tr>
            <tr>
                <th>Stok</th>
                <td>
                    <span class="badge {{ $barang->stok > 10 ? 'bg-success' : 'bg-warning' }} fs-6">
                        {{ $barang->stok }} unit
                    </span>
                </td>
            </tr>
            <tr>
                <th>Harga</th>
                <td class="fs-5 text-success fw-bold">
                    Rp {{ number_format($barang->harga, 0, ',', '.') }}
                </td>
            </tr>
            <tr>
                <th>Deskripsi</th>
                <td>{{ $barang->deskripsi ?? '-' }}</td>
            </tr>
            <tr>
                <th>Dibuat Pada</th>
                <td>{{ $barang->created_at->format('d M Y, H:i') }}</td>
            </tr>
            <tr>
                <th>Terakhir Update</th>
                <td>{{ $barang->updated_at->format('d M Y, H:i') }}</td>
            </tr>
        </table>
    <!-- Tombol Aksi -->
    <div class="d-flex gap-2 mt-4">
        <a href="{{ route('barang.edit', $barang->id) }}" class="btn btn-warning">
            ✏️ Edit
        </a>
        
        <form action="{{ route('barang.destroy', $barang->id) }}" 
              method="POST" 
              style="display:inline;"
              onsubmit="return confirm('Yakin ingin menghapus barang ini?')">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-danger">
                🗑️ Hapus
            </button>
        </form>
        
        <a href="{{ route('barang.index') }}" class="btn btn-secondary">
            ↩️ Kembali
        </a>
    </div>
</div>
</div>
@endsection`}
                title="resources/views/barang/show.blade.php"
                language="html"
              />
              <div className="mt-4 bg-cyan-50 rounded-xl p-6 border-2 border-cyan-200">
                <h3 className="font-bold text-gray-800 mb-3">
                  Fitur Menarik di View Show:
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <code className="text-cyan-700">
                      {"{{ $barang->deskripsi ?? '-' }}"}
                    </code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Null coalescing operator: tampilkan "-" jika deskripsi
                      kosong
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-3">
                    <code className="text-cyan-700">
                      {"number_format($barang->harga, 0, ',', '.')"}
                    </code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Format harga jadi Rp 5.000.000 (pemisah ribuan pakai
                      titik)
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-3">
                    <code className="text-cyan-700">
                      {"$barang->created_at->format('d M Y, H:i')"}
                    </code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Laravel Carbon untuk format tanggal otomatis
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alur Testing */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  🧪 Testing Aplikasi
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                Sekarang saatnya test aplikasi! Ikuti langkah ini:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-800 font-semibold mb-2">
                      Jalankan Server
                    </p>
                    <code className="bg-gray-900 text-green-400 px-3 py-2 rounded block text-sm">
                      php artisan serve
                    </code>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-800 font-semibold mb-2">
                      Buka Browser
                    </p>
                    <code className="bg-gray-900 text-green-400 px-3 py-2 rounded block text-sm break-all">
                      http://localhost:8000/barang
                    </code>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-800 font-semibold mb-2">
                      Test Semua Fitur
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1 mt-2">
                      <li>✅ Klik "Tambah Barang" → Test form create</li>
                      <li>✅ Isi data & submit → Cek validasi</li>
                      <li>✅ Klik "Edit" → Test form edit</li>
                      <li>✅ Klik "Detail" → Test halaman show</li>
                      <li>✅ Klik "Hapus" → Test konfirmasi delete</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 shadow-lg border-2 border-red-200">
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  ⚠️ Troubleshooting Error Umum
                </h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-red-700 font-semibold mb-2">
                    ❌ Error: Route [barang.index] not defined
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Solusi:</strong> Pastikan sudah tambah{" "}
                    <code>
                      Route::resource('barang', BarangController::class)
                    </code>{" "}
                    di web.php
                  </p>
                  <code className="bg-gray-900 text-green-400 px-3 py-2 rounded block text-sm">
                    php artisan route:list
                  </code>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-red-700 font-semibold mb-2">
                    ❌ Error: View [barang.index] not found
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Solusi:</strong> Cek apakah file view ada di folder
                    yang benar:{" "}
                    <code className="bg-gray-100 px-1 py-0.5 rounded break-all">
                      resources/views/barang/index.blade.php
                    </code>
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-red-700 font-semibold mb-2">
                    ❌ Error: Undefined variable $barangs
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Solusi:</strong> Pastikan Controller sudah kirim
                    data pakai <code>compact('barangs')</code> atau{" "}
                    <code>with('barangs', $barangs)</code>
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-red-700 font-semibold mb-2">
                    ❌ Error: CSRF token mismatch
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Solusi:</strong> Jangan lupa tambah{" "}
                    <code>@csrf</code> di semua form POST/PUT/DELETE
                  </p>
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
                    Route resource otomatis bikin 7 route CRUD dengan 1 baris
                    code
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    View pakai Blade template (@extends, @section, @if,
                    @foreach)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Form WAJIB pakai @csrf untuk keamanan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Form edit pakai @method('PUT') karena HTML form hanya
                    support GET/POST
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Pakai old() untuk isi ulang form kalau validasi gagal
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Selalu confirm() sebelum hapus data untuk hindari kesalahan
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
              onClick={() => navigate("/module/laravel-crud/chapter/5")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white text-gray-700 hover:bg-gray-50 shadow-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:block">Bab Sebelumnya</span>
            </button>

            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Progress</div>
              <div className="text-2xl font-bold text-rose-600">6/8</div>
            </div>

            <button
              onClick={() => navigate("/module/laravel-crud/chapter/7")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-rose-500 to-red-600 text-white hover:from-rose-600 hover:to-red-700 shadow-lg transition-all"
            >
              <span className="hidden sm:block">Bab Selanjutnya</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-rose-900 to-red-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-rose-200 mb-2">
            💡 Tips: Route resource + Blade template = Kombinasi powerful untuk
            CRUD!
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 ASTRA Program - Laravel CRUD Module
          </p>
        </div>
      </footer>
    </div>
  );
}
