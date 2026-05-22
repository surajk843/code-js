// for loop 

// for (let i = 0; i <= 10; i++) {            // normal loop
//     const element = i;
//     console.log(element);
    
//     cd
// }

// nested loops

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
        
        
    }
    
}

let Heroes = ["batman", "spiderman", "Superman", "ironman"]
//console.log(Heroes.length);

for (let index = 0; index < Heroes.length; index++) {
    const element = Heroes[index];
    //console.log(element);
    
    
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected value 5`);
        continue
        
    }
    console.log(`The value of i is ${index}`);
    
    
}