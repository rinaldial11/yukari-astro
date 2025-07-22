import { useState } from "react";

function GalleryPage() {
  const galleryImages = [
    {
      category: "Classroom",
      title: "Ruang Kelas Modern",
      image:
        "https://images.unsplash.com/photo-1573497619860-6d82917e4ec8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMGNsYXNzcm9vbXxlbnwwfHx8Ymx1ZXwxNzUzMDI3OTY2fDA&ixlib=rb-4.1.0&q=85",
    },
    {
      category: "Training",
      title: "Pelatihan Bahasa Jepang",
      image:
        "https://images.unsplash.com/photo-1573497619860-6d82917e4ec8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMGNsYXNzcm9vbXxlbnwwfHx8Ymx1ZXwxNzUzMDI3OTY2fDA&ixlib=rb-4.1.0&q=85",
    },
    {
      category: "Students",
      title: "Peserta Program Student",
      image:
        "https://images.unsplash.com/photo-1573496130103-a442a3754d0e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fGJsdWV8MTc1MzAyNzk1OXww&ixlib=rb-4.1.0&q=85",
    },
    {
      category: "Professional",
      title: "Program Professional",
      image:
        "https://images.unsplash.com/photo-1581093059756-acf6718c0ab1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxlbmdpbmVlcmluZyUyMHdvcmtlcnN8ZW58MHx8fGJsdWV8MTc1MzAyNzk4MXww&ixlib=rb-4.1.0&q=85",
    },
    {
      category: "Healthcare",
      title: "Program Kesehatan",
      image:
        "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd29ya2Vyc3xlbnwwfHx8Ymx1ZXwxNzUzMDI3OTczfDA&ixlib=rb-4.1.0&q=85",
    },
    {
      category: "Construction",
      title: "Program Konstruksi",
      image:
        "https://images.unsplash.com/photo-1614127938540-a1139bee1841?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzfGVufDB8fHxibHVlfDE3NTMwMjc5ODh8MA&ixlib=rb-4.1.0&q=85",
    },
    {
      category: "Restaurant",
      title: "Program Restoran",
      image:
        "https://images.unsplash.com/photo-1659354220856-481085fa9585?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwd29ya2Vyc3xlbnwwfHx8Ymx1ZXwxNzUzMDI3OTk1fDA&ixlib=rb-4.1.0&q=85",
    },
    {
      category: "Agriculture",
      title: "Program Pertanian",
      image:
        "https://images.unsplash.com/photo-1604135849192-b08f647aace7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHdvcmtlcnN8ZW58MHx8fGJsdWV8MTc1MzAyODAwM3ww&ixlib=rb-4.1.0&q=85",
    },
    {
      category: "Manufacturing",
      title: "Program Manufaktur",
      image:
        "https://images.unsplash.com/photo-1718017670264-4d0497f8ac35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxhZ3JpY3VsdHVyZSUyMHdvcmtlcnN8ZW58MHx8fGJsdWV8MTc1MzAyODAwM3ww&ixlib=rb-4.1.0&q=85",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(galleryImages.map((img) => img.category))),
  ];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Lihat kegiatan dan fasilitas MUGEN Indonesia dalam mendukung
            perjalanan karier Anda ke Jepang
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-blue-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 gap-4 justify-between"
              >
                {/* IMAGE SECTION */}
                <div className="relative w-full h-1/2 aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* TEXT SECTION */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dokumentasi kegiatan dan fasilitas program{" "}
                    {item.category.toLowerCase()} di MUGEN Indonesia.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ingin Menjadi Bagian dari Kami?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan peserta yang telah sukses berkarir di
            Jepang
          </p>
          <a
            href="/apply"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
          >
            Daftar Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
