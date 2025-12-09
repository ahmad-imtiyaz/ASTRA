import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Circle,
  Code,
  Database,
  Layout,
  Rocket,
  Settings,
  TestTube,
  Wrench,
  Trophy,
} from "lucide-react";

// Data bab-bab pembelajaran
const chapters = [
  {
    id: 1,
    title: "Pengenalan Laravel",
    description: "Apa itu Laravel dan mengapa menggunakannya untuk CRUD",
    icon: BookOpen,
    color: "from-sky-400 to-blue-500",
    duration: "15 menit",
    topics: [
      "Konsep Framework",
      "Perbedaan PHP Native vs Laravel",
      "Keuntungan Laravel",
    ],
  },
  {
    id: 2,
    title: "Persiapan Tools",
    description: "Install XAMPP, Composer, dan Laravel",
    icon: Settings,
    color: "from-blue-400 to-indigo-500",
    duration: "20 menit",
    topics: ["Install XAMPP", "Install Composer", "Create Project Laravel"],
  },
  {
    id: 3,
    title: "Setup Project",
    description: "Konfigurasi database dan environment",
    icon: Wrench,
    color: "from-indigo-400 to-purple-500",
    duration: "15 menit",
    topics: ["Buat Database", "Setting .env", "Struktur Folder Laravel"],
  },
  {
    id: 4,
    title: "Model & Migration",
    description: "Membuat struktur tabel barang di database",
    icon: Database,
    color: "from-purple-400 to-pink-500",
    duration: "25 menit",
    topics: ["Apa itu Migration", "Buat Model Barang", "Definisi Tabel"],
  },
  {
    id: 5,
    title: "Controller & Logic",
    description: "Membuat logic CRUD di BarangController",
    icon: Code,
    color: "from-pink-400 to-rose-500",
    duration: "30 menit",
    topics: ["Buat Controller", "Method CRUD", "Validasi Data"],
  },
  {
    id: 6,
    title: "Routes & View",
    description: "Membuat navigasi dan tampilan aplikasi",
    icon: Layout,
    color: "from-rose-400 to-red-500",
    duration: "35 menit",
    topics: ["Setup Routes", "Buat Layout", "Form & Tabel"],
  },
  {
    id: 7,
    title: "Testing CRUD",
    description: "Menjalankan dan testing aplikasi Laravel kita",
    icon: TestTube,
    color: "from-orange-400 to-amber-500",
    duration: "20 menit",
    topics: ["Run Server", "Test Create", "Test Read/Update/Delete"],
  },
  {
    id: 8,
    title: "Tugas Praktik",
    description: "Challenge: Tambah data & fitur baru sendiri!",
    icon: Trophy,
    color: "from-amber-400 to-yellow-500",
    duration: "30 menit",
    topics: ["Tambah Data Baru", "Modifikasi Tabel", "Challenge Bonus"],
  },
];

const ChapterCard = ({ chapter, completed, onStart }) => {
  const Icon = chapter.icon;

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-300">
      <div className={`h-3 bg-gradient-to-r ${chapter.color}`}></div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${chapter.color} group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>

          <div className="flex items-center gap-2">
            {completed ? (
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            ) : (
              <Circle className="w-6 h-6 text-gray-300" />
            )}
          </div>
        </div>

        <div className="mb-1">
          <span className="text-sm font-semibold text-gray-500">
            BAB {chapter.id}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {chapter.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">{chapter.description}</p>

        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Rocket className="w-4 h-4" />
            <span className="font-semibold">{chapter.duration}</span>
          </div>

          <div className="space-y-1">
            {chapter.topics.map((topic, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs text-gray-600"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => onStart(chapter.id)}
          className={`w-full px-4 py-3 bg-gradient-to-r ${chapter.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md`}
        >
          {completed ? "📖 Baca Lagi" : "🚀 Mulai Belajar"}
        </button>
      </div>
    </div>
  );
};

export default function LaravelModulePage() {
  const navigate = useNavigate(); // Tambahkan ini
  const [completedChapters, setCompletedChapters] = useState([]);

  const handleStartChapter = (chapterId) => {
    // Ganti alert dengan navigate
    navigate(`/module/laravel-crud/chapter/${chapterId}`);
  };

  const progress = (completedChapters.length / chapters.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Kembali ke Dashboard</span>
            </Link>

            <div className="flex items-center gap-3">
              <div className="hidden md:block text-right">
                <div className="text-sm font-semibold text-gray-700">
                  Progress Belajar
                </div>
                <div className="text-xs text-gray-500">
                  {completedChapters.length} / {chapters.length} Bab
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                {Math.round(progress)}%
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-blue-100/50 to-indigo-100/50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-4">
              <Code className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                Backend Development
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Laravel CRUD Dasar
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-6">
              Pelajari fundamental Laravel dari instalasi hingga membuat
              aplikasi CRUD lengkap
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">
                    {chapters.length}
                  </div>
                  <div className="text-sm text-gray-600">Total Bab</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">4-6</div>
                  <div className="text-sm text-gray-600">Jam Belajar</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">⭐</div>
                  <div className="text-sm text-gray-600">Beginner</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">🎯</div>
                  <div className="text-sm text-gray-600">Praktis</div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 transition-all duration-500 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Daftar Bab Pembelajaran
            </h2>
            <p className="text-gray-600">
              Ikuti bab secara berurutan untuk hasil belajar yang maksimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {chapters.map((chapter) => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                completed={completedChapters.includes(chapter.id)}
                onStart={handleStartChapter}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Info */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Yang Akan Kamu Pelajari
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800">
                    Konsep MVC Laravel
                  </div>
                  <div className="text-sm text-gray-600">
                    Model, View, Controller pattern
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800">
                    Database Migration
                  </div>
                  <div className="text-sm text-gray-600">
                    Kelola struktur database dengan code
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800">
                    Eloquent ORM
                  </div>
                  <div className="text-sm text-gray-600">
                    Query database tanpa SQL manual
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800">
                    Blade Templating
                  </div>
                  <div className="text-sm text-gray-600">
                    Buat tampilan web yang dinamis
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800">
                    Form Validation
                  </div>
                  <div className="text-sm text-gray-600">
                    Validasi input user otomatis
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800">
                    CRUD Operations
                  </div>
                  <div className="text-sm text-gray-600">
                    Create, Read, Update, Delete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 mb-2">
            💡 Tips: Ikuti setiap bab secara berurutan dan praktikkan langsung!
          </p>
          <p className="text-gray-400 text-sm">
            © 2024 ASTRA Program - Laravel CRUD Module
          </p>
        </div>
      </footer>
    </div>
  );
}
