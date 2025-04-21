export const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2, ease: 'easeInOut' } },
};

export const showFullscreen = (imageSrc) => {
    const fullscreenImage = document.getElementById('fullscreen-image');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    if (fullscreenImage && fullscreenOverlay) {
        fullscreenImage.src = imageSrc;
        fullscreenOverlay.style.display = 'flex';
    }
};

export const hideFullscreen = () => {
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    if (fullscreenOverlay) {
        fullscreenOverlay.style.display = 'none';
    }
};

export const truncateText = (text) => {
    return text.substring(0, 20) + "..."
};