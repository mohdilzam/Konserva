
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <span className="font-display font-bold text-2xl text-gray-900">Konserva</span>
            </div>
            <p className="text-gray-600 mb-6">
              Platform konservasi satwa langka Indonesia dengan misi melindungi keanekaragaman hayati dan ekosistem untuk generasi mendatang.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors">
                <Instagram size={20} className="text-gray-700" />
              </a>
              <a href="#" className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors">
                <Twitter size={20} className="text-gray-700" />
              </a>
              <a href="#" className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors">
                <Facebook size={20} className="text-gray-700" />
              </a>
              <a href="#" className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors">
                <Youtube size={20} className="text-gray-700" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-xl mb-6">Tautan</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-600 hover:text-forest-600 transition-colors">Beranda</Link></li>
              <li><Link to="/galeri" className="text-gray-600 hover:text-forest-600 transition-colors">Galeri Satwa</Link></li>
              <li><Link to="/konservasi" className="text-gray-600 hover:text-forest-600 transition-colors">Program Konservasi</Link></li>
              <li><Link to="/artikel" className="text-gray-600 hover:text-forest-600 transition-colors">Artikel</Link></li>
              <li><Link to="/tentang" className="text-gray-600 hover:text-forest-600 transition-colors">Tentang Kami</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-xl mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-forest-600 flex-shrink-0" />
                <span className="text-gray-600">Jl. Konservasi No. 28, Jakarta Selatan, Indonesia, 12870</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-forest-600 flex-shrink-0" />
                <span className="text-gray-600">+62 21 8765 4321</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-forest-600 flex-shrink-0" />
                <span className="text-gray-600">info@konserva.id</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-xl mb-6">Langganan</h3>
            <p className="text-gray-600 mb-4">
              Dapatkan informasi terbaru tentang konservasi satwa langka Indonesia.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Alamat email Anda"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800 border border-gray-200"
                />
                <button
                  type="submit"
                  className="bg-forest-600 hover:bg-forest-700 px-4 py-2 rounded-r-md text-white transition-colors"
                >
                  Kirim
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              Dengan berlangganan, Anda setuju dengan kebijakan privasi kami.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Konserva. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
