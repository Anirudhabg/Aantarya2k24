// const API_URL = "http://localhost:3000";
// const API_URL = "https://mca-fest.up.railway.app";
const API_URL = "https://mca-fest.onrender.com";


const token = localStorage.getItem("jwtToken");
const teamId = localStorage.getItem("teamId");

const burgerMenu = document.querySelector(".burger-click");
const navLinks = document.querySelector(".left-fixed-nav");

burgerMenu.onclick = () => {
  navLinks.classList.toggle("show");
};

function validateNumericInput(inputElement) {
  inputElement.value = inputElement.value.replace(/\D/g, "");
}

document.addEventListener("click", function () {
  const activeElement = document.activeElement;

  if (
    activeElement &&
    activeElement.tagName === "INPUT" &&
    activeElement.type === "text" &&
    activeElement.value === "N/A"
  ) {
    activeElement.value = "";
  }

  if (
    activeElement &&
    activeElement.tagName === "INPUT" &&
    activeElement.type === "tel" &&
    activeElement.value === "N/A"
  ) {
    activeElement.value = "";
  }
});

const checkTokenExist = () => {
  const token = localStorage.getItem("jwtToken");
  if (!token) {
    window.location.href = "/pages/login.html";
  }
};

checkTokenExist();

const removeToken = () => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("teamId");
};

const loader = document.querySelector(".loader");

const logOutBtn = document.querySelector("#logoutBtn");

logOutBtn.onclick = () => {
  removeToken();
  if (history.replaceState) {
    history.replaceState(null, null, window.location.href);
  }
  window.location.href = "/pages/login.html";
};

const enrollSec = document.querySelector("#enroll-section-id");
const paymentSec = document.querySelector("#payment-section-id");
const accomodationSec = document.querySelector("#accomodation-section-id");
const settingSec = document.querySelector("#settings-section-id");
const contactSec = document.querySelector("#contactus-section-id");

const enrollBtn = document.querySelector("#enroll-nav");
const paymentBtn = document.querySelector("#payment-nav");
const accomodationBtn = document.querySelector("#accomodation-nav");
const settingBtn = document.querySelector("#settings-nav");
const contactBtn = document.querySelector("#contactus-nav");

const showSection = (section) => {
  const sections = [
    enrollSec,
    paymentSec,
    accomodationSec,
    settingSec,
    contactSec,
  ];
  sections.forEach((sec) => sec.classList.add("hide"));
  section.classList.remove("hide");
};

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
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
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

// fetching data from enroll section

// declaring variables

// coding
const codingMem1 = document.getElementById("coding-mem1");
const codingMemCon1 = document.getElementById("coding-mem1-con1");

const codingMem2 = document.getElementById("coding-mem2");
const codingMemCon2 = document.getElementById("coding-mem2-con2");

// web desinging
const webMem1 = document.getElementById("webdesgn-mem1");
const webMemCon1 = document.getElementById("webdesgn-mem1-con1");

const webMem2 = document.getElementById("webdesgn-mem2");
const webMemCon2 = document.getElementById("webdesgn-mem2-con2");

// quiz
const quizMem1 = document.getElementById("quiz-mem1");
const quizMemCon1 = document.getElementById("quiz-mem1-con1");

const quizMem2 = document.getElementById("quiz-mem2");
const quizMemCon2 = document.getElementById("quiz-mem2-con2");

// debate
const debateMem1 = document.getElementById("debate-mem1");
const debateMemCon1 = document.getElementById("debate-mem1-con1");

// dance
const danceMem1 = document.getElementById("dance-mem1");
const danceMemCon1 = document.getElementById("dance-mem1-con1");

const danceMem2 = document.getElementById("dance-mem2");
const danceMemCon2 = document.getElementById("dance-mem2-con2");

const danceMem3 = document.getElementById("dance-mem3");
const danceMemCon3 = document.getElementById("dance-mem3-con3");

const danceMem4 = document.getElementById("dance-mem4");
const danceMemCon4 = document.getElementById("dance-mem4-con4");

const danceMem5 = document.getElementById("dance-mem5");
const danceMemCon5 = document.getElementById("dance-mem5-con5");

const danceMem6 = document.getElementById("dance-mem6");
const danceMemCon6 = document.getElementById("dance-mem6-con6");

const danceMem7 = document.getElementById("dance-mem7");
const danceMemCon7 = document.getElementById("dance-mem7-con7");

// photography
const photographyMem1 = document.getElementById("photo-mem1");
const photographyMemCon1 = document.getElementById("photo-mem1-con1");

