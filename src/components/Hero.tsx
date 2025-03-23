
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Melindungi <span className="relative inline-block">
              <span className="relative z-10">Masa Depan</span>
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-forest-100" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,0 Q50,20 100,0" fill="currentColor"></path>
              </svg>
            </span> Satwa Langka Indonesia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Platform database interaktif dan edukasi tentang satwa langka Indonesia.
            Mari bersama menjaga warisan alam kita untuk generasi mendatang.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/galeri" className="px-8 py-3 bg-forest-600 text-white font-medium rounded-full flex items-center gap-2 hover:bg-forest-700 transition-colors">
              Jelajahi Galeri
              <ArrowRight size={18} />
            </Link>
            <Link to="/konservasi" className="px-8 py-3 bg-gray-100 text-gray-800 font-medium rounded-full hover:bg-gray-200 transition-colors">
              Program Konservasi
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-xl p-6 relative group hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="bg-white p-2 rounded-md inline-flex">
                <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-500">2023</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Gabung Komunitas</h3>
            <p className="text-lg font-medium text-forest-600">Bergabunglah dengan ribuan relawan konservasi</p>
          </div>

          <div className="bg-forest-100 rounded-xl p-6 relative">
            <div className="mb-3">
              <h3 className="text-2xl font-bold">Spesies Terancam</h3>
              <p className="text-gray-600">Status konservasi</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-8xl font-bold text-forest-600">300<span className="text-3xl">+</span></div>
            </div>
            <div className="mt-4 relative">
              <div className="h-16 bg-forest-200/50 rounded-md grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className="bg-forest-200/80 rounded" />
                ))}
              </div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-forest-800 rounded-full"></div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl overflow-hidden relative">
            <img 
              src="/images/news.jpg" 
              alt="Satwa Langka" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <div className="bg-black/50 text-white px-4 py-2 rounded-full w-max mb-4 backdrop-blur-sm">
                Artikel
              </div>
              <h3 className="text-xl font-bold text-white">Berita mengenai Pelestarian Satwa</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
