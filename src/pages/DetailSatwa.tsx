
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, MapPin, AlertTriangle, Info, TrendingUp, TrendingDown, HeartHandshake, Leaf } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Animal } from '@/components/AnimalCard';

// Data dummy untuk satwa
const dummyAnimals: Animal[] = [
  {
    id: '1',
    name: 'Orangutan Kalimantan',
    latinName: 'Pongo pygmaeus',
    image: '/images/orangutan.jpg',
    status: 'Kritis',
    habitat: 'Hutan Hujan',
    location: 'Kalimantan',
    description: 'Orangutan Kalimantan adalah salah satu dari tiga spesies orangutan. Habitatnya mencakup dataran rendah dan pegunungan di pulau Borneo. Spesies ini sangat terancam oleh hilangnya habitat akibat deforestasi dan perburuan liar.'
  },
  {
    id: '2',
    name: 'Harimau Sumatera',
    latinName: 'Panthera tigris sumatrae',
    image: '/images/harimau.jpg',
    status: 'Kritis',
    habitat: 'Hutan Hujan',
    location: 'Sumatra',
    description: 'Harimau Sumatera adalah subspesies harimau yang hanya ditemukan di pulau Sumatera, Indonesia. Merupakan salah satu harimau terkecil, dengan ukuran jantan rata-rata sekitar 2.4 meter. Diperkirakan hanya tersisa sekitar 400 individu di alam liar.'
  },
  {
    id: '3',
    name: 'Badak Jawa',
    latinName: 'Rhinoceros sondaicus',
    image: '/images/badakjawa.jpg',
    status: 'Kritis',
    habitat: 'Hutan Hujan',
    location: 'Jawa',
    description: 'Badak Jawa adalah salah satu mamalia paling langka di dunia. Spesies ini memiliki satu cula dan kulit yang tampak seperti baju baja. Saat ini populasinya kurang dari 80 individu, yang sebagian besar terdapat di Taman Nasional Ujung Kulon.'
  },
];

// Data tambahan detail satwa
type AnimalDetail = {
  id: string;
  estimatedPopulation: string;
  populationTrend: 'naik' | 'stabil' | 'turun';
  weight: string;
  size: string;
  lifespan: string;
  diet: string;
  threats: string[];
  protectionStatus: string;
  conservationEfforts: string[];
  funFacts: string[];
  images: string[];
};

