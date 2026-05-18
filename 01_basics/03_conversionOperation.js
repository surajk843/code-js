let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


/*
number => 33 = 33
"33abc" => NaN but is number after conversion
string => "33" = 33 
boolean => true = 1; false = 0;
null => typeof = object value = 0
undefined => undefined value = NaN
*/

let IsLoggedIn = undefined

let IsbooleanLoggedIn = Boolean(IsLoggedIn)
console.log(IsbooleanLoggedIn);
/*
number < 0 ; string => true
empty string "" => false
0 ; undefined ; null => false
*/

let someNumber = 45
let someString = String(someNumber)
console.log(someString);
console.log(typeof someString);

/*
string => all types in strinf and gives all the value same 
*/