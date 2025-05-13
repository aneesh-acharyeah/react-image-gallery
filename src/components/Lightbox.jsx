import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import '../styles/Lightbox.css';


const Lightbox = ({ image, onClose }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lightbox-overlay"
            >
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="lightbox-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className='close-btn' onClick={onClose}>
                        <IoClose size={24} />
                        <img src={`${image.src}`} alt={image.category} />

                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>

    )
}
export default Lightbox;