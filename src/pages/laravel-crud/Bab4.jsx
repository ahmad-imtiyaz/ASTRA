import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Database,
  CheckCircle2,
  Lightbulb,
  AlertCircle,
  FileCode,
  Zap,
  Terminal,
  Table,
  Copy,
  Check,
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

export default function Bab4() {
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
                25 menit
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
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 mb-6 shadow-xl">
              <Database className="w-12 h-12 text-white" />
            </div>

            <div className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              BAB 4 dari 8
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Model & Migration
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Membuat Struktur Tabel Barang di Database
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Intro Migration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                📋 Apa itu Migration?
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Migration itu seperti <strong>"blueprint"</strong> atau{" "}
                <strong>"cetakan"</strong> untuk membuat tabel database.
                Bayangkan kalau kamu punya cetak biru rumah, maka siapa aja yang
                punya cetak biru itu bisa bikin rumah yang sama persis!
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-red-500 font-bold mb-2">
                      ❌ PHP Native
                    </div>
                    <p className="text-gray-600 text-sm">
                      Bikin tabel manual di phpMyAdmin. Kalau teman kerja
                      kelompok mau bikin yang sama, harus dijelasin satu-satu
                      strukturnya
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-green-500 font-bold mb-2">
                      ✅ Laravel Migration
                    </div>
                    <p className="text-gray-600 text-sm">
                      Bikin tabel pakai kode PHP. Tinggal share file migration,
                      terus jalankan command. BOOM! Tabel langsung jadi!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Keuntungan Migration */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border-2 border-amber-200">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  🎯 Keuntungan Pakai Migration
                </h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-gray-800 font-semibold">
                      Version Control Database
                    </span>
                    <p className="text-gray-600 text-sm">
                      Bisa track perubahan struktur tabel kayak Git!
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-gray-800 font-semibold">
                      Team Collaboration
                    </span>
                    <p className="text-gray-600 text-sm">
                      Semua tim bisa bikin database yang sama dengan 1 command
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-gray-800 font-semibold">
                      Easy Rollback
                    </span>
                    <p className="text-gray-600 text-sm">
                      Salah bikin tabel? Tinggal rollback (batalkan)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-gray-800 font-semibold">
                      Multi Database Support
                    </span>
                    <p className="text-gray-600 text-sm">
                      Code yang sama bisa jalan di MySQL, PostgreSQL, SQLite
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 1: Buat Migration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Membuat File Migration
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                Pertama, kita buat file migration untuk tabel{" "}
                <strong>barangs</strong>. Buka CMD/Terminal di folder project:
              </p>

              <CodeBlock
                code={`php artisan make:migration create_barangs_table`}
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
                        php artisan
                      </code>{" "}
                      → Command utama Laravel
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-mono">•</span>
                    <div>
                      <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm">
                        make:migration
                      </code>{" "}
                      → Perintah buat file migration baru
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-mono">•</span>
                    <div>
                      <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm">
                        create_barangs_table
                      </code>{" "}
                      → Nama migration (bebas, tapi harus jelas)
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div className="min-w-0">
                    <p className="text-gray-800 font-semibold text-lg mb-2">
                      ✅ File Migration Berhasil Dibuat!
                    </p>

                    <p className="text-gray-600 mb-2">
                      File migration baru akan muncul di folder:
                    </p>

                    <div className="max-w-full overflow-x-auto">
                      <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm whitespace-nowrap">
                        database/migrations/2025_02_26_232350_create_barangs_table.php
                      </code>
                    </div>

                    <p className="text-gray-500 text-sm mt-2">
                      *Angka di depan adalah timestamp (tanggal & waktu
                      pembuatan)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Definisi Struktur Tabel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Definisi Struktur Tabel
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                Sekarang buka file migration yang baru dibuat tadi, lalu edit
                bagian{" "}
                <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded">
                  up()
                </code>
                :
              </p>

              <CodeBlock
                code={`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('barangs', function (Blueprint $table) {
            $table->id();
            $table->string('kode_barang', 10)->unique();
            $table->string('nama_barang', 100);
            $table->integer('stok');
            $table->decimal('harga', 10, 2);
            $table->text('deskripsi')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('barangs');
    }
};`}
                title="database/migrations/xxxx_create_barangs_table.php"
                language="php"
              />

              {/* Penjelasan Detail Kolom */}
              <div className="mt-6 space-y-4">
                <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                  <Table className="w-5 h-5 text-purple-600" />
                  Penjelasan Setiap Kolom:
                </h3>

                <div className="grid gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <code className="text-blue-700 font-mono text-sm">
                      {"$table->id()"}
                    </code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Primary key (auto increment). Otomatis bikin kolom{" "}
                      <strong>id</strong> tipe BIGINT UNSIGNED
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-500">
                    <code className="text-green-700 font-mono text-sm">
                      {"$table->string('kode_barang', 10)->unique()"}
                    </code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Kolom VARCHAR(10) untuk kode barang.{" "}
                      <strong>unique()</strong> = harus unik, ga boleh kembar
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <code className="text-purple-700 font-mono text-sm">
                      {"$table->string('nama_barang', 100)"}
                    </code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Kolom VARCHAR(100) untuk nama barang
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border-l-4 border-amber-500">
                    <code className="text-amber-700 font-mono text-sm">
                      {"$table->integer('stok')"}
                    </code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Kolom INT untuk jumlah stok (angka bulat)
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-lg p-4 border-l-4 border-rose-500">
                    <code className="text-rose-700 font-mono text-sm">
                      {"$table->decimal('harga', 10, 2)"}
                    </code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Kolom DECIMAL(10,2) untuk harga. Contoh: 1000000.50 (10
                      digit total, 2 digit desimal)
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-4 border-l-4 border-gray-500">
                    <code className="text-gray-700 font-mono text-sm">
                      {"$table->text('deskripsi')->nullable()"}
                    </code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Kolom TEXT untuk deskripsi. <strong>nullable()</strong>{" "}
                      = boleh kosong
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4 border-l-4 border-cyan-500">
                    <code className="text-cyan-700 font-mono text-sm">
                      {"$table->timestamps()"}
                    </code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Otomatis bikin 2 kolom: <strong>created_at</strong> &{" "}
                      <strong>updated_at</strong> (timestamp)
                    </p>
                  </div>
                </div>
              </div>

              {/* Penjelasan Method up() & down() */}
              <div className="mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-600" />
                  Penjelasan Method:
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <code className="text-indigo-700 font-mono">up()</code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Dijalankan saat{" "}
                      <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs">
                        php artisan migrate
                      </code>
                      . Fungsinya untuk <strong>membuat tabel</strong>
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <code className="text-rose-700 font-mono">down()</code>
                    <p className="text-gray-600 text-sm mt-1">
                      → Dijalankan saat rollback. Fungsinya untuk{" "}
                      <strong>menghapus tabel</strong> (kebalikan dari up)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Jalankan Migration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Terminal className="w-7 h-7 text-green-600" />
                  Jalankan Migration
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                Sekarang saatnya eksekusi migration untuk membuat tabel di
                database!
              </p>

              <CodeBlock
                code={`php artisan migrate`}
                title="Command Terminal"
                language="bash"
              />

              <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />

                  <div className="min-w-0">
                    <p className="text-gray-800 font-semibold text-lg mb-3">
                      ✅ Output Berhasil:
                    </p>

                    {/* FIX: Wrapper scroll agar CodeBlock tidak dorong layout */}
                    <div className="max-w-full overflow-x-auto">
                      <CodeBlock
                        code={`INFO  Running migrations.

2025_02_26_232350_create_barangs_table ............. 18ms DONE`}
                        title="Terminal Output"
                        language="bash"
                      />
                    </div>

                    <p className="text-gray-600 mt-3">
                      Kalau muncul output seperti ini, berarti tabel{" "}
                      <strong>barangs</strong> sudah berhasil dibuat di database{" "}
                      <strong>db_barang</strong>!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cek di phpMyAdmin */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                🔍 Verifikasi Tabel di phpMyAdmin
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Mari kita cek apakah tabel benar-benar sudah terbuat:
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </span>
                    <div className="min-w-0">
                      <p className="text-gray-800 font-semibold">
                        Buka phpMyAdmin
                      </p>

                      <div className="max-w-full overflow-x-auto">
                        <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm whitespace-nowrap inline-block">
                          http://localhost/phpmyadmin
                        </code>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </span>
                    <p className="text-gray-700">
                      Klik database <strong>"db_barang"</strong> di sidebar kiri
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </span>
                    <div>
                      <p className="text-gray-700 mb-2">
                        Harusnya muncul tabel:
                      </p>
                      <ul className="space-y-1 ml-4">
                        <li className="text-gray-600">
                          • <strong>barangs</strong> (tabel yang baru kita buat)
                        </li>
                        <li className="text-gray-600">• users</li>
                        <li className="text-gray-600">• password_resets</li>
                        <li className="text-gray-600">• failed_jobs</li>
                        <li className="text-gray-600">• migrations</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex flex-col sm:flex-row items-start gap-3">
                    {/* Nomor step */}
                    <span
                      className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full 
                   flex items-center justify-center font-bold"
                    >
                      4
                    </span>

                    {/* Isi konten */}
                    <div className="w-full">
                      <p className="text-gray-700 mb-2">
                        Klik tabel <strong>barangs</strong>, cek strukturnya:
                      </p>

                      <div className="bg-white rounded-lg p-4 border border-gray-200 mt-2">
                        {/* WRAPPER ANTI OVERFLOW */}
                        <div className="overflow-x-auto w-full">
                          <table className="text-sm min-w-max">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="text-left p-2 border">Kolom</th>
                                <th className="text-left p-2 border">Tipe</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="p-2 border">id</td>
                                <td className="p-2 border">
                                  bigint(20) unsigned
                                </td>
                              </tr>
                              <tr>
                                <td className="p-2 border">kode_barang</td>
                                <td className="p-2 border">varchar(10)</td>
                              </tr>
                              <tr>
                                <td className="p-2 border">nama_barang</td>
                                <td className="p-2 border">varchar(100)</td>
                              </tr>
                              <tr>
                                <td className="p-2 border">stok</td>
                                <td className="p-2 border">int(11)</td>
                              </tr>
                              <tr>
                                <td className="p-2 border">harga</td>
                                <td className="p-2 border">decimal(10,2)</td>
                              </tr>
                              <tr>
                                <td className="p-2 border">deskripsi</td>
                                <td className="p-2 border">text</td>
                              </tr>
                              <tr>
                                <td className="p-2 border">created_at</td>
                                <td className="p-2 border">timestamp</td>
                              </tr>
                              <tr>
                                <td className="p-2 border">updated_at</td>
                                <td className="p-2 border">timestamp</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Step 4: Buat Model */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Membuat Model Barang
                </h2>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border-2 border-pink-200 mb-6">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-pink-600" />
                  Apa itu Model?
                </h3>
                <p className="text-gray-700 mb-3">
                  Model itu representasi dari tabel database dalam bentuk{" "}
                  <strong>class PHP</strong>. Fungsinya untuk komunikasi dengan
                  database.
                </p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-600 text-sm">
                    <strong>Analogi:</strong>
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm mt-2">
                    <li>
                      • <strong>Tabel di database</strong> = Lemari arsip
                    </li>
                    <li>
                      • <strong>Model</strong> = Pegawai yang ngatur arsip di
                      lemari
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                Sekarang kita buat Model untuk tabel <strong>barangs</strong>:
              </p>

              <CodeBlock
                code={`php artisan make:model Barang`}
                title="Command Terminal"
                language="bash"
              />

              <div className="mt-4 bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <p className="text-gray-700">
                  File{" "}
                  <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded">
                    Barang.php
                  </code>{" "}
                  akan muncul di folder:
                </p>
                <code className="bg-gray-800 text-green-400 px-3 py-2 rounded block text-sm mt-2">
                  app/Models/Barang.php
                </code>
              </div>
            </div>

            {/* Step 5: Setting Model */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-rose-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Konfigurasi Model
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-4">
                Buka file{" "}
                <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded">
                  app/Models/Barang.php
                </code>
                , lalu edit jadi seperti ini:
              </p>

              <CodeBlock
                code={`<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class Barang extends Model
{
    use HasFactory;

    // Nama tabel di database
    protected $table = 'barangs';

    // Kolom yang boleh diisi (mass assignment)
    protected $fillable = [
        'kode_barang',
        'nama_barang',
        'stok',
        'harga',
        'deskripsi'
    ];
}`}
                title="app/Models/Barang.php"
                language="php"
              />

              <div className="mt-6 space-y-4">
                <h3 className="font-bold text-gray-800 text-lg">
                  Penjelasan Setting Model:
                </h3>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <code className="text-blue-700 font-mono text-sm">
                    protected $table = 'barangs'
                  </code>
                  <p className="text-gray-600 text-sm mt-2">
                    → Ngasih tahu Laravel bahwa Model ini nyambung ke tabel{" "}
                    <strong>barangs</strong> di database
                  </p>
                </div>

                <div className="bg-gradient-to-r from-rose-50 to-red-50 rounded-lg p-4 border-l-4 border-rose-500">
                  <code className="text-rose-700 font-mono text-sm">
                    protected $fillable = [...]
                  </code>
                  <p className="text-gray-600 text-sm mt-2">
                    → Daftar kolom yang <strong>boleh diisi</strong> secara
                    massal (mass assignment). Ini untuk{" "}
                    <strong>keamanan!</strong>
                  </p>
                  <div className="bg-white rounded-lg p-3 mt-3">
                    <p className="text-gray-700 font-semibold text-sm mb-2">
                      🔒 Kenapa Penting?
                    </p>
                    <p className="text-gray-600 text-sm">
                      Kalau ga di-set, hacker bisa inject field lain yang ga
                      seharusnya diisi (misal: is_admin). Dengan $fillable, cuma
                      kolom yang kita tentuin aja yang bisa diisi!
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-4 border-l-4 border-amber-500">
                  <code className="text-amber-700 font-mono text-sm">
                    use HasFactory
                  </code>
                  <p className="text-gray-600 text-sm mt-2">
                    → Trait untuk Factory (bikin data dummy otomatis). Berguna
                    untuk testing nanti!
                  </p>
                </div>
              </div>
            </div>

            {/* Shortcut Command */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  💡 Pro Tips: Shortcut Command
                </h2>
              </div>
              <p className="text-gray-700 mb-4">
                Sebenarnya kamu bisa bikin{" "}
                <strong>Model + Migration sekaligus</strong> dengan 1 command
                aja!
              </p>

              <CodeBlock
                code={`# Bikin Model + Migration sekaligus
php artisan make:model Product -m

# Output yang ditampilkan:`}
                title="Shortcut Command"
                language="bash"
              />

              <CodeBlock
                code={`$ php artisan make:model Product -m

   INFO  Model [app/Models/Product.php] created successfully.  

   INFO  Migration [database/migrations/2025_02_26_232350_create_products_table.php] created successfully.`}
                title="Terminal Output"
                language="bash"
              />

              <div className="mt-4 bg-white rounded-lg p-4 border-2 border-purple-200">
                <p className="text-gray-700 mb-2">
                  <strong>Flag yang bisa dipakai:</strong>
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    •{" "}
                    <code className="bg-gray-800 text-green-400 px-2 py-1 rounded">
                      -m
                    </code>{" "}
                    → Sekalian bikin migration
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-800 text-green-400 px-2 py-1 rounded">
                      -c
                    </code>{" "}
                    → Sekalian bikin controller
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-800 text-green-400 px-2 py-1 rounded">
                      -r
                    </code>{" "}
                    → Controller langsung resource (ada CRUD method)
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-800 text-green-400 px-2 py-1 rounded">
                      -mcr
                    </code>{" "}
                    → Bikin semuanya sekaligus!
                  </li>
                </ul>
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
                    Migration = Blueprint tabel database dalam bentuk kode PHP
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Model = Representasi tabel untuk komunikasi dengan database
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-base">
                      php artisan migrate
                    </code>{" "}
                    untuk eksekusi migration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded text-base">
                      $fillable
                    </code>{" "}
                    penting untuk keamanan mass assignment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">
                    Gunakan shortcut{" "}
                    <code className="bg-gray-800 text-green-400 px-2 py-1 rounded text-base">
                      -m
                    </code>{" "}
                    untuk bikin Model + Migration sekaligus
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
              onClick={() => navigate("/module/laravel-crud/chapter/3")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white text-gray-700 hover:bg-gray-50 shadow-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:block">Bab Sebelumnya</span>
            </button>

            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Progress</div>
              <div className="text-2xl font-bold text-purple-600">4/8</div>
            </div>

            <button
              onClick={() => navigate("/module/laravel-crud/chapter/5")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg transition-all"
            >
              <span className="hidden sm:block">Bab Selanjutnya</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-200 mb-2">
            💡 Tips: Migration & Model adalah fondasi CRUD Laravel!
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 ASTRA Program - Laravel CRUD Module
          </p>
        </div>
      </footer>
    </div>
  );
}
