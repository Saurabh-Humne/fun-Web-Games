const questions = [
    {
        question: "Who's that Pokemon?",
        image: "img/Pikachu.png",
        answer: [
            {text: "Pikachu", correct: true},
            {text: "Pichu", correct: false},
            {text: "Sandshrew", correct: false},
            {text: "Raichu", correct: false}
        ]
    },
    {
        question: "Who's that Pokemon?",
        image: "img/charizard.png",
        answer: [
            {text: "charmander", correct: false},
            {text: "charmeleon", correct: false},
            {text: "charizard", correct: true},
            {text: "Blastoise", correct: false}
        ]
    },
    {
        question: "Who's that Pokemon?",
        image: "img/Snorlax.png",
        answer: [
            {text: "Aerodactyl", correct: false},
            {text: "Articuno", correct: false},
            {text: "Lapras", correct: false},
            {text: "Snorlax", correct: true}
        ]
    },
    {
        question: "Who's that Pokemon?",
        image: "img/Gangar.png",
        answer: [
            {text: "Gastly", correct: false},
            {text: "Gangar", correct: true},
            {text: "Haunter", correct: false},
            {text: "Cloyster", correct: false}
        ]
    },
    {
        question: "Who's that Pokemon?",
        image: "img/Psyduck.png",
        answer: [
            {text: "Golduck", correct: false},
            {text: "Psyduck", correct: true},
            {text: "Persian", correct: false},
            {text: "Meowth", correct: false}
        ]
    },
    {
        question: "Who's that Pokemon?",
        image: "img/Eevee.png",
        answer: [
            {text: "Eevee", correct: true},
            {text: "Vaporeon", correct: false},
            {text: "Jolteon", correct: false},
            {text: "Flareon", correct: false}
        ]
    },
    {
        question: "Who's that Pokemon?",
        image: "img/Bulbasaur.png",
        answer: [
            {text: "Ivysaur", correct: false},
            {text: "Venusaur", correct: false},
            {text: "Bulbasaur", correct: true},
            {text: "caterpie", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    const questionImage = document.getElementById("question-image");
    if(currentQuestion.image){
        questionImage.src = currentQuestion.image;
        questionImage.style.display = "block";
    }else{
        questionImage.style.display = "none";
    }

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();