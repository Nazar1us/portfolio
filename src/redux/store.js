import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice/contactSlice";
import { filterReducer } from "./filterSlice/filterSlice";
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

export const store = configureStore({
  devTools: true,
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});
// export const persistor = persistStore(store);
