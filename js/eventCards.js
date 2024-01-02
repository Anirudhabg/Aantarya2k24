let ugIdx = 0;
let pgIdx = 0;

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
  "PRODUCT LAUNCH",
];

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
  "IT MANAGER",
  "CODING",
  "WEB DESIGNING",
  "QUIZ",
  "DEBATE",
  "PHOTOGRAPHY",
  "DANCE",
  "GAMING",
  "TREASURE HUNT",
  "PRODUCT LAUNCH",
  "DESIGNING",
];

const ugCard = document.querySelector("#ug-card .inside-card-h3");
const ugNCard = document.querySelector("#ug-card .inside-card-normal-h3");

const pgCard = document.querySelector("#pg-card .inside-card-h3");
const pgNCard = document.querySelector("#pg-card .inside-card-normal-h3");

function showNextCard() {
  ugIdx = (ugIdx - 1 + ugList.length) % ugList.length;

  ugCard.innerText = ugList[ugIdx];
  ugNCard.innerText = ugListNorm[ugIdx];
}

function showPreviousCard() {
  ugIdx = (ugIdx + 1) % ugList.length;
  ugCard.innerText = ugList[ugIdx];
  ugNCard.innerText = ugListNorm[ugIdx];
}

const ugRegisterButton = document.querySelector("#ug-card");

ugRegisterButton.addEventListener("click", () => {
  console.log(ugList[ugIdx]);
  console.log(ugListNorm[ugIdx]);
});

//pg cards
function showNextCard2() {
  pgIdx = (pgIdx - 1 + pgList.length) % pgList.length;
  pgCard.innerText = pgList[pgIdx];
  pgNCard.innerText = pgListNorm[pgIdx];
}

function showPreviousCard2() {
  pgIdx = (pgIdx + 1) % pgList.length;
  pgCard.innerText = pgList[pgIdx];
  pgNCard.innerText = pgListNorm[pgIdx];
}

const pgRegisterButton = document.querySelector("#pg-card");

pgRegisterButton.addEventListener("click", () => {
  console.log(pgList[pgIdx]);
  console.log(pgListNorm[pgIdx]);
});
