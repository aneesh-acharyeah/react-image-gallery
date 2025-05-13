// src/hooks/useImages.js
import { useState, useEffect } from 'react';

const useImages = () => {
  // Sample image data (replace with API calls if needed)
  const allImages = [
    { id: 1, src: 'https://img.freepik.com/premium-photo/morskie-oko-tatry_1045114-186.jpg?semt=ais_hybrid&w=740', category: 'nature', title: 'Mountain View' },
    { id: 2, src: 'https://as1.ftcdn.net/v2/jpg/01/91/74/46/1000_F_191744672_HYfG0261FemsGK5WZWX868BokvbHNmqV.jpg', category: 'urban', title: 'City Skyline' },
    { id: 3, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Forest_path_and_trees.jpg/2560px-Forest_path_and_trees.jpg', category: 'nature', title: 'Forest Path' },
    { id: 4, src: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/332000/332072-Downtown-Chicago.jpg', category: 'urban', title: 'Downtown' },
    { id: 5, src: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D', category: 'animals', title: 'Wildlife' },
    // Add more images as needed
  ];

  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading from API
  useEffect(() => {
    const timer = setTimeout(() => {
      setImages(allImages);
      setIsLoading(false);
    }, 1000); // Simulate network delay

    return () => clearTimeout(timer);
  }, []);

  // Filter images based on category
  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  // Available categories for filter buttons
  const categories = ['all', ...new Set(images.map(img => img.category))];

  return {
    images: filteredImages,
    categories,
    filter,
    setFilter,
    isLoading
  };
};

export default useImages;