// gaming
const gamingMem1 = document.getElementById("gaming-mem1");
const gamingMemCon1 = document.getElementById("gaming-mem1-con1");

const gamingMem2 = document.getElementById("gaming-mem2");
const gamingMemCon2 = document.getElementById("gaming-mem2-con2");

// treasure hunt
const treasureMem1 = document.getElementById("treasure-mem1");
const treasureMemCon1 = document.getElementById("treasure-mem1-con1");

const treasureMem2 = document.getElementById("treasure-mem2");
const treasureMemCon2 = document.getElementById("treasure-mem2-con2");

// product launch
const productMem1 = document.getElementById("product-mem1");
const productMemCon1 = document.getElementById("product-mem1-con1");

// dumb charades
const dumbchMem1 = document.getElementById("dumbch-mem1");
const dumbchMemCon1 = document.getElementById("dumbch-mem1-con1");

const dumbchMem2 = document.getElementById("dumbch-mem2");
const dumbchMemCon2 = document.getElementById("dumbch-mem2-con2");

// it manager
const itManagerMem1 = document.getElementById("itmng-mem1");
const itManagerMemCon1 = document.getElementById("itmng-mem1-con1");

// designing
const designingMem1 = document.getElementById("design-mem1");
const designingMemCon1 = document.getElementById("design-mem1-con1");

class EventData {
  constructor(data) {
    this.data = data || {};
  }

  static repeatObject(object, size) {
    return Array.from({ length: size }, () => ({ ...object }));
  }

  getITManager() {
    return this.data.events && this.data.events.itManager
      ? this.data.events.itManager
      : { name: "N/A", phone: "N/A" };
  }

  getPhotography() {
    return this.data.events && this.data.events.photography
      ? this.data.events.photography
      : { name: "N/A", phone: "N/A" };
  }

  getProductLaunch() {
    return this.data.events && this.data.events.productLaunch
      ? this.data.events.productLaunch
      : { name: "N/A", phone: "N/A" };
  }

  getDesigning() {
    return this.data.events && this.data.events.designing
      ? this.data.events.designing
      : { name: "N/A", phone: "N/A" };
  }

  getCoding() {
    return this.data.events &&
      this.data.events.coding &&
      this.data.events.coding.length == 2
      ? this.data.events.coding
      : EventData.repeatObject({ name: "N/A", phone: "N/A" }, 2);
  }

  getWeb() {
    return this.data.events &&
      this.data.events.web &&
      this.data.events.web.length == 2
      ? this.data.events.web
      : EventData.repeatObject({ name: "N/A", phone: "N/A" }, 2);
  }

  getQuiz() {
    return this.data.events &&
      this.data.events.quiz &&
      this.data.events.quiz.length == 2
      ? this.data.events.quiz
      : EventData.repeatObject({ name: "N/A", phone: "N/A" }, 2);
  }

  getDebate() {
    return this.data.events && this.data.events.debate
      ? this.data.events.debate
      : { name: "N/A", phone: "N/A" };
  }

  getDance() {
    return this.data.events &&
      this.data.events.dance &&
      this.data.events.dance.length > 1
      ? this.data.events.dance
      : EventData.repeatObject({ name: "N/A", phone: "N/A" }, 7);
  }

  getGaming() {
    return this.data.events &&
      this.data.events.gaming &&
      this.data.events.gaming.length == 2
      ? this.data.events.gaming
      : EventData.repeatObject({ name: "N/A", phone: "N/A" }, 2);
  }

  getTreasure() {
    return this.data.events &&
      this.data.events.treasure &&
      this.data.events.treasure.length == 2
      ? this.data.events.treasure
      : EventData.repeatObject({ name: "N/A", phone: "N/A" }, 2);
  }

  getDumbCharades() {
    return this.data.events &&
      this.data.events.dumbCharades &&
      this.data.events.dumbCharades.length == 2
      ? this.data.events.dumbCharades
      : EventData.repeatObject({ name: "N/A", phone: "N/A" }, 2);
  }
}

