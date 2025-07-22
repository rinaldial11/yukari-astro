import { Building2, Clock, TrendingUp, User } from "lucide-react";

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                PT. MULTI GENERASI
                <span className="block text-blue-200">INDONESIA</span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                マルチ ジェネラシ インドネシア (株式会社)
              </p>
              <p className="text-lg mb-8 text-blue-50 leading-relaxed">
                Menjalin kemitraan dengan perusahaan Jepang untuk membuka akses
                karier bagi generasi Indonesia. We Value People.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/programs"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Lihat Program
                </a>
                <a
                  href="/apply"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496130103-a442a3754d0e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fGJsdWV8MTc1MzAyNzk1OXww&ixlib=rb-4.1.0&q=85"
                alt="Professional Training"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-blue-500">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg> */}
                <User className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold">1000+</h3>
              <p className="text-blue-200">Peserta</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg> */}
                <TrendingUp className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold">95%</h3>
              <p className="text-blue-200">Tingkat Keberhasilan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg> */}
                <Building2 className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold">50+</h3>
              <p className="text-blue-200">Perusahaan Partner</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg> */}
                <Clock className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold">5+</h3>
              <p className="text-blue-200">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Programs Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program <span className="text-blue-600">Terpopuler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan program yang sesuai dengan minat dan keahlian Anda untuk
              berkarir di Jepang
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573497619860-6d82917e4ec8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMGNsYXNzcm9vbXxlbnwwfHx8Ymx1ZXwxNzUzMDI3OTY2fDA&ixlib=rb-4.1.0&q=85"
                alt="Student Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Student Program
                </h3>
                <p className="text-gray-600 mb-6">
                  留学サポート - Program dukungan studi di Jepang dengan
                  bimbingan lengkap.
                </p>
                <a
                  href="/programs/student"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Pelajari →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581093059756-acf6718c0ab1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxlbmdpbmVlcmluZyUyMHdvcmtlcnN8ZW58MHx8fGJsdWV8MTc1MzAyNzk4MXww&ixlib=rb-4.1.0&q=85"
                alt="Professional Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Professional
                </h3>
                <p className="text-gray-600 mb-6">
                  技術・人文知識・国際業務 - Program untuk profesional dengan
                  keahlian khusus.
                </p>
                <a
                  href="/programs/professional"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Pelajari →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1659354220856-481085fa9585?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwd29ya2Vyc3xlbnwwfHx8Ymx1ZXwxNzUzMDI3OTk1fDA&ixlib=rb-4.1.0&q=85"
                alt="SSW Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  SSW Program
                </h3>
                <p className="text-gray-600 mb-6">
                  特定技能 - Specified Skilled Worker untuk pekerja terampil.
                </p>
                <a
                  href="/programs/ssw"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Pelajari →
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/programs"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg"
            >
              Lihat Semua Program
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
