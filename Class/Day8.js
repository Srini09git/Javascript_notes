//scope (gobal/function , block)

// let outside ="I am Outside"

// if(true){
//     let inside ="I am Inside"


//     console.log(outside)
//     console.log(inside)
// }
// console.log(outside)
// console.log(inside)

//let with loop
//for(let i=1; i<=5; i++){
    //console.log(i)
//}
//console.log(i)

//var with loop

// for(var i=1; i<=5; i++){ 
//     //console.log(i) // 1 2 3 4 5
// } 
// console.log(i) // 6
//=======================================
// const name ="angel"

// if(true){
//     const age= 25

//     console.log("B.",name)
//     console.log(age)
// }

// console.log("G.",name)


// VARIABLES
// │
// ├── var
// │   ├── value can change ✅
// │   ├── redeclare ✅
// │   └── block scope ❌
// │
// ├── let
// │   ├── value can change ✅
// │   ├── redeclare ❌
// │   └── block scope ✅
// │
// └── const
//     ├── reassign ❌
//     ├── redeclare ❌
//     └── block scope ✅



//==================================================================================
//for..of loop

// let fruits = ["Apple","Banana","Mango"] //array

// console.log(fruits)
// for(let removefruits of fruits){ // let remove of varname => remove call 
//     console.log(removefruits)
// }

//for..in loop //object

// let student ={
//     name:"Vishnu",
//     age:22,
//     course:"UI/UX",
//     role:"web designer"
// }
// for(let key in student){
//     console.log(key)
// }

//

// let student ={
//     name:"Vishnu",
//     age:22,
//     course:"UI/UX",
//     role:"web designer"
// }
// for(let key in student){
//     console.log(key ,student[key])
// }


//============================================
//Nested Obj

let person = {
    name:"Mani", 
    age:"23", 
    address:{ 
        city:"Chennai",
        state:"TamilNadu"
    }
}

for(let key in person){
    if(typeof person[key] === "object"){
        for(let nestedkey in person[key]){
            console.log(nestedkey, ":", person[key][nestedkey]) //{city:"chennai"}
        }
    }
    else{
        console.log(key,":",person[key])
    }
}

// person
// │
// ├── name → "Srini"
// ├── age  → 25
// │
// └── address
//      │
//      ├── city  → "Chennai"
//      └── state → "Tamil Nadu"