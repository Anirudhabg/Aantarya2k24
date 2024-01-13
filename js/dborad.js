// const API_URL = "http://localhost:3000";
const API_URL = "https://mca-fest.onrender.com";

const token = localStorage.getItem("jwtToken");
const teamId = localStorage.getItem("teamId");

const burgerMenu = document.querySelector(".burger-click");
const navLinks = document.querySelector(".left-fixed-nav");

burgerMenu.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});


function validateNumericInput(inputElement) {
  inputElement.value = inputElement.value.replace(/\D/g, "");
}



const removeToken = () => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("teamId");
};


const logOutBtn = document.querySelector("#logoutBtn");

logOutBtn.onclick = () => {
  removeToken();
  window.location.href = "/pages/login.html";
};

const enrollSec = document.querySelector('#enroll-section-id')
const paymentSec = document.querySelector('#payment-section-id')
const accomodationSec = document.querySelector('#accomodation-section-id')
const settingSec = document.querySelector('#settings-section-id')
const contactSec = document.querySelector('#contactus-section-id')

const enrollBtn = document.querySelector('#enroll-nav')
const paymentBtn = document.querySelector('#payment-nav')
const accomodationBtn = document.querySelector('#accomodation-nav')
const settingBtn = document.querySelector('#settings-nav')
const contactBtn = document.querySelector('#contactus-nav')






enrollBtn.onclick = () => {
  enrollSec.classList.remove('hide')
  paymentSec.classList.add('hide')
  accomodationSec.classList.add('hide')
  settingSec.classList.add('hide')
  contactSec.classList.add('hide')
}

paymentBtn.onclick = () => {
  enrollSec.classList.add('hide')
  paymentSec.classList.remove('hide')
  accomodationSec.classList.add('hide')
  settingSec.classList.add('hide')
  contactSec.classList.add('hide')

}

accomodationBtn.onclick = () => {
  enrollSec.classList.add('hide')
  paymentSec.classList.add('hide')
  accomodationSec.classList.remove('hide')
  settingSec.classList.add('hide')
  contactSec.classList.add('hide')
}

settingBtn.onclick = () => {
  enrollSec.classList.add('hide')
  paymentSec.classList.add('hide')
  accomodationSec.classList.add('hide')
  settingSec.classList.remove('hide')
  contactSec.classList.add('hide')
}

contactBtn.onclick = () => {
  enrollSec.classList.add('hide')
  paymentSec.classList.add('hide')
  accomodationSec.classList.add('hide')
  settingSec.classList.add('hide')
  contactSec.classList.remove('hide')
}



// Set the date we're counting down to
var countDownDate = new Date("February 15, 2024 23:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
