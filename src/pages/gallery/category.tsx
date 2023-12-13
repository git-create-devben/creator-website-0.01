// components/PhotoGallery.tsx
import React, { useState } from 'react';
import "./gallery.css"

interface Photo {
  id: number;
  category: string;
  url: string;
}

const PhotoGallery: React.FC<{ photos: Photo[] }> = ({ photos }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
 
  const filteredPhotos = selectedCategory
    ? photos.filter((photo) => photo.category === selectedCategory)
    : photos;

  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='flex text-white justify-between gap-6 '>
        Filter by category:
        <button onClick={() => setSelectedCategory(null)}>All</button>
        <button onClick={() => setSelectedCategory('wedding')}>Wedding</button>
        <button onClick={() => setSelectedCategory('street')}>Street</button>
        {/* Add more buttons for other categories */}
      </div>
      <div className="showcase">
        {/* <h1>hello</h1> */}
        {filteredPhotos.map((photo) => (
         <img key={photo.id} src={photo.url} alt={photo.category}/>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
