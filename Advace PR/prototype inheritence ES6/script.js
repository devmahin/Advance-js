/////////////prototype inheritance
// function Person (name,age){ 
//     //parentclass
//     this.name = name;
//     this.age = age ;
// }

// function Cricketer(name,age,type,country){
//      ///sub class
//     Person.call(this)
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
// }

// Person.prototype = {
//     eat : function (){
//         console.log(`${this.name} is eatting`)
//     }
// }
// Cricketer.prototype = Object.create(Person.prototype)
// Cricketer.prototype.constructor = Cricketer;

// let sakib = new Cricketer("mahin", 19, "All rounder", "Bangladesh")
// sakib.eat()




///////////////class constructor

class Person {
    constructor(name,age){
        this.name = name;
        this.ages = age;
    }
    eat(){
        console.log(`${this.name} is eatting`)
    }
}


class Cricketer extends Person{
    constructor(name,age,type,country){
        super(name,age)
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    age(){
        console.log(`${this.age} years old.`)
    }
}


let mahin = new Cricketer("Mahin", 13, "All rounder", "Bangladeh");
mahin.age()