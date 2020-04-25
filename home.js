// /************ NUMBERS IN JAVASCRIPT ************/
// let num1 = 10;
// console.log('Starting number: ' + num1);

// // Increment num1 by 1
// num1++;
// num1 += 1;
// console.log('Increment: ' + num1);

// // Decrement num1 by 1
// num1--;
// num1 -= 1;
// console.log('Decrement: ' + num1);

// // Divide, multiply *, remainder %
// console.log('Divide: ' + num1 / 6);
// console.log('Multiply: ' + num1 * 6);
// console.log('Remainder: ' + num1 % 6);
// console.log('Last Value: ' + num1);

// /************ FUNCTIONS IN JAVASCRIPT ************/

// // Create
// function fun() {
//     console.log('this is a function');
// }

// // Call
// fun();

// function sayHi() {
//     let insertedName = prompt("What's your name?");
//     console.log("Hello " + insertedName);
//     alert("Helo " + insertedName);
// }

// sayHi();

// let numb1 = prompt("Enter number 1");
// let numb2 = prompt("Enter number 2");
// sumNumbers(numb1, numb2);

// function sumNumbers(number1, number2) {
//     let sum = Number(number1) + Number(number2);
//     console.log("Result: " + sum);
//     alert("The Result is: " + sum);
// }

/************ LOOPS IN JAVASCRIPT ************/
let n = 0;

// While Loop
console.log("Increment");
while (n < 100) {
    n++;
    console.log(n);
}

// For Loop
console.log("Decrement");
for (n; n >= 0; n--) {
    console.log(n);
}

for (let nn = 0; n <= 20; n++) {
    console.log(n);
}

/************ DATA TYPES IN JAVASCRIPT ************/
let yourAge = 18; // number
let yourName = "Bob"; // string
let nameObj = { first: "Bob", last: "Dow" } // Object
let truthT = true; // boolean
let truthF = false; // boolean
let groceries = ["apple", "banana", "oranges"]; // array
let random; // undefined
let nothing = null; // value null

/************ STRINGS IN JAVASCRIPT - common functions ************/
let fruit = "banana";
let fruit2 = 'banana,apple,orange,blackberry';
let moreFruits = "banana\napple"; // new line
console.log("Fruit lenght: " + fruit.length); // string length
console.log("Fruit indexOf: " + fruit.indexOf("an"));
console.log("Fruit slice: " + fruit.slice(2, 6));
console.log("Fruit replace: " + fruit.replace("vban", "123"));
console.log("Fruit upperCase: " + fruit.toUpperCase());
console.log("Fruit lowercase: " + fruit.toLowerCase());
console.log("Fruit charAt(2): " + fruit.charAt(2));
console.log("Fruit charAt: " + fruit[2]);
console.log(fruit2.split(',')); // split by comma
console.log("Fruit split by other, es character: " + fruit.split(""));