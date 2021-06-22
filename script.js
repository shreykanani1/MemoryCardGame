console.log("js file loaded");

let a = document.querySelectorAll(".cards");
let isSecondTurn = false;
let firstCard;
let secondCard;

let imgArr = [
  "android.png",
  "c.png",
  "cpp.png",
  "csharp.png",
  "css.png",
  "fb.png",
  "google.png",
  "html.png",
  "java.png",
  "js.png",
  "net.png",
  "php.png",
  "python.jfif",
  "twitter.png",
  "youtube.png",
  "android.png",
  "c.png",
  "cpp.png",
  "csharp.png",
  "css.png",
  "fb.png",
  "google.png",
  "html.png",
  "java.png",
  "js.png",
  "net.png",
  "php.png",
  "python.jfif",
  "twitter.png",
  "youtube.png",
];

(function (array, a) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  for (let index = 0; index < imgArr.length; index++) {
    let oldClass = a[index].classList[1];
    let newClass = imgArr[index].split(".")[0];

    let imgTag = a[index].firstElementChild;
    imgTag.src = imgArr[index];

    a[index].classList.remove(oldClass);
    a[index].classList.add(newClass);
    console.log(a[index].classList[1] + " " + newClass);
  }
})(imgArr, a);

function checkCard() {
  this.classList.add("flip");
  console.log(this);
  if (!isSecondTurn) {
    isSecondTurn = true;
    firstCard = this;
  } else {
    isSecondTurn = false;
    secondCard = this;

    let type1 = String(firstCard.classList[1]);
    let type2 = String(secondCard.classList[1]);
    console.log(type1);
    console.log(type2);

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

window.sessionStorage.setItem("username", "shrey");
window.sessionStorage.setItem("email", "shrey@gmail.com");
console.log(sessionStorage);
console.log(sessionStorage.getItem("username"));
console.log(sessionStorage.key(0));
console.log(sessionStorage.removeItem("username"));
console.log(sessionStorage.clear());
