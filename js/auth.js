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

// const ugList = [
//   "SDM Degree College, Ujire",
//   "Sri Rama Degree College, Kaladka",
//   "Vivekananda College Puttur",
//   "Sri Venkataramana Swamy College, Bantwal",
//   "Sri Dhavala College, Moodbidri",
//   "Sacred Heart College, Madanthyar",
//   "Govinda Dasa College, Surathkal",
//   "Sri Mahaveera College, Kodangallu",
//   "Alvas College, Moodabidri",
//   "K S G Degree College, Sullia",
//   "Philomena College, Puttur",
//   "P A First Grade College, Kairangala",
//   "Besant Women's College, Mangalore",
//   "Canara College, Mangaluru",
//   "Government First Grade College, Mangalore",
//   "Shree Devi College, Mangalore",
//   "St Agnes College, Mangalore",
//   "St Aloysius College Autonomous, Mangaluru",
//   "The Yenepoya Institute of Arts, Science, Commerce and Management"
// ];



const ugList = [
  "Vivekananda Degree College, Puttur",
  "Sri Rama First Grade College, Kalladka",
  "St Philomena College, Puttur",
  "Sri Dharmasthala Manjunatheshwara College, Ujire",
  "Government First Grade College, Bettampady",
  "Sacred Heart College, Madanthyar",
  "Nehru Memorial College, Sullia",
  "Vidyarashmi Vidyalaya, Savanoor",
  "Government First Grade College, Sullia",
  "Sri Dhavala College, Moodbidre",
  "Government First Grade College, Uppinangady",
  "Sri Venkataramana Swamy College, Bantwal",
  "Government First Grade College, Mangalore ",
  "Carmel Degree College, Modankap, Bantwal",
  "Sharada College. Devinagara, Talapady, Mangalore",
  "Meredian College, Mangalore",
  "Govinda Dasa College - [GDC],Surathkal",
  "Sri Mahaveera College, Moodabidri",
  "Alvas College, Moodbidre",
  "P. A. First Grade College, Mangalore",
  "Besant Women's College, Mangalore",
  "Canara College, Mangalore",
  "Shree Devi College, Mangalore",
  "St. Agnes College (Autonomous), Mangaluru",
  "St Aloysius College (Autonomous), Mangaluru",
  "Yenepoya Institute of Arts, Science, Commerce and Management",
  "St. Anne's Degree College, Virajpet",
  "Field Marshal KM Cariappa College, Madikeri(FMC Madikeri)",
  "Cauvery College, Gonikoppal",
  "MGM Degree college, Kushalnagar",
  "Sri Ramakrishna College, Mangalore",
  "Maps College, Mangalore",
  "Milagres College, Mangalore",
  "Padua Degree College, Mangalore",
  "Sri Bhuvanendra College, Karkala",
  "St. Raymond's College, Vamajoor",
  "Vijaya College, Mulki",
  "SCS First Grade College, Mangalore",
  "University College, Mangalore",
  "Srinivas College, Pandeshwar",
  "Akshaya College, Puttur",
  "Government First Grade College, Virajpet",
  "Government First Grade College, Madikeri",
  "Government First Grade College for Women, Mangalore",
  "Yenepoya(Deemed-to-be-University), Bangalore",
  "Kristu Jayanti College, Autonomous, Bangalore"
];

const pgList = [
  "St Aloysius Institute of Management & Information Technology (AIMIT), Mangalore",
  "Mangalore Institute of Technology & Engineering (MITE), Moodbidre",
  "Shree Devi Institute of Technology, Mangalore",
  "St Joseph Engineering College, Mangalore",
  "Acharya Institute of Graduate Studies, Bangalore",
  "Srinivas Institute of Technology (SIT)",
  "Srinivas College Pandeshwar",
  "NMAM Institute of Technology, Karkala",
  "East West Institute of Technology, Bangalore",
  "Yenepoya Institute of Arts, Science, Commerce and Management, Mangalore",
  "Mangalore University",
  "St. Agnes College (Autonomous), Mangaluru",
  "Kristu Jayanti College, Autonomous, Bangalore",
  "PES University, Bangalore",
  "BMS Institute of Technology and Management, Bangalore",
  "Nirmala College of Information Technology",
  "SDM College of Business Management, Mangalore"
];


// const pgList = [
//   "AIMIT Mangalore",
//   "MITE Mangalore",
//   "SDIT Mangalore",
//   "SJEC Mangalore",
//   "The Yenepoya Institute of Arts, Science, Commerce and Management",
//   "AIGS Bangalore",
//   "Srinivas Institute of Technology (SIT)",
//   "Yenapoya Bangalore",
//   "East West College, Bangalore"
// ];

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
  else if (password.length < 5) {
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

    // console.log(res.status);
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
  if (password.length < 5) {
    openAlert("Password must contain 5 characters!");
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

    // console.log(data);
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




// show or hide password
function togglePasswordVisibility(event, inputField, icon) {
  const passwordInput = document.getElementById(inputField);
  const toggleIcon = document.getElementById(icon);

  console.log(passwordInput);
  console.log(toggleIcon);

  event.preventDefault();
  
  console.log(passwordInput);
  console.log(toggleIcon);
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
  passwordInput.focus();
}



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