import ParisImage from '../../images/paris.JPG';
import Destination2Image from '../../images/destination2.JPG';
import Destination3Image from '../../images/destination3.JPG';
import Destination4Image from '../../images/destination4.JPG';
import Destination5Image from '../../images/destination5.JPG';
import Destination6Image from '../../images/destination6.JPG';

import { motion } from 'framer-motion';
import { hideFullscreen, showFullscreen, variants } from '../../configs/helper';

import './Gallery.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllImages } from '../../redux/slices/images/imagesAsyncThunk';
import { image } from 'framer-motion/client';

const Gallery = () => {
    const dispatch = useDispatch()
    const images = useSelector((state) => state.images.AllImages.AllImages)

    useEffect(() => {
        dispatch(getAllImages())
    }, [])

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="container"
        >
            <section className="photo-gallery">
                <h2>Photo Gallery</h2>
                {
                    images && images.map((image, index) => {
                        return (
                            <div key={index} >
                                <h2 style={{ textAlign: "start", fontSize: 30 }}>{image.country}</h2>
                                <div className="gallery-grid">
                                    {
                                        image.images.map((img) => {
                                            return (
                                                <img
                                                    key={img._id}
                                                    src={img.imageUrl}
                                                    alt={image.city}
                                                    className="gallery-image"
                                                    onClick={() => showFullscreen(img.imageUrl)}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </section>
            <div id="fullscreen-overlay" onClick={hideFullscreen}>
                <img id="fullscreen-image" src="#" alt="Fullscreen Image" />
            </div>
        </motion.div>
    );
};

export default Gallery;