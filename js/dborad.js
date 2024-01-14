// const API_URL = "http://localhost:3000";
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




// fetching data from enroll section

// declaring variables

// coding
const codingMem1 = document.getElementById('coding-mem1');
const codingMemCon1 = document.getElementById('coding-mem1-con1');

const codingMem2 = document.getElementById('coding-mem2');
const codingMemCon2 = document.getElementById('coding-mem2-con2');


// web desinging
const webMem1 = document.getElementById('webdesgn-mem1');
const webMemCon1 = document.getElementById('webdesgn-mem1-con1');

const webMem2 = document.getElementById('webdesgn-mem2');
const webMemCon2 = document.getElementById('webdesgn-mem2-con2');


// quiz
const quizMem1 = document.getElementById('quiz-mem1');
const quizMemCon1 = document.getElementById('quiz-mem1-con1');

const quizMem2 = document.getElementById('quiz-mem2');
const quizMemCon2 = document.getElementById('quiz-mem2-con2');


// debate
const debateMem1 = document.getElementById('debate-mem1');
const debateMemCon1 = document.getElementById('debate-mem1-con1');


// dance
const danceMem1 = document.getElementById('dance-mem1');
const danceMemCon1 = document.getElementById('dance-mem1-con1');

const danceMem2 = document.getElementById('dance-mem2');
const danceMemCon2 = document.getElementById('dance-mem2-con2');

const danceMem3 = document.getElementById('dance-mem3');
const danceMemCon3 = document.getElementById('dance-mem3-con3');

const danceMem4 = document.getElementById('dance-mem4');
const danceMemCon4 = document.getElementById('dance-mem4-con4');

const danceMem5 = document.getElementById('dance-mem5');
const danceMemCon5 = document.getElementById('dance-mem5-con5');

const danceMem6 = document.getElementById('dance-mem6');
const danceMemCon6 = document.getElementById('dance-mem6-con6');

const danceMem7 = document.getElementById('dance-mem7');
const danceMemCon7 = document.getElementById('dance-mem7-con7');



// photography
const photographyMem1 = document.getElementById('photo-mem1');
const photographyMemCon1 = document.getElementById('photo-mem1-con1');


// gaming
const gamingMem1 = document.getElementById('gaming-mem1');
const gamingMemCon1 = document.getElementById('gaming-mem1-con1');

const gamingMem2 = document.getElementById('gaming-mem2');
const gamingMemCon2 = document.getElementById('gaming-mem2-con2');


// treasure hunt
const treasureMem1 = document.getElementById('treasure-mem1');
const treasureMemCon1 = document.getElementById('treasure-mem1-con1');

const treasureMem2 = document.getElementById('treasure-mem2');
const treasureMemCon2 = document.getElementById('treasure-mem2-con2');


// product launch
const productMem1 = document.getElementById('product-mem1');
const productMemCon1 = document.getElementById('product-mem1-con1');


// dumb charades
const dumbchMem1 = document.getElementById('dumbch-mem1');
const dumbchMemCon1 = document.getElementById('dumbch-mem1-con1');

const dumbchMem2 = document.getElementById('dumbch-mem2');
const dumbchMemCon2 = document.getElementById('dumbch-mem2-con2');


// it manager
const itManagerMem1 = document.getElementById('itmng-mem1');
const itManagerMemCon1 = document.getElementById('itmng-mem1-con1');


// designing
const designingMem1 = document.getElementById('design-mem1');
const designingMemCon1 = document.getElementById('design-mem1-con1');




class EventData {
  constructor(data) {
    this.data = data || {};
  }

  getITManager() {
    return this.data.events && this.data.events.itManager
      ? this.data.events.itManager
      : { name: 'N/A', phone: 'N/A' };
  }

  getPhotography() {
    return this.data.events && this.data.events.photography
      ? this.data.events.photography
      : { name: 'N/A', phone: 'N/A' };
  }

  getProductLaunch() {
    return this.data.events && this.data.events.productLaunch
      ? this.data.events.productLaunch
      : { name: 'N/A', phone: 'N/A' };
  }

  getDesigning() {
    return this.data.events && this.data.events.designing
      ? this.data.events.designing
      : { name: 'N/A', phone: 'N/A' };
  }

  getCoding() {
    return this.data.events && this.data.events.coding
      ? this.data.events.coding
      : [{ name: 'N/A', phone: 'N/A' }];
  }

  getWeb() {
    return this.data.events && this.data.events.web
      ? this.data.events.web
      : [{ name: 'N/A', phone: 'N/A' }];
  }

  getQuiz() {
    return this.data.events && this.data.events.quiz
      ? this.data.events.quiz
      : [{ name: 'N/A', phone: 'N/A' }];
  }

  getDebate() {
    return this.data.events && this.data.events.debate
      ? this.data.events.debate
      : { name: 'N/A', phone: 'N/A' };
  }

  getDance() {
    return this.data.events && this.data.events.dance
      ? this.data.events.dance
      : [{ name: 'N/A', phone: 'N/A' }];
  }

  getGaming() {
    return this.data.events && this.data.events.gaming
      ? this.data.events.gaming
      : [{ name: 'N/A', phone: 'N/A' }];
  }

