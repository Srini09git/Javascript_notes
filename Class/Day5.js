//loops 
//For loop

//Syntax (For loop)
// for (initialzation , Condition, increment){
// }

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)


// for (let i = 0; i<=10; i++){
//     console.log(i)
// }


//============================================

// console.log("janani")
// console.log("janani")
// console.log("janani")
// console.log("janani")
// console.log("janani")

// for(let i = 0; i <= 5; i++){
//     console.log(i, "janani")
// }

//==========================================================
// console.log(2)
// console.log(4)
// ...etc

// for(let i=2; i <= 10; i+=2) {
//     console.log(i)
// }
// ==>2
// i+=2 => i = 2 + 2 = 4 ==> 4
// i+=2 => i = 4 + 2 = 6 ==> 6
// i+=2 => i = 6 + 2 = 8 ==> 8
// i+=2 => i = 8 + 2 = 10  ==> 10

//condi => false

//=====================================
// for(let i = 10; i >= 1; i--){
//     console.log(i)
// }


//============================================

// let number = 5

// for( let i = 1; i<=10; i++){
//     console.log(number * i)
// }


//=================================================
// output : 10,8,6,4,2,0

// for(let i = 10; i >= 0; i-=2){
//     console.log(i)
// }

//==============================================
// Challenge
// Without using i += 2, print:

// 2
// 4
// 6
// 8
// 10

// Use a normal i++ and think about how you can use a condition inside the loop.

// for(){
//     if(){
//     }
// }

// for(let i = 2; i<=10; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

//==========================================================
//while loop check the condition First

// let i = 10; //in

// while(i<=5){
//     console.log(i)
//     i++
// }

// //do.. while runs the code first , then checks the condition

// let x = 10;

// do{
//     console.log(x);
//     x++;
// }
// while(x<=5);

//break stop the loop immediately

// for( let i =1; i<=10; i++){
//     console.log(i)

//     if( i === 5){  // 5 === 5 => STOP
//         break;
//     }
// }

//continue skip the cureent loop and go to the next 

for( let i =1; i<=5; i++){
    if(i === 3){
        continue;
      
    }
    console.log(i)
}