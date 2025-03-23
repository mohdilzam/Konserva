
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
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
      <Navbar />
      <Hero />
      <AnimalGallerySection animals={animals} />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
