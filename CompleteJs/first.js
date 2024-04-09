//      ***  Basic Program ***
// syntax : rules
console.log("..Hello World!");
console.log("Neetu Jangid");

console.log("***********************************************");
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

console.log("***********************************************");
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

console.log("****************************************************");
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

console.log("**********************************************************");
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
    id, follower, posts, name, following
*/
const profile = {
    userName: "Neetu",
    id: "neetujangid",
    follower: 230,
    following: 200,
    post: 45
};
console.log(profile);

console.log("******************************************************");
/* Comments : 
    1.single line comment
    2.multi line comment
*/
// this is a single line comment
/*
    this is a multi line comment
*/ 

console.log("******************************************************");
/* Operators :-
        1.Arithmetic operators : (+, -, *, /, modulus, exponentiation, increment, decrement)  
        2.Assignment operators : (=, +=, -=, *=, %=, **=)  
        3.Comparison operators : (==, ===, !=, !==, >, <, <=, >=)
        4.Logical operators    : (&&, ||, !)
*/
// Arithmetic operators 
let num1 = 20;
let num2 = 10;
console.log("A = ",num1,"B = ",num2);
console.log("A + B = ",num1 + num2);
console.log("A - B = ",num1 - num2);
console.log("A * B = ",num1 * num2);
console.log("A / B = ",num1 / num2);
console.log("A % B = ",num1 % num2);    // remainder
console.log("A ** B = ",num1 ** num2);  // power

// unary operators : ++,--
console.log("A = ",num1,"B = ",num2);
console.log("A++ = ",num1++);           // post increment
console.log("A-- = ",num1--);
console.log("++A = ",++num1);           // pre increment
console.log("--A = ",--num1);

console.log('');

// Assignment Operators
let n1 = 10;
let n2 = 10;
console.log("NumberOne : ",n1,"NumberTwo : ",n2);

n1 += 4;
console.log("n1 += 4 -> ",n1);  // 14
n2 = n2 + 4;
console.log("n2 += 4 -> ",n2);  // 14
n1 -= 4;
console.log("n1 -= 4 -> ",n1);  // 10
n1 *= 4;
console.log("n1 *= 4 -> ",n1);  // 40
n1 %= 4;
console.log("n1 %= 4 -> ",n1);  // 0
n2 **= 4;
console.log("n2 **= 4 -> ",n2);  // 38416

console.log('');

// Comparison Operators
let a1 = 5;
let b1 = 10;

console.log("NumberOne : ",a1,"NumberTwo : ",b1);
console.log("a1 === b1 --> ", a1 === b1);   // check data type and value
console.log("a1 == b1  --> ", a1 == b1);    // check value only
console.log("a1 != b1  --> ", a1 != b1);
console.log("a1 !== b1 --> ", a1 !== b1);
console.log("a1 > b1   --> ", a1 > b1);
console.log("a1 < b1   --> ", a1 < b1);
console.log("a1 <= b1  --> ", a1 <= b1);
console.log("a1 >= b1  --> ", a1 >= b1);

console.log('');

// Logical Operators
let aa1 = 6;
let bb1 = 5;
let condition1 = aa1 > bb1;     // true
let condition2 = aa1 == bb1;    // false

console.log("NumberOne : ",aa1,"NumberTwo : ",bb1);
console.log("Condition One = ",condition1);
console.log("Condition Two = ",condition2);

console.log("condition1 && condition2  -> ", condition1 && condition2);
console.log("condition1 || condition2  -> ", condition1 || condition2);
console.log("!condition1 -> ", !condition1);
console.log("!condition2 -> ", !condition2);

console.log('');

console.log("*******************************************************");
// Conditional statements
// if statement
let userAge = 17;
if(userAge >= 18){
    console.log("You can vote.");
}
if(userAge < 18){
    console.log("You can not vote.");
}

// if-else statement
let mode = "dark";
let color;

if(mode === "dark"){
    color = "black";
} else{
    color = "white";
}
console.log("Color is : ",color);

// Practice 3 : find number is even or odd 
let numm = 10;
console.log("Number : ",numm);
if(numm % 2 == 0){
    console.log("Number is even.");
} else {
    console.log("Number is odd.");
}

// else-if statements
let $mode = "dark";
let $color;

if($mode === "dark"){
    $color = "black";
} else if($mode === "light"){
    $color = "white";
} else if($mode === "blue"){
    $color = "blue";
} else {
    $color = "pink";
}
console.log("Color is : ",$color);

if(mode === "dark") console.log(mode);  // this is second syntax 

console.log("*******************************************************");
// Ternary Operator
// simpler , compact if-else

let user_age = 19;
(user_age > 18) ? console.log("adult") : console.log("not adult");

let fn = 19;
let sn = 40;
(fn > sn) ? console.log("Greatest number is ",fn) : console.log("Greatest number is ",sn);

console.log("*******************************************************");
// Switch statements

const userNumber = 4;
switch(userNumber){
    case 1: console.log("One");
        break;
    case 2: console.log("Two");
        break;
    case 3: console.log("Three");
        break;
    case 4: console.log("Four");
        break;
    default:   console.log("another number");
        break;
}

console.log("*******************************************************");
// Input from user in compile time

alert("Hello"); // one time popup

let user_name = prompt("Enter user name : ");    // input from user
console.log("User name : ",user_name);

// Practice 4 : Get user to input a number using prompt ("Enter a number : "). Check if the number is a multiple of 5 or not.
let user_number = prompt("Enter a number : ");
if (user_number % 5 == 0){
    console.log(user_number,"is a mulitple of 5");
}
else {
    console.log(user_number, "is not a multiple of 5");
}

/* Practice 5 : Write a code which can give grades to students according to their scores.
    80 - 100,   A
    70 - 89,    B
    60 - 69,    C
    50 - 59,    D
    0  - 49,    F
*/
let score = prompt("Enter your score (0 - 100) : ");
if(score>=80 && score<=100){
    console.log("Grade A");
} 
else if(score>=70 && score<=89){
    console.log("Grade B");
} 
else if(score>=60 && score<=69){
    console.log("Grade C");
} 
else if(score>=50 && score<=59){
    console.log("Grade D");
} 
else if(score>=0 && score<=49){
    console.log("Grade F");
}

console.log("*******************************************************");