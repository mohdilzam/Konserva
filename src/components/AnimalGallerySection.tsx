
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimalCard, { Animal } from '@/components/AnimalCard';
import AnimalFilter from '@/components/AnimalFilter';

interface AnimalGallerySectionProps {
  animals: Animal[];
}

const AnimalGallerySection: React.FC<AnimalGallerySectionProps> = ({ animals }) => {
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>(animals);
  const [searchValue, setSearchValue] = useState('');
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});

  useEffect(() => {
    let result = animals;
    
    if (searchValue) {
      result = result.filter(animal => 
        animal.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        animal.latinName.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    
    Object.entries(activeFilters).forEach(([key, value]) => {
      if (value) {
        result = result.filter(animal => animal[key as keyof Animal] === value);
      }
    });
    
    setFilteredAnimals(result);
  }, [searchValue, activeFilters, animals]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleFilterChange = (filter: string, value: string) => {
    if (filter && value) {
      setActiveFilters(prev => ({
        ...prev,
        [filter]: value
      }));
    }
  };

  const handleFilterReset = () => {
    setActiveFilters({});
  };

  return (
    <section className="py-24 bg-gray-50" id="galeri">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Galeri Satwa Langka Indonesia</h2>
          <p className="text-lg text-gray-600">
            Telusuri keanekaragaman satwa langka di Indonesia. Filter berdasarkan lokasi, status konservasi, atau habitat untuk menemukan informasi yang Anda butuhkan.
          </p>
        </div>
        
        <div className="relative z-20">
          <AnimalFilter
            onSearchChange={handleSearchChange}
            onFilterChange={handleFilterChange}
            onFilterReset={handleFilterReset}
            activeFilters={activeFilters}
            searchValue={searchValue}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative z-10">
          {filteredAnimals.length > 0 ? (
            filteredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Tidak ada hasil ditemukan</h3>
              <p className="text-gray-600">Coba ubah filter pencarian Anda</p>
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/galeri" className="btn-primary-rounded inline-flex items-center">
            Lihat Semua Satwa
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnimalGallerySection;
