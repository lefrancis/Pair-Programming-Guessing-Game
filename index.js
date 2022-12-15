// All code written for this game were written solely by Sandro Tskitishvili.
let x = Math.floor(Math.random() * 100) +1;
let y = Math.floor(Math.random() * 100) +1;
let z = Math.floor(Math.random() * 100) +1;
const mynum = document.querySelector("#gspan")
let click = 0
const input = document.querySelector('input')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const Guess = document.querySelector("#guess");
const hint = document.querySelector("#hint")
const reset = document.querySelector("#reset")
const hints = document.querySelector("#hspan")
Guess.addEventListener("click", function () {
click++ 
if(click<=5){
    let j=input.value
    mynum.innerHTML +=j+", "  
if(input.value==x){
    h1.innerHTML = "You Win!"
    h2.innerHTML = input.value +" is the number!"
    h1.style.color = "green"
    h2.style.color = "darkgreen"
  }else{if(input.value>x){
    h1.innerHTML = "Go Lower"
    h1.style.color = "teal"
  }else{
    h1.innerHTML = "Go Higher"
    h1.style.color = "teal"
  }
  if(Math.abs(x-input.value)<15){
    if(Math.abs(x-input.value)<5){
        h2.innerHTML= "Hot"
        h2.style.color = "orange"
    }else{
        h2.innerHTML= "Warm"
        h2.style.color = "yellow"
    }
  }else{if(Math.abs(x-input.value)>50){
    h2.innerHTML= "Freezing"
    h2.style.color = "skyblue"
  }else{
    h2.innerHTML= "Cold"
    h2.style.color = "blue"
  }}}
}else{
    h1.innerHTML = "You Lose!"
    h2.innerHTML = "BOO! LOSER!"
    h2.style.color = "orangered"
    h1.style.color = "orangered"
}});

hint.addEventListener("click", function () {
    hints.innerHTML = y +", "+ x +", "+ z
})

reset.addEventListener("click", function () {
location.reload()})
// All code written for this game were written solely by Sandro Tskitishvili.