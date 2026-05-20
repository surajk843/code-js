

const mySym = Symbol("mySymbol");

const jsUser ={
    name: "John",
    email: "john@example.com",
    age: 30,
    [mySym]: "This is a symbol property",
    isAdmin: true,
    "likes birds": true 
}
console.log(jsUser.email);
console.log(typeof jsUser[mySym]);

jsUser.email = "john@chatgpt.com";
console.log(jsUser.email);
// Object.freeze(jsUser);
jsUser.email = "John@microsoft.com"
console.log(jsUser.email);

console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello, I am jsUser");
    
}

console.log(jsUser.greeting());
