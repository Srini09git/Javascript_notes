// function add(a, b) {
//     console.log( a + b)
// }
// function sub(a, b) {
//     console.log( a - b)
// }
// function mul(a, b) {
//     console.log( a * b)
// }
// function div(a, b) {
//     console.log( a / b)
// }


// mul(10, 20)


// function calculatePrice(price, tax){
//     return price + tax
// } 

// let total1 =calculatePrice(100, 18)
// console.log(total1)
// let total2 =calculatePrice(10, 18)
// console.log(total2)

//======================================================
//simple function 

// function sayhello() {
//     console.log("hello")
// }
// sayhello() 

// function → tells JavaScript we're creating a function
// sayHello → function name
// () → parameters go here
// {} → function code
// sayHello() → calls the function


// function with parameter

// function fname(name){
//     console.log("Hello " + name)
// }

// fname("Janani")
// fname("Vika")

// // function with two parameters

// function add(a,b){
//     console.log(a + b)
// }
// add(5 , 2);
// add(3, 9)


// //function with return

// function add( a , b){
//     return a + b
// }
// let result = add(10,20)

// console.log(result)  // 10 + 20 => add() => 30 -> result => console call 30 


// function add(a, b) {
//     return a + b;
// }
//         ↓
//    Function created
//         ↓
// add(10, 20)
//         ↓
//    a = 10
//    b = 20
//         ↓
//    a + b
//         ↓
//    10 + 20
//         ↓
//       30
//         ↓
//    return 30
//         ↓
// let result = 30
//         ↓
// console.log(result)
//         ↓
//       30



//====================================================================================

//fuction with if.. else

// function checkAge(age){
//     if(age >=18){
//         console.log("adult")
//     }
//     else{
//         console.log("Not adult")
//     }
// }

// checkAge(20);
// checkAge(15);

//====================================

//function with even/ odd

// function checkNumber(number){
//     if (number % 2 === 0){
//         console.log(number ,"even")
//     }
//     else{
//         console.log(number ,"odd")
//     }
// }
// checkNumber(10)

// checkNumber(7)

//==========================================================

// function printnumber(num){
//     for(let i = num; i<=5; i++){
//         console.log(i)
//     }
// }
// printnumber(2)


//===========================================================
//function with muliple operation



function calculate(a , b){
    let sum = a + b
    let sub = a - b
    let mul = a * b

    console.log(sum);
    console.log(sub);
    console.log(mul)
    

}
calculate(10 , 5)