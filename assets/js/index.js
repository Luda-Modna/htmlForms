"use strict";

const form = document.querySelector("form");

//form.addEventListener("submit", submitHandler);

/*function submitHandler(e) {
  e.preventDefault();

  const [nameInput] = document.querySelectorAll("input");

  if (/^[A-Z][a-z]{1,19}$/.test(nameInput.value)) {
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
  } else {
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
  }
}

const [nameInput] = document.querySelectorAll("input");
nameInput.addEventListener("input", inputNameHandler);


function inputNameHandler(e) {
  if (/^[A-Z][a-z]{1,19}(-[A-Z][a-z]{1,19})?$/.test(e.target.value)) {
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
  } else {
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
  }
}
*/

const INPUTS_REG_EXP = {
  "first-name": /^[A-Z][a-z]{1,19}(-[A-Z][a-z]{1,19})?$/,
  "last-name": /^[A-Z][a-z]{1,19}(-[A-Z][a-z]{1,19})?$/,
  "email": /^.*@.*$/,
  "tel": /\+380\d{9}/,
  "password": /(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&._].*){8,32}/,
  "password-confirmation":
    /(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&._].*){8,32}/,
};

const inputs = document.querySelectorAll("input");
inputs.forEach((i) => i.addEventListener("input", inputHandler));

function inputHandler(e) {
  if (INPUTS_REG_EXP[e.target.name].test(e.target.value)) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.add("invalid");
    e.target.classList.remove("valid");
  }
}
