import "./style.css";
import store from "./data";
import { addColor, setColor } from "./data/color";
import Square from "./components/Square.js";

function render() {
  document.querySelector("#ul").innerHTML = store
    .getState()
    .colorState.map(
      (color) => {
        console.log(color.id);
        return `<li><div class="square" style="background-color: ${color.code}"></div>
        <p class="colorName" style="color: ${color.code}" contentEditable>${color.name}</p>
        <input type="color" class="picker" value="${color.code}" data-id="${color.id}"/></li>`
      })
    .join("");
}

render();

document.querySelector("ul").addEventListener("change", (e) => {
  if (e.target.classList.contains("picker")) {
    store.dispatch(
      setColor({ id: e.target.dataset.id, code: e.target.value })
    );
  }
});

const form = document.querySelector("form");
form.onsubmit = function (e) {
  e.preventDefault();
  store.dispatch(
    addColor({
      name: form.elements["name"].value,
      code: form.elements["code"].value,
    })
  );
  form.reset();
};

store.subscribe(render);
