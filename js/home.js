// const API_URL = "http://localhost:3000";
const API_URL = "https://mca-fest.onrender.com/";

const getToken = () => {
  return localStorage.getItem("jwtToken");
};
const getTeamId = () => {
  return localStorage.getItem("teamId");
};

const removeToken = () => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("teamId");
};

const logOutBtn = document.querySelector("#logOut");
console.log(logOutBtn);


logOutBtn.onclick = () => {
  removeToken();
  window.location.href = "/pages/login.html";
};

