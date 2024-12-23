import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  addContact,
  deleteContact,
  fetchAllContacts,
  editContact,
} from "./contactThunk";

const contactSlice = createSlice({
  name: "contact",
  initialState: { items: [], isLoading: false, error: null },
  // reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAllContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(editContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.items = state.items.map((contact) =>
          contact.id === payload.id
            ? { ...contact, name: payload.name, number: payload.number }
            : contact
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }),
});

// const persistConfig = {
//   key: "contacts",
//   storage,
// };
// export const contactReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );

export const contactReducer = contactSlice.reducer;
