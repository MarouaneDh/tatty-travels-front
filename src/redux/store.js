import { configureStore } from '@reduxjs/toolkit';

import auth from './slices/auth/authSlice';
import destinations from './slices/destinations/destinationsSlice';
import images from './slices/images/imagesSlice';
import stories from './slices/stories/storiesSlice';

export const store = configureStore({
    reducer: {
        auth,
        destinations,
        images,
        stories
    },
});
