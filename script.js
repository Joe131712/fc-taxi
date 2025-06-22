window.addEventListener("scroll", function () {
  const header = document.querySelector(".container-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const modalHeader = document.querySelector(".modal-header");
const modalHeader1 = document.querySelector(".modal-header1");
const opened = document.querySelector(".open");
const closed = document.querySelector(".close");

opened.onclick = function () {
  modalHeader.style.display = "flex";
  modalHeader.classList.add("modal-header");
  modalHeader.classList.remove("modal-header1");
  return false;
};

closed.onclick = function () {
  modalHeader.style.display = "none";
  modalHeader.classList.add("modal-header1");
  modalHeader.classList.remove("modal-header");
  return false;
};

const modal = document.querySelector(".modal-header");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
  document.body.classList.add("no-scroll"); // Bloque le scroll
});

close.addEventListener("click", () => {
  document.body.classList.add("body");
  document.body.classList.remove("no-scroll"); // Réactive le scroll
});

const a = document.querySelector("#input-name");
const btn = document.querySelector(".submit");
const mail = document.querySelector("#input-mail");
const depart = document.querySelector("#input-depart");
const arrive = document.querySelector("#input-arrive");
const heure = document.querySelector("#input-time");
const date = document.querySelector("#input-date");
const conventionne = document.querySelector("#input-conventionne");
btn.addEventListener("click", () => {
  if (a.value === "" || mail.value === "") {
    a.style.borderBottom = "2px solid red";
    mail.style.borderBottom = "2px solid red";
    depart.style.borderBottom = "2px solid red";
    arrive.style.borderBottom = "2px solid red";
    date.style.borderBottom = "2px solid red";
    heure.style.borderBottom = "2px solid red";
    conventionne.style.borderBottom = "2px solid red";
  }
});
