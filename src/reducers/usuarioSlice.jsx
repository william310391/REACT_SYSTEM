import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usuario: null,
  };
  
  export const usuarioSlice = createSlice({
    name: "usuario",
    initialState,
    reducers: {
      addUsuario: (state, action) => {
        state.usuario = action.payload;
      },
    },
  });
  export const { addUsuario } = usuarioSlice.actions;
  export default usuarioSlice.reducer;