 import { useState } from 'react';
import useImages from '../hooks/useImages';
import ImageCard from './ImageCard';
import FilterButtons from './FilterButtons';
import Lightbox from './Lightbox';
import '../styles/Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { images, categories, filter, setFilter, isLoading } = useImages();

  if (isLoading) {
    return <div className="loading-spinner">Loading images...</div>;
  }

  return (
    <div className="gallery-container">
      <h1>React Image Gallery</h1>
      <FilterButtons 
        categories={categories} 
        filter={filter} 
        setFilter={setFilter} 
      />
      
      <div className="masonry-grid">
        {images.map(image => (
          <ImageCard 
            key={image.id} 
            image={image}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <Lightbox 
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Gallery;