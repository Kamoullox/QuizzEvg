let nbCard = 0;

let continueButton = document.querySelector(".button");
continueButton.addEventListener("click", Continue);

function Continue(){
    let actualCard = document.querySelector(`.q${nbCard}`);
    actualCard.classList.add("invisible");

    nbCard++;

    let nextCard = document.querySelector(`.q${nbCard}`);
    nextCard.classList.remove("invisible");
}