const dummyAnimalDetails: Record<string, AnimalDetail> = {
  '1': {
    id: '1',
    estimatedPopulation: '100,000 - 150,000 individu',
    populationTrend: 'turun',
    weight: '50 - 100 kg',
    size: 'Tinggi 1.2 - 1.4 m',
    lifespan: '30 - 40 tahun di alam liar',
    diet: 'Buah-buahan, daun, kulit kayu, serangga',
    threats: [
      'Deforestasi untuk perkebunan kelapa sawit',
      'Perburuan liar',
      'Perdagangan ilegal satwa liar',
      'Kebakaran hutan'
    ],
    protectionStatus: 'Dilindungi oleh UU No. 5 Tahun 1990 dan PP No. 7 Tahun 1999',
    conservationEfforts: [
      'Program rehabilitasi dan reintroduksi',
      'Perlindungan habitat di Taman Nasional',
      'Pendidikan masyarakat',
      'Patroli anti-perburuan'
    ],
    funFacts: [
      'Orangutan adalah kera besar satu-satunya yang hidup di Asia',
      'Mereka menghabiskan 90% waktu mereka di atas pohon',
      'Orangutan membuat sarang baru setiap malam untuk tidur',
      'Jantan dewasa memiliki bantalan pipi yang khas'
    ],
    images: [
      '/images/orangutan1.jpg',
      '/images/orangutan2.jpg',
      '/images/orangutan3.jpg'
    ]
  },
  '2': {
    id: '2',
    estimatedPopulation: 'Kurang dari 400 individu',
    populationTrend: 'turun',
    weight: '100 - 140 kg',
    size: 'Panjang tubuh 2.2 - 2.4 m',
    lifespan: '15 - 20 tahun di alam liar',
    diet: 'Karnivora: rusa, babi hutan, kancil',
    threats: [
      'Hilangnya habitat akibat deforestasi',
      'Perburuan untuk perdagangan bagian tubuh',
      'Konflik dengan manusia',
      'Penurunan jumlah mangsa'
    ],
    protectionStatus: 'Dilindungi oleh UU No. 5 Tahun 1990 dan masuk dalam Appendix I CITES',
    conservationEfforts: [
      'Patroli anti-perburuan',
      'Pemantauan populasi dengan kamera trap',
      'Koridor habitat untuk menghubungkan populasi terisolasi',
      'Program mitigasi konflik manusia-harimau'
    ],
    funFacts: [
      'Harimau Sumatera adalah subspesies harimau terkecil yang masih hidup',
      'Mereka adalah perenang yang handal',
      'Setiap harimau memiliki pola belang yang unik seperti sidik jari manusia',
      'Harimau dapat melompat sejauh 10 meter'
    ],
    images: [
      '/images/harimau1.jpg',
      '/images/harimau2.jpg',
      '/images/harimau3.jpg'
    ]
  },
  '3': {
    id: '3',
    estimatedPopulation: 'Kurang dari 80 individu',
    populationTrend: 'stabil',
    weight: '1,600 - 2,300 kg',
    size: 'Panjang tubuh 3.1 - 3.2 m',
    lifespan: '30 - 45 tahun',
    diet: 'Herbivora: dedaunan, ranting, buah jatuh',
    threats: [
      'Populasi kecil dan terisolasi',
      'Potensi inbreeding',
      'Perburuan cula untuk pengobatan tradisional',
      'Hilangnya habitat akibat aktivitas manusia'
    ],
    protectionStatus: 'Dilindungi penuh oleh undang-undang Indonesia dan internasional',
    conservationEfforts: [
      'Patroli keamanan 24 jam di Taman Nasional Ujung Kulon',
      'Program pemantauan berkelanjutan',
      'Pembersihan invasive species Arenga palm',
      'Studi genetik dan reproduksi'
    ],
    funFacts: [
      'Badak Jawa adalah salah satu mamalia paling langka di dunia',
      'Mereka hanya memiliki satu cula, tidak seperti badak lainnya',
      'Kulitnya tampak seperti baju baja dengan lipatan-lipatan khas',
      'Meskipun besar, badak Jawa adalah hewan pemalu dan penghindari manusia'
    ],
    images: [
      '/images/badakjawa1.jpg',
      '/images/badakjawa2.jpg',
      '/images/badakjawa3.jpg'
    ]
  }
};

const statusColors = {
  'Kritis': 'bg-red-100 text-red-800',
  'Terancam': 'bg-orange-100 text-orange-800',
  'Rentan': 'bg-yellow-100 text-yellow-800',
  'Hampir Terancam': 'bg-blue-100 text-blue-800',
};

const trendColors = {
  'naik': 'text-green-600',
  'stabil': 'text-yellow-600',
  'turun': 'text-red-600'
};

const trendIcons = {
  'naik': <TrendingUp size={18} className="text-green-600" />,
  'stabil': <Info size={18} className="text-yellow-600" />,
  'turun': <TrendingDown size={18} className="text-red-600" />
};

