const worker = new Worker("worker.js")
const color = document.querySelector(".color")
const calculate = document.querySelector(".calculate")

calculate.addEventListener("click", () => {
    worker.postMessage("Hello worker")
    worker.onmessage = function (mess){
    console.log(`Worker has started working .....`)
        console.log(` The total is ${mess.data}`)

    }
// let total = 0;
// for(let i = 0; i<1000000000; i++){
//     total += i;
// }

// console.log(`The total is ${total}`)

})



color.addEventListener("click",(cl) => {
    if(document.body.style.background !== "green"){
        document.body.style.background = "green";
    }else{
        document.body.style.background = "red";
    }
})