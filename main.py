import random
from hangman_words import word_list
from hangman_art import stages ,logo

word_list = ["andaman","nicobar","nagasaki"]
lives =6 
print(logo)
# randomly choose a word from the word_list and assign it to a variable called choose_word and print it
choosen = random.choice(word_list)
print(choose)

placeholder = ""
word_length = len(choosen)
for position in range(word_length):
  placeholder += "-"
print(placeholder)  

game_over = False
correct_letters = []
#ask the user to guess a letter and assign their answer to a variable called guess [make it lowercase]. 
while not game_over:
    print(f"*****************{lives}/6 Lives Left******************")
    guess = input("Guess a letter: ").lower()

    if guess in correct_letters:
      print(f"you ve alredy guessed {guess}")
    display = ""
#check the guess letter is one of the letters in the choosen_word. print right if it is and wrong if it is not
    for letter in choosen:
        if letter == guess:
            display+= letter
            correct_letters.append(guess)
        elif letter in correct_letters:
          display += letter
        else:
            display+="_"
    print(display)      
    if guess not in choosen:
      lives -= 1
      print(f"You guessed {guess}, that's not in the word. you lose a life.")
      if lives == 0:
        game_over =True
        print(f"*******IT was {choosen} !  you loose********")
        
    if "_" not in display:
        game_over = True
        print("************you win*************")
    print(stages[lives])  