const DetailSatwa = () => {
  const { id } = useParams<{ id: string }>();
  
  // Temukan data satwa berdasarkan ID
  const animal = dummyAnimals.find(animal => animal.id === id);
  const animalDetail = id ? dummyAnimalDetails[id] : undefined;
  
  if (!animal || !animalDetail) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-6 py-24 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Satwa tidak ditemukan</h2>
          <p className="text-gray-600 mb-8">Maaf, informasi satwa yang Anda cari tidak tersedia.</p>
          <Link to="/galeri" className="inline-flex items-center px-6 py-3 bg-forest-600 text-white font-medium rounded-full hover:bg-forest-700 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Kembali ke Galeri
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleDonateClick = () => {
    alert(`Terima kasih atas keinginan Anda untuk mendukung konservasi ${animal.name}!`);
  };

  const handleAdoptClick = () => {
    alert(`Terima kasih telah tertarik dengan program adopsi virtual untuk ${animal.name}!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center mb-8">
            <Link to="/galeri" className="flex items-center text-gray-600 hover:text-forest-600 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              <span>Kembali ke Galeri</span>
            </Link>
            
            <span className={`text-sm font-medium px-3 py-1 rounded-full inline-flex items-center ${statusColors[animal.status]}`}>
              <AlertTriangle size={14} className="mr-1" />
              {animal.status}
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="aspect-square overflow-hidden rounded-xl">
              <img 
                src={animal.image} 
                alt={animal.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="mb-6">
                <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">{animal.name}</h1>
                <p className="text-xl italic text-gray-500">{animal.latinName}</p>
              </div>
              
              <div className="flex items-center mb-6 space-x-4">
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-1 text-forest-600" />
                  <span>{animal.location}, Indonesia</span>
                </div>
                
                <div className="flex items-center">
                  {trendIcons[animalDetail.populationTrend]}
                  <span className={`ml-1 ${trendColors[animalDetail.populationTrend]}`}>
                    Populasi {animalDetail.populationTrend === 'naik' ? 'meningkat' : animalDetail.populationTrend === 'stabil' ? 'stabil' : 'menurun'}
                  </span>
                </div>
              </div>
              
              <div className="prose prose-lg text-gray-700 mb-8">
                <p>{animal.description}</p>
                <p>
                  Dengan populasi yang diperkirakan sekitar {animalDetail.estimatedPopulation}, status konservasi {animal.name} saat ini adalah <strong>{animal.status}</strong>. Berbagai upaya konservasi telah dilakukan untuk menyelamatkan spesies ini dari kepunahan.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Berat</h3>
                  <p className="text-lg font-medium">{animalDetail.weight}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Ukuran</h3>
                  <p className="text-lg font-medium">{animalDetail.size}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Umur</h3>
                  <p className="text-lg font-medium">{animalDetail.lifespan}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Makanan</h3>
                  <p className="text-lg font-medium">{animalDetail.diet}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button 
                  className="bg-forest-600 hover:bg-forest-700 text-white px-6 py-3 rounded-full flex items-center transition-colors"
                  onClick={handleDonateClick}
                >
                  <HeartHandshake className="mr-2 h-5 w-5" />
                  Dukung Konservasi
                </button>
                <button 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full flex items-center transition-colors"
                  onClick={handleAdoptClick}
                >
                  <Leaf className="mr-2 h-5 w-5" />
                  Program Adopsi Virtual
                </button>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Galeri {animal.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {animalDetail.images.map((image, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img 
                    src={image} 
                    alt={`${animal.name} ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ancaman</h2>
              <ul className="space-y-4">
                {animalDetail.threats.map((threat, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-red-100 text-red-800 p-1 rounded-full mr-3 mt-1">
                      <AlertTriangle size={14} />
                    </span>
                    <span className="text-gray-700">{threat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upaya Konservasi</h2>
              <ul className="space-y-4">
                {animalDetail.conservationEfforts.map((effort, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-green-100 text-green-800 p-1 rounded-full mr-3 mt-1">
                      <Leaf size={14} />
                    </span>
                    <span className="text-gray-700">{effort}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fakta Menarik</h2>
            <div className="bg-gray-100 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {animalDetail.funFacts.map((fact, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3 mt-1">
                        <Info size={14} />
                      </span>
                      <span className="text-gray-700">{fact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DetailSatwa;
