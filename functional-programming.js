const animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" }
];
// console.log(animals);

//******************** filter ********************//
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
console.log(names);
//******************** map (the old way) ********************//
/*
const names = [];
for (let i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}
console.log(names);
*/
