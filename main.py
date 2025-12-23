import random
stages = ['''
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=======   
''','''
  +---+
  |   |
  O   |
 /|\  |
  /   |
      |
=======  
''','''
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=======
''','''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=======   
''','''
  +---+
  |   |
  O   |
  |   |
      |
      |
=======   
''','''
  +---+
  |   |
  O   |
      |
      |
      |
=======   
''','''
  +---+
  |   |
      |
      |
      |
      |
=======   

''']
word_list = ["andaman","nicobar","nagasaki"]
lives =6 

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
    guess = input("Guess a letter: ").lower()
    
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
      if lives == 0:
        game_over =True
        print("you loose")
        
    if "_" not in display:
        game_over = True
        print("you win")
    print(stages[lives])  
