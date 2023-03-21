var startQuizBtnEl = document.getElementById('start-quiz');
var answer1BtnEl = document.getElementById('answer1');
var answer2BtnEl = document.getElementById('answer2');
var answer3BtnEl = document.getElementById('answer3');
var answer4BtnEl = document.getElementById('answer4');
var submitScoreEl = document.getElementById('submitScore');
var questionsEl = document.getElementById('questions');
var mainDivEl = document.getElementById('mainDiv');
var htmlTimeLeft = document.getElementById('timeLeft');
var answerCorrectWrong = document.getElementById('answerCorrectWrong');
var questionDisplayEl = document.createElement("questionDisplay");
var finalScoreDisplayEl = document.createElement("finalScoreDisplay");
var enterInitialsEl = document.createElement("enterInitials");
var enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea");
var button1234 = document.createElement("button");
var timeLeft = 75;

var score = 0;
var highScore = 50;
var finalAns = 0
var quizStatus = true;
var questionNumber = 0;
var answerNumber = 0;


var checkTimes = 1
var viewHighScoresBtnEl = document.getElementById('view-high-scores');




answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display = 'none';
enterInitialsTextArea.style.display = 'none';



var answersArr = { 
    answer: {
        0: {
            0: "Strings",
            1: "Boolean",
            2: "Alerts",
            3: "Numbers"
        },

        1: {
            0: "Javascript",
            1: "Terminal/bash",
            2: "For loops",
            3: "Console.log"
        },

        2: { 
            0: "Commas",
            1: "Curly brackets",
            2: "Quotes",
            3: "Parentheses"
        },

        3: { 
            0: "Number of strings",
            1: "Other arrays",
            2: "Booleans",
            3: "All of the above"
        },

        4: {
            0: "Parentheses",
            1: "Curly Brackets",
            2: "Quotes",
            3: "Square Brackets"
        },



    }
};

var questionsArr = {
    correct: {
        0: "Commonly used datatypes DO NOT include:",
        1: "'A very useful tool used during development and debugging for printing content to the debugger is:",
        2: "Strings values must be enclosed within ___ when being assigned to variables:",
        3: "Arrays in javascript can be used to store the following",
        4: "The condition in an if / else statement is enclosed within _____:",
    }
};

htmlTimeLeft.textContent = timeLeft;

viewHighScoresBtnEl.addEventListener("click", function () {

    var quizUsers = "";
    var substringTest = "";
    var highScores = "";

    for (var i = 0; i < localStorage.length; i++) {
        var checkUserValue = [];

        quizUsers = localStorage.getItem(localStorage.key(i));
        substringTest = quizUsers.substring(0, 4)
        if (substringTest == "quiz") {
            checkUserValue = quizUsers.split(",");
            var userName = checkUserValue[0]
            highScores += "User " + userName.substring(4) + " high score is: " + checkUserValue[1] + "\n";
        }
    }
    window.alert(highScores);

});

submitScoreEl.addEventListener("click", function () {


    var quizLocalStorage = "quiz";
    var quizUserDetails = "";
    var value = [];


    quizUserDetails = quizLocalStorage + enterInitialsTextArea.value
    value = [quizUserDetails, highScore]



    if (!localStorage.length) {
        localStorage.setItem("test", "test");
    }


    for (var i = 0; i < localStorage.length; i++) {

        var checkUser = "";
        var checkUserValue = [];


        quizUserDetails = quizLocalStorage + enterInitialsTextArea.value;


        checkUser = localStorage.getItem(quizUserDetails);


        if (checkUser == null) {
            localStorage.setItem(quizUserDetails, value);
            window.alert("Your score" + highScore + " has been recorded")
            break;
        } else if (checkUser != null) {
            checkUserValue = checkUser.split(",");


        }




        if (quizUserDetails == checkUserValue[0] && highScore == checkUserValue[1]) {



            localStorage.setItem(quizUserDetails, value);
            window.alert(highScore + " " + "is the latest entry for user initial " + enterInitialsTextArea.value + ". Entry not to be added.")
            break;
        } else if (enterInitialsTextArea.value == "") {
            window.alert("Enter an initials");
            break;
        } else if (quizUserDetails == checkUserValue[0] && highScore > checkUserValue[1]) {

            localStorage.setItem(quizUserDetails, value);
            window.alert("New high score of " + highScore + " has been recorded!.Your previous score was " + checkUserValue[1])
            break;
        } else if (quizUserDetails == checkUserValue[0] && highScore < checkUserValue[1]) {

            localStorage.setItem(quizUserDetails, value);
            window.alert("Your previous code of " + checkUserValue[1] + " was higher. Entry will not be added.");
            break;

        } else {
            localStorage.setItem(quizUserDetails, value);
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        }

    }

});


