let menuIn = document.querySelector(".menuIn")
let menuOut = document.querySelector(".menuOut")


menuIn.addEventListener("click", () => {
   document.getElementById("menu").style.display = "block"
})

menuOut.addEventListener("click", () => {
   document.getElementById("menu").style.display = "none"

})


//change randomly the info value

setInterval(rand, 1000)
rand()

function rand() {

let info = ["// Web developer. // ", "// 1 year of experience. //", "// Welcome to my web portfolio. //", "// Your future♥️ ayiee😆. //"]



let infoRandom = info[Math.floor(Math.random() * info.length)]
document.getElementById("info").innerHTML = infoRandom
}


//contact form functionality
let email = document.getElementById("email").value

let message = document.getElementById("message").value

let submit = document.querySelector(".submitBtn")

submit.addEventListener('mouseover', () => {
   let position = 0
   position === 0
   
   
   
   
})










