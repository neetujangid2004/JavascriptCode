console.log("Neetu");

// ********* Variables ******* 

const accountId = 8852;
let accountEmail = "jangidneetu@gmail.com";
var accountPassword = "1234";
accountCity = "Ajmer";
let accountState;       // value undefined 

// accountId = 2;   // not allowed 

accountEmail = "neetujangid@gmail.com";
accountPassword = "4321";
accountCity = "Jaipur";

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);