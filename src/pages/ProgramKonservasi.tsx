import React from 'react';
import { ArrowLeft, ArrowRight, Users, Calendar, MapPin, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

// Tipe data untuk program konservasi
type Program = {
  id: string;
  title: string;
  image: string;
  location: string;
  date: string;
  participants: number;
  description: string;
  status: 'Aktif' | 'Selesai' | 'Akan Datang';
  articleUrl: string;
};

// Data dummy untuk program konservasi
const programs: Program[] = [
  {
    id: '1',
    title: 'Pemulihan Habitat Orangutan Kalimantan',
    image: '/images/artikel1.jpg',
    location: 'Taman Nasional Tanjung Puting, Kalimantan Tengah',
    date: 'Januari - Desember 2025',
    participants: 120,
    description: 'Program konservasi yang berfokus pada pemulihan habitat orangutan yang rusak akibat kebakaran hutan dan pertambangan ilegal. Kegiatan meliputi penanaman kembali pohon endemik, pemantauan populasi orangutan, dan edukasi masyarakat lokal.',
    status: 'Aktif',
    articleUrl: 'https://www.wwf.id/spesies/orangutan'
  },
  {
    id: '2',
    title: 'Perlindungan Pesisir untuk Penyu',
    image: '/images/artikel2.jpg',
    location: 'Pantai Sukamade, Taman Nasional Meru Betiri, Jawa Timur',
    date: 'Maret - Agustus 2024',
    participants: 85,
    description: 'Program perlindungan penyu yang berfokus pada pengamanan area bertelur penyu, pemindahan telur ke area yang lebih aman, dan pemantauan tukik hingga berhasil mencapai laut. Program ini juga melibatkan patroli pantai untuk mencegah perburuan telur penyu.',
    status: 'Selesai',
    articleUrl: 'https://www.wwf.id/spesies/penyu'
  },
  {
    id: '3',
    title: 'Konservasi Badak Jawa',
    image: '/images/artikel3.jpg',
    location: 'Taman Nasional Ujung Kulon, Banten',
    date: 'Januari 2023 - Desember 2025',
    participants: 50,
    description: 'Program jangka panjang untuk melindungi populasi badak Jawa yang tersisa. Kegiatan meliputi patroli anti-perburuan, pemantauan populasi menggunakan kamera trap, manajemen habitat, dan penelitian genetik untuk meningkatkan keragaman genetik populasi.',
    status: 'Aktif',
    articleUrl: 'https://www.wwf.id/spesies/badak-jawa'
  },
  {
    id: '4',
    title: 'Perlindungan Harimau Sumatera',
    image: '/images/artikel4.jpg',
    location: 'Taman Nasional Kerinci Seblat, Sumatera',
    date: 'Juli 2024 - Juli 2025',
    participants: 75,
    description: 'Program perlindungan harimau Sumatera melalui pendekatan kolaboratif dengan masyarakat lokal. Kegiatan meliputi patroli hutan berbasis masyarakat, resolusi konflik manusia-harimau, dan pengembangan ekowisata untuk memberikan alternatif ekonomi bagi masyarakat sekitar hutan.',
    status: 'Aktif',
    articleUrl: 'https://www.wwf.id/spesies/harimau-sumatera'
  },
  {
    id: '5',
    title: 'Konservasi Burung Cenderawasih',
    image: '/images/artikel5.jpg',
    location: 'Pegunungan Arfak, Papua Barat',
    date: 'September 2024 - Februari 2026',
    participants: 40,
    description: 'Program perlindungan burung cenderawasih dengan melibatkan masyarakat adat sebagai penjaga hutan. Kegiatan meliputi pemantauan populasi, pemetaan area display cenderawasih, dan pengembangan ekowisata yang berkelanjutan dan menghormati nilai-nilai adat.',
    status: 'Aktif',
    articleUrl: 'https://www.wwf.id/spesies/burung-cenderawasih'
  },
  {
    id: '6',
    title: 'Rehabilitasi Mangrove untuk Habitat Bekantan',
    image: '/images/artikel6.jpg',
    location: 'Delta Mahakam, Kalimantan Timur',
    date: 'April - November 2024',
    participants: 90,
    description: 'Program rehabilitasi ekosistem mangrove yang merupakan habitat penting bagi bekantan, monyet hidung panjang endemik Kalimantan. Kegiatan meliputi penanaman mangrove, pemantauan kualitas air, dan pengembangan silvofishery ramah lingkungan bersama masyarakat pesisir.',
    status: 'Selesai',
    articleUrl: 'https://www.wwf.id/spesies/bekantan'
  }
];

const statusColors = {
  'Aktif': 'bg-green-100 text-green-800',
  'Selesai': 'bg-gray-100 text-gray-800',
  'Akan Datang': 'bg-blue-100 text-blue-800',
};

const ProgramKonservasi = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Program Konservasi Satwa Langka</h2>
            <p className="text-lg text-gray-600">
              Berbagai program konservasi yang aktif kami jalankan untuk melindungi satwa langka Indonesia dan habitatnya.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {programs.map((program) => (
              <div 
                key={program.id} 
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[program.status]}`}>
                      {program.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="min-h-[4.5rem] mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                  </div>
                  
                  <div className="min-h-[8rem] mb-4">
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start text-gray-500 min-h-[3rem]">
                      <MapPin size={16} className="mr-2 text-forest-600 mt-1 flex-shrink-0" />
                      <span className="text-sm">{program.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 min-h-[1.5rem]">
                      <Calendar size={16} className="mr-2 text-forest-600 flex-shrink-0" />
                      <span className="text-sm">{program.date}</span>
                    </div>
                    <div className="flex items-center text-gray-500 min-h-[1.5rem]">
                      <Users size={16} className="mr-2 text-forest-600 flex-shrink-0" />
                      <span className="text-sm">{program.participants} Partisipan</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <a 
                      href={program.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest-600 font-medium hover:text-forest-700 transition-colors"
                    >
                      Lihat Detail
                    </a>
                    {program.status === "Aktif" && (
                      <a 
                        href="https://membership.wwf.id/id/berbagiruang/aceh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-forest-100 text-forest-700 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-forest-200 transition-colors"
                      >
                        <HeartHandshake size={16} className="mr-1" />
                        Berpartisipasi
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        
        </div>
      </section>
    </div>
  );
};

export default ProgramKonservasi;
