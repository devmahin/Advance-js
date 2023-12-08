////inplicit binding
// const myFun = function (name,age){
//     return{
//         name : name,
//         age : age,
//         prientName  : function (){
//             console.log(this.name)
//         },
//         father : {
//             name : "Mr . Babul Howlader",
//             prientName : function (){
//                 console.log(this.name)
//             }
//         }
//     }
// }

// let sakib = myFun("Mahin", 20)
// sakib.prientName()


// sakib.father.prientName()










////==================================explicit binding

// let prientName = function (v1,v2,v3){
//     console.log(`${this.name} is ${v1} ${v2} & ${v3}`)
// }

// const rakib ={
//     name : "mahin",
//     age : 20,
// }
// let v1 = "Hand some"
// let v2 = "All rounder"
// let v3 = "Best player"
// let v = [v1,v2,v3]
// // prientName.call(rakib, v1,v2,v3)
// let newFUn = prientName.bind(rakib, v1,v2,v3)
// newFUn()








////==================================new binding

// function newBinding(name,age){
//     this.name = name;
//     this.age = age;
//     console.log(`${this.name} is ${this.age} years old`)
// }

// let adib = new newBinding("mahin", 19);



////==================================Window bunding
"use strict"
const windowObj = function (){
    console.log(this.name)
}
let sakib = {
    name : "Mahin",
    age : 19,
}
// windowObj.call(sakib)
windowObj()