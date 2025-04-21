import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, API_HOST } from '../../../configs/api';
import axiosService from '../../../Services/axiosService';

export const getAllStories = createAsyncThunk(
    'stories/getAllStories',
    async (_, { fulfillWithValue, rejectWithValue }) => {
        try {
            const URL = API_HOST + API.stories.story;
            const response = await axiosService.get(URL);
            return fulfillWithValue(response.data);
        } catch (err) {
            console.error(err);
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

export const getOneStory = createAsyncThunk(
    'stories/getOneStory',
    async (id, { fulfillWithValue, rejectWithValue }) => {
        try {
            const URL = API_HOST + API.stories.story + id;
            const response = await axiosService.get(URL);
            return fulfillWithValue(response.data);
        } catch (err) {
            console.error(err);
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);