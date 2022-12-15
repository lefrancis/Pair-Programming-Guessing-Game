let x = Math.floor(Math.random() * 100) +1;
let y = Math.floor(Math.random() * 100) +1;
let z = Math.floor(Math.random() * 100) +1;
const mynum = document.querySelector("div")
let click = 0
const input = document.querySelector('input')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const Guess = document.querySelector("#guess");
const hint = document.querySelector("#hint")
const reset = document.querySelector("#reset")
const hints = document.querySelector("p")
Guess.addEventListener("click", function () {
click++ 
if(click<=5){
    let j=input.value
    mynum.innerHTML +=j+", "  
if(input.value==x){
    h1.innerHTML = "You Win"
    h2.innerHTML = ""
  }else{if(input.value>x){
    h1.innerHTML = "Go Lower"
  }else{
    h1.innerHTML = "Go Higher"
  }
  if(Math.abs(x-input.value)<10){
    if(Math.abs(x-input.value)<5){
        h2.innerHTML= "You are very close"
    }else{
        h2.innerHTML= "You are close"
    }
  }else{if(Math.abs(x-input.value)>50){
    h2.innerHTML= "You are very far"
  }else{
    h2.innerHTML= "You are far"
  }}}
}else{
    h1.innerHTML = "You Lose"
    h2.innerHTML = ""
}});

hint.addEventListener("click", function () {
    hints.innerHTML = y +", "+ x +", "+ z
})

reset.addEventListener("click", function () {
location.reload()})