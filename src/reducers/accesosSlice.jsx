import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
};

export const accesosSlice = createSlice({
  name: "accesos",
  initialState,
  reducers: {
    addAccesos: (state, action) => {
        state.data = action.payload;      
    },
    clearAccesos: (state, action) => {
      state = initialState;
    },
  },
});
export const { addAccesos, clearAccesos } = accesosSlice.actions;
export default accesosSlice.reducer;
