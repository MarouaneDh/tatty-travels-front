import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { motion } from 'framer-motion';
import { hideFullscreen, showFullscreen, variants } from '../../configs/helper';
import { getAllImages } from '../../redux/slices/images/imagesAsyncThunk';

import './Gallery.css';

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