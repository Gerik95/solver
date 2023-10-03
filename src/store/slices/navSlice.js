import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navActive: false
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    handleNavActive (state, action) {
      console.log(action)
      state.navActive = action.payload;
    }
  }
})

export const { handleNavActive } = clientsSlice.actions;
export default clientsSlice.reducer;