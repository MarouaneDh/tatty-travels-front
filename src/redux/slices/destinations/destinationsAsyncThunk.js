import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, API_HOST } from '../../../configs/api';
import axiosService from '../../../Services/axiosService';

export const getAllDestinations = createAsyncThunk(
    'destinations/getAllDestinations',
    async (token, { fulfillWithValue, rejectWithValue }) => {
        try {
            const URL = API_HOST + API.destination.allDestination;
            const response = await axiosService.post(URL, { token: token });
            return fulfillWithValue(response.data);
        } catch (err) {
            console.error(err);
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

export const getOneDestination = createAsyncThunk(
    'destinations/getOneDestination',
    async (id, { fulfillWithValue, rejectWithValue }) => {
        try {
            const URL = API_HOST + API.destination.destination + id;
            const response = await axiosService.get(URL);
            return fulfillWithValue(response.data);
        } catch (err) {
            console.error(err);
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

export const getFeaturedDestinations = createAsyncThunk(
    'destinations/getFeaturedDestinations',
    async (_, { fulfillWithValue, rejectWithValue }) => {
        try {
            const URL = API_HOST + API.destination.featured;
            const response = await axiosService.get(URL);
            return fulfillWithValue(response.data);
        } catch (err) {
            console.error(err);
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

export const addDestination = createAsyncThunk(
    'destinations/addDestination',
    async (data, { fulfillWithValue, rejectWithValue }) => {
        try {
            const URL = API_HOST + API.destination.destination;
            const response = await axiosService.post(URL, data);
            return fulfillWithValue(response.data);
        } catch (err) {
            console.error(err);
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);