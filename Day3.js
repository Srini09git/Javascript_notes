//JavaScript Operators

// Here is a list of different JavaScript operators you will learn in this tutorial:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Bitwise Operators
// String Operators
// Miscellaneous Operators


//===========================================================================

//Arithmetic Operators

// let x = 5; //6 - 1 = 5

// addition operator

// console.log(x + 3) // 8
// console.log(x - 3) // 2
// console.log(x * 3) // 15
// console.log(x / 3) //1.6666666666666667
// console.log(x % 3) //2
// //console.log( ++x) // x => 5 => ++x => 5 => 6 //6
// //console.log( --x) // x crutly is update to 6 => --x 6 - 1 => 5
// console.log( x ** 4)


//===========================================================================
//Assignment Operators

// let a = 19
// a += 9 // a = 10 + 9 => a = 19
// console.log(a) //19

// a += 1 // a = a + 1=> 19 +1 => 20
// console.log(a) //20


//=============================================================================
// Comparison Operators

//= , == , ===
// ==  => equal to operator
// !=  => Not equal oprator
//console.log ( 2 != 2)// true !true => false

//console.log( 3 > 3) // greater
//console.log( 4 < 3) //less

// greater than or equal to operator
//console.log(3 >= 3)
//console.log(2 <= 2)








// == vs === in JavaScript

// Both are used to compare two values, but they work differently.

// 1. == — Loose Equality

// == checks the value and can convert the data type if needed.

// 2. === — Strict Equality

// === checks both value AND data type.

// let a = 10
// let b = "10"

// console.log(a == b)
// console.log(a === b)
// console.log(a !== b) // false => !false = > true

// 10   → number
// "10" → string


//=====================================================================================================================
//4. JavaScript Logical Operators

//&& - logical AND => both conditions must be true
// false = 0
// true = 1 

// let age = 20;
// let hasID = true; 
// console.log( age >= 18 && hasID) // 0 && 1


// || - Logical OR => at least one condition must be true

// let age = 18
// let hasPermission = false

// console.log ( age >= 18 || hasPermission) // 1 || 0 =>true 

//! - logical NOT

// let isloggedIn = true
// console.log(!isloggedIn) // true => !true => false