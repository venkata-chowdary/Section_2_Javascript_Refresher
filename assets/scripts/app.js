//chatGPT: https://chatgpt.com/share/676aa3c3-978c-8000-8c09-5583bb9ae9ef

// // import { key } from "./util.js";
// // import name from "./default.js";
// // console.log(name);

// let firstName = "chowdary";
// firstName = "narayana";
// const lastName = "immanni";
// // console.log(firstName);
// // console.log(firstName + " " + lastName);

// function sayHello(name, message = "How are you?") {
//   console.log("hello " + name);
//   console.log(message);
// }
// // sayHello("venkat");

// //no paranthesis for parameters (if there is only one parameter)
// const msgFromAnonymous = (username) => {
//   console.log("i'm from anonymous function", username);
// };

// msgFromAnonymous("chowdary");

// //no wrapping if the return has only one statement rather than huge logic
// const addNumbers = (a, b) => {
//   return a + b;
// };

// console.log(addNumbers(2, 3));

// // const getAge = number => { age: number }; // This is invalid, as JS considers curly braces as opening of a function
// const getAge = (number) => ({
//   age: number,
// });

// console.log(getAge(2));
// //so now object will be returned as an object

//javascript object
const user = {
  name: "Chowdary",
  age: 20,
  city: "Rajamundry",
  greet() {
    console.log("Hello", this.name);
  },
};

// // console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   displayName() {
//     console.log("I'm " + this.age);
//   }
// }

// const user1 = new User("chowdary", "20");
// user1.displayName();

//array-functions
const games = ["cricket", "kabaddi", "foot ball", "basket ball", "tennis"];
// console.log(games[2]);

games.push("hockey");
// console.log(games);

// console.log(games.findIndex((game) => game === "foot ball"));
// console.log(games.map((item) => item + "@"));
// console.log(games);

const names = ["venkata", "narayana", "chowdary"];
const [firstName, , lastName] = names;
// console.log(firstName);
// console.log(lastName);

//for array destructing any names can be used
//for object destructing keys are allowed, for custom names we can define

const {
  name: fullName,
  age,
  town,
} = {
  name: "Chowdary",
  age: 20,
  city: "Rajamundry",
};

// console.log(fullName, age, town);

//spread operator
const newNamesList = [...names, "vamsi"];
// console.log(newNamesList);

const newUserDetails = { ...user, gender: "Male" };
// console.log(newUserDetails);

// //for loop
// //iterate by index
// for (const ind in games) {
//   console.log(games[ind]);
// }

// //iterate by value
// for (const game of games) {
//   console.log(game);
// }

// function sayHello() {
//   console.log("Say Hello");
// }
// setTimeout(sayHello, 3000);
//we don't add paranthesis for the function when we pass it as a parameter
//if we use add paranthesis the function will be executed immediately and the return value will passed to the setTimeout or called function

//passing functions as parameter to a user defined function
// function greetHello(func) {
//   func();
// }

// function dummyFunc() {
//   console.log("hello ra");
// }

// greetHello(dummyFunc);

// //any modifications done to strings, booleans etc will create a newly updated one
// //but in case of objects like arrays any mutation done to them will only update the original object rather than creating the new object

// //const means we can edit or modify the object which is currently stored but we can't reassign the a new object to the same memory
// //in the case of objects, the main reason for updation is that the const stores the memory where the object has been stored

// //REST operator
// //often used to collect mulitple elements to an array
// const [first, second, ...rest] = [1, 2, 3, 4, 5];
// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5]

// //SPREAD Operator
// const nums1 = [1, 2];
// const nums2 = [3, 4];
// const combined = [...nums1, ...nums2];
// console.log(combined); // [1, 2, 3, 4]

// Key Takeaways
// The spread operator (...) expands an array into individual elements (e.g., [...nums1, ...nums2]).
// The rest operator (...) gathers remaining elements into a new array during destructuring (e.g., ...rest).

//REDUCE
// array.reduce(callback(accumulator, element, index, array), initialValue)

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 10);
console.log(sum); // 10
