# Pokémon Quiz App

The **Pokémon Quiz App** is a fun and interactive web-based application where users identify Pokémon based on an image and select the correct name from multiple choices. It dynamically tracks the user's score and provides feedback after each question.

## Features
- Displays an image of a Pokémon and provides multiple-choice answers.
- Highlights correct and incorrect answers upon selection.
- Tracks the score and displays it at the end of the quiz.
- Provides an option to replay the quiz.

## File Structure
The project consists of three main files:
1. **index.html**: The HTML structure of the quiz.
2. **style.css**: Styles for the quiz layout and components.
3. **script.js**: The JavaScript logic to manage quiz functionality.

## Technologies Used
- HTML5 for structuring content.
- CSS3 for styling and layout.
- JavaScript for dynamic functionality.

## How to Use
1. Clone or download the repository.
2. Place the project files in the same directory.
3. Open the `index.html` file in a web browser to start the quiz.

## Instructions
1. Each question presents a Pokémon image and four answer options.
2. Click on the answer you believe is correct.
3. The app highlights the correct and incorrect answers.
4. Click "Next" to proceed to the next question.
5. At the end, your total score will be displayed with an option to replay.

## Customization
To add or modify quiz questions:
1. Open `script.js`.
2. Update the `questions` array with new questions, image paths, and answer choices. For example:
    ```javascript
    {
        question: "Who's that Pokémon?",
        image: "img/YourPokemon.png",
        answer: [
            {text: "Correct Answer", correct: true},
            {text: "Wrong Answer 1", correct: false},
            {text: "Wrong Answer 2", correct: false},
            {text: "Wrong Answer 3", correct: false}
        ]
    }
    ```

## Example Questions
- **Who's that Pokémon?**
  - ![Example](img/Pikachu.png)
  - Answers: Pikachu (Correct), Pichu, Sandshrew, Raichu.

## Styling
The `style.css` file defines:
- A responsive and user-friendly interface.
- Hover effects for buttons.
- Color-coded feedback for correct (green) and incorrect (red) answers.

## Future Improvements
- Add a timer for each question.
- Include sound effects for correct/incorrect answers.
- Expand the question pool.

## Acknowledgments
- Pokémon images and names are for educational purposes only.

Enjoy the quiz and test your Pokémon knowledge!
