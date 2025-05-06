import { createSlice } from '@reduxjs/toolkit';
import { deleteOneStory, getAllStories, getOneStory } from './storiesAsyncThunk';

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
    },
    DeleteOneStory: {
        isLoading: false,
        status: null,
        error: null,
        DeleteOneStory: null,
    },
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

            //delete one story
            .addCase(deleteOneStory.pending, (state) => {
                state.DeleteOneStory.isLoading = true;
                state.DeleteOneStory.status = 'pending'
                state.DeleteOneStory.error = null
            })
            .addCase(deleteOneStory.fulfilled, (state, action) => {
                state.DeleteOneStory.isLoading = false;
                state.DeleteOneStory.status = 'fulfilled'
                state.DeleteOneStory.DeleteOneStory = action.payload.response
            })
            .addCase(deleteOneStory.rejected, (state, action) => {
                state.DeleteOneStory.isLoading = false;
                state.DeleteOneStory.status = 'rejected';
                state.DeleteOneStory.error = action.payload;
            })
    },
});

export default storiesSlice.reducer;
