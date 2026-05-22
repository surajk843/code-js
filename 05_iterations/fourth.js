const coding = ["js", "java", "py", "cpp","rb"]


// printing normal functions
coding.forEach( function (val){
    // console.log(val);
    
})

// printing arrow funtions

coding.forEach( (greet) => {
    // console.log(greet);
    
})

// printing direst using function reference

function printMe(item){
    //console.log(item);
    
}

//coding.forEach(printMe)


// printing of arrow functions directly using reference

// coding.forEach((item) => {
//     console.log( item);
    
// })

// we can have different type accessible for array like
coding.forEach((item, index, array) => {
    // console.log( item, index, array);
    
})

// coding using multiple object in array 

const myCoding = [
    {
        language: "javascript",
        code: "js",
    },
    {
        language: "python",
        code: "py",
    },
    {
        language: "java",
        code: "java",
    },
]

myCoding.forEach((tech) => {
    console.log(tech.language, tech.code);// printing both keys
    
})

