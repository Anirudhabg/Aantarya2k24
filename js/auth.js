// const API_URL = "http://localhost:3000";
// const API_URL = "https://mca-fest.up.railway.app";
// const API_URL = "https://mca-fest.onrender.com";
const API_URL = "https://mca-fest-v1.onrender.com";


const signUpAnim = document.getElementById("signUp");
const signInAnim = document.getElementById("signIn");
const container = document.getElementById("container");
const loader = document.querySelector(".loader");
const collegeNameDropdownList = document.getElementById("collegeName");


window.addEventListener('load', () => {
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
})

const ugList = [
  "SDM Degree College, Ujire",
  "Sri Rama Degree College, Kaladka",
  "Vivekananda College Puttur",
  "Sri Venkataramana Swamy College, Bantwal",
  "Sri Dhavala College, Moodbidri",
  "Sacred Heart College, Madanthyar",
  "Govinda Dasa College, Surathkal",
  "Sri Mahaveera College, Kodangallu",
  "Alvas College, Moodabidri",
  "K S G Degree College, Sullia",
  "Philomena College, Puttur",
  "P A First Grade College, Kairangala",
  "Besant Women's College, Mangalore",
  "Canara College, Mangaluru",
  "Government First Grade College, Mangalore",
  "Shree Devi College, Mangalore",
  "St Agnes College, Mangalore",
  "St Aloysius College Autonomous, Mangaluru",
  "The Yenepoya Institute of Arts, Science, Commerce and Management"
];

const pgList = [
  "AIMIT Mangalore",
  "MITE Mangalore",
  "SDIT Mangalore",
  "SJEC Mangalore",
  "The Yenepoya Institute of Arts, Science, Commerce and Management",
  "AIGS Bangalore",
  "Srinivas Institute of Technology (SIT)",
  "Yenapoya Bangalore",
  "East West College, Bangalore"
];

const addCollegeNamestoDropdown = (collegeList = ugList) => {

  collegeList.sort();

  collegeNameDropdownList.innerHTML = "";
  const option = document.createElement("option");
  option.value = "";
  option.text = "Select College";
  collegeNameDropdownList.appendChild(option);


  collegeList.forEach((collegeName) => {
    const option = document.createElement("option");
    option.value = collegeName;
    option.text = collegeName;
    collegeNameDropdownList.appendChild(option);
  });

}

addCollegeNamestoDropdown();

const ugRadio = document.getElementById('ugRadio')
const pgRadio = document.getElementById('pgRadio')

ugRadio.onclick = () => addCollegeNamestoDropdown(ugList)
pgRadio.onclick = () => addCollegeNamestoDropdown(pgList);




signUpAnim.onclick = () => {
  container.classList.add("right-panel-active");
};

signInAnim.onclick = () => {
  container.classList.remove("right-panel-active");
};

//SignUP LOGIN
const validateSignUp = (collegeName, email, password, isUg) => {
  if (collegeName === "" || email === "" || password === "" || isUg === "") {
    openAlert("Please fill all the fields");
    return false;
  }
  else if(password.length < 5){
    openAlert("Password must contain 5 characters!");
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
    openAlert("Account created Successfully!");
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
      openAlert(data.error);
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
    openAlert("Please fill all the fields");
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
      openAlert("Logged in successfully");
      window.location.href = "/pages/dashboard.html";
    }
  } catch (error) {
    console.error(error);
    openAlert("Error logging in. Please try again.");
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
      openAlert(data.error);
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

const checkTokenExist = () => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    window.location.href = "/pages/dashboard.html";
  }
}

checkTokenExist()






/* ALERT */
function openAlert(text) {
  const alertBox = document.querySelector('.info');
  const alertTitle = document.getElementById('alert-title');
  const closeButton = document.querySelector('.info__close');

  // Check if text is provided
  if (text) {
    // Set the alert title dynamically
    alertTitle.textContent = text;

    // Display the alert box
    alertBox.style.display = 'flex';

    // Close the alert box after 3 seconds
    setTimeout(closeAlert, 3000);
    closeButton.addEventListener('click', closeAlert);
  }
}

function closeAlert() {
  const alertBox = document.querySelector('.info');
  alertBox.style.display = 'none';
}
//To close using close button
document.querySelector('.info__close').addEventListener('click', function () {
  closeAlert();
});