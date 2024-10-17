import React from 'react';

const photos = [
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
];

const PhotoGallery = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <img 
              src={photo} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-64 object-cover transition-opacity duration-300 ease-in-out hover:opacity-70"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;