const updateUITextFields = (eventData) => {
  // codingMemCon1.value = 'N/A'
  // codingMem1.placeholder = 'input placeholder'

  let codingData = eventData.getCoding();

  if (codingData && codingData.length == 2) {
    codingMem1.value = codingData[0].name;
    codingMemCon1.value = codingData[0].phone;

    codingMem2.value = codingData[1].name;
    codingMemCon2.value = codingData[1].phone;
  }

  let webData = eventData.getWeb();
  if (webData && webData.length == 2) {
    webMem1.value = eventData.getWeb()[0].name;
    webMemCon1.value = eventData.getWeb()[0].phone;

    webMem2.value = eventData.getWeb()[1].name;
    webMemCon2.value = eventData.getWeb()[1].phone;
  }

  let quizData = eventData.getQuiz();
  if (quizData && quizData.length == 2) {
    quizMem1.value = eventData.getQuiz()[0].name;
    quizMemCon1.value = eventData.getQuiz()[0].phone;

    quizMem2.value = eventData.getQuiz()[1].name;
    quizMemCon2.value = eventData.getQuiz()[1].phone;
  }

  let debateData = eventData.getDebate();
  if (debateData) {
    debateMem1.value = eventData.getDebate().name;
    debateMemCon1.value = eventData.getDebate().phone;
  }

  let danceData = eventData.getDance();

  if (danceData && danceData.length > 1) {
    danceMem1.value = "N/A";
    danceMemCon1.value = "N/A";

    danceMem2.value = "N/A";
    danceMemCon2.value = "N/A";

    danceMem3.value = "N/A";
    danceMemCon3.value = "N/A";

    danceMem4.value = "N/A";
    danceMemCon4.value = "N/A";

    danceMem5.value = "N/A";
    danceMemCon5.value = "N/A";

    danceMem6.value = "N/A";
    danceMemCon6.value = "N/A";

    danceMem7.value = "N/A";
    danceMemCon7.value = "N/A";

    const danceMembers = [
      { name: danceMem1, phone: danceMemCon1 },
      { name: danceMem2, phone: danceMemCon2 },
      { name: danceMem3, phone: danceMemCon3 },
      { name: danceMem4, phone: danceMemCon4 },
      { name: danceMem5, phone: danceMemCon5 },
      { name: danceMem6, phone: danceMemCon6 },
      { name: danceMem7, phone: danceMemCon7 },
    ];

    const danceData = eventData.getDance();

    danceMembers.forEach((member, index) => {
      if (danceData[index]) {
        member.name.value = danceData[index].name;
        member.phone.value = danceData[index].phone;
      }
    });
  }

  let photographyData = eventData.getPhotography();
  if (photographyData) {
    photographyMem1.value = eventData.getPhotography().name;
    photographyMemCon1.value = eventData.getPhotography().phone;
  }

  let gamingData = eventData.getGaming();
  if (gamingData && gamingData.length == 2) {
    gamingMem1.value = eventData.getGaming()[0].name;
    gamingMemCon1.value = eventData.getGaming()[0].phone;

    gamingMem2.value = eventData.getGaming()[1].name;
    gamingMemCon2.value = eventData.getGaming()[1].phone;
  }

  let treasureData = eventData.getTreasure();
  if (treasureData && treasureData.length == 2) {
    treasureMem1.value = eventData.getTreasure()[0].name;
    treasureMemCon1.value = eventData.getTreasure()[0].phone;

    treasureMem2.value = eventData.getTreasure()[1].name;
    treasureMemCon2.value = eventData.getTreasure()[1].phone;
  }

  let productData = eventData.getProductLaunch();
  if (productData) {
    productMem1.value = eventData.getProductLaunch().name;
    productMemCon1.value = eventData.getProductLaunch().phone;
  }

  let dumbCharadesData = eventData.getDumbCharades();
  if (dumbCharadesData && dumbCharadesData.length == 2) {
    dumbchMem1.value = eventData.getDumbCharades()[0].name;
    dumbchMemCon1.value = eventData.getDumbCharades()[0].phone;

    dumbchMem2.value = eventData.getDumbCharades()[1].name;
    dumbchMemCon2.value = eventData.getDumbCharades()[1].phone;
  }

  let itManagerData = eventData.getITManager();

  if (itManagerData) {
    itManagerMem1.value = eventData.getITManager().name;
    itManagerMemCon1.value = eventData.getITManager().phone;
  }

  let designingData = eventData.getDesigning();
  if (designingData) {
    designingMem1.value = eventData.getDesigning().name;
    designingMemCon1.value = eventData.getDesigning().phone;
  }
};

const dumbCharadesSection = document.querySelector(".ug-hide");
const itManagerSection = document.querySelector(".pg-hide1");
const designSection = document.querySelector(".pg-hide2");

const displayUGFields = () => {
  dumbCharadesSection.classList.remove("hide");
  itManagerSection.classList.add("hide");
  designSection.classList.add("hide");
};