answer1BtnEl.addEventListener("mouseover", function () {

    answerCorrectWrong.style.display = 'none';

});

answer2BtnEl.addEventListener("mouseover", function () {

    answerCorrectWrong.style.display = 'none';

});

answer3BtnEl.addEventListener("mouseover", function () {

    answerCorrectWrong.style.display = 'none';

});

answer4BtnEl.addEventListener("mouseover", function () {

    answerCorrectWrong.style.display = 'none';

});

submitScoreEl.addEventListener("mouseover", function () {

    answerCorrectWrong.style.display = 'none';

});

startQuizBtnEl.addEventListener("click", function () {


    startQuizBtnEl.style.display = 'none';
    questionDisplay.style.display = 'none';
    finalScoreDisplay.style.display = 'none';
    enterInitials.style.display = 'none';
    score = 0;
    timeLeft = 75;
    htmlTimeLeft.textContent = timeLeft;
    finalAns = 0;
    checkTimes = 1;




    var timeInterval = setInterval(function () {

        if (score === 1) {
            highScore -= 10;
        }

        score = 0;


        if (timeLeft >= 1 && finalAns !== 1) {

            questionDisplay.textContent = questionsArr.correct[questionNumber];

            questionDisplay.style.display = "";
            answer1BtnEl.style.display = "";
            answer2BtnEl.style.display = "";
            answer3BtnEl.style.display = "";
            answer4BtnEl.style.display = "";


            answer1BtnEl.textContent = answersArr.answer[answerNumber][0];
            answer2BtnEl.textContent = answersArr.answer[answerNumber][1];
            answer3BtnEl.textContent = answersArr.answer[answerNumber][2];
            answer4BtnEl.textContent = answersArr.answer[answerNumber][3];

            gridContainer.appendChild(questionDisplayEl);
            gridContainer.appendChild(answer1BtnEl);
            gridContainer.appendChild(finalScoreDisplayEl);
            timeLeft -= 1;
            htmlTimeLeft.textContent = timeLeft;
            console.log("time left:" + timeLeft)


            answer1BtnEl.addEventListener("click", function () {

                if (questionDisplay.textContent === "The condition of an  if/else statement is enclosed with the following:" && answer1BtnEl.textContent === "Parentheses") {
                    console.log("Correct");

                    questionNumber = 2;
                    answerNumber = 4;
                    answerCorrectWrong.style.display = "";
                    answerCorrectWrong.textContent = "Correct!";
                    answerCorrectWrong.style.borderTop = "solid #000980";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                } else {


                    switch (answer1BtnEl.textContent) {
                        case "Strings":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = " Wrong Answer!";
                            answerCorrectWrong.style.borderTop = "solid #000980";

                            score = 1;
                            questionNumber = 1;
                            answerNumber = 1;
                            break;
                        case "Number of strings":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong Answer!";
                            answerCorrectWrong.style.borderTop = "solid #000980";

                            score = 1;
                            questionNumber = 3;
                            answerNumber = 2;
                            break;
                        case "Javascript":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong Answer!";
                            answerCorrectWrong.style.borderTop = "solid #000980";

                            score = 1;
                            questionNumber = 4;
                            answerNumber = 3;
                            break;
                        case "Commas":
                            console.log("Correct");

                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Correct!";
                            answerCorrectWrong.style.borderTop = "solid #000980";
                            answerCorrectWrongGrid.appendChild(answerCorrectWrong);

                            questionNumber = 0;
                            answerNumber = 0;
                            console.log("I'm here" + timeInterval);
                            answer1BtnEl.style.display = 'none';
                            answer2BtnEl.style.display = 'none';
                            answer3BtnEl.style.display = 'none';
                            answer4BtnEl.style.display = 'none';
                            answerCorrectWrong.style.display = 'none';
                            startQuizBtnEl.style.display = 'none';
                            questionDisplay.textContent = "Quiz Finished!";
                            finalScoreDisplay.style.display = "";
                            enterInitials.style.display = "";
                            enterInitialsTextArea.style.display = "";
                            finalAns = 1;
                            lastQuestionWrong();
                            finalScoreDisplay.textContent = "Your final score is: " + highScore;
                            enterInitials.textContent = "Enter initials: "
                            submitScoreEl.style.display = "";
                            submitScoreEl.textContent = "Submit";

                            clearInterval(timeInterval);
                            break;

                    }
                }


            });

            answer2BtnEl.addEventListener("click", function () {

                if (questionDisplay.textContent === "Strings values must be enclosed within ___ when being assigned to variables:" && answer2BtnEl.textContent === "Curly brackets") {
                    console.log("Correct");

                    answerCorrectWrong.style.display = "";
                    answerCorrectWrong.textContent = "Correct!";
                    answerCorrectWrong.style.borderTop = "solid #000980";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);

                    questionNumber = 0;
                    answerNumber = 0;
                    console.log("Hello!" + timeInterval);
                    answer1BtnEl.style.display = 'none';
                    answer2BtnEl.style.display = 'none';
                    answer3BtnEl.style.display = 'none';
                    answer4BtnEl.style.display = 'none';
                    answerCorrectWrong.style.display = 'none';
                    startQuizBtnEl.style.display = 'none';
                    questionDisplay.textContent = "Quiz Finished";
                    finalScoreDisplay.style.display = "";
                    enterInitials.style.display = "";
                    enterInitialsTextArea.style.display = "";
                    finalScoreDisplay.textContent = "Your final score is: " + highScore;
                    enterInitials.textContent = "Enter initials: "
                    submitScoreEl.style.display = "";
                    submitScoreEl.textContent = "Submit";

                    clearInterval(timeInterval);
                } else {

                    switch (answer2BtnEl.textContent) {
                        case "Boolean":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong Answer!";
                            answerCorrectWrong.style.borderTop = "solid #000980";

                            score = 1;
                            questionNumber = 1;
                            answerNumber = 1;
                            break;
                        case "Curly Brackets":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wromg Answer!";
                            answerCorrectWrong.style.borderTop = "solid #000980";

                            score = 1;
                            questionNumber = 2;
                            answerNumber = 4;
                            console.log(score);
                            break;
                        case "Other arrays":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong Answer!";
                            answerCorrectWrong.style.borderTop = "solid #000980";
                            score = 1;
                            questionNumber = 3;
                            answerNumber = 2;
                            break;
                        case "Terminal/bash":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong Answer!";
                            answerCorrectWrong.style.borderTop = "solid #000980";
                            score = 1;
                            questionNumber = 4;
                            answerNumber = 3;
                            break;


                    }
                }




            });

            answer3BtnEl.addEventListener("click", function () {

                if (questionDisplay.textContent === "Commonly used datatypes DO NOT include?" && answer3BtnEl.textContent === "Alerts") {
                    console.log("Correct");

                    questionNumber = 1;
                    answerNumber = 1;
                    answerCorrectWrong.style.display = "";
                    answerCorrectWrong.textContent = "Correct!";
                    answerCorrectWrong.style.borderTop = "solid #000980";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                } else if (questionDisplay.textContent === "A very useful tool used during development and debugging for printing content to the debugger is:" && answer3BtnEl.textContent === "For loops") {
                    console.log("Correct");

                    questionNumber = 4;
                    answerNumber = 3;
                    answerCorrectWrong.style.display = "";
                    answerCorrectWrong.textContent = "Correct!";
                    answerCorrectWrong.style.borderTop = "solid #000980";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                } else if (questionDisplay.textContent === "The condition of an if/else statement is enclosed with the following:" && answer3BtnEl.textContent === "Quotes") {
                    console.log("Inside the case now");
                    answerCorrectWrong.style.display = "";
                    answerCorrectWrong.textContent = "Wrong!";
                    answerCorrectWrong.style.borderTop = "solid #000980";
                    score = 1;
                    questionNumber = 2;
                    answerNumber = 4;
                }

                else {

                    switch (answer3BtnEl.textContent) {
                        case "Booleans":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong Answer!";
                            answerCorrectWrong.style.borderTop = "solid #000980";
                            score = 1;
                            questionNumber = 3;
                            answerNumber = 2;
                            break;
                        case "Quotes":
                            console.log("Inside the case now");
                            score = 1;
                            questionNumber = 0;
                            answerNumber = 0;
                            console.log("Hello" + timeInterval);
                            answer1BtnEl.style.display = 'none';
                            answer2BtnEl.style.display = 'none';
                            answer3BtnEl.style.display = 'none';
                            answer4BtnEl.style.display = 'none';
                            answerCorrectWrong.style.display = 'none';
                            startQuizBtnEl.style.display = 'none';

                            questionDisplay.textContent = "Quiz Finished!";
                            finalScoreDisplay.style.display = "";
                            enterInitials.style.display = "";
                            enterInitialsTextArea.style.display = "";
                            finalAns = 1;
                            lastQuestionWrong();
                            finalScoreDisplay.textContent = "Your final score is: " + highScore;
                            enterInitials.textContent = "Enter initials: "
                            submitScoreEl.style.display = "";
                            submitScoreEl.textContent = "Submit";

                            clearInterval(timeInterval);

                            break;
                    }

                }

            });

            answer4BtnEl.addEventListener("click", function () {

                if (questionDisplay.textContent === "Arrays in javascript can be used to store the following" && answer4BtnEl.textContent === "All of the above") {
                    console.log("Correct");

                    questionNumber = 3;
                    answerNumber = 2;
                    answerCorrectWrong.style.display = "";
                    answerCorrectWrong.textContent = "Correct!"
                    answerCorrectWrong.style.borderTop = "solid #000980";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);

                } else {

                    switch (answer4BtnEl.textContent) {
                        case "Numbers":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong Answer!";
                            answerCorrectWrong.style.borderTop = "solid #000980";
                            score = 1;
                            questionNumber = 1;
                            answerNumber = 1;
                            break;
                        case "Square Brackets":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong Answer!";
                            answerCorrectWrong.style.borderTop = "solid #000980";
                            score = 1;
                            questionNumber = 2;
                            answerNumber = 4;
                            break;
                        case "Console.log":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong Answer!";
                            answerCorrectWrong.style.borderTop = "solid #000980";
                            score = 1;
                            questionNumber = 4;
                            answerNumber = 3;
                            break;
                        case "Parentheses":
                            console.log("Inside the case now");
                            answerCorrectWrong.style.display = "";
                            answerCorrectWrong.textContent = "Wrong Answer!";
                            answerCorrectWrong.style.borderTop = "solid #000980";
                            score = 1;
                            questionNumber = 0;
                            answerNumber = 0;
                            console.log("Hello" + timeInterval);
                            answer1BtnEl.style.display = 'none';
                            answer2BtnEl.style.display = 'none';
                            answer3BtnEl.style.display = 'none';
                            answer4BtnEl.style.display = 'none';
                            answerCorrectWrong.style.display = 'none';
                            startQuizBtnEl.style.display = 'none';
                            questionDisplay.textContent = "Quiz Finished!";
                            finalScoreDisplay.style.display = "";
                            enterInitials.style.display = "";
                            enterInitialsTextArea.style.display = "";
                            finalAns = 1;
                            lastQuestionWrong();
                            finalScoreDisplay.textContent = "Your final score is: " + highScore;
                            enterInitials.textContent = "Enter initials: "
                            submitScoreEl.style.display = "";
                            submitScoreEl.textContent = "Submit";

                            clearInterval(timeInterval);
                            break;

                    }

                }

            });

        }
        else if (timeLeft === 0) {

            console.log("Hello" + timeInterval);
            questionNumber = 0;
            answerNumber = 0;
            answer1BtnEl.style.display = 'none';
            answer2BtnEl.style.display = 'none';
            answer3BtnEl.style.display = 'none';
            answer4BtnEl.style.display = 'none';
            answerCorrectWrong.style.display = 'none';
            questionDisplay.textContent = "Time's Up \"Click Start Quiz\"";
            startQuizBtnEl.style.display = "";
            clearInterval(timeInterval);


        }
    }, 1000)

});

function lastQuestionWrong() {
    if (finalAns === 1 && checkTimes === 1) {
        highScore -= 10;
        checkTimes = 2;
        return highScore
    }

}