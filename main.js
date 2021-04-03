let city;
city = "Київ";
city = "Львів";
let address;

address = city;
console.log("Task 1 : ");
console.log(address);

function maxNum(firstNumber, secondNumber, ...args) {
  let oneOfTwo = firstNumber > secondNumber ? firstNumber : secondNumber;
  if (args.length === 0) {
    return oneOfTwo;
  } else {
    let check = args.reduce((elem, next) => (elem > next ? elem : next));
    return oneOfTwo > check ? oneOfTwo : check;
  }
}

console.log("\nTask 3: ");
console.log(maxNum(5, -2));
console.log(maxNum(5, -2, 30, 6));

let getSqrt = (number) =>
  typeof number === "undefined"
    ? "Будь ласка, введіть число!"
    : typeof number !== "number"
    ? "Повинно бути числове значення"
    : typeof number === "number" && number < 0
    ? "Введіть додатнє число."
    : Math.sqrt(number);

console.log("\nTask 4: ");
console.log(getSqrt());
console.log(getSqrt("ssea"));
console.log(getSqrt(-1));
console.log(getSqrt(25));

let words = document.getElementById("red");
let wordsInput = document.querySelector(".textInput");
let addButton = document.getElementById("add");
let resButton = document.getElementById("reset");
let cenzButton = document.getElementById("cenzor");
let textArea = document.querySelector(".textAreaInput");

addButton.addEventListener("click", () => {
  if (wordsInput.value.length !== 0) {
    words.innerText.length === 0
      ? (words.innerText += `${wordsInput.value}`)
      : (words.innerText += `,${wordsInput.value}`);
    wordsInput.value = "";
    wordsInput.placeholder = "Word here..";
  } else {
    wordsInput.placeholder = "Please write a word!";
    wordsInput.focus();
  }
});

resButton.addEventListener("click", () => {
  words.innerText = "";
});

cenzButton.addEventListener("click", () => {
  if (words.innerText.length !== 0 && textArea.value.length !== 0) {
    let allProhWords = words.innerText.split(",");
    let textAreaValue = textArea.value;
    let newArr;
    function check(arr) {
      for (let i = 0; i < allProhWords.length; i++) {
        if (arr.includes(allProhWords[i])) {
          let stars = "*".repeat(allProhWords[i].length);
          newArr = arr.replaceAll(allProhWords[i], stars);
          check(newArr);
        }
      }
      textArea.value = newArr;
    }
    check(textAreaValue);
  }
});

textArea.addEventListener("focus", () => {
  textArea.value = "";
});
