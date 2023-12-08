// const personMethort = {
//     eat(){
//         console.log("Person is eating")
//     },
//     sleep(){
//         console.log("Person is sleeping")
//     }
// }

// function funName (name,age){
//     let Person = {};
//     Person.name = name;
//     Person.age = age;
//     Person.eat = personMethort.eat;
//     Person.sleep = personMethort.sleep;
//     return Person;
// }

// let sakib = funName("Mahin", 19)
// sakib.eat()
// console.log(sakib)








// Object.create
// function funName (name,age){
//     let Person = Object.create(funName.prototype);
//     Person.name = name;
//     Person.age = age;
//     return Person;
// }

// funName.prototype ={
//     eat(){
//         console.log("Person is eating")
//     },
//     sleep(){
//         console.log("Person is sleeping")
//     }
// }

// let sakib = funName("Mahin", 19)
// sakib.eat()
// console.log(sakib)






// new < object
// function funName (name,age){
//     this.name  = name;
//     this.age  = age;
// }

// funName.prototype ={
//     eat(){
//         console.log("Person is eating")
//     },
//     sleep(){
//         console.log("Person is sleeping")
//     }
// }

// let sakib = new funName("Mahin", 19)
// let antor = new funName("Mahin", 19)
// sakib.eat()
// console.log(sakib)





// constractor function
class person{
    constructor(name,age){
        this.name = name;
        this.name = age;
    }
    eat(){
        console.log("Person is eating")
    }
    sleep(){
        console.log("Person is sleeping")
    }
}

let sakib = new person()
sakib.eat()
let antor = new person()
sakib.sleep()

console.dir(person)
