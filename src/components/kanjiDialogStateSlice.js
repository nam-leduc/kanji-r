import { createSlice } from "@reduxjs/toolkit";

const dialogStateSlice = createSlice({
  name: "dialog",
  initialState: {
    open: false,
    data: {},
  },
  reducers: {
    openDialog(state, action) {
      state.open = true;
      state.data = action.payload;
    },
    closeDialog(state) {
      state.open = false;
    },
  },
});

export const { openDialog, closeDialog } = dialogStateSlice.actions;
export const isDialogOpen = (state) => state.dialog.open;
export const dialogData = (state) => state.dialog.data;
export default dialogStateSlice.reducer;
