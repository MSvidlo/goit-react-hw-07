import { createSlice, nanoid, createSelector } from "@reduxjs/toolkit";
import { CONSTANTS } from './constants.js';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state) => {
  state.isLoadinf = false;
  state.error = action.payload;
}

const ontactsSlice = createSlice({
    name: 'contacts',
  initialState: {
    items: CONSTANTS.CONTACTS_INIT,
    isLoading: false,
  error:null,},
  extraReducers: (builder) => {
      builder
        addContact: (state, action) => {
                state.items.    push(action.payload);
            },

            deleteContact(state, action) {
state.items.splice(state.items.indexOf(action.payload), 1);
            },
        },
    });

export const { addContact, deleteContact } = ontactsSlice.actions;
export const contactReducer = ontactsSlice.reducer;
