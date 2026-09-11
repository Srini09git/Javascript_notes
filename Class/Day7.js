// function add(a, b) {
//     return a + b;
// }
// (){}

// const add = (a, b) => a + b;
// =()=>{}

// arrow funtion

// 1. Normal Function

// A normal function is written using the function keyword.

// function add(a, b) {
//     return a + b;
// }

// let result = add(10, 20);

// console.log(result);


// const add = ( a , b ) => {
//     return a + b;
// }

// let result =add(10, 20)
// console.log(result)

//================================

//no parameters
//NF

// function sayHello(){
//     console.log("hello")
// }
// sayHello()

// //AF
// const SayHello = () => console.log("hello Arrow")

// SayHello()

//================
// function square(number){
//     return number * number
// }

// console.log(square(5))

// const Square = (Number) => Number * Number

// console.log(Square(5))

//============================================================

// callback function

// function Say(){
//     console.log("Hello keerthana")
// }

// function execute(callback){
   
//     callback()
    
// }

// execute(Say)



//================
// function Say(){
//     console.log("Hello keerthana")
// }

// function execute(callback){
//     console.log("hello Janani")
//     callback()
//     console.log("hello shasini")
// }

// execute(Say)


//===============================================
//callback 1 func
// function finished(){
//     console.log("Work finished")
// }

// function doWork(callback){
//     console.log("Doing Work")

//     callback()
// }

// doWork(finished)


//===============================================

//callback call 2 func

// function finished(){
//     console.log("Work finished")
// }
// function hold(){
//     console.log("break ")
// }
// function doWork(callback1, callback2){
//     console.log("Doing Work")

//     callback1()
//     callback2()
// }

// doWork(finished, hold)

//========================================================
//callback with data

// function showmark(result){
//     console.log("Mark :", result)

// }

// function calculate(a , b, callback){
//     let result = a + b
//     callback(result)

// }
// calculate(10, 20 ,showmark)

// calculate(10, 20, showResult)
//              ↓
//           10 + 20
//              ↓
//             30
//              ↓
//      callback(30)
//              ↓
//       showResult(30)
//              ↓
//        Result: 30


//========================================================

//function1(40) <= function2 (30) <= function3 (20) <= function4 (10)
// (40)
