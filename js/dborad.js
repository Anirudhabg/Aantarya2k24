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



const showSection = (section) => {
  const sections = [enrollSec, paymentSec, accomodationSec, settingSec, contactSec];
  sections.forEach(sec => sec.classList.add('hide'));
  section.classList.remove('hide');
}


enrollBtn.onclick = () => showSection(enrollSec);
paymentBtn.onclick = () => showSection(paymentSec);
accomodationBtn.onclick = () => showSection(accomodationSec);
settingBtn.onclick = () => showSection(settingSec);
contactBtn.onclick = () => showSection(contactSec);



const countDownDate = new Date("February 15, 2024 23:59:00").getTime();

function calculateTimeDifference() {
  const now = new Date().getTime();
  return countDownDate - now;
}

function formatTime(distance) {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const countdown = setInterval(() => {
  const distance = calculateTimeDifference();

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("demo").innerHTML = "EXPIRED";
  } else {
    document.getElementById("demo").innerHTML = formatTime(distance);
  }
}, 100);




function handleFileSelect() {
  const fileInput = document.getElementById('fileInput');
  const fileNameDisplay = document.getElementById('fileName');

  // Get the file name
  const fileName = fileInput.value.split('\\').pop();

  // Display the file name
  fileNameDisplay.textContent = `Selected file: ${fileName}`;
}