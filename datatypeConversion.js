// ------> Data type Conversion <---------
// for string 
let score = "33";
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof score);          // string
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);         // 33

// long string 
let score1 = "33abc";
let valueInNumber1 = Number(score1);
console.log(typeof score1);          // string
console.log(typeof valueInNumber1);  // number
console.log(valueInNumber1);         // NaN

// for null value
let score2 = null;
let valueInNumber2 = Number(score2);
console.log(typeof score2);          // object
console.log(typeof valueInNumber2);  // number
console.log(valueInNumber2);         // 0

// for undefined 
let score3 = undefined;
let valueInNumber3 = Number(score3);
console.log(typeof score3);          // undefined 
console.log(typeof valueInNumber3);  // number
console.log(valueInNumber3);         // NaN

// for boolean value 
let score4 = true;
let valueInNumber4 = Number(score4);
console.log(typeof score4);          // boolean
console.log(typeof valueInNumber4);  // number
console.log(valueInNumber4);         // 1

/*  
    "33"     -> 33
    "33abc"  -> NaN
    true     -> 1
    false    -> 0
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);     // true 

let isLoggedIn1 = "";
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1);     // false

let isLoggedIn2 = "Neetu";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2);     // true 

/*
    1        -> true
    0        -> false
    ""       -> false
    "neetu"  -> true
*/

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);   // string 
console.log(stringNumber);          // 33