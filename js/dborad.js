// const API_URL = "http://localhost:3000";
const API_URL = "https://mca-fest.onrender.com";

const token = localStorage.getItem("jwtToken");
const teamId =  localStorage.getItem("teamId");

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


const checkTokenExist = () => {
    const token = localStorage.getItem("jwtToken");
    if(!token){
        window.location.href = "/pages/login.html";
        console.log('token not found');
    }
  }
  
  checkTokenExist()
