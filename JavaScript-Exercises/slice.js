// To get name as input from user and return as only first letter capital and others small

// Takes input from user

let yourName = prompt("Enter Your Name");

// Selects first letter and make capital

let firstLetter = yourName.slice(0, 1);
let firstLetterCapital = firstLetter.toUpperCase();

// Selects other letters and make small

let otherLetters = yourName.slice(1);
let otherLettersSmall = otherLetters.toLowerCase();

console.log("Hello, " + firstLetterCapital + otherLettersSmall);
