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

//--------------------------------- Info about challenge

// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.

// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

//--------------------------------- Challenge Number - 3 (Lario and Muigi Pipe Problem)

const pipeArr = [-4, 1, 3, 5, 6, 7, 8];

const pipeFix = (arr) => {
  let fixedPipeArr = [];
  const findLastPipe = arr.length - 1;

  for (let i = arr[0]; i <= arr[findLastPipe]; i++) {
    // shorter method is without new variable (findLastPipe), write directly to arr[arr.length - 1]
    fixedPipeArr.push(i);
  }
  return fixedPipeArr;
};

console.log(pipeFix(pipeArr));

//--------------------------------- Info about challenge

// You have to write a function that describe Leo:
// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

//--------------------------------- Challenge Number - 4 (Leonardo Dicaprio and Oscars)

// my first method

const leo = (oscar) => {
  if (oscar > 86 && oscar < 88) {
    return "When will you give Leo an Oscar?";
  } else if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy";
  } else if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!";
  } else if (oscar > 88) {
    return "Leo got one already!";
  } else {
    return "When will you give Leo an Oscar?";
  }
};

console.log(leo(86));

// most popular method (ternary operator)

const leo2 = (oscar) => {
  return oscar === 88
    ? "Leo finally won the oscar! Leo is happy"
    : oscar === 86
    ? "Not even for Wolf of wallstreet?!"
    : oscar < 88
    ? "When will you give Leo an Oscar?"
    : "Leo got one already!";
};

console.log(leo2(86));
