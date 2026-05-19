const name = "suraj"
const repoCount = 50

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName =  new String("Koncat-hc-sk")
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(0,5)
console.log(anotherString);


const stringOne = "     Suraj   kanojiya "
console.log(stringOne);

console.log(stringOne.trim());

const url = "http//suraj_kanojiya.com%20sk.in"
console.log(url.replace("%20","-"));

console.log(url.includes("suraj"));
console.log(url.includes("money"))

console.log(gameName.split('-'));
