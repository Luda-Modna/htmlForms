"use strict";

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const fName = e.target.firstName.value.trim();
  const lName = e.target.lastName.value.trim();
  const fullName = `${fName} ${lName}`;

  const email = e.target.email.value.trim();

  const phoneFirst = e.target.telFirst.value.trim();
  const phoneSecond = e.target.telSecond.value.trim();
  const phoneThree = e.target.telThree.value.trim();
  const phone = `${phoneFirst}${phoneSecond}${phoneThree}`;

  const subject = e.target.subject.value.trim();

  const message = e.target.message.value.replace(/\s{2,}/g, " ").trim();

  const contactFormObj = {
    fullName,
    email,
    phone,
    subject,
    message,
  };

  console.log(contactFormObj);
});
