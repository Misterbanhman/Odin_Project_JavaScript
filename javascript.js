            
			const choice = ['Rock','Paper','Scissors'] //Array containing the three choices 
			const lengthOfArray = choice.length; //Length of the Array

			let winCounter = 0; //Counts the amount of times a player wins
            let loseCounter = 0; //Counts the amount of times a player loses

			
            //Function to generate a random action
			function getComputerChoice() {
				let randomNumber=Math.ceil(Math.random() * lengthOfArray)-1;
				let randomChoice = choice[randomNumber];
				return randomChoice;
			}
			
            //Function to correct the formatting of the inputted text
			function correctText(text) {
				let textArray = text.split('');
				let lengthOfArray = textArray.length;
				let firstLetter = textArray[0].toUpperCase();
				let secondaryLetters = '';
				for (let i=1;i<lengthOfArray;i++) {
					secondaryLetters = secondaryLetters + textArray[i].toLowerCase();
				}
				text = firstLetter + secondaryLetters;
				return text;
			}
			
            //Function checking for who wins the game.
			function playRound(playerSelection, computerSelection) {
				//playerSelection = getComputerChoice();
				//computerSelection = getComputerChoice();
				//playerSelection = correctText(playerSelection);
				computerSelection = correctText(computerSelection);

				
				const winCondition = "You Win! " + playerSelection + " beats " +computerSelection;
				const loseCondition = "You Lose! " + computerSelection + " beats " +playerSelection;
				
				if (playerSelection != computerSelection) {
					
					//All conditions for if the player gets 'Rock'
					if (playerSelection === 'Rock') {
						if (computerSelection === 'Scissors') {
							winCounter += 1;
							return winCondition;
						}
						else {
                            loseCounter += 1;
							return loseCondition;
						}
					}

                    //All conditions for if the player gets 'Scissors'
					else if (playerSelection === 'Scissors') {
						if (computerSelection === 'Paper') {
							winCounter += 1;
							return winCondition;
						}
						else {
                            loseCounter += 1;
							return loseCondition;
						}
					}
					
                    //All conditions for if the player gets 'Paper'
					else if (playerSelection === 'Paper') {
						if (computerSelection === 'Rock') {
							winCounter += 1;
							return winCondition;
						}
						else {
                            loseCounter += 1;
							return loseCondition;
						}
					}
					else {
						return;
					}
				}
				
				//Condition if both computer and player get the same value
				else {
					return "Tie! You both chose " + playerSelection;
				}
			}
			
			function checkCounters(win,lose) {
				if (win + lose === 5 & win>lose) {
					winCounter = 0;
					loseCounter = 0;
					alert("You have won the game!");
					alert("Game has reached best of 5! Resetting Score!");
				}

				else if (win + lose === 5 & win<lose) {
					winCounter = 0;
					loseCounter = 0;
					alert("You have lost the game!");
					alert("Game has reached best of 5! Resetting Score!");
				}
			}

			//Adding buttons to the div container
			const container = document.querySelector('#container');

			let outCome = document.querySelector('#outCome');
			let humanScore = document.querySelector('#humanScore')
			let computerScore = document.querySelector('#computerScore')
			let finalScore = document.querySelector('#finalScore')

			//Event Listeners for action selection. Resets counters to 0 once 
			//best of 5 is reached.
			buttons = document.querySelectorAll('button');
			buttons.forEach((button) => {
				button.addEventListener('click', event => {
					let result = playRound(button.textContent,getComputerChoice());
					outCome.textContent = result;

					//Displays Human Score
					humanScore.textContent = "Human Score: " + winCounter;
                    humanScore.style.backgroundColor = 'Blue';
					humanScore.style.border = "3px solid Pink";
                    humanScore.style.padding = "5px 20px";    

					//Displays Computer Score
					computerScore.textContent = "Computer Score: " + loseCounter;
					computerScore.style.backgroundColor = 'Red';
                    computerScore.style.border = "3px solid Pink";
                    computerScore.style.padding = "5px 20px";  

					//Displays final score
					finalScore.textContent = "Final Score is " + winCounter + " to " + loseCounter;
					finalScore.style.backgroundColor = 'Green';
                    finalScore.style.border = "3px solid Pink";
                    finalScore.style.padding = "5px 20px";  

					checkCounters(winCounter,loseCounter);
				})
			});

			let playAgain = document.querySelector('#playButton');
			playAgain.addEventListener('click', event => {
				winCounter = 0;
				loseCounter = 0;

				outCome.textContent = "Score Reset!"
				humanScore.textContent = "Human Score: " + winCounter;
				computerScore.textContent = "Computer Score: " + loseCounter;
				finalScore.textContent = "Final Score is " + winCounter + " to " + loseCounter;
				event.preventDefault();
			})

			/*
            //Simulates a rock,paper,scissors game 5 times and displays the outcome.
			function game() {
				
                //Variable for prompting user
				let userPrompt;
				
                //Prompts the user 5 times for inputting choice of action.
				for (let i=0;i<5;i++) {
                    userPrompt = prompt("Rock, Paper, or Scissors?");
					console.log(playRound(userPrompt,getComputerChoice()));
				}
				//Displaying how many times each player has won.
				console.log("You have won " + winCounter + " times, and the computer has won "+ loseCounter + " times. The score is " + winCounter + " to " + loseCounter);
                
                //Checks if the player or computer wins based on comparing the counters.
                if (winCounter>loseCounter) {
                    console.log("You have beaten the computer!");
                }

                else {
                    console.log("You suck! The computer beat you at Rock, Paper, Scissors!");
                }
			}
            
            game();
			*/