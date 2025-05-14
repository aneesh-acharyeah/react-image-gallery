 import { useState, useEffect } from 'react';

const useImages = () => {
   const allImages = [
    { id: 1, src: 'https://img.freepik.com/premium-photo/morskie-oko-tatry_1045114-186.jpg?semt=ais_hybrid&w=740', category: 'nature', title: 'Mountain View' },
    { id: 2, src: 'https://as1.ftcdn.net/v2/jpg/01/91/74/46/1000_F_191744672_HYfG0261FemsGK5WZWX868BokvbHNmqV.jpg', category: 'urban', title: 'City Skyline' },
    { id: 3, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Forest_path_and_trees.jpg/2560px-Forest_path_and_trees.jpg', category: 'nature', title: 'Forest Path' },
    { id: 4, src: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/332000/332072-Downtown-Chicago.jpg', category: 'urban', title: 'Downtown' },
    { id: 5, src: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D', category: 'animals', title: 'Wildlife' },
    { id: 6, src: 'https://images.squarespace-cdn.com/content/v1/612d4825ee7c3b7ba3e215b7/1630496796644-00K8K5Y1FPA7Y6NOM2ST/12-05-2021.png', category: 'food', title: 'Delicious Dish' },
    { id: 7, src: 'https://i.ytimg.com/vi/zEr-mm8OSGo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAm0vvR3Ud4t5gSl4BF1LoxWA70Cw', category: 'car', title: 'Luxury Car' },
    { id: 8, src: 'https://media.noria.com/sites/Uploads/2019/11/19/3ad0b198-2717-4831-a344-f2e35e943bae_ArticleImages_RP31161_1234x694_08022019_extra_large.jpeg', category: 'technology', title: 'Modern Tech' },
    { id: 9, src: 'https://anatomymasterclass.com/images/news/Leonardo-da-Vinci-portrait-drawing-1.jpg', category: 'people', title: 'Portrait' },
     
  ];

  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    const timer = setTimeout(() => {
      setImages(allImages);
      setIsLoading(false);
    }, 1000);  

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