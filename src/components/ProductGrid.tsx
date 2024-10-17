import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Confetti from 'react-confetti';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { api } from '../services/api';
import { Product } from '../types';

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPosition, setConfettiPosition] = useState({ x: 0, y: 0 });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  useEffect(() => {
    api.getProducts().then(setProducts);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setConfettiPosition({ x: rect.left + rect.width / 1, y: rect.top + rect.height / 2 });
    setShowConfetti(true);
  };

  const handleMouseLeave = () => {
    setShowConfetti(false);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    if (sliderRef) {
      sliderRef.slickPause();
    }
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
    if (sliderRef) {
      sliderRef.slickPlay();
    }
  };

  return (
    <div className="mb-12 relative">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      {selectedProduct ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-semibold mb-2">{selectedProduct.name}</h3>
            <p className="text-gray-600 text-xl mb-4">${selectedProduct.price.toFixed(2)}</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-300 mr-4">
              Add to Cart
            </button>
            <button 
              onClick={handleCloseProduct}
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <Slider ref={setSliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div 
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleProductClick(product)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          confettiSource={{
            x: confettiPosition.x,
            y: confettiPosition.y,
            w: 10,
            h: 10
          }}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}
    </div>
  );
};

export default ProductGrid;