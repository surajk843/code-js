const score = 300
console.log(score);

const newScore = new Number(100)
console.log(newScore);

console.log(newScore.toString().length);
console.log(newScore.toFixed(2));

const val = 123.4
console.log(val.toPrecision(3));

const val2 = 1456.521
console.log(val2.toPrecision(3));


const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));

//+++++++++++++++++++  <Maths>  ++++++++++++

console.log(Math.abs(-4));

console.log(Math.round(4.89));

console.log(Math.round(100.89));

console.log(Math.ceil(4.5));
console.log(Math.floor(8.9))
console.log(Math.min(8,9,5,6));
console.log(Math.max(5,6,7,9));

console.log(Math.random());
console.log(Math.random()*10);

const max = 20
const min = 10

console.log(Math.floor(Math.random()*(max-min + 1 ))+ min);
