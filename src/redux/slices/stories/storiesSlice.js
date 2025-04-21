import { createSlice } from '@reduxjs/toolkit';
import { getAllStories, getOneStory } from './storiesAsyncThunk';

const initialState = {
    AllStories: {
        isLoading: false,
        status: null,
        error: null,
        AllStories: null,
    },
    OneStory: {
        isLoading: false,
        status: null,
        error: null,
        OneStory: null,
    }
};

export const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //get all stories
            .addCase(getAllStories.pending, (state) => {
                state.AllStories.isLoading = true;
                state.AllStories.status = 'pending'
                state.AllStories.error = null
            })
            .addCase(getAllStories.fulfilled, (state, action) => {
                state.AllStories.isLoading = false;
                state.AllStories.status = 'fulfilled'
                state.AllStories.AllStories = action.payload.response
            })
            .addCase(getAllStories.rejected, (state, action) => {
                state.AllStories.isLoading = false;
                state.AllStories.status = 'rejected';
                state.AllStories.error = action.payload;
            })

            //get one story
            .addCase(getOneStory.pending, (state) => {
                state.OneStory.isLoading = true;
                state.OneStory.status = 'pending'
                state.OneStory.error = null
            })
            .addCase(getOneStory.fulfilled, (state, action) => {
                state.OneStory.isLoading = false;
                state.OneStory.status = 'fulfilled'
                state.OneStory.OneStory = action.payload.response
            })
            .addCase(getOneStory.rejected, (state, action) => {
                state.OneStory.isLoading = false;
                state.OneStory.status = 'rejected';
                state.OneStory.error = action.payload;
            })
    },
});

export default storiesSlice.reducer;
