if (true) {
    let a = 10 
    const b = 20
    var c = 30
    // console.log("Inner let :", a);
    // console.log("Inner const :", b);
    
    
}
//console.log("Outter var",c);
// console.log(a);   shows error because of outside scope


function one() {
   const username = "Suraj"

   function two() {
      const ID = 101
    //   console.log(`Username is :`, username);
   }

   // console.log(`User id is :`, ID);

   two()
}

one()


if (true){
    const username1 = "Suraj"


    if (username1 === "Suraj"){
       const website = ".com"
       console.log(username1 + website); 
     }
    //  console.log(website); accessing outside the child scope 
     
}
// console.log(username1); accessing outside the parent scope 
