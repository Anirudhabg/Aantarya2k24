// const API_URL = "http://localhost:3000";
const API_URL = "https://mca-fest.onrender.com";

const signUpAnim = document.getElementById("signUp");
const signInAnim = document.getElementById("signIn");
const container = document.getElementById("container");
const loader = document.querySelector(".loader");

signUpAnim.onclick = () => {
  container.classList.add("right-panel-active");
};

signInAnim.onclick = () => {
  container.classList.remove("right-panel-active");
};

//SignUP LOGIN
const validateSignUp = (collegeName, email, password, isUg) => {
  if (collegeName === "" || email === "" || password === "" || isUg === "") {
    alert("Please fill all the fields");
    return false;
  }

  return true;
};

const signUpButton = document.forms["signUpForm"]["submitBtn"];

signUpButton.onclick = async () => {
  const collegeName = document.forms["signUpForm"]["college"].value;
  const email = document.forms["signUpForm"]["email"].value;
  const password = document.forms["signUpForm"]["password"].value;
  let isUg = document.forms["signUpForm"]["isUg"].value;

  if (!validateSignUp(collegeName, email, password, isUg)) {
    return false;
  }
  loader.style.display = "block";

  isUg = isUg === "true" ? true : false;

  const isPosted = await postDataSignUp(collegeName, email, password, isUg);
  if (isPosted) {
    alert("account created successfully");
    container.classList.remove("right-panel-active");
  }

  loader.style.display = "none";

};

const postDataSignUp = async (collegeName, email, password, isUg) => {
  try {
    const res = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: collegeName,
        email: email,
        password: password,
        isUG: isUg,
      }),
    });
    const data = await res.json();

    if (res.status == 400) {
      alert(data.error);
      return;
    }

    console.log(data);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const validateLogin = (email, password) => {
  if (email === "" || password === "") {
    alert("Please fill all the fields");
    return false;
  }
  return true;
};

//login LOGIC
const loginBtn = document.forms["loginForm"]["submitBtnLogin"];

loginBtn.onclick = async () => {
  const email = document.forms["loginForm"]["email"].value;
  const password = document.forms["loginForm"]["password"].value;
  
  if (!validateLogin(email, password)) {
    return false;
  }
  
  loader.style.display = "block";
    try {
      const isPosted = await postDataLogin(email, password);
      if (isPosted) {
        alert("Logged in successfully");
        window.location.href = "/pages/dashboard.html";
      }
    } catch (error) {
      console.error(error);
      alert("Error logging in. Please try again.");
    } finally {
      loader.style.display = "none";
    }
};

const storeToken = (token) => {
  localStorage.setItem("jwtToken", token);
};

const storeTeamId = (teamId) => {
  localStorage.setItem("teamId", teamId);
};

const postDataLogin = async (email, password) => {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();

    if (res.status == 400) {
      alert(data.error);
      return false;
    }

    console.log(data);
    storeToken(data.data.token);
    storeTeamId(data.teamId);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
