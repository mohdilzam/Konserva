
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section-padding" id="tentang">
      <div className="container px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden order-2 lg:order-1">
            <img 
              src="/images/about.jpg"
              alt="Tim Konserva"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <span className="text-white text-sm uppercase tracking-wider mb-2">Tim Kami</span>
              <h3 className="text-2xl font-bold text-white mb-4">Dedicated professionals working for a cause</h3>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Misi dan Visi Konserva</h2>
            <p className="text-lg text-gray-600 mb-6">
              Konserva didirikan pada tahun 2008 dengan tujuan melestarikan satwa langka Indonesia melalui pendekatan terpadu yang menggabungkan penelitian ilmiah, konservasi berbasis masyarakat, dan edukasi publik.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Kami percaya bahwa konservasi yang efektif terjadi ketika semua pemangku kepentingan, dari masyarakat lokal hingga pemerintah, bekerja sama untuk mencapai tujuan pelestarian. Dengan pendekatan kolaboratif ini, Konserva telah membantu melindungi beberapa spesies paling langka di Indonesia.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-3xl font-bold text-forest-600 mb-2">15+</h3>
                <p className="text-gray-600">Tahun Pengalaman</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-3xl font-bold text-forest-600 mb-2">50+</h3>
                <p className="text-gray-600">Program Konservasi</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-3xl font-bold text-forest-600 mb-2">100+</h3>
                <p className="text-gray-600">Mitra Kerja Sama</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-3xl font-bold text-forest-600 mb-2">1000+</h3>
                <p className="text-gray-600">Relawan Aktif</p>
              </div>
            </div>
            
            <Link to="/tentang" className="btn-primary inline-flex items-center">
              Lebih Lanjut Tentang Kami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
