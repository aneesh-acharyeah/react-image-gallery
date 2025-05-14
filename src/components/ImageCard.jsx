import { motion } from 'framer-motion';

const ImageCard = ({ image, onClick }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="image-card"
            onClick={onClick}
        >
            <img src={image.src} alt={image.category} loading='lazy' />
            <div className="image-overlay">
                <h3>{image.title}</h3>
                <span>{image.category}</span>
            </div>
        </motion.div>
    );
};

export default ImageCard;