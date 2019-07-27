//******************** filter ********************//
const animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" }
];
// console.log(animals);

const dogs = animals.filter(animal => animal.species === "dog");
// console.log(dogs);

//******************** filter (the old way) ********************//
/*
var dogs = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i].species === "fish") {
    dogs.push(animals[i]);
  }
}
console.log(dogs);
*/

//******************** map ********************//
const names = animals.map(animal => animal.name);
// console.log(names);
//******************** map (the old way) ********************//
/*
const names = [];
for (let i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}
console.log(names);
*/

//******************** reduce ********************//
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 322 }
];

let totalAmount = orders.reduce((sum, order) => {
  // console.log("hello", sum, order);
  return sum + order.amount;
}, 0);
//******************** reduce (the old way) ********************//
/*
let totalAmount = 0;
for (let i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}
*/
// console.log(totalAmount);

//******************** reduce advanced ********************//
// to run this use: 'node functional-programming.js' in the bash command line
// const fs = require("fs");

// const output = fs
//   .readFileSync("data.txt", "utf8")
//   .trim()
//   .split("\n")
//   .map(line => line.split("\t"))
//   .reduce((customers, line) => {
//     // console.log("hello", line);
//     customers[line[0]] = customers[line[0]] || [];
//     customers[line[0]].push({
//       name: line[1],
//       price: line[2],
//       quantity: line[3]
//     });
//     return customers;
//   }, {});

// console.log("output", JSON.stringify(output, null, 2));
