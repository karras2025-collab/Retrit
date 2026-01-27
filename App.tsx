import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Author } from './components/Author';
import { Program } from './components/Program';
import { Included } from './components/Included';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Program />
        <Included />
        <Author />
        <Gallery />
        <Reviews />
        <Pricing />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;