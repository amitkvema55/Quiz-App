const Question = [{
    question: "Who wrote Mahabharta?",
    answer: [
        { text: "KRISHAN", correct: false },
        { text: "Kansh", correct: false },
        { text: "Vedvyas", correct: true },
        { text: "Arjuna", correct: false },
    ]
},
{
    question: "Who wrote Ramayan?",
    answer: [
        { text: "Vibhisan", correct: false },
        { text: "Valmiki", correct: true },
        { text: "Sugrreev", correct: false },
        { text: "Bharat", correct: false },
    ]

},
{
    question: "How many Chapeter in Bhagwat Geeta?",
    answer: [
        { text: "11", correct: false },
        { text: "13", correct: false },
        { text: "14", correct: false },
        { text: "18", correct: true },
    ]

},
{
    question: "PrimeMinister of INDIA?",
    answer: [
        { text: "Modi", correct: true },
        { text: "Yogi", correct: false },
        { text: "SHAH", correct: false },
        { text: "Rahul Gandhi", correct: false },
    ]

}
];
const questions = document.getElementById("question");
const answerButton = document.getElementById("answerbutton");
const nextbtn = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    ShowQuestion();

}


function ShowQuestion() {
    reset();
    let CurrentQuestion = Question[currentQuestionIndex];
    let questionno = currentQuestionIndex + 1;
    questions.innerHTML = questionno + "." + CurrentQuestion.question;


    CurrentQuestion.answer.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if (answers.correct) {
            button.dataset.correct = answers.correct;

        }

        button.addEventListener("click", selectAnswer);


    });}


    function reset() {
        nextbtn.style.display = "none";
        while (answerButton.firstChild) {
            answerButton.removeChild(answerButton.firstChild);
        }

    }

    function selectAnswer(e) 
    {
        const selectedbtn = e.target;
        const iscorrect = selectedbtn.dataset.correct === "true";
        if (iscorrect) 
        {
            selectedbtn.classList.add("correct");
            score++;

        }
        else 
        {
            selectedbtn.classList.add("incorrect");
        }

        Array.from(answerButton.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });

      nextbtn.style.display="block";

    }

    nextbtn.addEventListener("click",()=>{
        if(currentQuestionIndex <Question.length){
            handleNextButton();
        }

        else{
        StartQuiz();
        }

    })

    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex <Question.length){
            
            ShowQuestion();
        }

        else{
       showscore();
        }
        
    }


function showscore(){
    reset();
    questions.innerHTML=`Your score is ${score} out of ${Question.length}`;
    nextbtn.innerHTML="Play Again";
    nextbtn.style.display="block";
}

StartQuiz();
