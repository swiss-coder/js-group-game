const wordsArray = [
  { word: "javascript", hint: "Popular language for web development" },
  { word: "function", hint: "Reusable block of code" },
  { word: "variable", hint: "Stores data temporarily" },
  { word: "array", hint: "List-like data structure" },
  { word: "object", hint: "Stores data as key-value pairs in JavaScript" },
  { word: "loop", hint: "Used for repetition" },
  { word: "boolean", hint: "True or false" },
  { word: "undefined", hint: "Default value of uninitialized variables" },
  { word: "null", hint: "Represents no value" },
  { word: "number", hint: "Numeric data type" },
  { word: "string", hint: "Text data type" },
  { word: "class", hint: "Blueprint for objects" },
  { word: "git", hint: "Version control system" },
  { word: "github", hint: "Hosts code repositories" },
  { word: "html", hint: "Structure of web pages" },
  { word: "css", hint: "Style of web pages" },
  { word: "attribute", hint: "HTML tag modifier" },
  { word: "selector", hint: "CSS element matcher" },
  { word: "style", hint: "Visual customization" },
  { word: "debug", hint: "Find and fix code errors" },
  { word: "console", hint: "Debugging tool" },
  { word: "log", hint: "Prints info to console" },
  { word: "terminal", hint: "Command-line interface" },
  { word: "script", hint: "JS code block in HTML" },
  { word: "browser", hint: "Software that displays and runs web pages" },
  { word: "server", hint: "Delivers web content" },
  { word: "frontend", hint: "User interface side" },
  { word: "backend", hint: "Server and database side" },
  { word: "database", hint: "Stores information" },
  { word: "test", hint: "Checks correctness" },
  { word: "typeof", hint: "Checks data type" },
  { word: "math", hint: "Built-in object for calculations" },
  { word: "floor", hint: "Rounds down number" },
  { word: "random", hint: "Generates random number" },
  { word: "map", hint: "Transforms array elements" },
  { word: "filter", hint: "Creates array with condition" },
  { word: "localStorage", hint: "Stores data in browser" },
  { word: "scope", hint: "Variable visibility area" },
  { word: "ceil", hint: "Rounds up number" },
  { word: "setTimeout", hint: "Runs code once after delay" },
  { word: "responsive", hint: "Adapts to screen sizes" },
  { word: "accessibility", hint: "Usable for all users" },
  { word: "animation", hint: "Visual movement effect" },
  { word: "svg", hint: "Scalable vector graphics" },
  { word: "loop", hint: "Executes a block of code multiple times" },
  { word: "condition", hint: "Controls code flow based on true or false" },
];

// Shuffle the words array randomly
// This function returns a new array with the items in random order
function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// This function takes a word and scrambles its letters randomly
function scramble(word) {
  // Convert the word into an array of letters, then shuffle them, and join back as a string
  const lettersArray = word.split('');
  const shuffleLettersArray = lettersArray.sort(() => Math.random() - 0.5);
  const combinedLetters = shuffleLettersArray.join('');

  return combinedLetters;
}

let score = 0; // Initialize the score to 0
const totalRounds = 10; // Set the number of rounds for the game
const shuffledWords = shuffleArray(wordsArray).slice(0, totalRounds); // Shuffle the words array and select the first 10 words for the game

for (let i = 0; i < totalRounds; i++) {
  const selectedObject = shuffledWords[i];

  let scrambledWord = scramble(selectedObject.word);
  // If the scrambled word is the same as the original, scramble again
  while (scrambledWord === selectedObject.word) {
    scrambledWord = scramble(selectedObject.word);
  }
  scrambledWord = scrambledWord.split('').join('  ');

  let guess = prompt(`Round ${i + 1}:\nYour score: ${score} \/100\n\n Unscramble this word: ${scrambledWord.toUpperCase()}\n\nHint: ${selectedObject.hint}\n`);

  // Check if the user pressed "Cancel" on the prompt
  if (guess === null) {
    alert("Game cancelled.");
    break;
  }

  if (guess.toLowerCase() === selectedObject.word.toLowerCase()) {
    alert("Correct!");
    score += 10;
  } else {
    alert(`Wrong. The correct answer was: ${selectedObject.word}`);
    score -= 5;
  }
}

alert(`Game Over! Your total score is: ${score}`);