const user = {
    username: "Suraj",
    price: 999,

    welcomeMessage: function(){
       // console.log(`${this.username}, welcome to the website`);
        // console.log(this);   we can s=access any variableonly with this keyword

        
    }
}

// user.welcomeMessage()
// user.username = "sam"   this changes the name 
// user.welcomeMessage()


// console.log(this);


// function chai(){
//     let userName = "Suraj Kanojiya"
//     console.log(this.userName);
    
// }
// chai()   // this gives all the information when accessed outside he function

// const chai = function(){            this is normal function which gives undefined
//     let userName = "Suraj Kanojiya"
//   console.log(this.userName);
//}

const chai = () => {
    let userName = "Suraj Kanojiya"
  console.log(this.userName);

}
// chai()

//() => {}   // basic syntax for array function

// const addone = (num1, num2) => {       //this is known as explicit return
//     return num1 + num2 ;

// } 
// console.log(addone(3,4))

//const addone = (num1, num2) => num1 + num2 // implicit return
// const addone = (num1, num2) => (num1 + num2) // implicit return
const addone = (num1, num2) => ({username2: "Suraj"})

console.log(addone(4,5));
