import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Author } from './components/Author';
import { Program } from './components/Program';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Program />
        <Author />
        <Gallery />
        <Reviews />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;