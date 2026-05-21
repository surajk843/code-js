// Imediately Invoked Functions Expression

// function coffee(){                      for normal calling of function 
//     console.log(`DB CONNECTED`);
    
// }
// coffee()

// for iife 

(function coffee() {
    console.log(`IIFE CODE in parenthesis`);
    
})();

//()(); first for the functions and second for the execution 

(function chai(){
    console.log(`executing of second iife `);
    
})();

// (() => {}) ();  syntax for arrow function in iife

(() => {
    console.log(`IIFE in arrow function`);
    
}) ();

// for arguments 
((name) => {
    console.log(`IIFE with arrow function and arguments ${name}`);
    
})(`Suraj`)
