import React, { useState, useEffect } from 'react';
import AnimalCard, { Animal } from '@/components/AnimalCard';
import AnimalFilter from '@/components/AnimalFilter';
import AnimalMap from '@/components/AnimalMap';
import { dummyAnimals } from '@/data/animalData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Grid } from 'lucide-react';

const GaleriSatwa = () => {
  const [animals, setAnimals] = useState<Animal[]>(dummyAnimals);
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>(dummyAnimals);
  const [searchValue, setSearchValue] = useState('');
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeView, setActiveView] = useState<'grid' | 'map'>('grid');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-gray-50">
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
          
          <div className="mt-8">
            <Tabs defaultValue="grid" className="w-full">
              <div className="flex justify-center mb-6">
                <TabsList>
                  <TabsTrigger value="grid" className="flex items-center gap-2">
                    <Grid size={16} />
                    <span>Grid</span>
                  </TabsTrigger>
                  <TabsTrigger value="map" className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Peta</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="grid">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
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
              </TabsContent>

              <TabsContent value="map">
                <div className="relative z-10">
                  <AnimalMap animals={filteredAnimals} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GaleriSatwa;
