import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, API_HOST } from '../../../configs/api';
import axiosService from '../../../Services/axiosService';

export const getAllImages = createAsyncThunk(
    'images/getAllImages',
    async (_, { fulfillWithValue, rejectWithValue }) => {
        try {
            const URL = API_HOST + API.images.upload;
            const response = await axiosService.get(URL);
            return fulfillWithValue(response.data);
        } catch (err) {
            console.error(err);
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

export const getOneImage = createAsyncThunk(
    'images/getOneImage',
    async (id, { fulfillWithValue, rejectWithValue }) => {
        try {
            const URL = API_HOST + API.images.upload + id;
            const response = await axiosService.get(URL);
            return fulfillWithValue(response.data);
        } catch (err) {
            console.error(err);
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

export const uploadImage = createAsyncThunk(
    'images/uploadImage',
    async (formdata, { fulfillWithValue, rejectWithValue }) => {
        try {
            const URL = API_HOST + API.images.upload;
            const response = await axiosService.post(URL, formdata);
            return fulfillWithValue(response.data);
        } catch (err) {
            console.error(err);
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

