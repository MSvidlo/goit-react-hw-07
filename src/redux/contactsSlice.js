import { createSlice } from "@reduxjs/toolkit";
import { CONSTANTS } from './constants.js';
import { fetchContacts,addContact,deleteContact } from "./contactsOps.js";
import { createSelector } from "@reduxjs/toolkit";

const selectContacts = state => state.contacts.items;
const selectFilters = state => state.filters.name;


export const selectFilteredContacts =createSelector([selectContacts,selectFilters],(contacts,filter)=>{
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  } )

const handlePending = (state) => {
  state.isLoading = true;
 state.error = null; 
};

const handleRejected = (state,action) => {
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
         .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      
  },
});

export const contactReducer = ontactsSlice.reducer;
