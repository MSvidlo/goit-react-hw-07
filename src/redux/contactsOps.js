import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
 

axios.defaults.baseURL = 'https://663936bd4253a866a250be4b.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fatchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { contact });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
            
    }

);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);