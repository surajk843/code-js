// dates
// let Mydate = new Date()
// console.log(Mydate);

// console.log(Mydate.toString());
// console.log(Mydate.toDateString());
// console.log(Mydate.toISOString());
// console.log(Mydate.toJSON());
// console.log(Mydate.toLocaleString());


let myCreatedDate = new Date()
// console.log(myCreatedDate.toLocaleString(2023,5,6,4,8));

let mytime = Date.now()
// console.log(mytime);

// console.log(myCreatedDate.getTime());

// console.log(Math.round(Date.now()/60000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getTimezoneOffset());

console.log(newDate.getDay());

console.log(
  newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })
);