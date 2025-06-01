import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, User, Clock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  date: string;
  author: string;
  readTime: string;
  category: 'Konservasi' | 'Satwa Langka' | 'Lingkungan' | 'Event';
  views: number;
  url: string;
};

const articles: Article[] = [
  {
    id: '1',
    title: 'Penemuan Spesies Baru Orangutan di Hutan Kalimantan',
    excerpt: 'Tim peneliti dari Universitas Indonesia menemukan sub-spesies baru orangutan di pedalaman hutan Kalimantan yang belum pernah didokumentasikan sebelumnya.',
    content: '',
    thumbnail: '/images/news1.jpg',
    date: '15 Juni 2025',
    author: 'Dr. Andi Wijaya',
    readTime: '5 menit',
    category: 'Satwa Langka',
    views: 1250,
    url: 'https://www.wwf.id/spesies/orangutan'
  },
  {
    id: '2',
    title: 'Program Rehabilitasi Harimau Sumatera Mencapai Tonggak Penting',
    excerpt: 'Program rehabilitasi harimau Sumatera yang dijalankan selama lima tahun terakhir telah berhasil meningkatkan populasi harimau di Taman Nasional Kerinci Seblat sebesar 15%.',
    content: '',
    thumbnail: '/images/news2.jpg',
    date: '27 Mei 2025',
    author: 'Budi Santoso',
    readTime: '8 menit',
    category: 'Konservasi',
    views: 2340,
    url: 'https://www.wwf.id/spesies/harimau-sumatera'
  },
  {
    id: '3',
    title: 'Aksi Bersih Pantai Selamatkan 200 Sarang Penyu',
    excerpt: 'Relawan dari berbagai komunitas lingkungan mengadakan aksi bersih pantai yang berhasil menyelamatkan ratusan sarang penyu dari ancaman sampah plastik.',
    content: '',
    thumbnail: '/images/news3.jpg',
    date: '10 April 2025',
    author: 'Maya Putri',
    readTime: '6 menit',
    category: 'Lingkungan',
    views: 1876,
    url: 'https://www.wwf.id/spesies/penyu'
  },
  {
    id: '4',
    title: 'Festival Konservasi Nasional 2023 Digelar di Jakarta',
    excerpt: 'Festival tahunan yang mengangkat isu konservasi satwa langka akan digelar di Jakarta pada bulan Agustus mendatang dengan tema "Bertindak Sekarang untuk Masa Depan".',
    content: '',
    thumbnail: '/images/news4.jpg',
    date: '20 Maret 2025',
    author: 'Reza Akbar',
    readTime: '4 menit',
    category: 'Event',
    views: 3210,
    url: 'https://www.wwf.id/berita/festival-konservasi-nasional'
  },
  {
    id: '5',
    title: 'Kebijakan Baru Perlindungan Hutan Mangrove Disahkan',
    excerpt: 'Pemerintah mengesahkan kebijakan baru yang memperkuat perlindungan terhadap ekosistem mangrove, habitat penting bagi berbagai spesies satwa langka.',
    content: '',
    thumbnail: '/images/news5.jpg',
    date: '5 Februari 2025',
    author: 'Dr. Raisa Andini',
    readTime: '7 menit',
    category: 'Lingkungan',
    views: 1560,
    url: 'https://www.wwf.id/berita/perlindungan-mangrove'
  },
  {
    id: '6',
    title: 'Burung Jalak Bali Terbang Bebas Kembali di Habitat Aslinya',
    excerpt: 'Upaya pelepasliaran 25 ekor burung Jalak Bali hasil penangkaran berhasil dilakukan di Taman Nasional Bali Barat, memberikan harapan baru bagi spesies yang nyaris punah ini.',
    content: '',
    thumbnail: '/images/news6.jpg',
    date: '17 Januari 2025',
    author: 'Indra Cahyono',
    readTime: '5 menit',
    category: 'Satwa Langka',
    views: 2780,
    url: 'https://www.wwf.id/spesies/jalak-bali'
  }
];

const categoryColors = {
  'Konservasi': 'bg-blue-100 text-blue-800',
  'Satwa Langka': 'bg-green-100 text-green-800',
  'Lingkungan': 'bg-forest-100 text-forest-800',
  'Event': 'bg-orange-100 text-orange-800'
};

