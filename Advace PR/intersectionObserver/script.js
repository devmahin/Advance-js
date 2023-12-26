// const circle = document.getElementById("circle")

// const observer = new IntersectionObserver((items) => {
//     items.forEach((item) => {
//         // console.log(item)
//         if(item.isIntersecting){
//         console.log(`${item.target} is visible`)
//         }else{
//             console.log(`${item.target} is not visible` )
//         }

//     })

// },{
//     threshold : 0.5,
// })
// observer.observe(circle)

const circles = document.querySelectorAll("div")

const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
        // console.log(item)
        if(item.isIntersecting){
            item.target.classList.add("visible")
        }else{
            item.target.classList.remove("visible")
        }
    })
},{
    threshold : 0.5,
})


circles.forEach(circle => observer.observe(circle))