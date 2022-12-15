// let x = Math.floor(Math.random() * 100) +1;
// let click = 0;
// const input = document. querySelector("input");
// const h1 = document.querySelector("h1");
// const h2 = document.querySelector("h2")
// const guess = document.querySelector("button");
// guess.addEventListener("click", function () {
//   click++;
//   if (click <= 5) {
//     if (input.value === x) {
//       h1.innerHTML = "You Win!";
//       h2.innerHTML = "";
//       return
//     }
//     else {if (input.value > x){
//       h1.innerHTML = "Go Lower"
//     }
//     else {
//       h1.innerHTML = "Go Higher"
//     }
//     if (Math.abs(x - input.value) < 10) {
//       if (Math.abs(x - input.value) < 5) {
//         h2.innerHTML = "You are very close"
//       }
//       else {
//         h2.innerHTML = "You are close"
//       }
//       if (Math.abs(x - input.value) > 50) {
//         h2.innerHTML = "You are far"
//       }
//       else {
//         h2.innerHTML = "You are far"
//       }
//     }
//     }
//     else {
//       h1.innerHTML = "You lose!"
//       h2.innerHTML = ""
//     }
//   }
// })

let x = Math.floor(Math.random() * 100) +1;
let click = 0
const input = document.querySelector('input')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const Guess = document.querySelector("button");
Guess.addEventListener("click", function () {
	click++;
	if (click <= 5) {
		if (input.value == x) {
			h1.innerHTML = "You Win";
			h2.innerHTML = "";
		} else {
			if (input.value > x) {
				h1.innerHTML = "Go Lower";
			} else {
				h1.innerHTML = "Go Higher";
			}
			if (Math.abs(x - input.value) < 10) {
				if (Math.abs(x - input.value) < 5) {
					h2.innerHTML = "You are very close";
				} else {
					h2.innerHTML = "You are close";
				}
			} else {
				if (Math.abs(x - input.value) > 50) {
					h2.innerHTML = "You are very far";
				} else {
					h2.innerHTML = "You are far";
				}
			}
		}
	} else {
		h1.innerHTML = "You Lose";
		h2.innerHTML = "";
	}
});