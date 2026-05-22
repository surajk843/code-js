// for of
// ["", "", ""]
// [{}, {}, {}]


// printing for array
arr = [1,2,3,4,5]

for (const num of arr) {

    // console.log(num);
    
    
}

// printing for string

const str = "Hello World!"
for (const greet of str) {
    if (greet == " ") {
        continue;
    }
    // console.log(greet);
    
}

// Maps

// printing for maps
// maps are not iterateable in loops 
const map = new Map()

map.set("IN", "India")
map.set("USA", "America")
map.set("FR", "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-" , value);
    
}


// printing for object by using forin loop oject cannot be printed usinf forof loop

const myObject ={
    game1 : "nfs",
    game2 : "pubg",
    game3 : "fortnite"
}

for (const key in myObject) {
    
    //console.log(`${key} is ${myObject[key]}`);
    
    
}
    

const lang = ["java", "py", "cpp", "ruby", "js"]

for (const key in lang) {
    
    console.log(`${key} is ${lang[key]}`);
}
