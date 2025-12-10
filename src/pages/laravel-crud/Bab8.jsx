import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Trophy,
  CheckCircle2,
  Lightbulb,
  AlertCircle,
  FileCode,
  Zap,
  Copy,
  Check,
  Target,
  Award,
  Brain,
  Code,
  Database,
  Table,
  PlusCircle,
  Edit3,
  Gift,
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

const QuizQuestion = ({
  number,
  question,
  options,
  correctAnswer,
  explanation,
  userAnswer,
  onAnswer,
}) => {
  const [selected, setSelected] = useState(userAnswer);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (option) => {
    if (!showResult) {
      setSelected(option);
      onAnswer(number, option);
    }
  };

  useEffect(() => {
    setShowResult(userAnswer !== null);
  }, [userAnswer]);

  const isCorrect = selected === correctAnswer;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-100">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-4">{question}</h3>
          <div className="space-y-3">
            {options.map((option, idx) => {
              const optionLetter = String.fromCharCode(65 + idx);
              const isSelected = selected === optionLetter;
              const isCorrectOption = correctAnswer === optionLetter;

              let bgColor = "bg-gray-50 hover:bg-gray-100";
              let borderColor = "border-gray-200";
              let textColor = "text-gray-700";

              if (showResult) {
                if (isCorrectOption) {
                  bgColor = "bg-green-50";
                  borderColor = "border-green-400";
                  textColor = "text-green-800";
                } else if (isSelected && !isCorrect) {
                  bgColor = "bg-red-50";
                  borderColor = "border-red-400";
                  textColor = "text-red-800";
                }
              } else if (isSelected) {
                bgColor = "bg-purple-50";
                borderColor = "border-purple-400";
                textColor = "text-purple-800";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(optionLetter)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${bgColor} ${borderColor} ${textColor} ${
                    !showResult ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                        showResult && isCorrectOption
                          ? "border-green-500 bg-green-500 text-white"
                          : showResult && isSelected && !isCorrect
                          ? "border-red-500 bg-red-500 text-white"
                          : isSelected
                          ? "border-purple-500 bg-purple-500 text-white"
                          : "border-gray-400"
                      }`}
                    >
                      {optionLetter}
                    </div>
                    <span className="font-medium">{option}</span>
                    {showResult && isCorrectOption && (
                      <CheckCircle2 className="w-5 h-5 text-green-600 ml-auto" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {showResult && (
            <div
              className={`mt-4 p-4 rounded-lg ${
                isCorrect
                  ? "bg-green-50 border-2 border-green-200"
                  : "bg-red-50 border-2 border-red-200"
              }`}
            >
              <div className="flex items-start gap-2 mb-2">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-bold text-green-800">Benar!</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="font-bold text-red-800">
                      Salah. Jawaban yang benar: {correctAnswer}
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-700 ml-7">{explanation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Bab8() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const quizData = [
    {
      number: 1,
      question:
        "File mana yang harus dimodifikasi PERTAMA KALI saat menambahkan kolom baru 'supplier' ke database?",
      options: [
        "Model Barang.php",
        "Migration create_barangs_table.php",
        "Controller BarangController.php",
        "View index.blade.php",
      ],
      correctAnswer: "B",
      explanation:
        "Migration harus dimodifikasi terlebih dahulu karena migration bertanggung jawab untuk membuat struktur tabel di database. Setelah migration dijalankan, baru kita bisa menggunakan kolom tersebut di Model dan Controller.",
    },
    {
      number: 2,
      question:
        "Setelah menambahkan kolom 'supplier' di migration, apa yang harus dilakukan agar perubahan tersebut diterapkan ke database?",
      options: [
        "Restart Laravel server",
        "Clear cache dengan php artisan cache:clear",
        "Jalankan php artisan migrate:fresh",
        "Tidak perlu melakukan apa-apa, otomatis berubah",
      ],
      correctAnswer: "C",
      explanation:
        "php artisan migrate:fresh akan menghapus semua tabel dan menjalankan ulang semua migration dari awal. Ini memastikan struktur tabel sesuai dengan migration terbaru. Alternatif lain adalah migrate:rollback kemudian migrate lagi.",
    },
    {
      number: 3,
      question:
        "Mengapa kolom 'supplier' harus ditambahkan ke array $fillable di Model Barang?",
      options: [
        "Agar kolom bisa ditampilkan di view",
        "Agar kolom bisa diisi melalui mass assignment",
        "Agar kolom bisa di-index oleh database",
        "Agar kolom bisa divalidasi",
      ],
      correctAnswer: "B",
      explanation:
        "$fillable adalah whitelist kolom yang boleh diisi secara mass assignment (seperti saat menggunakan Model::create($data)). Tanpa mendaftarkan di $fillable, Laravel akan mengabaikan kolom tersebut untuk keamanan dari Mass Assignment Vulnerability.",
    },
    {
      number: 4,
      question:
        "Di bagian mana kita perlu menambahkan validasi untuk kolom 'supplier' baru?",
      options: [
        "Di file Migration",
        "Di file Model",
        "Di method store() dan update() Controller",
        "Di file routes/web.php",
      ],
      correctAnswer: "C",
      explanation:
        "Validasi dilakukan di Controller, tepatnya di method store() (untuk create) dan update() (untuk edit). Validasi memastikan data yang diterima dari form sesuai dengan aturan yang kita tentukan sebelum disimpan ke database.",
    },
    {
      number: 5,
      question:
        "Jika ingin menampilkan kolom 'supplier' di tabel index, elemen HTML apa yang harus ditambahkan?",
      options: [
        "Hanya menambahkan <td> di dalam loop @foreach",
        "Menambahkan <th> di header dan <td> di body tabel",
        "Hanya menambahkan <th> di header tabel",
        "Cukup menambahkan {{ $barang->supplier }} tanpa tag HTML",
      ],
      correctAnswer: "B",
      explanation:
        "Untuk menampilkan kolom baru di tabel, kita harus menambahkan <th> (table header) di bagian <thead> untuk judul kolom, DAN <td> (table data) di dalam loop @foreach untuk menampilkan nilai supplier setiap barang. Keduanya harus sinkron agar tabel terstruktur dengan benar.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnswer = (questionNumber, answer) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [questionNumber]: answer,
    }));
  };

  const handleSubmitQuiz = () => {
    const totalQuestions = quizData.length;
    let correctAnswers = 0;

    quizData.forEach((q) => {
      if (quizAnswers[q.number] === q.correctAnswer) {
        correctAnswers++;
      }
    });

    setScore(correctAnswers);
    setQuizSubmitted(true);
    window.scrollTo({
      top: document.getElementById("quiz-result").offsetTop - 100,
      behavior: "smooth",
    });
  };

  const allQuestionsAnswered = quizData.every((q) => quizAnswers[q.number]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/module/laravel-crud"
              className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors"
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-yellow-100/50 to-orange-100/50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 mb-6 shadow-xl">
              <Trophy className="w-12 h-12 text-white" />
            </div>

            <div className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              BAB 8 dari 8 - BAB TERAKHIR
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Tugas Praktik
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Saatnya Challenge! Tambah Fitur Baru & Test Pemahamanmu
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Intro */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🎯 Challenge Akhir: Implementasi Fitur Baru
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Selamat sudah sampai di bab terakhir! Sekarang waktunya untuk{" "}
                <strong>mengaplikasikan semua ilmu</strong> yang sudah kamu
                pelajari. Challenge kali ini akan melatih kemampuanmu dalam
                modifikasi aplikasi Laravel CRUD yang sudah ada.
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-200">
                <h3 className="font-bold text-gray-800 mb-4">
                  Apa yang Akan Kamu Kerjakan:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-blue-600 font-bold mb-2 flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      Part 1: Tambah Data Baru
                    </div>
                    <p className="text-gray-600 text-sm">
                      Menambahkan kolom 'supplier' ke database
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-green-600 font-bold mb-2 flex items-center gap-2">
                      <Table className="w-5 h-5" />
                      Part 2: Modifikasi Tabel
                    </div>
                    <p className="text-gray-600 text-sm">
                      Update tampilan tabel & form
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm md:col-span-2">
                    <div className="text-purple-600 font-bold mb-2 flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      Part 3: Quiz Pemahaman
                    </div>
                    <p className="text-gray-600 text-sm">
                      5 pertanyaan untuk test pemahamanmu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 1: Tambah Data Baru */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Database className="w-6 h-6" />
                  Part 1: Tambah Kolom 'Supplier'
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                Challenge pertama: menambahkan field{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">supplier</code>{" "}
                (nama pemasok barang) ke aplikasi CRUD kita. Ini akan melatih
                kemampuanmu dalam modifikasi struktur database.
              </p>

              <div className="space-y-6">
                {/* Step 1.1: Migration */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                      A
                    </span>
                    Modifikasi Migration
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Buka file migration{" "}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      database/migrations/xxxx_create_barangs_table.php
                    </code>{" "}
                    dan tambahkan kolom supplier:
                  </p>

                  <CodeBlock
                    language="php"
                    title="database/migrations/xxxx_create_barangs_table.php"
                    code={`public function up(): void
    {
        Schema::create('barangs', function (Blueprint $table) {
            $table->id();
            $table->string('kode_barang', 10)->unique();
            $table->string('nama_barang', 100);
            $table->string('supplier', 50); // <-- TAMBAHKAN INI
            $table->integer('stok');
            $table->decimal('harga', 10, 2);
            $table->text('deskripsi')->nullable();
            $table->timestamps();
        });
    }`}
                  />

                  <div className="mt-4 bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                    <p className="text-sm text-gray-700">
                      <strong>📝 Catatan:</strong> Letakkan kolom supplier
                      setelah nama_barang agar strukturnya rapi dan logis.
                    </p>
                  </div>
                </div>

                {/* Step 1.2: Jalankan Migration */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                      B
                    </span>
                    Jalankan Migration Fresh
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Jalankan command berikut untuk apply perubahan ke database:
                  </p>

                  <CodeBlock
                    title="Command Terminal"
                    code={`php artisan migrate:fresh`}
                  />

                  <div className="mt-4 bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-gray-800 mb-1">
                          ⚠️ Peringatan Penting!
                        </p>
                        <p className="text-sm text-gray-700">
                          <code>migrate:fresh</code> akan{" "}
                          <strong>menghapus semua data</strong> di database. Ini
                          normal untuk development, tapi jangan lakukan di
                          production!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 1.3: Update Model */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                      C
                    </span>
                    Update Model Barang
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Tambahkan 'supplier' ke array <code>$fillable</code> di
                    Model:
                  </p>

                  <CodeBlock
                    language="php"
                    title="app/Models/Barang.php"
                    code={`protected $fillable = [
    'kode_barang',
    'nama_barang',
    'supplier',  // ← TAMBAHKAN INI
    'stok',
    'harga',
    'deskripsi',
];`}
                  />

                  <div className="mt-4 bg-green-50 rounded-xl p-4 border-2 border-green-200">
                    <p className="text-sm text-gray-700">
                      <strong>✅ Kenapa perlu $fillable?</strong> Agar Laravel
                      memperbolehkan kolom supplier diisi melalui mass
                      assignment (create/update).
                    </p>
                  </div>
                </div>

                {/* Step 1.4: Update Controller */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                      D
                    </span>
                    Update Controller Validation
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Tambahkan validasi untuk supplier di method{" "}
                    <code>store()</code> dan <code>update()</code>:
                  </p>

                  <CodeBlock
                    language="php"
                    title="app/Http/Controllers/BarangController.php - Method store()"
                    code={`    public function store(Request $request)
    {
        // Validasi data yang dikirim dari form
        $request->validate([
            'kode_barang' => 'required|unique:barangs|max:10',
            'nama_barang' => 'required|max:100',
            'supplier' => 'required|max:100', // ← TAMBAHKAN INI
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
                  />

                  <div className="mt-4">
                    <CodeBlock
                      language="php"
                      title="app/Http/Controllers/BarangController.php - Method update()"
                      code={`public function update(Request $request, $id)
    {
        // Validasi data
        $request->validate([
            'kode_barang' => 'required|max:10|unique:barangs,kode_barang,' . $id,
            'nama_barang' => 'required|max:100',
            'supplier' => 'required|max:100', // <-- TAMBAHKAN INI
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
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Part 2: Modifikasi View */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Table className="w-6 h-6" />
                  Part 2: Modifikasi Tampilan View
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                Sekarang kita akan menampilkan kolom supplier di semua view
                (index, create, edit, show). Ikuti langkah-langkah berikut
                dengan teliti!
              </p>

              <div className="space-y-6">
                {/* Step 2.1: Update Index */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                      A
                    </span>
                    Update Tabel Index (index.blade.php)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Tambahkan kolom Supplier di tabel. Pertama tambah{" "}
                    <code>{`<th>`}</code> di header:
                  </p>
                  <CodeBlock
                    language="html"
                    title="resources/views/barang/index.blade.php - Table Header"
                    code={`<thead class="table-dark">
                        <tr>
                            <th>No</th>
                            <th>Kode Barang</th>
                            <th>Nama Barang</th>
                            <th>Supplier</th>
                            <th>Stok</th>
                            <th>Harga</th>
                            <th class="text-center">Aksi</th>
                        </tr>
                    </thead>`}
                  />
                  <p className="text-gray-700 mb-4 mt-4">
                    Kemudian tambahkan <code>{`<td>`}</code> di body tabel untuk
                    menampilkan data:
                  </p>
                  <CodeBlock
                    language="html"
                    title="resources/views/barang/index.blade.php - Table Body"
                    code={String.raw`  <tbody>
                        @foreach($barangs as $index => $barang)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td><code>{{ $barang->kode_barang }}</code></td>
                            <td>{{ $barang->nama_barang }}</td>   
                            <td>{{ $barang->supplier }}</td>   {{-- TAMBAHKAN INI --}}
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
                    </tbody>`}
                  />
                </div>

                {/* Step 2.2: Update Form Create */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                      B
                    </span>
                    Update Form Create (create.blade.php)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Tambahkan input field untuk supplier di form tambah barang:
                  </p>

                  <CodeBlock
                    language="html"
                    title="resources/views/barang/create.blade.php"
                    code={`     <!-- Nama Barang -->
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

            <!-- Supplier - TAMBAHKAN INI -->
            <div class="mb-3">
                <label class="form-label">Supplier <span class="text-danger">*</span></label>
                <input type="text" 
                       name="supplier" 
                       class="form-control @error('supplier') is-invalid @enderror" 
                       value="{{ old('supplier') }}"
                       placeholder="Contoh: PT. Sumber Makmur Jaya"
                       maxlength="100">
                @error('supplier')
                    <div class="invalid-feedback">{{ $message }}</div>
                @enderror
            </div>`}
                  />
                </div>

                {/* Step 2.3: Update Form Edit */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                      C
                    </span>
                    Update Form Edit (edit.blade.php)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Sama seperti create, tapi dengan value yang sudah terisi
                    dari database:
                  </p>

                  <CodeBlock
                    language="html"
                    title="resources/views/barang/edit.blade.php"
                    code={`     <!-- Nama Barang -->
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

        <!-- Supplier - TAMBAHKAN INI -->
        <div class="mb-3">
            <label class="form-label">Supplier <span class="text-danger">*</span></label>
            <input type="text" 
                   name="supplier" 
                   class="form-control @error('supplier') is-invalid @enderror" 
                   value="{{ old('supplier', $barang->supplier) }}"
                   maxlength="100">
            @error('supplier')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
        </div>`}
                  />
                </div>

                {/* Step 2.4: Update Show */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
                      D
                    </span>
                    Update Detail View (show.blade.php)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Tampilkan informasi supplier di halaman detail:
                  </p>

                  <CodeBlock
                    language="html"
                    title="resources/views/barang/show.blade.php"
                    code={`  <table class="table table-bordered">
            <tr>
                <th width="200">Kode Barang</th>
                <td><code class="fs-5">{{ $barang->kode_barang }}</code></td>
            </tr>
            <tr>
                <th>Nama Barang</th>
                <td class="fs-5">{{ $barang->nama_barang }}</td>
            </tr>
            {{-- TAMBAHKAN INI --}}
            <tr>
                <th>Supplier</th>
                <td class="fs-5">{{ $barang->supplier }}</td>
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
        </table>`}
                  />
                </div>

                {/* Checklist */}
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Checklist: Pastikan Semua Sudah Diupdate!
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-green-500 rounded"></div>
                      <span>✓ Tabel index.blade.php (header + body)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-green-500 rounded"></div>
                      <span>✓ Form create.blade.php</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-green-500 rounded"></div>
                      <span>✓ Form edit.blade.php</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-green-500 rounded"></div>
                      <span>✓ Detail show.blade.php</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testing Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Testing & Verifikasi
                </h2>
              </div>

              <p className="text-gray-700 mb-6">
                Setelah semua perubahan selesai, test aplikasimu dengan langkah
                berikut:
              </p>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-500">
                  <div className="font-bold text-gray-800 mb-2">
                    1. Test Create (Tambah Barang Baru)
                  </div>
                  <p className="text-sm text-gray-700">
                    Buka halaman Create, isi semua field termasuk Supplier, lalu
                    simpan. Pastikan data tersimpan dengan benar.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-500">
                  <div className="font-bold text-gray-800 mb-2">
                    2. Test Index (Lihat Daftar)
                  </div>
                  <p className="text-sm text-gray-700">
                    Cek apakah kolom Supplier muncul di tabel dan datanya tampil
                    dengan benar.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-500">
                  <div className="font-bold text-gray-800 mb-2">
                    3. Test Edit (Update Barang)
                  </div>
                  <p className="text-sm text-gray-700">
                    Edit salah satu barang, ubah Supplier-nya, lalu simpan.
                    Pastikan perubahan tersimpan.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-500">
                  <div className="font-bold text-gray-800 mb-2">
                    4. Test Show (Detail Barang)
                  </div>
                  <p className="text-sm text-gray-700">
                    Klik detail barang, pastikan informasi Supplier ditampilkan
                    dengan benar.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-gray-800 mb-1">
                      💡 Tips Troubleshooting
                    </p>
                    <p className="text-sm text-gray-700">
                      Jika ada error, cek:
                    </p>
                    <ul className="text-sm text-gray-700 ml-4 mt-1 space-y-1">
                      <li>
                        • Apakah migration sudah di-run dengan{" "}
                        <code className="bg-gray-100 px-1 rounded">
                          migrate:fresh
                        </code>
                        ?
                      </li>
                      <li>
                        • Apakah 'supplier' sudah ada di{" "}
                        <code className="bg-gray-100 px-1 rounded">
                          $fillable
                        </code>{" "}
                        Model?
                      </li>
                      <li>• Apakah validasi di Controller sudah benar?</li>
                      <li>
                        • Apakah semua 4 view (index, create, edit, show) sudah
                        diupdate?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 3: Quiz */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Brain className="w-6 h-6" />
                  Part 3: Quiz Pemahaman
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                Test pemahamanmu dengan menjawab 5 pertanyaan berikut. Jawab
                semua pertanyaan, lalu klik tombol{" "}
                <strong>"Submit Jawaban"</strong> untuk melihat hasilnya!
              </p>

              <div className="space-y-6 mb-8">
                {quizData.map((q) => (
                  <QuizQuestion
                    key={q.number}
                    {...q}
                    userAnswer={quizAnswers[q.number] || null}
                    onAnswer={handleAnswer}
                  />
                ))}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mb-8">
                <button
                  onClick={handleSubmitQuiz}
                  disabled={!allQuestionsAnswered || quizSubmitted}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all transform ${
                    allQuestionsAnswered && !quizSubmitted
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 shadow-xl hover:shadow-2xl"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {quizSubmitted ? "✓ Sudah Dinilai" : "Submit Jawaban"}
                </button>
              </div>

              {/* Quiz Result */}
              {quizSubmitted && (
                <div id="quiz-result" className="space-y-6">
                  <div
                    className={`rounded-2xl p-8 text-center ${
                      score >= 4
                        ? "bg-gradient-to-r from-green-500 to-emerald-600"
                        : score === 3
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                        : "bg-gradient-to-r from-orange-500 to-red-600"
                    } text-white shadow-2xl`}
                  >
                    <div className="inline-block p-4 bg-white/20 rounded-2xl mb-4">
                      {score >= 4 ? (
                        <Trophy className="w-16 h-16" />
                      ) : score === 3 ? (
                        <Award className="w-16 h-16" />
                      ) : (
                        <Target className="w-16 h-16" />
                      )}
                    </div>

                    <h3 className="text-3xl font-bold mb-2">
                      Nilai Kamu: {score} / {quizData.length}
                    </h3>

                    <p className="text-xl mb-4">
                      {score >= 4 &&
                        "🎉 Excellent! Kamu menguasai materi dengan sangat baik!"}
                      {score === 3 && "👍 Good Job! Pemahaman kamu cukup baik!"}
                      {score <= 2 && "📚 Keep Learning! Review materi lagi ya!"}
                    </p>

                    <div className="bg-white/20 rounded-xl p-4 max-w-md mx-auto">
                      <div className="text-sm mb-2">Persentase Benar</div>
                      <div className="text-4xl font-bold">
                        {Math.round((score / quizData.length) * 100)}%
                      </div>
                    </div>
                  </div>

                  {/* Feedback per kategori nilai */}
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3">
                      💡 Rekomendasi:
                    </h4>
                    {score >= 4 && (
                      <p className="text-gray-700">
                        Mantap! Kamu sudah siap untuk project Laravel
                        berikutnya. Coba explore fitur Laravel lainnya seperti
                        Middleware, Authentication, atau API Development!
                      </p>
                    )}
                    {score === 3 && (
                      <p className="text-gray-700">
                        Pemahaman kamu sudah cukup bagus! Review lagi materi
                        yang masih kurang, terutama tentang alur kerja
                        Migration, Model, dan Controller. Practice makes
                        perfect!
                      </p>
                    )}
                    {score <= 2 && (
                      <p className="text-gray-700">
                        Jangan menyerah! Baca ulang materi dari Bab 1-7, lalu
                        coba kerjakan challenge ini lagi. Fokus pada konsep
                        dasar MVC dan alur CRUD. Kamu pasti bisa!
                      </p>
                    )}
                  </div>

                  {/* Try Again Button */}
                  <div className="text-center">
                    <button
                      onClick={() => {
                        window.location.reload(); // restart halaman sepenuhnya
                      }}
                      className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-semibold"
                    >
                      🔄 Coba Lagi
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Penutup */}
            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-8 shadow-2xl text-white">
              <div className="text-center">
                <div className="inline-block p-4 bg-white/20 rounded-2xl mb-4">
                  <Trophy className="w-16 h-16" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  🎉 Selamat! Kamu Telah Menyelesaikan Modul Laravel CRUD!
                </h2>
                <p className="text-xl mb-6 text-amber-50">
                  Dari setup Laravel hingga challenge terakhir, kamu sudah
                  belajar banyak hal. Ini baru permulaan perjalananmu sebagai
                  Laravel Developer!
                </p>

                <div className="bg-white/10 backdrop-blur rounded-xl p-6 max-w-2xl mx-auto mb-6">
                  <h3 className="font-bold text-xl mb-3">
                    🚀 Yang Sudah Kamu Kuasai:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3 text-left text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Setup & Konfigurasi Laravel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Migration & Database</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Model & Eloquent ORM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Controller & Routes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Blade Templating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Form Validation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>CRUD Operations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>UI/UX dengan Tailwind</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-lg font-semibold">
                    Keep learning, keep coding! 💻✨
                  </p>
                  <Link
                    to="/module/laravel-crud"
                    className="inline-block px-8 py-4 bg-white text-amber-600 rounded-xl font-bold hover:bg-amber-50 transition-all transform hover:scale-105 shadow-xl"
                  >
                    Kembali ke Daftar Modul
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
