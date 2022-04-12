# Instructions  

**EXERCISE 1**

  I've hard-coded the HTML for the wizard and the orc. 
  
  Your task: Remove the hard-coded HTML and instead use Javascript to render the wizard and the orc cards into their respective divs.

  ---

**EXERCISE 2**

1. Convert our consts into two objects called "monster" and "hero.”
2. Update the renderCharacter() function so that it accepts a single object "data" as its parameter instead of five string and numbers. This should reduce the number of arguments to pass in from five to one.
3. Update the template now each variable is coming from "data.”
4. Update the function call.

   ---

**EXERCISE 3**

1. Finish this object by adding whatever you'd like. Add extra properties if you'd care to.
   
  ```
  const dreamVacation = {
    destination: "",
    activity: "",
    companion:  ""
}

2. Then destructure the object and use each variable to log a few sentences about your dream vacation.

>For example, "I would enjoy a trip to New Zealand where I would ski on frozen waterfalls and hang out with Peter Jackson and a few hobbits."

---

**EXERCISE 4: GENERATING RANDOM VALUES**

1. Create a function called getDiceRollArray that uses a for-loop to return an array of random numbers between 1-6.
2. The function should have diceCount as a parameter and the array it returns should be diceCount length.
4. For testing purposes, call the function with a diceCount of 3 and log out the result.

---

**EXERCISE 5: RANDOMIZING DICE**

1. Create a function called getDiceHtml. 
2. getDiceHtml should map over the array of dice rolls returned from getDiceRollArray. Use that to generate the html for the dice with random values. Use this HTML: `<div class="dice">DICE VALUE HERE</div>`
3. Think about the parameters and arguments.
4. Down in renderCharacter(), set diceHtml equals to our new getDiceHtml function. Remember to give it the argument it needs. 
5. Delete any code we no longer need.


==Hints:==

* Your function should take in diceCount as a parameter.
* It should then return the array it gets by calling getDiceRollArray(). Remember to use as an argument.
* There's no need to set up a new variable - you can map over the array returned by getDiceRollArray directly to return the html template for each dice.

---

**EXERCISE 6: REPLACE THE FOR LOOP**

1. Replace the for-loop in getDiceRollArray with a new Array().
```
function getDiceRollArray(diceCount) {
    const newDiceRolls = []
    for(let i = 0; i < diceCount; i++) {
        newDiceRolls.push(Math.floor(Math.random()*6) +1)
    }
```

3. Fill it with 0s as its initial state. 
4. This new array should be diceRoll length.
5. Use .map() directly on the array (in other words, don’t set up a new const of the newly mapped array). 
6. Return a random number from 1-6 in each element of the array.
7. Delete unnecessary code from the function.

---

**EXERCISE 7: USING A CONSTRUCTOR FUNCTION**

1. Create a new constructor function called `Character` which
   takes our data as a parameter.
2. Set up `this` for each of the five properties in our objects
   (for example: `this.health = data.health`).
3. Then create a method called `getCharacterHtml` that performs the 
   same tasks as our current `renderCharacter` function.
4. Create two new instances of `Character`. One for a hero, 
   called `wizard`, and one for a monster, called `orc`. 
   Render both of them on the page.
5. Delete both the old `renderCharacter` function and the two 
   lines of code at the bottom of the page which invoke that 
   function.

---

**EXERCISE 8**

Fix the broken html rendering.

---

**EXERCISE 9: RESTRUCTURING YOUR CODEBASE**

1. Create a file called `utils.js`.
2. Cut and paste the getDiceRollArray() function into it.
3. Import back it into script.js as a default or named export.
4. Create a file called `Character.js`.
5. Cut and paste the Character constructor function into it.
6. Import back it into script.js as a default or named export.
7. You will hit a problem! Solve the problem by using the browser console for hints.

---

**EXERCISE 10: LAUNCH THE FIRST ATTACK!**

1. Make the attack button trigger a dice roll for both wizard and orc.
2. Make sure the new dice score shows in the app.

---

**EXERCISE 11: DISPLAY THE PLACEHOLDER DICE**

1. In the Character constructor, create a new property called "diceArray".
2. Set diceArray equal to whatever is returned by the getDicePlaceholderHtml function (there are two things you need to make this work!)
3. Instead of rendering diceHtml in the getCharacterHtml method, render diceArray.
4. Delete any unnecessary code.

---


**EXERCISE 12: FIX THE DICE DISPLAY**

1. In the getDiceHtml method, map over currentDiceScore to return this string of html template for each element:

`<div class="dice">${number}</div>`.

Save this new array to diceArray.

2. Modify the attack() function in index.js to get the 
app working again.

---

**EXERCISE 13: INFLICTING DAMAGE**

1. Since we need to pass some data to our new `takeDamage()` method, add that data as an argument each time we call `takeDamage()` in the `attack()` function.
2. In the `takeDamage()` method, add a parameter called `attackScoreArray` and log it out.
3. *Hint - think about the currentDiceScore property.*

---

**EXERCISE 14**

Fix the app to show the orc card again.

---

