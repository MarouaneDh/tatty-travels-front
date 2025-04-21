import { createSlice } from '@reduxjs/toolkit';
import { getAllDestinations, getOneDestination, getFeaturedDestinations } from './destinationsAsyncThunk';

const initialState = {
    AllDestinations: {
        isLoading: false,
        status: null,
        error: null,
        AllDestinations: null,
    },
    FeaturedDestinations: {
        isLoading: false,
        status: null,
        error: null,
        FeaturedDestinations: null,
    },
    OneDestination: {
        isLoading: false,
        status: null,
        error: null,
        OneDestination: null,
    }
};

export const destinationsSlice = createSlice({
    name: 'destinations',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get all destinations
            .addCase(getAllDestinations.pending, (state) => {
                state.AllDestinations.isLoading = true;
                state.AllDestinations.status = 'pending'
                state.AllDestinations.error = null
            })
            .addCase(getAllDestinations.fulfilled, (state, action) => {
                state.AllDestinations.isLoading = false;
                state.AllDestinations.status = 'fulfilled'
                state.AllDestinations.AllDestinations = action.payload.response
            })
            .addCase(getAllDestinations.rejected, (state, action) => {
                state.AllDestinations.isLoading = false;
                state.AllDestinations.status = 'rejected';
                state.AllDestinations.error = action.payload;
            })

            //get one destination
            .addCase(getOneDestination.pending, (state) => {
                state.OneDestination.isLoading = true;
                state.OneDestination.status = 'pending'
                state.OneDestination.error = null
            })
            .addCase(getOneDestination.fulfilled, (state, action) => {
                state.OneDestination.isLoading = false;
                state.OneDestination.status = 'fulfilled'
                state.OneDestination.OneDestination = action.payload.response
            })
            .addCase(getOneDestination.rejected, (state, action) => {
                state.OneDestination.isLoading = false;
                state.OneDestination.status = 'rejected';
                state.OneDestination.error = action.payload;
            })

            //get featured destinations
            .addCase(getFeaturedDestinations.pending, (state) => {
                state.FeaturedDestinations.isLoading = true;
                state.FeaturedDestinations.status = 'pending'
                state.FeaturedDestinations.error = null
            })
            .addCase(getFeaturedDestinations.fulfilled, (state, action) => {
                state.FeaturedDestinations.isLoading = false;
                state.FeaturedDestinations.status = 'fulfilled'
                state.FeaturedDestinations.FeaturedDestinations = action.payload.response
            })
            .addCase(getFeaturedDestinations.rejected, (state, action) => {
                state.FeaturedDestinations.isLoading = false;
                state.FeaturedDestinations.status = 'rejected';
                state.FeaturedDestinations.error = action.payload;
            })
    },
});

export default destinationsSlice.reducer;
