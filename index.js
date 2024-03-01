// EXAMPLE 1 - Filter an Array of Objects based on a property in JavaScript

const people = [
  {name: 'Tom', age: 30},
  {name: 'John', age: 40},
  {name: 'Dillon', age: 30},
];

const results = people.filter(obj => {
  return obj.age === 30;
});

// 👇️ [{name: 'Tom', age: 30}, {name: 'Dillon', age: 30}]
console.log(results);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Filter an Array of Objects based on a property using `Array.find()`

// const people = [
//   {name: 'Tom', age: 30},
//   {name: 'John', age: 40},
//   {name: 'Dillon', age: 30},
// ];

// const person = people.find(object => {
//   return object.age === 30;
// });

// // 👉️ {name: 'Tom', age: 30}
// console.log(person);

// if (person !== undefined) {
//   // 👉️ the condition was satisfied
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Filter an Array of Objects based on a property using `for...of`

// const people = [
//   {name: 'Tom', age: 30},
//   {name: 'John', age: 40},
//   {name: 'Dillon', age: 30},
// ];

// const results = [];

// for (const person of people) {
//   if (person.age === 30) {
//     results.push(person);
//   }
// }

// // 👇️ [{name: 'Tom', age: 31}, {name: 'Dillon', age: 30}]
// console.log(results);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Filter an Array of Objects based on a property using `forEach`

// const people = [
//   {name: 'Tom', age: 30},
//   {name: 'John', age: 40},
//   {name: 'Dillon', age: 30},
// ];

// const results = [];

// people.forEach((person, index) => {
//   console.log(index); // 👉️ 0, 1, 2

//   if (person.age === 30) {
//     results.push(person);
//   }
// });

// // 👇️ [{name: 'Tom', age: 31}, {name: 'Dillon', age: 30}]
// console.log(results);
