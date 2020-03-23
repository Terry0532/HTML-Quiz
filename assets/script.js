$(document).ready(function () {

    var questionCounter = 24;
    var scoreCounter = 0;
    var changeQuestion = $("#question");
    var btnDiv = $("#btnDiv");
    var totalSeconds = 120;
    var countDownMinute = 0;
    var countDownSecond = 5;
    var timer = $("#timer");
    var questionsAndAnswers = {
        questions: ["Inside which HTML element do we put the JavaScript?",
            "What is the correct JavaScript syntax to change the context of the HTML element below?",
            'Where is the correct place to insert a JavaScript?',
            'What is the correct syntax for referring to an external script called "xxx.js"?',
            "The external JavaScript file must contain the <script> tag.",
            'How do you write "Hello World" in an alert box?',
            "How do you create a function in JavaScript?",
            'How do you call a function named "myFunction"?',
            "How to write an IF statement in JavaScript?",
            'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
            "How does a WHILE loop start?",
            "How does a FOR loop start?",
            "How can you add a comment in a JavaScript?",
            "How to insert a comment that has more than one line?",
            "What is the correct way to write a JavaScript array?",
            "How do you round the number 7.25, to the nearest integer?",
            "How do you find the number with the highest value of x and y?",
            'What is the correct JavaScript syntax for opening a new window called "w2"?',
            "JavaScript is the same as Java.",
            "How can y ou detect the client's browser name?",
            "Which event occurs when the user clicks on an HTML element?",
            "How do you declare a JavaScript variable?",
            "Which operator is used to assign a value to a variable?",
            "What will the following code return: Boolean(10 > 9)",
            "Is JavaScript case-sensitive?"
        ],
        answers: ["1", "1", "1", "3", "2", "1", "2", "3", "2", "3", "2", "3", "3", "3", "1", "4", "3", "2", "1", "1", "2", "1", "4", "1", "2"],
        choices: {
            0: ["<script>", "<scripting>", "<javascript>"],
            1: ['document.getElementById("demo").innerHTML = "Hellow World!";', 'document.getElement("p").innerHTML = "Hello World!";', '#demo.innerHTML = "Hellow World!";', 'document.getElementByName("p").innerHTML = "Hello World!";'],
            2: ["Both the <head> section and the <body> section are correct", "The <head> section", "The <body> section"],
            3: ['<script name="xxx.js">', '<script href="xxx.js">', '<script src="xxx.js">'],
            4: ["True", "False"],
            5: ['alert("Hello World");', 'alertBox("Hello World");', 'msg("Hello World");', 'msgeBox("Hello World");'],
            6: ["function:myFunction()", "function myFunction()", "function = myFunction()"],
            7: ["call function myFunction()", "call myFunction()", "myFunction()"],
            8: ["if i = 5", "if (i == 5)", "if i = 5 then", "if i == 5 then"],
            9: ["if i=! 5 then", "if (i <> 5)", "if (i != 5)", "if i <> 5"],
            10: ["while (i <= 10; i++)", "while (i <= 10)", "while i = 1 to 10"],
            11: ["for (i = 0; i <= 5)", "for (i <= 5; i++)", "for (i = 0; i <= 5; i++)", "for i = 1 to 5"],
            12: ["<!—This is a comment—>", "`This is a comment", "//This is a comment"],
            13: ["<!—This comment has<br>more than one line—>", "//This comment has<br>more than one line//", "/*This comment has<br>more than one line*/"],
            14: ['var colors = ["red", "green", "blue"]', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = "red", "green", "blue"', 'var colors = (1:"red", 2:"green", 3:"blue")'],
            15: ["rnd(7.25);", "round(7.25)", "Math.rnd(7.25)", "Math.round(7.25)"],
            16: ["ceil(x, y)", "Math.ceil(x, y)", "Math.max(x, y)", "top(x, y)"],
            17: ['w2 = window.new("http://w3schools.com");', 'w2 = window.open("http://w3schools.com");'],
            18: ["False", "True"],
            19: ["navigator.appName", "browser.name", "client.navName"],
            20: ["onmouseover", "onclick", "onmouseclick", "onchange"],
            21: ["var carName;", "v carName;", "variable carName;"],
            22: ["x", "-", "*", "="],
            23: ["true", "false", "NaN"],
            24: ["No", "Yes"]
        }
    }

    //start the quiz
    $("#startQuiz").on("click", function () {

        //remove start button
        btnDiv.empty();

        //display 1st quetion
        changeQuestion.text(questionsAndAnswers.questions[questionCounter]);

        //display 1st question's choices
        displayChoices();

    });

    //user click answer button
    btnDiv.on("click", ".userChoice", function () {

        //check if this is the curect answer
        if (questionsAndAnswers.answers[questionCounter] === $(this).val()) {
            scoreCounter++;
        }

        //go to next question
        questionCounter++;

        //if this is not last question continue, else show score
        if (questionCounter < 25) {
            //remove previous choices
            btnDiv.empty();

            //display next question and choices
            changeQuestion.text(questionsAndAnswers.questions[questionCounter]);
            displayChoices();
        } else {
            showScoreAndStoreName();
        }

    });

    //display timer and update progress bar
    var countDown = setInterval(function () {
        timer.text(countDownMinute + "m" + countDownSecond + "s");
        totalSeconds--;
        countDownSecond--;
        if (countDownSecond < 0) {
            countDownSecond = 59;
            countDownMinute--;
        }
        if (countDownMinute < 0) {
            clearInterval(countDown);
            showScoreAndStoreName();
        }
    }, 1000);

    function displayChoices() {
        for (i = 0; i < questionsAndAnswers.choices[questionCounter].length; i++) {
            var addBtn = $("<button>");
            addBtn.addClass("btn btn-primary userChoice");
            addBtn.text(questionsAndAnswers.choices[questionCounter][i]);

            //question 13's choices needs to be in html format in order to create 2 lines
            if (questionCounter === 13) {
                addBtn.html(questionsAndAnswers.choices[questionCounter][i]);
            }

            //add a value to the button for keep the score
            addBtn.val(i + 1);

            $("#btnDiv").append(addBtn);
        }
    }

    //display total score and show input and submit button
    function showScoreAndStoreName() {
        changeQuestion.text("Yout total score is " + scoreCounter);
        btnDiv.empty();
    }

});