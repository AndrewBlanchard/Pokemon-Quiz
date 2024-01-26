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
        imgSrc: "PNGs/Cyndaquil_Shadow.png",
        choiceA: "Turtwig",
        choiceB: "Charmander",
        choiceC: "Cyndaquil",
        choiceD: "Pichu",
        correct: "C"
    },
    {
        question: "What is the evolved form of Eevee that was introduced in Generation 2?",
        imgSrc: "PNGs/Eevee.png",
        choiceA: "Jolteon",
        choiceB: "Espeon",
        choiceC: "Vaporeon",
        choiceD: "Leafeon",
        correct: "B"
    },
    {
        question: "Which Pokemon evolves into Steelix when traded while holding a Metal Coat?",
        imgSrc: "PNGs/Steelix.png",
        choiceA: "Onix",
        choiceB: "Scyther",
        choiceC: "Sneasel",
        choiceD: "Murkrow",
        correct: "A"
    },
    {
        question: "Which electric type move is known for its ability to paralyze the target?",
        imgSrc: "PNGs/Electric_Type_Icon.png",
        choiceA: "Thunderbolt",
        choiceB: "Thunder Wave",
        choiceC: "Thunder Punch",
        choiceD: "Thunder Shock",
        correct: "B"
    },
    {
        question: "Which Legendary Pokemon is known as the 'Master' of the Legenday Birds: Articuno, Zapdos, and Moltres? ",
        imgSrc: "PNGs/Legendary_Birds.png",
        choiceA: "Ho-Oh",
        choiceB: "Mewtwo",
        choiceC: "Lugia",
        choiceD: "Mew",
        correct: "C"
    }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let quizTime = 60;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / quizTime;

let TIMER;
let score = 0;

// render question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

// start the quiz
function startQuiz() {
    document.getElementById("rules").style.display = "none";
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    quizTime = 60; // Set quiz time
    TIMER = setInterval(renderCounter, 1000);
}

function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
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
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#3cb371";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function saveScore() {
    const initialsInput = document.getElementById("initials");
    const userInitials = initialsInput.value.toUpperCase(); // Convert to uppercase
    const userScore = Math.round(100 * score / questions.length);

    if (userInitials && userScore) {
        // Save the score in your preferred storage (localStorage, database, etc.)
        // For example, save it in localStorage
        const savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
        savedScores.push({ initials: userInitials, score: userScore });
        localStorage.setItem("savedScores", JSON.stringify(savedScores));

        // Display the leaderboard
        displayLeaderboard();
    }
}

function displayLeaderboard() {
    const leaderboardContainer = document.getElementById("leaderboard-container");
    const leaderboardList = document.getElementById("leaderboard");

    // Clear previous leaderboard entries
    leaderboardList.innerHTML = "";

    // Retrieve saved scores from storage
    const savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];

    // Sort scores in descending order
    const sortedScores = savedScores.sort((a, b) => b.score - a.score);

    // Display the top scores in the leaderboard
    sortedScores.slice(0, 5).forEach((entry, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${entry.initials}: ${entry.score}%`;
        leaderboardList.appendChild(listItem);
    });

    // Show the leaderboard container
    leaderboardContainer.style.display = "block";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "PNGs/80_Correct.png" :
        (scorePerCent >= 60) ? "PNGs/60_Correct.png" :
            (scorePerCent >= 40) ? "PNGs/40_Correct.png" :
                (scorePerCent >= 20) ? "PNGs/20_Correct.png" :
                    "PNGs/0_Correct.png";

    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";

    // Add initials input and Save Score button
    scoreDiv.innerHTML += "<div id='initials-container'>";
    scoreDiv.innerHTML += "<label for='initials'>Enter your initials:</label>";
    scoreDiv.innerHTML += "<input type='text' id='initials' maxlength='3' placeholder='AAA'>";
    scoreDiv.innerHTML += "<button onclick='saveScore()'>Save Score</button>";
    scoreDiv.innerHTML += "</div>";

    // Add leaderboard container
    scoreDiv.innerHTML += "<div id='leaderboard-container'>";
    scoreDiv.innerHTML += "<h2>Leaderboard</h2>";
    scoreDiv.innerHTML += "<ul id='leaderboard'></ul>";
    scoreDiv.innerHTML += "</div>";

    // Display the leaderboard
    displayLeaderboard();
}
