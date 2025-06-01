import React from 'react';
import { ArrowRight, AlertTriangle, TrendingDown, ShieldAlert, Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArticleCarousel from './ArticleCarousel';

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
          <div className="bg-gray-100 rounded-xl p-6 relative group hover:shadow-xl transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <Link 
                to="/login" 
                className="bg-white p-2 rounded-md inline-flex hover:bg-gray-50 transition-colors"
              >
                <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </Link>
              <span className="text-sm text-gray-500">2025</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Gabung Komunitas</h3>
            <p className="text-lg font-medium text-forest-600 mb-6">Bergabunglah dengan ribuan relawan konservasi</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <Users className="w-6 h-6 text-forest-600 mb-2" />
                <p className="text-2xl font-bold text-gray-900">1000+</p>
                <p className="text-sm text-gray-600">Relawan Aktif</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <Target className="w-6 h-6 text-forest-600 mb-2" />
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-600">Program</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-forest-600" />
                <p className="font-medium text-gray-900">Manfaat Bergabung</p>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Akses ke program konservasi eksklusif</li>
                <li>• Pelatihan dan sertifikasi relawan</li>
                <li>• Jaringan komunitas konservasi</li>
              </ul>
            </div>
          </div>

          <div className="bg-forest-100 rounded-xl p-6 relative hover:shadow-xl transition-all duration-300">
            <div className="mb-3">
              <h3 className="text-2xl font-bold">Spesies Terancam</h3>
              <p className="text-gray-600">Status konservasi di Indonesia</p>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="text-8xl font-bold text-forest-600">300<span className="text-3xl">+</span></div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg text-center">
                <AlertTriangle className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Kritis</p>
                <p className="text-2xl font-bold text-red-500">68</p>
                <p className="text-xs text-gray-500 mt-1">Butuh aksi segera</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <TrendingDown className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Terancam</p>
                <p className="text-2xl font-bold text-orange-500">127</p>
                <p className="text-xs text-gray-500 mt-1">Populasi menurun</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <ShieldAlert className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Rentan</p>
                <p className="text-2xl font-bold text-yellow-500">105</p>
                <p className="text-xs text-gray-500 mt-1">Perlu perlindungan</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600 mb-2">Distribusi Habitat</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Hutan Tropis</span>
                  <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-forest-600"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Laut & Pesisir</span>
                  <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-forest-600"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pegunungan</span>
                  <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-forest-600"></div>
            </div>
          </div>
              </div>
            </div>
            <div className="text-center mt-auto">
              <Link to="/galeri" className="text-forest-600 font-medium hover:text-forest-700 inline-flex items-center">
                Lihat Detail
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <ArticleCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
