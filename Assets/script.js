const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question: "Which Pokemon is a starter from the Johto region?",
        imgSrc: "Assets/PNGs/Cyndaquil_Shadow.png",
        choiceA : "Turtwig",
        choiceB : "Charmander",
        choiceC : "Cyndaquil",
        choiceD : "Pichu",
        correct : "C"
    },{
        question : "What is the evolved form of Eevee that was introduced in Generation 2?",
        imgSrc : "Assets/PNGs/Eevee.png",
        choiceA : "Jolteon",
        choiceB : "Espeon",
        choiceC : "Vaporeon",
        choiceD : "Leafeon",
        correct : "B" 
    },{
        question : "Which Pokemon evolves into Steelix when traded while holding a Metal Coat?",
        imgSrc : "Assets/PNGs/Steelix.png",
        choiceA : "Onix",
        choiceB : "Scyther",
        choiceC : "Sneasel",
        choiceD : "Murkrow",
        correct : "A"
    },{
        question : "Which electric type move is known for its ability to paralyze the target?",
        imgSrc : "Assets/PNGs/Electric_Type_Icon.png",
        choiceA : "Thunderbolt",
        choiceB : "Thunder Wave",
        choiceC : "Thunder Punch",
        choiceD : "Thunder Shock",
        correct : "B"
    },{
        question: "Which Legendary Pokemon is known as the 'Master' of the Legenday Birds: Articuno, Zapdos, and Moltres? ",
        imgSrc: "Assets/PNGs/Legendary_Birds.png",
        choiceA : "Ho-Oh",
        choiceB : "Mewtwo",
        choiceC : "Lugia",
        choiceD : "Mew",
        correct : "C"
    }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let quizTime = 60; // 60s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / quizTime;

let TIMER;
let score = 0;

// render question

function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    
}

start.addEventListener("click",startQuiz);

// start the quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    quizTime = 60; // Set the initial quiz time
    TIMER = setInterval(renderCounter, 1000);
}


function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function renderCounter() {
    if (quizTime >= 0) {
        counter.innerHTML = quizTime;
        timeGauge.style.width = quizTime * gaugeUnit + 'px';
        quizTime--;
    } else {
        clearInterval(TIMER);
        scoreRender();
    }
}

// checkAnswer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // correct answer
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#3cb371";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "Assets/PNGs/80_Correct.png" :
              (scorePerCent >= 60) ? "Assets/PNGs/60_Correct.png" :
              (scorePerCent >= 40) ? "Assets/PNGs/40_Correct.png" :
              (scorePerCent >= 20) ? "Assets/PNGs/20_Correct.png" :
              "Assets/PNGs/0_Correct.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}