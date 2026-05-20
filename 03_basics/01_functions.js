

function myname(){
console.log("S")
console.log("U")
console.log("R")
console.log("A")
console.log("J")
}
// myname()

function addtwonumbers(num1,num2){
    num1 = 20;
    num2 = 30;
    return num1 + num2
}

const result = addtwonumbers();

//console.log(result);

function loggedInUser(Username){
    if(!Username){
        console.log("Please enter Username");
        return
        

    }
    return `${Username} just logged In`
}
//console.log(loggedInUser()) 


function CalculateCartPrice(...num1){
    return num1

}
// console.log(CalculateCartPrice(200, 300, 500, 2000))

const user ={
    username: "Suraj",
    price: 399
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and pricing is ${anyObject.price}`);
    

}

// handleObject({
//     username: "Sam",
//     price: 199
// })

const newArray = [100, 200, 300, 400]

function searchNewArray(getArray){
    return getArray[1]
}

console.log(searchNewArray(newArray));
