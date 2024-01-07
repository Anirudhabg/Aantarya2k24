let ugIdx = 0;
let pgIdx = 0;

let ugNIdx = 0;
let pgNIdx = 0;

const ugList = [
  "MOOK SAMVAD",
  "LIPTH LEKHAN",
  "Jaalika",
  "Pranshnothar",
  "Vadah",
  "Nrityam",
  "Chayachitr",
  "Khelan",
  "Nidhisangrah",
  "Pracharan",
];


const ugListNorm = [
  "DUMB CHARADES", 
  "CODING", 
  "WEB DESIGNING", 
  "QUIZ", 
  "DEBATE",
  "DANCE", 
  "PHOTOGRAPHY", 
  "GAMING", 
  "TREASURE HUNT", 
  "PRODUCT LAUNCH"
]



const pgList = [
  "IT Pramukh",
  "LIPTH LEKHAN",
  "Jaalika",
  "Pranshnothar",
  "Vadah",
  "Chayachitr",
  "Nrityam",
  "Khelan",
  "Nidhisangrah",
  "Pracharan",
  "Chitr",
];

const pgListNorm = [
  "IT MANAGER", "CODING", "WEB DESIGNING", "QUIZ", "DEBATE", "PHOTOGRAPHY", "DANCE", "GAMING", "TREASURE HUNT", "PRODUCT LAUNCH", "DESIGNING"
]

const ugCard = document.querySelector("#ug-card .inside-card-h3");
const ugNCard = document.querySelector("#ug-card .inside-card-normal-h3");

const pgCard = document.querySelector("#pg-card .inside-card-h3");
const pgNCard = document.querySelector("#pg-card .inside-card-normal-h3");

function showNextCard() {
  ugIdx = (ugIdx - 1 + ugList.length) % ugList.length;
  ugNIdx = (ugNIdx - 1 + ugListNorm.length) % ugListNorm.length;

  ugCard.innerText = ugList[ugIdx];
  ugNCard.innerText = ugListNorm[ugNIdx];
}

function showPreviousCard() {
  ugIdx = (ugIdx + 1) % ugList.length;
  ugNIdx = (ugNIdx + 1) % ugListNorm.length;
  ugCard.innerText = ugList[ugIdx];
  ugNCard.innerText = ugListNorm[ugNIdx];
}

const ugRegisterButton = document.querySelector("#ug-card");

ugRegisterButton.addEventListener("click", () => {
  console.log(ugList[ugIdx]);
  console.log(ugListNorm[ugNIdx]);

  window.location.href.replace('readmore.html')
});



//pg cards
function showNextCard2() {
  pgIdx = (pgIdx - 1 + pgList.length) % pgList.length;
  pgNIdx = (pgNIdx - 1 + pgListNorm.length) % pgListNorm.length;
  pgCard.innerText = pgList[pgIdx];
  pgNCard.innerText = pgListNorm[pgNIdx];
}

function showPreviousCard2() {
  pgIdx = (pgIdx + 1) % pgList.length;
  pgNIdx = (pgNIdx + 1) % pgListNorm.length;
  pgCard.innerText = pgList[pgIdx];
  pgNCard.innerText = pgListNorm[pgNIdx];
}

const pgRegisterButton = document.querySelector("#pg-card");
console.log(pgRegisterButton);

pgRegisterButton.addEventListener("click", () => {
  console.log(pgList[pgIdx]);
  console.log(pgListNorm[pgNIdx]);
});






//pg overlay
const pgListRules = [
  ["Number of participants: 1", "The competition is open to postgraduate students only.", "The details of each round will be disclosed on the spot.", "Participants are requested to carry a laptop", "Participants cannot participate in any other events."], // Rules for IT Pramukh
  ["Rule 1", "Rule 2", "Rule 3", "Rule 4", "Rule L"], // Rules for LIPTH LEKHAN
  // ... add rules for other items
  ["Rule 1", "Rule 2", "Rule 3", "Rule 4", "Rule 5"],
  ["Rule 1", "Rule 2", "Rule 3", "Rule 4", "Rule 6"],
  ["Rule 1", "Rule 2", "Rule 3", "Rule 4", "Rule 7"],
  ["Rule 1", "Rule 2", "Rule 3", "Rule 4", "Rule 8"],
  ["Rule 1", "Rule 2", "Rule 3", "Rule 4", "Rule 9"],
  ["Rule 1", "Rule 2", "Rule 3", "Rule 4", "Rule 10"],
  ["Rule 1", "Rule 2", "Rule 3", "Rule 4", "Rule 11"],
  ["Rule 1", "Rule 2", "Rule 3", "Rule 4", "Rule 12"],
  ["Rule 1", "Rule 2", "Rule 3", "Rule 4", "Rule 13"]
];


const pgHeads = [
  [["Sanket M Teggihalli"], ["Tejashree Kumari"]],
  [["2"], ["2"]],
  [["4"], ["4"]],
  [["5"], ["5"]],
  [["6"], ["6"]],
  [["7"], ["7"]],
  [["8"], ["8"]],
  [["9"], ["9"]],
  [["10"], ["10"]],
  [["11"], ["11"]],
  [["3"], ["3"]]
];

const pgPhone = [
  [["9876543210"], ["1116543210"]],
  [["2"], ["2"]],
  [["4"], ["4"]],
  [["5"], ["5"]],
  [["6"], ["6"]],
  [["7"], ["7"]],
  [["8"], ["8"]],
  [["9"], ["9"]],
  [["10"], ["10"]],
  [["11"], ["11"]],
  [["3"], ["3"]]
];



const pgRCard = document.querySelector(".title-text-readmore #title-readmore");
const pgRNCard = document.querySelector(".title-text-readmore #title-readmore-norm");

const pgRList = document.querySelector('.title-text-readmore #pg-list');

const pgHName1List = document.querySelector('.event-head1-container #event-head1-name');
const pgHName2List = document.querySelector('.event-head2-container #event-head2-name');

const pgHPhn1List = document.querySelector('.event-head1-container #event-head1-phn-number');
const pgHPhn2List = document.querySelector('.event-head2-container #event-head2-phn-number');


function toggleOverlayPg() {
  var overlay = document.getElementById('readmore-card-overlay');
  overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'flex' : 'none';

  pgRList.innerHTML = '';

  const currentEvent = pgList[pgIdx];
  const currentEventIndex = pgList.indexOf(currentEvent);
  const rules = pgListRules[currentEventIndex] || ["No specific rules available"];

  pgRCard.innerText = pgList[pgIdx];
  pgRNCard.innerText = "(" + pgListNorm[pgIdx] + ")";

  pgHName1List.innerText = pgHeads[pgIdx][0];
  pgHName2List.innerText = pgHeads[pgIdx][1];

  pgHPhn1List.innerText = pgPhone[pgIdx][0];
  pgHPhn2List.innerText = pgPhone[pgIdx][1];

  rules.forEach(rule => {
    const li = document.createElement('li');
    li.textContent = rule;
    pgRList.appendChild(li);
  });

}


