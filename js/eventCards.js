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
  "DUMB CHARADES", "CODING", "WEB DESIGNING", "QUIZ", "DEBATE", "DANCE", "PHOTOGRAPHY", "GAMING", "TREASURE HUNT", "PRODUCT LAUNCH"
]



const pgList = [
  "IT Pramukh",
  " LIPTH LEKHAN",
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