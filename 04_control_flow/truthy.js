// const UserEmail = "surajsk@Chatgpt.in"
// if(UserEmail)
// {
//     console.log(`User has UserEmail`);
// }
// else{
//     console.log("dont have email")
// }

const userEmail = []

if(userEmail.length === 0){
    console.log("Array is empty")
}
// falsy value = false, 0, -0, bigInt, 0n, null, undefined, NaN;
//other than this all are truthy value

// truthy value = "0", 'false', " ", [], {}, function(){};

const myobj = {}

if(Object.keys(myobj).length === 0){
    console.log("Object is empty");
    
}

// Nullish coalesing operator (??)   alwys usefor null data and gives first data

let val1 ;

// val1 = 5 ?? 10
// val1 = null ?? 10  
// val1 = null ?? 5 ?? 10   alwys return the first data recieved 
// val1 = null ?? undefined    undefned
// val1 = null ?? null         null
val1 = null ?? 10 ?? 5

console.log(val1);


// terniary operator  ?

// syntax  condition ? true : false 

const IceteaPrice = 100;

IceteaPrice <= 80 ? console.log(`Less than 80`): console.log(`more than 80`);

