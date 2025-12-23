# Hangman-Game-project


```markdown
# Hangman Game

A simple console-based Hangman game written in Python. This README describes the repository as it currently exists, how to run the game, and the main files present.

## Overview

The project implements a text-based Hangman game. The main game loop and logic are in `main.py`. Word data is provided in `hangman_words.py`, and ASCII art (stages + logo) is in `hangman_art.py`.

## Files

- `main.py` — Main entry point and game loop. Imports:
  - `random` (Python standard library)
  - `from hangman_words import word_list` (note: see below about naming)
  - `from hangman_art import stages, logo`

- `hangman_words.py` — Contains a long list of words (variable named `words_list` in the file).

- `hangman_art.py` — Contains the `stages` ASCII art list and `logo` (currently stored as a single-item list).

- `README.md` — This file.

## Language & Requirements

- Language: Python (3.x)
- No external third-party modules required — only Python standard library (`random`, built-in input/output).

Tested with Python 3.7+.

## How to run

1. Clone the repository:
   git clone https://github.com/plp940/Hangman-Game-project.git

2. Enter the repository folder:
   cd Hangman-Game-project

3. Run:
   python main.py

The program prints the logo and prompts the user to guess letters until the word is guessed or lives run out.

