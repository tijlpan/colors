import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(4),
    name: "gras afrijden",
    code: "",
    checked: false,
  },
  {
    id: nanoid(4),
    name: "tv kijken",
    code: "",
    checked: true,
  },
];

const colorSlice = createSlice({
  name: "colorState",
  initialState,
  reducers: {
    addColor(state, { payload: {name, code} }) {
      state.push({
        id: nanoid(4),
        checked: false,
        name: name,
        code: code,
      });
    },
    removeColor(state, { payload }) {
      state.splice(
        state.findIndex((color) => color.id === payload),
        1
      );
    },
  },
});

export default colorSlice;
export const { addColor, removeColor} = colorSlice.actions;
