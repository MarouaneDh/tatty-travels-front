import { createSlice } from '@reduxjs/toolkit';
import { getAllDestinations, getOneDestination, getFeaturedDestinations, addDestination, editDestination, deleteDestination } from './destinationsAsyncThunk';

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
    },
    AddDestination: {
        isLoading: false,
        status: null,
        error: null,
        AddDestination: null,
    },
    EditDestination: {
        isLoading: false,
        status: null,
        error: null,
        EditDestination: null,
    },
    DeleteDestination: {
        isLoading: false,
        status: null,
        error: null,
        DeleteDestination: null,
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

            //add destination
            .addCase(addDestination.pending, (state) => {
                state.AddDestination.isLoading = true;
                state.AddDestination.status = 'pending'
                state.AddDestination.error = null
            })
            .addCase(addDestination.fulfilled, (state, action) => {
                state.AddDestination.isLoading = false;
                state.AddDestination.status = 'fulfilled'
                state.AddDestination.AddDestination = action.payload.response
            })
            .addCase(addDestination.rejected, (state, action) => {
                state.AddDestination.isLoading = false;
                state.AddDestination.status = 'rejected';
                state.AddDestination.error = action.payload;
            })

            //edit destination
            .addCase(editDestination.pending, (state) => {
                state.EditDestination.isLoading = true;
                state.EditDestination.status = 'pending'
                state.EditDestination.error = null
            })
            .addCase(editDestination.fulfilled, (state, action) => {
                state.EditDestination.isLoading = false;
                state.EditDestination.status = 'fulfilled'
                state.EditDestination.EditDestination = action.payload.response
            })
            .addCase(editDestination.rejected, (state, action) => {
                state.EditDestination.isLoading = false;
                state.EditDestination.status = 'rejected';
                state.EditDestination.error = action.payload;
            })

            //delete destination
            .addCase(deleteDestination.pending, (state) => {
                state.DeleteDestination.isLoading = true;
                state.DeleteDestination.status = 'pending'
                state.DeleteDestination.error = null
            })
            .addCase(deleteDestination.fulfilled, (state, action) => {
                state.DeleteDestination.isLoading = false;
                state.DeleteDestination.status = 'fulfilled'
                state.DeleteDestination.DeleteDestination = action.payload.response
            })
            .addCase(deleteDestination.rejected, (state, action) => {
                state.DeleteDestination.isLoading = false;
                state.DeleteDestination.status = 'rejected';
                state.DeleteDestination.error = action.payload;
            })
    },
});

export default destinationsSlice.reducer;
