// const temp = 53

// if(temp <= 40){
//     console.log(`its normal here`);
    
// } else {
//     console.log(`its too hot here`);
    
// }
// console.log("executed");


let userLoggedIn = true
let debitCard = true
let loggedInFromGoogle = true
let loggedInFormEmail = false

if (userLoggedIn && debitCard){
    console.log(`Login Successfull`);
}

if(loggedInFormEmail || loggedInFromGoogle)
{
    console.log(`Login Successfull`);
    
}