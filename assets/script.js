$(document).ready(function () {

    var questionCounter = 1;
    var answerNumber = 0;
    var answerButton = $(".btn");
    var scoreCounter = 0;
    var changeQuestion = $("#question");
    var button1 = $("#button1");
    var button2 = $("#button2");
    var button3 = $("#button3");
    var button4 = $("#button4");

    var questionsAndAnswers = {
        questions: ["Inside which HTML element do we put the JavaScript?",
            "What is the correct JavaScript syntax to change the context of the HTML element below?",
            "Where is the correct place to insert a JavaScript?",
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

    //when click any button
    answerButton.on("click", function () {

        //start the quiz and display the 1st question
        if (answerButton.hasClass("startQuiz")) {
            dislayQuestionCheckAnswer(questionCounter, answerNumber);
            answerButton.removeClass("startQuiz");
            questionCounter++;
        }
        //if this is the last question show score
        else if (questionCounter === 2) {
            showScoreAndStoreName();
        }
        //if quiz already started display the next question and check score
        else {
            answerNumber = Number($(this).val());
            dislayQuestionCheckAnswer(questionCounter, answerNumber);
            questionCounter++;
        }

    });

    //display total score and show input and submit button
    function showScoreAndStoreName() {
        console.log(questionsAndAnswers.choices[0][0]);
    }

    //add button
    function addButton(buttonId) { buttonId.removeClass("d-none"); }

    //remove button
    function removeButton(buttonId) { buttonId.addClass("d-none"); }

    //all the questions and answers
    function dislayQuestionCheckAnswer(questionCounter, answerNumber) {
        switch (questionCounter) {
            case 1:
                changeQuestion.html("1. Inside which HTML element do we put the JavaScript?");
                button1.text("<script>");
                button2.text("scripting>");
                addButton(button2);
                button3.text("<js>");
                addButton(button3);
                button4.text("<javascript>");
                addButton(button4);
                break;
            case 2:
                if (answerNumber === 1) { scoreCounter++; }
                changeQuestion.text("2. What is the correct JavaScript syntax to change the context of the HTML element below?");
                button1.text('document.getElementById("demo").innerHTML = "Hellow World!";');
                button2.text('document.getElement("p").innerHTML = "Hello World!";');
                button3.text('#demo.innerHTML = "Hellow World!";');
                button4.text('document.getElementByName("p").innerHTML = "Hello World!";');
                break;
            case 3:
                if (answerNumber === 1) { scoreCounter++; }
                changeQuestion.text("Where is the correct place to insert a JavaScript?");
                button1.text("Both the <head> section and the <body> section are correct");
                button2.text("The <head> section");
                button3.text("The <body> section");
                removeButton(button4);
                break;
            case 4:
                if (answerNumber === 1) { scoreCounter++; }
                changeQuestion.text('What is the correct syntax for referring to an external script called "xxx.js"?');
                button1.text('<script name="xxx.js">');
                button2.text('script href="xxx.js">');
                button3.text('<script src="xxx.js"');
                break;
            case 5:
                if (answerNumber === 3) { scoreCounter++; }
                changeQuestion.text("The external JavaScript file must contain the <script> tag.");
                button1.text("True");
                button2.text("False");
                removeButton(button3);
                break;
            case 6:
                if (answerNumber === 2) { scoreCounter++; }
                changeQuestion.text('How do you write "Hello World" in an alert box?');
                button1.text('alert("Hello World");');
                button2.text('alertBox("Hello World");');
                button3.text('msg("Hello World");');
                addButton(button3);
                button4.text('msgBox("Hello World");');
                addButton(button4);
                break;
            case 7:
                if (answerNumber === 1) { scoreCounter++; }
                changeQuestion.text("How do you create a function in JavaScript?");
                button1.text("function:myFunction()");
                button2.text("function myFunction()");
                button3.text("function = myFunction()");
                removeButton(button4);
                break;
            case 8:
                if (answerNumber === 2) { scoreCounter++; }
                changeQuestion.text('How do you call a function named "myFunction"?');
                button1.text("call function myFunction()");
                button2.text("call myFunction()");
                button3.text("myFunction()");
                break;
            case 9:
                if (answerNumber === 3) { scoreCounter++; }
                changeQuestion.text("")
                break;
            case 10:
                break;
            case 11:
                break;
            case 12:
                break;
            case 13:
                break;
            case 14:
                break;
            case 15:
                break;
            case 16:
                break;
            case 17:
                break;
            case 18:
                break;
            case 19:
                break;
            case 20:
                break;
            case 21:
                break;
            case 22:
                break;
            case 23:
                break;
            case 24:
                break;
            case 25:

        }
    }

});