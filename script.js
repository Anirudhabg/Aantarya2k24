let ugIdx = 0;
let pgIdx = 0;

const ugList = [
  "MOOK SAMVAD",
  "LIPTH LEKHAN",
  "Jaalika",
  "Pranshnothar",
  "Vadah",
  "Nrityam",
  "Khelan",
  "Nidhisangrah",
  "Pracharan",
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

const ugCard = document.querySelector("#ug-card .inside-card-h3");
const pgCard = document.querySelector("#pg-card .inside-card-h3");


function showNextCard() {
  ugIdx = (ugIdx - 1 + ugList.length) % ugList.length;
  ugCard.innerText = ugList[ugIdx];
}

function showPreviousCard() {
  ugIdx = (ugIdx + 1) % ugList.length;
  ugCard.innerText = ugList[ugIdx];
}

const ugRegisterButton = document.querySelector("#ug-card");

ugRegisterButton.addEventListener("click", () => {
  console.log(ugList[ugIdx]);
});



//pg cards
function showNextCard2() {
  pgIdx = (pgIdx - 1 + pgList.length) % pgList.length;
  pgCard.innerText = pgList[pgIdx];
}

function showPreviousCard2() {
  pgIdx = (pgIdx + 1) % pgList.length;
  pgCard.innerText = pgList[pgIdx];
}

const pgRegisterButton = document.querySelector("#pg-card");
console.log(pgRegisterButton);

pgRegisterButton.addEventListener("click", () => {
  console.log(pgList[pgIdx]);
});