const displayPGFields = () => {
  dumbCharadesSection.classList.add("hide");
  itManagerMem1.classList.remove("hide");
  designSection.classList.remove("hide");
};

const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/team/${teamId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const fetchDataAndUpdateUI = async () => {
  const data = await fetchData();
  const eventData = new EventData(data);

  const isUG = data.isUG;

  if (isUG) {
    displayUGFields();
  } else {
    displayPGFields();
  }

  updateUITextFields(eventData);
};

fetchDataAndUpdateUI();

const getEventData = () => {
  const codingData = [
    { name: codingMem1.value, phone: codingMemCon1.value },
    { name: codingMem2.value, phone: codingMemCon2.value },
  ];

  const webData = [
    { name: webMem1.value, phone: webMemCon1.value },
    { name: webMem2.value, phone: webMemCon2.value },
  ];

  const quizData = [
    { name: quizMem1.value, phone: quizMemCon1.value },
    { name: quizMem2.value, phone: quizMemCon2.value },
  ];

  const danceData = [
    { name: danceMem1.value, phone: danceMemCon1.value },
    { name: danceMem2.value, phone: danceMemCon2.value },
    { name: danceMem3.value, phone: danceMemCon3.value },
    { name: danceMem4.value, phone: danceMemCon4.value },
    { name: danceMem5.value, phone: danceMemCon5.value },
    { name: danceMem6.value, phone: danceMemCon6.value },
    { name: danceMem7.value, phone: danceMemCon7.value },
  ];

  const gamingData = [
    { name: gamingMem1.value, phone: gamingMemCon1.value },
    { name: gamingMem2.value, phone: gamingMemCon2.value },
  ];

  const treasureData = [
    { name: treasureMem1.value, phone: treasureMemCon1.value },
    { name: treasureMem2.value, phone: treasureMemCon2.value },
  ];

  const dumbCharadesData = [
    { name: dumbchMem1.value, phone: dumbchMemCon1.value },
    { name: dumbchMem2.value, phone: dumbchMemCon2.value },
  ];

  const eventData = {
    events: {
      coding: codingData,
      web: webData,
      quiz: quizData,
      dance: danceData,
      gaming: gamingData,
      treasure: treasureData,
      dumbCharades: dumbCharadesData,
      itManager: { name: itManagerMem1.value, phone: itManagerMemCon1.value },
      photography: {
        name: photographyMem1.value,
        phone: photographyMemCon1.value,
      },
      productLaunch: { name: productMem1.value, phone: productMemCon1.value },
      designing: { name: designingMem1.value, phone: designingMemCon1.value },
      debate: { name: debateMem1.value, phone: debateMemCon1.value },
    },
  };

  return eventData;
};

const saveBtn = document.querySelector("#enroll-save-btn");

saveBtn.onclick = async () => {
  loader.style.display = "block";
  const eventData = getEventData();

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  };

  try {
    const res = await fetch(`${API_URL}/team/${teamId}`, options);

    if (res.status === 200) {
      alert("Data saved successfully");
    } else {
      alert("Error saving data");
    }
  } catch (error) {
    console.error("ERROR: " + error);
  }
  loader.style.display = "none";
};


/* Accomodation toggle */
function toggleAccNumsDiv() {
  var checkBox = document.getElementById("cbx");
  var accNumsDiv = document.querySelector(".acc-nums-div");

  if (checkBox.checked) {

    accNumsDiv.classList.add("show");
  } else {

    accNumsDiv.classList.remove("show");
  }
}

/* Nav active border */

function handleClick(linkId) {
  var clickedElement = document.getElementById(linkId).closest('.enroll');
  clickedElement.classList.toggle('enroll-clicked');

  var enrollElements = document.querySelectorAll('.enroll');
  enrollElements.forEach(function (element) {
    if (element !== clickedElement) {
      element.classList.remove('enroll-clicked');
    }
  });
}



/* ALERT */

document.addEventListener('DOMContentLoaded', function() {
  const alertBox = document.querySelector('.info');
  const alertTitle = document.getElementById('alert-title');
  const closeButton = document.querySelector('.info__close');

  // Set the alert title (you can dynamically set this based on your requirement)
  alertTitle.textContent = 'Your Alert Title';

  // Function to close the alert box
  function closeAlert() {
    alertBox.style.display = 'none';
  }

  // Close the alert box after 3 seconds
  setTimeout(closeAlert, 3000);

  // Add an event listener to the close button to allow manual closing
  closeButton.addEventListener('click', closeAlert);
});

