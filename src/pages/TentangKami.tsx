import React from 'react';
import { Target, Award, Heart } from 'lucide-react';

const TentangKami = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                Platform Konservasi Satwa Langka Indonesia
              </h2>
              <p className="text-lg text-gray-600">
                Konserva didirikan pada tahun 2010 dengan misi melindungi dan memulihkan populasi satwa langka Indonesia melalui pendekatan terpadu yang menggabungkan penelitian ilmiah, kerja sama masyarakat, dan edukasi publik.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Cerita Kami</h3>
                <p className="text-gray-600 mb-4">
                  Konserva berawal dari inisiatif sekelompok peneliti dan pecinta lingkungan yang prihatin dengan menurunnya populasi satwa langka Indonesia. Dengan semangat untuk melakukan perubahan nyata, mereka membentuk organisasi yang berfokus pada pendekatan konservasi berbasis ilmu pengetahuan dan keterlibatan masyarakat.
                </p>
                <p className="text-gray-600 mb-4">
                  Seiring berjalannya waktu, Konserva telah berkembang menjadi platform konservasi terkemuka yang bekerja sama dengan berbagai pemangku kepentingan, mulai dari masyarakat lokal hingga lembaga pemerintah dan organisasi internasional.
                </p>
                <p className="text-gray-600">
                  Kami percaya bahwa keberhasilan konservasi hanya mungkin terjadi ketika semua pihak bekerja bersama dengan pemahaman mendalam tentang ekosistem dan kebutuhan masyarakat yang hidup berdampingan dengan satwa langka.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/images/about1.jpg" 
                  alt="Tim Konserva di Lapangan" 
                  className="rounded-xl shadow-md"
                />
                <div className="absolute -bottom-6 -right-6 bg-forest-600 text-white p-4 rounded-xl shadow-lg w-32 h-32 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">15+</span>
                  <span className="text-sm text-center">Tahun Pengalaman</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="bg-forest-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Target className="text-forest-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visi Kami</h3>
                <p className="text-gray-600">
                  Mewujudkan Indonesia di mana manusia dan satwa hidup berdampingan secara harmonis, dengan populasi satwa langka yang stabil dan berkembang dalam habitatnya yang terlindungi.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="bg-forest-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Award className="text-forest-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Misi Kami</h3>
                <p className="text-gray-600">
                  Melindungi satwa langka Indonesia dan habitatnya melalui penelitian ilmiah, program konservasi terintegrasi, pendidikan, dan pemberdayaan masyarakat lokal untuk menjadi penjaga warisan alam.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="bg-forest-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Heart className="text-forest-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nilai-Nilai Kami</h3>
                <p className="text-gray-600">
                  Integritas, kolaborasi, inklusivitas, dan keberlanjutan adalah nilai-nilai inti yang memandu setiap aspek kerja kami dalam melestarikan keanekaragaman hayati Indonesia.
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
