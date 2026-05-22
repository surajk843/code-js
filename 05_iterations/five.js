// const coding = ["js", "java", "py", "cpp","rb"]

// const values =  coding.forEach( (item) => {
//     console.log(item);
//     return item
    

// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbs = myNums.filter( (num) => num > 4) // print without use of for loop
// console.log(newNumbs);

// print with for loop

const newNumbs = []

myNums.forEach((num) => {
    if (num > 4) {
        newNumbs.push(num);   
    }
})

// console.log(newNumbs);

const books = [
  {
    title: "Shadow of the Moon",
    genre: "Fantasy",
    publish: 2018,
    edition: "2nd"
  },
  {
    title: "Digital Fortress",
    genre: "Thriller",
    publish: 2020,
    edition: "1st"
  },
  {
    title: "Ocean Whispers",
    genre: "Romance",
    publish: 2015,
    edition: "3rd"
  },
  {
    title: "The Last Algorithm",
    genre: "Science Fiction",
    publish: 2022,
    edition: "1st"
  },
  {
    title: "Hidden Truths",
    genre: "Mystery",
    publish: 2017,
    edition: "4th"
  },
  {
    title: "Echoes of Time",
    genre: "Historical Fiction",
    publish: 2019,
    edition: "2nd"
  },
  {
    title: "Mind over Matter",
    genre: "Self-Help",
    publish: 2021,
    edition: "5th"
  },
  {
    title: "Code Breakers",
    genre: "Technology",
    publish: 2016,
    edition: "1st"
  },
  {
    title: "Silent Horizon",
    genre: "Adventure",
    publish: 2014,
    edition: "3rd"
  },
  {
    title: "Crimson Streets",
    genre: "Crime",
    publish: 2023,
    edition: "1st"
  }
];

// let userBooks = books.filter((bk) => bk.genre === "Crime" ) 

userBooks = books.filter((bk) => {
     return bk.edition === "1st" && bk.publish >= 2010
    
})
console.log(userBooks);
