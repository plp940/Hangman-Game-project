// words list (same role as hangman_words.py)
const word_list = ["python", "hangman", "developer", "random"];

// ASCII stages (your code – unchanged)
const stages = [
`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========
`,
`
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========
`,
`
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========
`,
`
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========
`,
`
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
`,
`
  +---+
  |   |
  O   |
      |
      |
      |
=========
`,
`
  +---+
  |   |
      |
      |
      |
      |
=========
`
];

// game state
let lives = 6;
let chosen = word_list[Math.floor(Math.random() * word_list.length)];
let correct_letters = [];
let game_over = false;

// build word display
function getDisplayWord() {
  let display = "";
  for (let letter of chosen) {
    display += correct_letters.includes(letter) ? letter + " " : "_ ";
  }
  return display;
}

// update UI (this replaces Python print)
function updateUI() {
  document.getElementById("word").innerText = getDisplayWord();
  document.getElementById("lives").innerText =
    `***************** ${lives}/6 Lives Left *****************`;
  document.getElementById("hangman").innerText = stages[lives];
}

// button click handler
function makeGuess() {
  if (game_over) return;

  let input = document.getElementById("guess");
  let guess = input.value.toLowerCase();
  input.value = "";

  if (!guess || correct_letters.includes(guess)) return;

  if (chosen.includes(guess)) {
    correct_letters.push(guess);
  } else {
    lives--;
    document.getElementById("message").innerText =
      `You guessed ${guess}, that's not in the word.`;
  }

  if (lives === 0) {
    game_over = true;
    document.getElementById("message").innerText =
      `GAME OVER! The word was "${chosen}"`;
  }

  if (!getDisplayWord().includes("_")) {
    game_over = true;
    document.getElementById("message").innerText =
      "🎉 YOU WIN!";
  }

  updateUI();
}

// initial render
updateUI();
