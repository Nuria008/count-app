//document.getElementById("count").innerText=5
//console.log('Hello We')
// let firstNumber=5
// let secondNumber=10
// let count=firstNumber*secondNumber

// let count=5
// count=count+2
//  console.log(count)

//let myAge=24
//myAge=26
 //console.log(myAge)

//   let myAge=24
//   let humanDogRatio=7
//   let myDogAgeRatio=myAge*humanDogRatio
//   console.log(myDogAgeRatio)

//   let bonusPoints=50
//   bonusPoints=bonusPoints+50
//   bonusPoints=bonusPoints-80
//   bonusPoints=bonusPoints+50
//   console.log(bonusPoints)

// function increment(){
//     console.log('the button was clicked')
// }

// //count from 5 to 1
// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()

// countdown()

// function myAge(){
//     console.log(42)
// }
// myAge()

// function sum(){
//     console.log(34+33+36)
// }
// sum()
//or
// function laps(){
//     let lap1=34
//     let lap2=33
//     let lap3=36
//     console.log(lap1+lap2+lap3)
// }
// laps()

//fuction that increments
// let lapsCompleted=0
// function increase(){  
//     lapsCompleted=lapsCompleted+1
//     console.log(lapsCompleted)
// }
// increase()
// increase()
// increase()
// or
// let lapsCompleted=0
// function incrementLap(){
//     lapsCompleted=lapsCompleted+1
// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

//increment on button click

let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(saveEl)
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "

    saveEl.textContent +=countStr
  //making the value 0 again if you click save
    countEl.textContent = 0
   //set the count back to 0
    count = 0

    console.log(count)
}

console.log("Let's count people on the subway!")

// concept learned
// script EventTargetvariables
// SVGAnimatedNumberListstrings
// console.log()
// functions
// the DOM
// getElementById
// innerText
// textContent