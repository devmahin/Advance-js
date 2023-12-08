//--------------------closure-------------------// 



//     (function (){
//     let num1 = 10;
//     let sum = function (){
//     let num2 = 20;
    
//         return function(){
//             return  num1
//         }
//     }
    
//     let test = sum()
//     console.dir(test)
//    })()



// (
//     function(){
        
// let num1 = 5;
// let num2 = 2;

// const sum = function (){
//     return num1 + num2
// }
// console.log(sum())
// console.dir(sum)

// num1 = 5;
// num2 = 10;

// console.log(sum)
//     }
// )()










// // var num1 = 5;
// // var num2 = 2;

// let num1 = 5;
// let num2 = 2;


// const sum = function (){
//     return num1 + num2
// }
// console.dir(sum)





// function stopWatch(){
//     let startTime = Date.now()
//     function getDelay (){
//         console.log(Date.now() - startTime)
//     }
//     return getDelay
// }

// let timer = stopWatch()

// for(i=0; i<100000; i++){
//     let a = Math.random() * 10046460;
// }

// console.dir(timer)


// var num;
// function asyne (){
//     num = 20;
//     function myfun (){
//         console.log(num)
//     }
//     setTimeout(myfun, 1000);
//     console.dir(myfun)
// }
// asyne()
// num = 30;




// function feh (url){
//     fetch(url).then((val) => {
//         console.log(val)
//     })
// }
// feh("https://jsonplaceholder.typicode.com/todos/1")
// console.log("I am here")








// var num1 = 10;
// function closour(){
//     var num2 = 20;

//    return  function closour2(){
//         return num1 + num2
//     }
// }
// let clo = closour()
// console.dir(clo)










//--------------------------------------------// prototype

// const personMethod = {
//     eat(){
//         console.log("Peson is eating")
//     },
//     sleep(){
//         console.log("Peson is sleeping")
//     },
//     play(){
//         console.log("Peson is playing")
//     }
// }

// function person(name,age){
//     let Person = Object.create(personMethod)
//     Person.name = name;
//     Person.age = age;
//     return Person;
// }
// // user1
// const firstMan = person("mahin",12)
// firstMan.eat()
// firstMan.sleep()
// firstMan.play()

// // user2
// const secondMen = person("Adib",14)
// secondMen.eat()
// secondMen.sleep()
// secondMen.play()


// ------------- 222

// function test(){

// }
// console.dir(test)




// -------------3333---------prototype------



function person(name,age){
    let Person = Object.create(person.prototype)
    Person.name = name;
    Person.age = age;
    return Person;
}
person.prototype = {
    eat(){
        console.log("Peson is eating")
    },
    sleep(){
        console.log("Peson is sleeping")
    },
    play(){
        console.log("Peson is playing")
    }
}

// user1
const firstMan = person("mahin",12)
firstMan.eat()
firstMan.sleep()
firstMan.play()

// user2
const secondMen = person("Adib",14)
secondMen.eat()
secondMen.sleep()
secondMen.play()

