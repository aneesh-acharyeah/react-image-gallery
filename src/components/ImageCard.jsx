// ImageCard.jsx
import React from 'react'
import { motion } from 'framer-motion';


const ImageCard = ({ image, onClick }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transistion={{ duration: 0.5 }}
            className="image-card"
            onClick={onClick}
        >
            <img src={`${image.src}`} alt={image.category}
                loading='lazy' />

        </motion.div>

    )
}
export default ImageCard;