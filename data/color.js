import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(4),
    name: "blue",
    code: "#0000ff",
    checked: false,
  },
  {
    id: nanoid(4),
    name: "rood",
    code: "#ff0000",
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
    setColor(state = initialState, { payload: { code, id } }) {
      const obj = state.find((color) => color.id === id);
      obj.code = code;
    },
  },
});

export default colorSlice;
export const { addColor, removeColor} = colorSlice.actions;
