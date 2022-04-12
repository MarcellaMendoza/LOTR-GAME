import {characterData} from "./data.js"
import Character from "./Character.js"

let monsterArray = ["orc", "smeagol", "cavetroll"]
const wizard = new Character(characterData.hero)
let monster = getNewMonster()

document.getElementById("attack-button").addEventListener("click", attack)


function getNewMonster() {
  const nextMonsterData = characterData[monsterArray.shift()]
  return nextMonsterData ? new Character(nextMonsterData) : {}
}


function attack() {
  wizard.getDiceHtml()
  monster.getDiceHtml()
  wizard.takeDamage(monster.currentDiceScore)
  monster.takeDamage(wizard.currentDiceScore)
  display()
  if (wizard.dead) {
    endGame()
  } else if(monster.dead) {
      if(monsterArray.length > 0) {
       monster = getNewMonster()
       display()
    } else {
      endGame()
    }
  }
}

function endGame() {
  let endMessage = wizard.health === 0  && monster.health === 0 ? "No one wins" : wizard.health > 0 ? "Gandalf wins!" : "Monster wins!"

  const endEmoji = wizard.health > 0 ? "🧙‍♂️" : "👹"
  document.body.innerHTML = 
`<div class="end-game">
    <h2>Game Over</h2>
    <h3>${endMessage}</h3>
    <p class="end-emoji">${endEmoji}</p>
  </div>`
}


function display() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
  document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

display()





















// //Exercise 3 // Object deconstruction
// const dreamVacation = {
//   destination: "Costa Rica",
//   activity: "relax on the beach",
//   companion: "Sebastian",
//   food: "tacos",
//   drinks: "ice cold Cokes"
  
// }

// const {destination, activity, companion, food, drinks} = dreamVacation


// console.log(`I would enjoy a trip to ${destination} to ${activity} with my son ${companion}. We would eat ${food} and drink ${drinks}.`)


// const dreamJob = {
//   position: "software developer",
//   duties: "write clean code",
//   dream: "work from home"
// }

// const {position, duties, dream} = dreamJob

// console.log(`My dream job is a ${position}. I would like to ${duties} and ${dream}`)


