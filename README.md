# Javascript Quiz

## Objective
To create a quiz using HTML, CSS and JavaScript. The quiz needs to have a timer and Highscore table that shows scores saved in the Local Storage.

## Development
The quiz was conceptualized as a serie of quiz-cards, each with their own content and references. When the user presses the 'Start Button' the first card shows up by changing the hidden property from true to false. This happens for all the other questions when the user hits the "Next" button, and that's how we switch between cards.

Then answers are presented in an organized list with a round input that allows the user to select the answer the they prefer. Each input has a value of 'right' or 'wrong', which it's grabbed by the script when the user hits the "Next" button. Depending on the answer we add or substract 10 points to a global score value. If the user chooses the wrong answer, 5 sec are also substracted from the remaining time.

If the timer gets to 0 or the user presses the button of the tenth question, the "Result Card" shows up and we get our final score, which we can save to the Local Storage. When we click save, we are redirected to the Highscore page, where all the scores saved in the Local Storage are shown. In the page we can the delete previous entries, staring with the last most reacent added. From this page we can also go back and take the test once again.

## Limitations
Since Every question is its own "card", adding new questions is not "that" simple. We would need to create a new card manually, with all its content and all its attributes, which is not very efficient. Furthermore, all the logic for the card must be added to the script, which already is larger than desired. Also, since it wasn't specified in the accepting criteria, making the app responsive wasn't a priority during development. That's the reason why on mobile phones the look of the app is not the best.

## Conclusion
The app covers all requierements. However, it could be optimized to make it easier to maintain and update.

## Acknowledgment
The questions and their answers were taken from W3School JavaScript Quiz. They are not my own.