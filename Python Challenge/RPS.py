from random import seed, randint
from time import sleep

seed()

playerWins = 0
computerWins = 0
draws = 0
round = 0


def rps(inputP, inputC):

    global playerWins
    global computerWins
    global draws

    # get length of inputs and subtract to find a unique number
    result = len(inputP) - len(inputC)

    # Rock = 4
    # Paper = 5
    # Scissors = 8

    # R R = 0 - tie
    # R P = -1 - rock loses
    # R S = -4 - rock wins

    # P P = 0 - tie
    # P R = 1 - paper wins
    # P S = -3 - paper loses

    # S S = 0 - tie
    # S P = 3 - scissors wins
    # S R = 4 - scissors loses


    # match the unique number to a case showing the winner
    match result:

            # Player wins
            case -4:
                print("Rock Obliterates Scissors! You win!")
                sleep(0.4)

                playerWins += 1

            # Player wins
            case 1:
                print("Paper uses Kung-Fu to defeat Rock! You win!")
                sleep(0.4)

                playerWins += 1
                
            # Player wins    
            case 3:
                print("Scissors Shreds Paper! You win!")
                sleep(0.4)

                playerWins += 1

            # Computer wins    
            case -1:
                print("Paper uses Kung-Fu to defeat Rock! You win!")
                sleep(0.4)

                playerWins += 1

            # Computer wins 
            case -3:
                print("Scissors Shreds Paper! You win!")
                sleep(0.4)

                playerWins += 1
                
            # Computer wins 
            case 4:
                print("Rock Obliterates Scissors! You win!")
                sleep(0.4)

                playerWins += 1

            # Computer wins 
            case 0:
                print("It's a tie!")
                sleep(0.4)

                draws += 1
                


while(1):

    round += 1
    choices = ["Rock", "Paper", "Scissors"]

    playerinput = ""

    while(playerinput not in choices):
        playerinput = input("Rock, Paper, or Scissors? ")
        playerinput = playerinput.capitalize()

        if(playerinput not in choices):
            print("Please enter Rock, Paper, or Scissors")
            sleep(0.5)


    computerinput = choices[randint(0,2)]

    print(f"You chose {playerinput} and the computer chose {computerinput}!")

    rps(playerinput, computerinput)

    sleep(0.5)
    print(f"Player Wins: {playerWins}")
    print(f"Computer Wins: {computerWins}")
    print(f"Draws: {draws}")

    sleep(0.5)

    playAgain = ""
    while(playAgain != "Yes" and playAgain != "No"):
        playAgain = input("Play again? Yes or No? ")
        playAgain = playAgain.capitalize()

        if(playAgain != "Yes" and playAgain != "No"):
            print("Please enter Yes or No")
            sleep(0.5)

    if(playAgain == "No"):
        print("Thanks for playing!")
        print("Final Scores: ") 
        print(f"Player Wins: {playerWins}")
        print(f"Computer Wins: {computerWins}")
        print(f"Draws: {draws}")
        sleep(1.5)
        break

    else:
        print(f"Round {round+1}!")


