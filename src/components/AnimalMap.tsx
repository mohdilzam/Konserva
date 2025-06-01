import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '@/styles/map.css';
import { Animal } from '@/components/AnimalCard';
import L from 'leaflet';
import { MapPin } from 'lucide-react';

// Create a custom marker icon
const customIcon = new L.DivIcon({
  className: 'custom-marker',
  html: `<div class="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center text-white shadow-lg transform -translate-x-1/2 -translate-y-1/2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  </div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

// Define coordinates for each location
const locationCoordinates: Record<string, [number, number]> = {
  'Sumatra': [-0.5897, 101.3431],
  'Jawa': [-7.6145, 110.7122],
  'Kalimantan': [0.9619, 114.5548],
  'Sulawesi': [-2.5489, 118.0149],
  'Papua': [-4.2699, 138.0804],
  'Bali': [-8.3405, 115.0920],
  'Nusa Tenggara': [-8.6524, 118.7335],
};

interface AnimalMapProps {
  animals: Animal[];
}

const AnimalMap: React.FC<AnimalMapProps> = ({ animals }) => {
  // Group animals by location
  const animalsByLocation = animals.reduce((acc, animal) => {
    if (!acc[animal.location]) {
      acc[animal.location] = [];
    }
    acc[animal.location].push(animal);
    return acc;
  }, {} as Record<string, Animal[]>);

  useEffect(() => {
    // Fix for Leaflet icon paths
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-md bg-white">
      <MapContainer
        center={[-2.5489, 118.0149]} // Center of Indonesia
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        
        {Object.entries(animalsByLocation).map(([location, locationAnimals]) => {
          const coordinates = locationCoordinates[location];
          if (!coordinates) return null;

          return (
            <Marker 
              key={location} 
              position={coordinates}
              icon={customIcon}
            >
              <Popup className="custom-popup">
                <div className="p-3 min-w-[300px]">
                  <h3 className="font-display font-bold text-xl mb-3 text-gray-900">{location}</h3>
                  <div className="max-h-[300px] overflow-y-auto">
                    <ul className="space-y-3">
                      {locationAnimals.map(animal => (
                        <li key={animal.id} className="flex items-start bg-gray-50 rounded-lg p-2">
                          <div className="w-16 h-16 rounded-md overflow-hidden mr-3 flex-shrink-0">
                            <img 
                              src={animal.image} 
                              alt={animal.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{animal.name}</p>
                            <p className="text-sm text-gray-600 italic mb-1">{animal.latinName}</p>
                            <span className={`text-xs px-2 py-0.5 rounded-full inline-block ${
                              animal.status === 'Kritis' ? 'bg-red-100 text-red-800' :
                              animal.status === 'Terancam' ? 'bg-orange-100 text-orange-800' :
                              animal.status === 'Rentan' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {animal.status}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default AnimalMap; 