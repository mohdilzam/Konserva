
import React, { useState } from 'react';
import { Info, MapPin, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export type Animal = {
  id: string;
  name: string;
  latinName: string;
  image: string;
  status: 'Kritis' | 'Terancam' | 'Rentan' | 'Hampir Terancam';
  habitat: string;
  location: string;
  description: string;
};

interface AnimalCardProps {
  animal: Animal;
}

const statusColors = {
  'Kritis': 'bg-red-100 text-red-800',
  'Terancam': 'bg-orange-100 text-orange-800',
  'Rentan': 'bg-yellow-100 text-yellow-800',
  'Hampir Terancam': 'bg-blue-100 text-blue-800',
};

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={animal.image}
          alt={animal.name}
          className={`w-full h-full object-cover transition-all duration-700 ${isImageLoaded ? 'scale-100' : 'scale-110'}`}
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full inline-flex items-center ${statusColors[animal.status]}`}>
            <AlertTriangle size={12} className="mr-1" />
            {animal.status}
          </span>
        </div>
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full shadow-sm hover:bg-white transition-colors"
        >
          <Info size={18} className="text-forest-700" />
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{animal.name}</h3>
            <p className="text-sm italic text-gray-500">{animal.latinName}</p>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin size={14} className="mr-1" />
          <span>{animal.location}</span>
        </div>
        
        {showDetails ? (
          <div className="mt-4 animate-fade-in">
            <h4 className="font-medium text-gray-900 mb-2">Tentang</h4>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">{animal.description}</p>
            
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="bg-gray-50 p-3 rounded-md">
                <h5 className="text-xs font-medium text-gray-500 mb-1">Habitat</h5>
                <p className="text-sm font-medium">{animal.habitat}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h5 className="text-xs font-medium text-gray-500 mb-1">Status Konservasi</h5>
                <p className="text-sm font-medium">{animal.status}</p>
              </div>
            </div>
            
            <Link 
              to={`/satwa/${animal.id}`}
              className="block w-full mt-4 py-2 bg-forest-600 text-white rounded-full hover:bg-forest-700 transition-colors text-sm font-medium text-center"
            >
              Lihat Detail Lengkap
            </Link>
          </div>
        ) : (
          <p className="text-sm text-gray-600 line-clamp-2">{animal.description}</p>
        )}
      </div>
    </div>
  );
};

export default AnimalCard;
