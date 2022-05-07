import "./style.css";
import store from "./data";
import { addColor } from "./data/color";
import Square from "./components/Square.js";

function render() {
  document.querySelector("#ul").innerHTML = store
    .getState()
    .colorState.map((color) => (
      `<div class="square"></div><p class="colorName">${color.name}</p>`,
      new Square(color.code)
      ))
    .join("");
}

render();

store.subscribe(render);

const form = document.querySelector("form");
form.onsubmit = function (e) {
  e.preventDefault();
  store.dispatch(addColor(form.elements["name"].value, form.elements["code"].value));
  form.reset();
};
