import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code,
  Lightbulb,
  AlertCircle,
  FileCode,
  Zap,
} from "lucide-react";

// Data konten setiap bab
const chapterContent = {
  1: {
    title: "Pengenalan Laravel",
    subtitle: "Apa itu Laravel dan Mengapa Menggunakannya?",
    duration: "15 menit",
    icon: BookOpen,
    color: "from-sky-400 to-blue-500",
    sections: [
      {
        type: "intro",
        title: "🚀 Apa itu Laravel?",
        content: `Laravel adalah framework PHP yang bikin kamu lebih mudah dan cepat dalam membuat aplikasi web. Kalau dulu kalian bikin CRUD native PHP, pasti masih manual banget kan? Bikin koneksi database sendiri, bikin query SQL satu-satu, bikin form validasi manual. Nah, Laravel udah sediain semua itu!`,
      },
      {
        type: "analogy",
        title: "💡 Analogi Sederhana",
        content: "Kalau bikin aplikasi web itu kayak bikin rumah, maka:",
        items: [
          {
            label: "PHP Native",
            desc: "Bikin rumah dari nol, mulai dari cetak bata, rakit satu-satu",
          },
          {
            label: "Laravel",
            desc: "Udah ada bata jadi, rangka jadi, tinggal rakit dan desain aja",
          },
        ],
      },
      {
        type: "benefits",
        title: "✨ Kenapa Pakai Laravel?",
        items: [
          {
            icon: "⚡",
            title: "Lebih Cepat",
            desc: "Banyak fitur udah jadi, tinggal pakai",
          },
          {
            icon: "🔒",
            title: "Lebih Aman",
            desc: "Udah ada proteksi dari SQL Injection, XSS, dll",
          },
          {
            icon: "📁",
            title: "Terstruktur Rapi",
            desc: "Filenya udah diatur dengan pola MVC (Model-View-Controller)",
          },
          {
            icon: "💼",
            title: "Banyak Dipakai di Dunia Kerja",
            desc: "Banyak perusahaan cari programmer Laravel",
          },
        ],
      },
      {
        type: "comparison",
        title: "🔄 Perbedaan CRUD Native PHP vs Laravel",
        phpNative: {
          title: "PHP Native",
          code: `// Koneksi database
$conn = mysqli_connect("localhost", "root", "", "toko");

// Query ambil data
$query = "SELECT * FROM barang";
$result = mysqli_query($conn, $query);

// Tampilkan data
while($row = mysqli_fetch_assoc($result)) {
    echo $row['nama_barang'];
}`,
        },
        laravel: {
          title: "Laravel",
          code: `// Ambil semua data barang
$barangs = Barang::all();

// Tampilkan di view
return view('barang.index', compact('barangs'));`,
        },
        conclusion:
          "Lebih simple kan? Laravel udah handle koneksi database dan query-nya!",
      },
    ],
    keyTakeaways: [
      "Laravel adalah framework PHP untuk mempercepat development",
      "Laravel menggunakan pola MVC yang terstruktur rapi",
      "Lebih aman, cepat, dan banyak dipakai di dunia kerja",
      "Code Laravel lebih simple dibanding PHP native",
    ],
  },
  // Nanti bisa tambah konten bab 2-8 di sini
  2: {},
};

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

export default function LaravelChapter() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);

  const chapter = chapterContent[chapterId];
  const chapterNum = parseInt(chapterId);
  const hasNext = chapterNum < 8;
  const hasPrev = chapterNum > 1;

  // Scroll to top saat pindah bab
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chapterId]);

  if (!chapter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Bab Tidak Ditemukan
          </h1>
          <Link
            to="/module/laravel-crud"
            className="text-blue-600 hover:underline"
          >
            Kembali ke Daftar Bab
          </Link>
        </div>
      </div>
    );
  }

  const Icon = chapter.icon;

  const handleMarkComplete = () => {
    setCompleted(!completed);
  };

  const handleNext = () => {
    if (hasNext) {
      navigate(`/module/laravel-crud/chapter/${chapterNum + 1}`);
    }
  };

  const handlePrev = () => {
    if (hasPrev) {
      navigate(`/module/laravel-crud/chapter/${chapterNum - 1}`);
    }
  };

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
                {chapter.duration}
              </span>
              <button
                onClick={handleMarkComplete}
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
            <div
              className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${chapter.color} mb-6 shadow-xl`}
            >
              <Icon className="w-12 h-12 text-white" />
            </div>

            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              BAB {chapterId} dari 8
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {chapter.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {chapter.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {chapter.sections.map((section, idx) => (
              <div key={idx}>
                {section.type === "intro" && (
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </div>
                )}

                {section.type === "analogy" && (
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border-2 border-amber-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="w-6 h-6 text-amber-600" />
                      <h2 className="text-2xl font-bold text-gray-800">
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-gray-700 mb-4 text-lg">
                      {section.content}
                    </p>
                    <div className="space-y-4">
                      {section.items.map((item, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-xl p-6 shadow-md"
                        >
                          <div className="font-bold text-gray-800 mb-2 text-lg">
                            {item.label}
                          </div>
                          <div className="text-gray-600">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {section.type === "benefits" && (
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      {section.title}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {section.items.map((item, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200"
                        >
                          <div className="text-4xl mb-3">{item.icon}</div>
                          <h3 className="font-bold text-gray-800 mb-2 text-lg">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {section.type === "comparison" && (
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                      {section.title}
                    </h2>
                    <div className="space-y-6">
                      <CodeBlock
                        code={section.phpNative.code}
                        title={section.phpNative.title}
                      />
                      <div className="text-center">
                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold">
                          VS
                        </span>
                      </div>
                      <CodeBlock
                        code={section.laravel.code}
                        title={section.laravel.title}
                      />
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                        <div className="flex items-start gap-3">
                          <Zap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                          <p className="text-gray-700 text-lg">
                            {section.conclusion}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Key Takeaways */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  🎯 Poin Penting
                </h2>
              </div>
              <ul className="space-y-3">
                {chapter.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{point}</span>
                  </li>
                ))}
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
              onClick={handlePrev}
              disabled={!hasPrev}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                hasPrev
                  ? "bg-white text-gray-700 hover:bg-gray-50 shadow-lg"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:block">Bab Sebelumnya</span>
            </button>

            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Progress</div>
              <div className="text-2xl font-bold text-blue-600">
                {chapterId}/8
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={!hasNext}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                hasNext
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 shadow-lg"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
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
