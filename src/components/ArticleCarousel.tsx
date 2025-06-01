import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays } from 'lucide-react';

type Article = {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  category: string;
  url: string;
};

const articles: Article[] = [
  {
    id: '1',
    title: 'Penemuan Spesies Baru Orangutan di Hutan Kalimantan',
    excerpt: 'Tim peneliti dari Universitas Indonesia menemukan sub-spesies baru orangutan di pedalaman hutan Kalimantan.',
    thumbnail: '/images/news1.jpg',
    date: '15 Juni 2025',
    category: 'Satwa Langka',
    url: 'https://www.wwf.id/spesies/orangutan'
  },
  {
    id: '2',
    title: 'Program Rehabilitasi Harimau Sumatera Mencapai Tonggak Penting',
    excerpt: 'Program rehabilitasi harimau Sumatera berhasil meningkatkan populasi harimau di Taman Nasional Kerinci Seblat.',
    thumbnail: '/images/news3.jpg',
    date: '10 April 2025',
    category: 'Konservasi',
    url: 'https://www.wwf.id/spesies/harimau-sumatera'
  },
  {
    id: '3',
    title: 'Aksi Bersih Pantai Selamatkan 200 Sarang Penyu',
    excerpt: 'Relawan dari berbagai komunitas lingkungan mengadakan aksi bersih pantai yang berhasil menyelamatkan ratusan sarang penyu.',
    thumbnail: '/images/news2.jpg',
    date: '27 Mei 2025',
    category: 'Lingkungan',
    url: 'https://www.wwf.id/spesies/penyu'
  }
];

const ArticleCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number>();

  const resetAutoSlideTimer = useCallback(() => {
    // Reset timer by clearing and setting up a new interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 5000);
  }, []);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
      setTimeout(() => setIsAnimating(false), 500);
      resetAutoSlideTimer();
    }
  }, [isAnimating, resetAutoSlideTimer]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
      setTimeout(() => setIsAnimating(false), 500);
      resetAutoSlideTimer();
    }
  }, [isAnimating, resetAutoSlideTimer]);

  useEffect(() => {
    // Initial setup of auto-slide timer
    resetAutoSlideTimer();

    // Cleanup on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetAutoSlideTimer]);

  return (
    <div className="relative w-full h-full bg-white rounded-xl overflow-hidden">
      <div className="h-full">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-forest-600 text-white rounded-full text-sm">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-16">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                </div>
                <div>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <CalendarDays size={16} className="mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-forest-600 hover:text-forest-700"
                  >
                    Baca selengkapnya
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute right-16 top-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
        disabled={isAnimating}
      >
        <ArrowLeft className="h-5 w-5 text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
        disabled={isAnimating}
      >
        <ArrowRight className="h-5 w-5 text-gray-800" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {articles.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-forest-600 w-4' : 'bg-gray-300'
            }`}
            onClick={() => {
              setCurrentIndex(index);
              resetAutoSlideTimer();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleCarousel; 