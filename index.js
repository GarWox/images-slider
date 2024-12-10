import slider from "./js/slider.js";
import getImages from "./js/getImages.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  getImages();
  slider();
});
