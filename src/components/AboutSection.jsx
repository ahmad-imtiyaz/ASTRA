import { useState } from "react";
import React from "react";

export default function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-3xl mx-auto"
        id="about"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
          <span className="text-2xl">🌟</span>
          Filosofi Program
        </h3>

        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          ASTRA lahir dari gagasan untuk membangun generasi{" "}
          <span className="font-bold text-blue-600">rising achievers</span>{" "}
          siswa-siswi yang tidak hanya mampu menggunakan teknologi, tetapi juga
          menguasainya. Melalui pelatihan keterampilan teknologi modern seperti
          pemrograman, desain, jaringan, internet produktif, dan literasi
          digital, program ini membantu sekolah mempersiapkan siswanya memasuki
          dunia yang serba digital.
        </p>

        {/* ✨ Drop-down smooth */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            showMore ? "max-h-[1200px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <div>
              <h4 className="font-bold text-gray-800 text-xl mb-2">
                Mengapa ASTRA Diciptakan?
              </h4>
              <p>
                Kami melihat banyak siswa memiliki potensi besar, namun belum
                mendapatkan kesempatan untuk mengenal teknologi secara lebih
                mendalam. Padahal, keterampilan digital adalah bekal penting
                yang akan mereka gunakan saat memasuki dunia kuliah maupun dunia
                kerja.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 text-xl mb-2">
                Misi Utama Program
              </h4>
              <p>
                ASTRA hadir untuk memberikan fondasi teknologi yang kuat, agar
                siswa mampu beradaptasi, berinovasi, dan bersaing di era modern.
                Program ini mengajak siswa untuk tidak hanya memahami teknologi,
                tetapi menggunakannya sebagai alat untuk menciptakan peluang
                baru, memecahkan masalah, dan membangun masa depan mereka.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 text-xl mb-2">
                Dampak yang Diharapkan
              </h4>
              <p>
                Dengan mengikuti ASTRA, siswa diharapkan dapat melihat teknologi
                sebagai peluang, bukan tantangan. Kami ingin membantu sekolah
                membangun generasi yang percaya diri, kritis, kreatif, dan siap
                menghadapi perkembangan zaman generasi{" "}
                <span className="font-bold text-blue-600">
                  rising achievers
                </span>{" "}
                yang sebenarnya.
              </p>
            </div>
          </div>
        </div>

        {/* Tombol toggle */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-200"
          >
            {showMore ? "Tutup" : "Pelajari Lebih Lanjut"}
          </button>
        </div>
      </div>

      {/* Tombol Jelajahi Modul */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#modules"
          className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Jelajahi Modul
        </a>
      </div>
    </>
  );
}
