import React from "react";
import { BookOpen, Code, Globe, Network, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import AboutSection from "../components/AboutSection";

// Data modul pembelajaran
const modules = [
  {
    id: "laravel-crud",
    title: "Laravel CRUD Dasar",
    description:
      "Pelajari fundamental Laravel dari instalasi hingga membuat aplikasi CRUD lengkap",
    category: "Backend Development",
    level: "Beginner",
    chapters: 8,
    duration: "4-6 jam",
    icon: Code,
    color: "from-sky-400 to-blue-500",
    tags: ["PHP", "Laravel", "Database", "MVC"],
  },
  {
    id: "coming-soon-1",
    title: "React Fundamental",
    description:
      "Coming soon - Membangun aplikasi web modern dengan React dan komponen reusable",
    category: "Frontend Development",
    level: "Beginner",
    chapters: 10,
    duration: "5-7 jam",
    icon: Globe,
    color: "from-cyan-400 to-blue-600",
    tags: ["JavaScript", "React", "Hooks"],
    comingSoon: true,
  },
  {
    id: "coming-soon-2",
    title: "Network Fundamental",
    description:
      "Coming soon - Dasar-dasar jaringan komputer dan protokol internet",
    category: "Networking",
    level: "Beginner",
    chapters: 6,
    duration: "3-4 jam",
    icon: Network,
    color: "from-blue-400 to-indigo-500",
    tags: ["Network", "TCP/IP", "DNS"],
    comingSoon: true,
  },
];

const ModuleCard = ({ module }) => {
  const Icon = module.icon;

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
        module.comingSoon ? "opacity-75" : ""
      }`}
    >
      {module.comingSoon && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full">
            COMING SOON
          </span>
        </div>
      )}

      <div className={`h-2 bg-gradient-to-r ${module.color}`}></div>

      <div className="p-6">
        <div
          className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${module.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {module.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {module.description}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-semibold rounded-full">
            {module.category}
          </span>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
            {module.level}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {module.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {module.chapters} Bab
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-4 h-4" />
              {module.duration}
            </span>
          </div>

          {!module.comingSoon && (
            <Link
              to={`/module/${module.id}`}
              className="block px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Mulai Belajar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  ASTRA
                </h1>
                <p className="text-xs text-gray-500">
                  Advanced Skills Training
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Beranda
              </a>
              <a
                href="#modules"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Modul
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Tentang
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-blue-100/50 to-indigo-100/50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Program Pelatihan Teknologi
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ASTRA
              </span>
            </h2>

            <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Advanced Skills Training for Rising Achievers
            </p>
          </div>
          <AboutSection />
        </div>
      </section>

      {/* Panggil komponen AboutSection di sini */}

      {/* Modules Section */}
      <section className="py-20" id="modules">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Modul Pembelajaran
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Pilih modul pembelajaran sesuai minat dan tingkat keahlianmu.
              Setiap modul dirancang untuk pembelajaran praktis dan aplikatif.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-700 to-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <h3 className="text-2xl font-bold">ASTRA</h3>
            </div>
            <p className="text-blue-200 mb-2">
              Advanced Skills Training for Rising Achievers
            </p>
            <p className="text-gray-300 text-sm">
              © 2025 ASTRA Program. Membangun generasi digital yang unggul.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
