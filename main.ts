// Task 1
// Написати розв’язок нижче описаного завдання (по одному рядку коду на кожний пункт)

// — Створіть змінну city з типом даних string.

// — Присвойте їй значення «Київ».

// — Змініть значення змінної city на «Львів».

// — Створіть змінну address з типом даних string і скопіюйте в неї значення змінної city.

// — Вивести значення змінної address з допомогою команди console.log().


let city: string;
city = 'Київ';
city = 'Львів';

let address: string;
address = city;

console.log('Task 1 : ');
console.log(address);


// Task 2

// Використовуючи конструкцію if..else через тернарний вираз, напишіть код, який отримує число через prompt, а потім виводить в console.log() повідомлення:

// — Число парне.

// — Число непарне.

// — Число 0.

// let ourNumber: string = prompt('Введіть число');

// let checkNumber = (num: number): string => {
//   return num === 0 ? 'Число 0'
//     : num % 2 === 0 ? 'Число парне' : 'Число не парне'
// };

// console.log('\nTask 2: ');
// console.log(checkNumber(parseInt(ourNumber)));


// Task 3

// Написати розв’язок нижче описаного завдання за допомогою function declaration:

// — Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.

// — Кількість параметрів у функції може бути від 2х і більше.

// Приклад роботи:

// — max(5,-2) – має повернути 5.

// — max(5,-2, 30, 6) – має повернути 30


function maxNum(firstNumber: number, secondNumber: number, ...args: any[]): number {
  let oneOfTwo: number = firstNumber > secondNumber ? firstNumber : secondNumber;

  if (args.length === 0) {
    return oneOfTwo
  }

  else {
    let check: number = args.reduce((elem, next) => elem > next ? elem : next);

    return oneOfTwo > check ? oneOfTwo : check;
  }

}

console.log('\nTask 3: ');
console.log(maxNum(5, -2));
console.log(maxNum(5, -2, 30, 6));





// Task 4

// Напишіть функцію getSqrt(number), яка вираховує корінь квадратний. Для визначення кореня використовуйте Math. В залежності від того що передали в функцію має виводити наступні повідомлення:

// — Якщо передане число повертати - Квадратний корінь з стільки то дорівнює стільки то.

// — Якщо передали не число - Повинно бути числове значення.

// — Якщо число менше 0 - Введіть додатнє число.

// — Якщо в функцію нічого не передали - Будь ласка, введіть число!

let getSqrt = (number?: unknown): unknown => typeof (number) === 'undefined' ? 'Будь ласка, введіть число!'
  : typeof (number) !== 'number' ? 'Повинно бути числове значення'
    : typeof (number) === 'number' && number < 0 ? 'Введіть додатнє число.'
      : Math.sqrt(number)


console.log('\nTask 4: ');
console.log(getSqrt())
console.log(getSqrt('ssea'))
console.log(getSqrt(-1))
console.log(getSqrt(25))


// Task 5

// Необхідно відтворити функціонал як на відео Cenzor, а саме:

// — При кліку на ADD добавляти заборонене слово, яке відображатиметься в списку “Bad words”

// — Якщо поле для добавлення слова не заповнене виводити відповідне повідомлення

// — При кліку на Cenzor перевіряється чи є в textarea заборонене слово, якщо так його заміняє на *, причому на ту кількість яка довжина слова

// — Якщо textarea порожня виводити повыдолення про заповнення поля


let words = document.getElementById('red') as HTMLSpanElement;
let wordsInput = document.querySelector('.textInput') as HTMLInputElement;
let addButton = document.getElementById('add') as HTMLButtonElement;
let resButton = document.getElementById('reset') as HTMLButtonElement;
let cenzButton = document.getElementById('cenzor') as HTMLButtonElement;
let textArea = document.querySelector('.textAreaInput') as HTMLInputElement;

addButton.addEventListener('click', (): void => {
  if (wordsInput.value.length !== 0) {
    words.innerText.length === 0 ? words.innerText += `${wordsInput.value}` : words.innerText += `,${wordsInput.value}`;
    wordsInput.value = '';
    wordsInput.placeholder = 'Word here..';
  }
  else {
    wordsInput.placeholder = 'Please write a word!';
    wordsInput.focus();
  }
})

resButton.addEventListener('click', (): void => {
  words.innerText = '';
})

// Перевірка на наявність слів у строці через рекурсію.
cenzButton.addEventListener('click', (): void => {
  if(words.innerText.length !== 0 && textArea.value.length !== 0){
    let allProhWords: Array<string> = words.innerText.split(',');
    let textAreaValue: string = textArea.value;
    let newArr: string;
    function check(arr) {
      for (let i = 0; i < allProhWords.length; i++) {
        if (arr.includes(allProhWords[i])) {
          let stars: string = '*'.repeat(allProhWords[i].length);
          newArr = arr.replaceAll(allProhWords[i], stars);

          check(newArr);
        }
      }
      textArea.value = newArr;
    }
    check(textAreaValue)
  }

})

textArea.addEventListener('focus', (): void => {
  textArea.value = '';
})