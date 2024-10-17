import React from 'react';
import { ShoppingBag, Instagram, Facebook, Twitter } from 'lucide-react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Alfrescode</h1>
        <p className="text-xl text-center mb-12">Discover our latest collection of trendy and comfortable clothing.</p>
        <ProductGrid />
        <PhotoGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;