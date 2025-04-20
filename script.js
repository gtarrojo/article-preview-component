"use strict";

const modal = document.getElementById("preview__modal");
const btnShare = document.getElementById("preview__share");
const footer = document.querySelector("preview__footer");

btnShare.addEventListener("click", () => {
  modal.classList.toggle("visible");
  footer.classList.toggle("hidden");
});
