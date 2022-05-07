import store from "../data/index.js";

export default class Square {
 
 constructor(c) {
    this.c = c;
    this.htmlRef = this.#init();
    this.render();
    store.subscribe(this.render);
  }
  #init() {
    return document.body.querySelector(".square:last-child");
  }
  render = () => {
    this.htmlRef.style.backgroundColor = this.c;
  };
}