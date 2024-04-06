//      ***  Basic Program ***
console.log("..Hello World!");
console.log("Neetu Jangid");

console.log("**************************");
//      *** Variable ***
let age = 19;
name = "Neetu Jangid";
console.log(name);
price = 99.99;
x = null;
y = undefined;
console.log(y);
isFollow = false;
console.log(isFollow);

fullName = "Prakash";
_fullName = "Neetu";
$fullName = "Love";
full_Name = "Anna";

console.log("**************************");
// *** let , var & const ***
var number = 23;
var number = 45;
var number = 67;
console.log(number);

let anotherNumber = 34;
// let anotherNumber = 67;    error : can not re-declared 
anotherNumber = 90;
console.log(anotherNumber);

const PI = 3.24;
// PI = 32;     error : can not change the value
console.log(PI);

{
    let a = 5;
    console.log(a);
}
{
    let a = 10;     // re-declared in block
    console.log(a);
}

console.log("**************************");
/*  Data Types :-
            1.Primitive data type
            2.Non-primitive data type
*/
// primitive data type
let num = 34;
console.log(typeof num);        // number

let str = "Jangid";
console.log(typeof str);        // string

let isFalse = false;
console.log(typeof isFalse);    // boolean

let z;
console.log(typeof x);          // object

let hh = null;
console.log(typeof hh);         // object

let b = BigInt("1234");
console.log(typeof b);          //bigint

let n = Symbol("Hello");
console.log(typeof n);          // symbol

// Non-primitive data type
const student = {               // object
    fullName: "Neetu",
    age : 19,
    cgpa: 8.2,
    isPass: true
};
console.log(student.age);
student["age"] = student["age"] + 1;
console.log(student.age);

console.log("**************************");
/* Practice Q.1 : Create a const object called "product" to store information. 
    Pen : name, rating, offer, price 
*/
const product = {
    name: "ball pen",
    rating: 4,
    offer: 5,
    price: 270
};
console.log(product);

/* Practice Q.1 : Create a const object called "profile" to store information. 
    id, follower, posts, name
*/
const profile = {
    name: "Neetu",
    id: "neetujangid",
    follower: 230,
    post: 45
};
console.log(profile);

console.log("**************************");
/* Operators 
        1.Arithematic operators : +,-,*,/,modulo,increment,decrement,exponant(2**2)
*/
let num1 = 20;
let num2 = 10;
console.log("A + B = ",num1 + num2);
console.log("A - B = ",num1 - num2);
console.log("A * B = ",num1 * num2);
console.log("A / B = ",num1 / num2);
console.log("A % B = ",num1 % num2);
console.log("A ** B = ",num1 ** num2);
console.log("A++ = ",num1++);
console.log("A-- = ",num1--);
console.log("++A = ",++num1);
console.log("--A = ",--num1);

console.log("**************************");