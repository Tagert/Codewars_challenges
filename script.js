"use strict";

//--------------------------------- Info about challenge

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

//--------------------------------- Challenge Number - 1 (Double Char)

// my first method

const stringToDouble = "Hello world";

console.log();

const doubleChar = (str) => {
  let stringE = "";
  for (let i = 0; i < str.length; i++) {
    stringE += str[i] + str[i];
  }
  return stringE;
};

console.log(doubleChar(stringToDouble));

// most popular method (using .split() && .map() && .join())

const doubleChar2 = (str) =>
  str
    .split("")
    .map((x) => x + x)
    .join("");

console.log(doubleChar2(stringToDouble));

//--------------------------------- Info about challenge

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

//--------------------------------- Challenge Number - 2 (A wolf in sheep's clothing)

// my first method

const sheepArr = ["sheep", "sheep", "sheep", "wolf", "sheep"];

const warnTheSheep = (arr) => {
  let sheepReverse = arr.reverse();
  console.log(sheepReverse);
  for (let i = 0; i < arr.length; i++) {
    if (sheepReverse[0] === "wolf") {
      return "Pls go away and stop eating my sheep";
    } else {
      return `Oi! Sheep number ${sheepReverse.indexOf(
        "wolf"
      )}! You are about to be eaten by a wolf!`;
    }
  }
};

console.log(warnTheSheep(sheepArr));

// most popular method (.reverse() && .indexOf())

function warnTheSheep2(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

console.log(warnTheSheep2(sheepArr));
