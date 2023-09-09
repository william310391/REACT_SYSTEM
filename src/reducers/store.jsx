import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import usuarioReducer from "../reducers/usuarioSlice";
import accesosReducer from "../reducers/accesosSlice";


export const store = configureStore({
    reducer: {
      usuario: usuarioReducer,
      accesos: accesosReducer
    },
    middleware: getDefaultMiddleware({
      serializableCheck: false,
    }),
  });