import { configureStore } from '@reduxjs/toolkit';

import auth from './slices/auth/authSlice';
import destinations from './slices/destinations/destinationsSlice';

export const store = configureStore({
    reducer: {
        auth,
        destinations
    },
});
