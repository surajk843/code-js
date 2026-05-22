const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = myNums.map((num) => { return num + 10} )
// console.log(newnums);

// use of double map()

const newnums = myNums
                    .map((num) => num * 10) // 1st map()
                    .map((num) => num + 1)  // 2nd map()
                    .filter((num) => num > 40)   // add filter
console.log(newnums);

