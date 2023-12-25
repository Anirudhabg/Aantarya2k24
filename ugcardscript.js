let currentCard = 1;

function showNextCard() {
    const currentCardElement = document.getElementById(`card${currentCard}`);
    currentCardElement.classList.remove('active');

    currentCard = (currentCard % 10) + 1;

    const nextCardElement = document.getElementById(`card${currentCard}`);
    nextCardElement.classList.add('active');
}

function showPreviousCard() {
    const currentCardElement = document.getElementById(`card${currentCard}`);
    currentCardElement.classList.remove('active');

    currentCard = (currentCard - 2 + 10) % 10 + 1;

    const previousCardElement = document.getElementById(`card${currentCard}`);
    previousCardElement.classList.add('active');
}


let currentCards = 1;

function showNextCard2() {
    const currentCardElement = document.getElementById(`cards${currentCards}`);
    currentCardElement.classList.remove('active');

    currentCards = (currentCards % 11) + 1;

    const nextCardElement = document.getElementById(`cards${currentCards}`);
    nextCardElement.classList.add('active');
}

function showPreviousCard2() {
    const currentCardElement = document.getElementById(`cards${currentCards}`);
    currentCardElement.classList.remove('active');

    currentCards = (currentCards - 2 + 11) % 11 + 1;

    const previousCardElement = document.getElementById(`cards${currentCards}`);
    previousCardElement.classList.add('active');
}