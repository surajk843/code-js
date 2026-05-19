const marvel_heroes =  ["thor","ironman","spiderman"]
const dc_heroes =  ["superman","batman","aquaman"]

const allheroes = marvel_heroes.concat(dc_heroes)  // concat
console.log(allheroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]  // spread 
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5],6,[7,8,[1,2,3],9],10,11]
let real_array = another_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("suraj"));
console.log(Array.from("Surajkanojiya"));  // creates an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // creates array from variables 

