import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Alfrescode</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-600">Home</a></li>
            <li><a href="#" className="hover:text-gray-600">Shop</a></li>
            <li><a href="#" className="hover:text-gray-600">About</a></li>
            <li><a href="#" className="hover:text-gray-600">Contact</a></li>
          </ul>
        </nav>
        <div>
          <ShoppingBag className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;