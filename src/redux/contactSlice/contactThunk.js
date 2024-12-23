import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const contactAxios = axios.create({
  baseURL: "https://66f96e5bafc569e13a98c373.mockapi.io/",
});

export const fetchAllContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await contactAxios("/contacts");
      return data;
    } catch (err) {
      console.error(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await contactAxios.post("/contacts", { name, number });
      return data;
    } catch (err) {
      console.error(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (id, thunkAPI) => {
    try {
      const { data } = await contactAxios.delete(`/contacts/${id}`);
      return data.id;
    } catch (err) {
      console.error(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/edit",
  async ({ id, name, number }, thunkAPI) => {
    try {
      const { data } = await contactAxios.put(`/contacts/${id}`, {
        id,
        name,
        number,
      });
      return data;
    } catch (err) {
      console.error(err);
      return thunkAPI.rejectWithValue({
        message: err.message,
        code: err.code,
      });
    }
  }
);

// HOMEWORK add edit by using method patch;
// I'll need {id, name, number}
