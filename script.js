const words = [
  { word: "javascript", hint: "Popular language for web development" },
  { word: "function", hint: "Reusable block of code" },
  { word: "variable", hint: "Stores data temporarily" },
  { word: "array", hint: "List-like data structure" },
  { word: "object", hint: "Key-value data structure in JS" },
  { word: "loop", hint: "Used for repetition" },
  { word: "boolean", hint: "True or false" },
  { word: "undefined", hint: "Default value of uninitialized variables" },
  { word: "null", hint: "Represents no value" },
  { word: "number", hint: "Numeric data type" },
  { word: "string", hint: "Text data type" },
  { word: "class", hint: "Blueprint for objects" },
  { word: "git", hint: "Version control system" },
  { word: "github", hint: "Hosts code repositories" },
  { word: "json", hint: "Lightweight data format" },
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
  { word: "browser", hint: "Runs client-side JS" },
  { word: "server", hint: "Delivers web content" },
  { word: "frontend", hint: "User interface side" },
  { word: "backend", hint: "Server and database side" },
  { word: "database", hint: "Stores information" },
  { word: "test", hint: "Checks correctness" },
  { word: "module", hint: "JS file with exportable code" },
  { word: "typeof", hint: "Checks data type" },
  { word: "math", hint: "Built-in object for calculations" },
  { word: "floor", hint: "Rounds down number" },
  { word: "random", hint: "Generates random number" },
  { word: "map", hint: "Transforms array elements" },
  { word: "filter", hint: "Creates array with condition" },
  { word: "reduce", hint: "Aggregates array values" },
  { word: "promise", hint: "Handles async operations" },
  { word: "localStorage", hint: "Stores data in browser" },
  { word: "debugger", hint: "Pauses code execution for debugging" },
  { word: "scope", hint: "Variable visibility area" },
  { word: "ceil", hint: "Rounds up number" },
  { word: "setTimeout", hint: "Runs code once after delay" },
  { word: "performance", hint: "Speed and efficiency" },
  { word: "responsive", hint: "Adapts to screen sizes" },
  { word: "accessibility", hint: "Usable for all users" },
  { word: "animation", hint: "Visual movement effect" },
  { word: "svg", hint: "Scalable vector graphics" },
  { word: "loop", hint: "Repeats code" },
  { word: "condition", hint: "True/false logic check" },
  { word: "boolean", hint: "true or false" },
];

// Shuffle characters in a word
function scramble(word) {
  return word.split('').sort(() => Math.random() - 0.5).join('');
}
let score = 0;
const totalRounds = 10;
for (let i = 0; i < totalRounds; i++) {
  const randomIndex = Math.floor(Math.random() * words.length);
  const selected = words[randomIndex];
  const scrambled = scramble(selected.word);
  let guess = prompt(`Round ${i + 1}:\nUnscramble this word: ${scrambled}\nHint: ${selected.hint}`);
  if (guess === null) {
    alert("Game cancelled.");
    break;
  }
  if (guess.toLowerCase() === selected.word) {
    alert("Correct!");
    score += 10;
  } else {
    alert(`Wrong. The correct answer was: ${selected.word}`);
    score -= 5;
  }
}
alert(`Game Over! Your total score is: ${score}`);