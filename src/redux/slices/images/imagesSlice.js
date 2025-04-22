import { createSlice } from '@reduxjs/toolkit';
import { getAllImages, getOneImage } from './imagesAsyncThunk';

const initialState = {
    AllImages: {
        isLoading: false,
        status: null,
        error: null,
        AllImages: null,
    },
    OneImage: {
        isLoading: false,
        status: null,
        error: null,
        OneImage: null,
    }
};

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get all images
            .addCase(getAllImages.pending, (state) => {
                state.AllImages.isLoading = true;
                state.AllImages.status = 'pending'
                state.AllImages.error = null
            })
            .addCase(getAllImages.fulfilled, (state, action) => {
                state.AllImages.isLoading = false;
                state.AllImages.status = 'fulfilled'
                state.AllImages.AllImages = action.payload
            })
            .addCase(getAllImages.rejected, (state, action) => {
                state.AllImages.isLoading = false;
                state.AllImages.status = 'rejected';
                state.AllImages.error = action.payload;
            })

            //get one destination
            .addCase(getOneImage.pending, (state) => {
                state.OneImage.isLoading = true;
                state.OneImage.status = 'pending'
                state.OneImage.error = null
            })
            .addCase(getOneImage.fulfilled, (state, action) => {
                state.OneImage.isLoading = false;
                state.OneImage.status = 'fulfilled'
                state.OneImage.OneImage = action.payload.response
            })
            .addCase(getOneImage.rejected, (state, action) => {
                state.OneImage.isLoading = false;
                state.OneImage.status = 'rejected';
                state.OneImage.error = action.payload;
            })
    },
});

export default imagesSlice.reducer;