const Artikel = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [shuffledArticles, setShuffledArticles] = useState<Article[]>([]);
  
  useEffect(() => {
    // Shuffle articles when component mounts
    const shuffled = [...articles].sort(() => Math.random() - 0.5);
    setShuffledArticles(shuffled);
  }, []);
  
  const filteredArticles = activeCategory 
    ? articles.filter(article => article.category === activeCategory)
    : articles;

  const handleCategoryFilter = (category: string | null) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih telah berlangganan newsletter dengan email: ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Artikel & Berita</h2>
            <p className="text-lg text-gray-600">
              Kumpulan berita terbaru seputar konservasi satwa langka, lingkungan, dan berbagai upaya pelestarian alam Indonesia.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <button 
              className={`${activeCategory === null ? 'bg-forest-600 text-white' : 'bg-white text-gray-700'} px-4 py-2 rounded-full font-medium hover:bg-forest-700 hover:text-white transition-colors`}
              onClick={() => handleCategoryFilter(null)}
            >
              Semua
            </button>
            <button 
              className={`${activeCategory === 'Konservasi' ? 'bg-forest-600 text-white' : 'bg-white text-gray-700'} px-4 py-2 rounded-full font-medium hover:bg-forest-700 hover:text-white transition-colors`}
              onClick={() => handleCategoryFilter('Konservasi')}
            >
              Konservasi
            </button>
            <button 
              className={`${activeCategory === 'Satwa Langka' ? 'bg-forest-600 text-white' : 'bg-white text-gray-700'} px-4 py-2 rounded-full font-medium hover:bg-forest-700 hover:text-white transition-colors`}
              onClick={() => handleCategoryFilter('Satwa Langka')}
            >
              Satwa Langka
            </button>
            <button 
              className={`${activeCategory === 'Lingkungan' ? 'bg-forest-600 text-white' : 'bg-white text-gray-700'} px-4 py-2 rounded-full font-medium hover:bg-forest-700 hover:text-white transition-colors`}
              onClick={() => handleCategoryFilter('Lingkungan')}
            >
              Lingkungan
            </button>
            <button 
              className={`${activeCategory === 'Event' ? 'bg-forest-600 text-white' : 'bg-white text-gray-700'} px-4 py-2 rounded-full font-medium hover:bg-forest-700 hover:text-white transition-colors`}
              onClick={() => handleCategoryFilter('Event')}
            >
              Event
            </button>
          </div>
          
          {/* Featured Article - Only show when no category is selected */}
          {!activeCategory && (
          <div className="mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1 overflow-hidden">
                  <img 
                      src={shuffledArticles[0]?.thumbnail || '/images/beritabadak.jpg'} 
                      alt={shuffledArticles[0]?.title || 'Highlight Article'} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                  <div className="lg:col-span-2 p-8">
                  <div className="mb-3">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">
                      Highlight
                    </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ml-2 ${categoryColors[shuffledArticles[0]?.category || 'Konservasi']}`}>
                        {shuffledArticles[0]?.category || 'Konservasi'}
                    </span>
                  </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {shuffledArticles[0]?.title || 'Loading...'}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {shuffledArticles[0]?.excerpt || 'Loading...'}
                    </p>
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <CalendarDays size={16} className="mr-1" />
                      <span className="mr-4">{shuffledArticles[0]?.date || 'Loading...'}</span>
                    <User size={16} className="mr-1" />
                      <span className="mr-4">{shuffledArticles[0]?.author || 'Loading...'}</span>
                    <Clock size={16} className="mr-1" />
                      <span>{shuffledArticles[0]?.readTime || 'Loading...'}</span>
                  </div>
                    <a 
                      href={shuffledArticles[0]?.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                    className="bg-forest-600 hover:bg-forest-700 text-white px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center"
                  >
                    Baca Selengkapnya
                    <ArrowRight size={18} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredArticles.map((article) => (
              <div 
                key={article.id} 
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={article.thumbnail} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  
                  <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                    <div className="flex items-center">
                      <CalendarDays size={16} className="mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-600 text-sm">
                      <User size={16} className="mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Eye size={16} className="mr-1" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 mt-4 pt-4">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-forest-600 font-medium hover:text-forest-700 transition-colors"
                    >
                      Baca Selengkapnya
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination - Only show if there are more than 6 articles */}
          {filteredArticles.length > 6 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button 
                  className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ArrowLeft size={18} />
              </button>
                {[...Array(Math.ceil(filteredArticles.length / 6))].map((_, i) => (
              <button 
                    key={i}
                    className={`w-10 h-10 ${currentPage === i + 1 ? 'bg-forest-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'} rounded-full flex items-center justify-center`}
                    onClick={() => setCurrentPage(i + 1)}
              >
                    {i + 1}
              </button>
                ))}
              <button 
                  className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                  onClick={() => setCurrentPage(Math.min(Math.ceil(filteredArticles.length / 6), currentPage + 1))}
                  disabled={currentPage === Math.ceil(filteredArticles.length / 6)}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          )}
    
        </div>
      </section>
    </div>
  );
};

export default Artikel;
