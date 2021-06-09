console.log("js file loaded");

let a = document.querySelectorAll(".cards");
let isSecondTurn = false;
let firstCard;
let secondCard;

function checkCard() {
//   console.log(this);
  this.classList.add("flip");

  if (!isSecondTurn) {
    isSecondTurn = true;
    firstCard = this;
  } 
  else {
    isSecondTurn = false;
    secondCard = this;

    let type1 = String(firstCard.classList[1]);
    let type2 = String(secondCard.classList[1]);
    // console.log(type1);
    // console.log(type2);

    if (type1 !== type2) {
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
      }, 500);
    }
  }
}

a.forEach((element) => {
  element.addEventListener("click", checkCard);
});
