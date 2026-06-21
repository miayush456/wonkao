import {
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "./firebase.js";


window.recaptchaVerifier = new RecaptchaVerifier(
  auth,
  "recaptcha-container",
  {
    size: "normal"
  }
);


window.sendOTP = function () {

  const phoneNumber =
    document.getElementById("phone").value;


  signInWithPhoneNumber(
    auth,
    phoneNumber,
    window.recaptchaVerifier
  )
  .then((result) => {

    window.confirmationResult = result;

    alert("OTP Sent Successfully!");

  })
  .catch((error) => {

    alert(error.message);

  });

};


window.verifyOTP = function () {

  const code =
    document.getElementById("otp").value;


  window.confirmationResult
    .confirm(code)
    .then((result) => {

      alert("Login Successful!");

      window.location.href = "home.html";

    })
    .catch((error) => {

      alert("Invalid OTP");

    });

};