import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import AnimalGallerySection from '@/components/AnimalGallerySection';
import AboutSection from '@/components/AboutSection';
import { dummyAnimals } from '@/data/animalData';

const Index = () => {
  const [animals, setAnimals] = useState(dummyAnimals);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AnimalGallerySection animals={animals} />
      <AboutSection />
    </div>
  );
};

export default Index;
