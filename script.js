<script src="words.js"></script>

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

let chosenWord = "";
let display = [];
let lives = 6;

const wordDisplay = document.getElementById("word-display");
const lettersDiv = document.getElementById("letters");
const hangmanArt = document.getElementById("hangman-art");
const message = document.getElementById("message");

function startGame() {
  chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
  display = Array(chosenWord.length).fill("_");
  lives = 6;
  message.textContent = "";
  hangmanArt.textContent = stages[lives];

  wordDisplay.textContent = display.join(" ");

  lettersDiv.innerHTML = "";

  for (let i = 97; i <= 122; i++) {
    const btn = document.createElement("button");
    btn.textContent = String.fromCharCode(i);
    btn.onclick = () => guessLetter(btn.textContent, btn);
    lettersDiv.appendChild(btn);
  }
}

function guessLetter(letter, button) {
  button.disabled = true;
  let correct = false;

  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === letter) {
      display[i] = letter;
      correct = true;
    }
  }

  if (!correct) {
    lives--;
  }

  wordDisplay.textContent = display.join(" ");
  hangmanArt.textContent = stages[lives];

  if (!display.includes("_")) {
    message.textContent = "🎉 YOU WIN!";
    disableAll();
  }

  if (lives === 0) {
    message.textContent = `💀 YOU LOST! Word was "${chosenWord}"`;
    disableAll();
  }
}

function disableAll() {
  document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

function restartGame() {
  startGame();
}

startGame();
