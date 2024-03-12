// ******** Datatype Summary *********

/* # Primitive datatype - call by value ( copy refrence not real value )
        7 types :-
            string, Number, Boolean, null, undefined, Symbol, BigInt
*/
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('Neetu');
const anotherId = Symbol('Neetu');
console.log(id == anotherId);

const bigNumber = 1234567890234556n;
console.log(typeof bigNumber);  // bigInt

/*
    # Reference ( Non-primitive )
        Array, Objects, Function
*/
const heros = ["Prakash", "Rajendra", "Yogesh"];
let myObj = {
    name: "Neetu",
    age: 19,
}
console.log(heros[0]);
console.log(myObj.name);
const myFunction = function(){
    console.log("Hello world");
}
myFunction();

console.log(typeof id);     // symbol
console.log(typeof heros);  // object

console.log("***************************");
// Stack ( primitve )  , Heap ( Non-primitive )
let number = 1234;
let number2 = number;
number2 = 234;
console.log(number);
console.log(number2);

let userOne = {
    email: "Jangidneeut",
}
let userTwo = userOne;
console.log(userOne.email);

userTwo.email = "Neetujangid";
console.log(userOne.email);
console.log(userTwo.email);