  getTreasure() {
    return this.data.events && this.data.events.treasure
      ? this.data.events.treasure
      : [{ name: 'N/A', phone: 'N/A' }];
  }

  getDumbCharades() {
    return this.data.events && this.data.events.dumbCharades
      ? this.data.events.dumbCharades
      : [{ name: 'N/A', phone: 'N/A' }];
  }
}


const updateUITextFields = (eventData) => {
  
    // codingMemCon1.value = 'N/A'
    // codingMem1.placeholder = 'input placeholder'


  let codingData = eventData.getCoding()

  if(codingData){
    codingMem1.value = codingData[0].name;
    codingMemCon1.value = codingData[0].phone;
  
    codingMem2.value = codingData[1].name;
    codingMemCon2.value = codingData[1].phone;
  }

  let webData = eventData.getWeb()
  if (webData) {
    webMem1.value = eventData.getWeb()[0].name;
    webMemCon1.value = eventData.getWeb()[0].phone;

    webMem2.value = eventData.getWeb()[1].name;
    webMemCon2.value = eventData.getWeb()[1].phone;
  }


  let quizData = eventData.getQuiz()
  if (quizData) {
    quizMem1.value = eventData.getQuiz()[0].name;
    quizMemCon1.value = eventData.getQuiz()[0].phone;

    quizMem2.value = eventData.getQuiz()[1].name;
    quizMemCon2.value = eventData.getQuiz()[1].phone;
  }

  
  let debateData = eventData.getDebate()
  if (debateData) {
    debateMem1.value = eventData.getDebate().name;
    debateMemCon1.value = eventData.getDebate().phone;
  }

  let danceData = eventData.getDance()
  if (danceData) {
    const danceMembers = [
      {name: danceMem1, phone: danceMemCon1},
      {name: danceMem2, phone: danceMemCon2},
      {name: danceMem3, phone: danceMemCon3},
      {name: danceMem4, phone: danceMemCon4},
      {name: danceMem5, phone: danceMemCon5},
      {name: danceMem6, phone: danceMemCon6},
      {name: danceMem7, phone: danceMemCon7}
    ];
    
    const danceData = eventData.getDance();
    
    danceMembers.forEach((member, index) => {
      if (danceData[index]) {
        member.name.value = danceData[index].name;
        member.phone.value = danceData[index].phone;
      }
    });
  }


  let photographyData = eventData.getPhotography()
  if (photographyData) {
    photographyMem1.value = eventData.getPhotography().name;
    photographyMemCon1.value = eventData.getPhotography().phone;
  }

  let gamingData = eventData.getGaming()
  if (gamingData) {
    gamingMem1.value = eventData.getGaming()[0].name;
    gamingMemCon1.value = eventData.getGaming()[0].phone;

    gamingMem2.value = eventData.getGaming()[1].name;
    gamingMemCon2.value = eventData.getGaming()[1].phone;
  }

  let treasureData = eventData.getTreasure()
  if (treasureData) {
    treasureMem1.value = eventData.getTreasure()[0].name;
    treasureMemCon1.value = eventData.getTreasure()[0].phone;

    treasureMem2.value = eventData.getTreasure()[1].name;
    treasureMemCon2.value = eventData.getTreasure()[1].phone;
  }

  let productData = eventData.getProductLaunch()
  if (productData) {
    productMem1.value = eventData.getProductLaunch().name;
    productMemCon1.value = eventData.getProductLaunch().phone;
  }

  let dumbCharadesData = eventData.getDumbCharades()
  if (dumbCharadesData && dumbCharadesData.length > 0) {
    dumbchMem1.value = eventData.getDumbCharades()[0].name;
    dumbchMemCon1.value = eventData.getDumbCharades()[0].phone;

    dumbchMem2.value = eventData.getDumbCharades()[1].name;
    dumbchMemCon2.value = eventData.getDumbCharades()[1].phone;
  }


  let itManagerData = eventData.getITManager()

  if (itManagerData) {
    itManagerMem1.value = eventData.getITManager().name;
    itManagerMemCon1.value = eventData.getITManager().phone;
  }

  let designingData = eventData.getDesigning()
  if (designingData) {
    designingMem1.value = eventData.getDesigning().name;
    designingMemCon1.value = eventData.getDesigning().phone;
  }

};



const dumbCharadesSection = document.querySelector('.ug-hide')
const itManagerSection = document.querySelector('.pg-hide1')
const designSection = document.querySelector('.pg-hide2')

const displayUGFields = () => {

  dumbCharadesSection.classList.remove('hide')
  itManagerSection.classList.add('hide')
  designSection.classList.add('hide')

}

const displayPGFields = () => {

  dumbCharadesSection.classList.add('hide')
  itManagerMem1.classList.remove('hide')
  designSection.classList.remove('hide')
}


const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/team/${teamId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const fetchDataAndUpdateUI = async () => {
  const data = await fetchData();
  const eventData = new EventData(data);

  const isUG = data.isUG

  if(isUG) {
    displayUGFields()
  }
  else{
    displayPGFields()
  }

  updateUITextFields(eventData);

};

fetchDataAndUpdateUI();

