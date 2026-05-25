// const num = [1,2,3,4]
// using reduce method
// const mytotal = num.reduce((acc , item) =>(acc + item), 0 )
// console.log(mytotal);


// using real life example
const ShoppingCart = [
    {
    itemName : "java",
    price : 299
    },
    {

    itemName : "cpp",
    price : 199
    },
    {

    itemName : "python",
    price : 999
    }
]


const myTotal = ShoppingCart.reduce((acc , item ) => acc + item.price, 0)
console.log(myTotal);
