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

    //when click any button
    answerButton.on("click", function () {

        //start the quiz and display the 1st question
        if (answerButton.hasClass("startQuiz")) {
            dislayQuestionCheckAnswer(questionCounter, answerNumber);
            answerButton.removeClass("startQuiz");
            questionCounter++;
        } 
        //if this is the last quesiont show score
        else if (questionCounter === 25) {
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
    function showScoreAndStoreName () {
        console.log("score");
    }

    //add button
    function addButton (buttonId) {
        buttonId.removeClass("d-none");
    }

    //remove button
    function removeButton (buttonId) {
        buttonId.addClass("d-none");
    }

    //all the questions and answers
    function dislayQuestionCheckAnswer(questionCounter, answerNumber) {
        switch (questionCounter) {
            case 1:
                changeQuestion.text("1. Inside which HTML element do we put the JavaScript?");
                button1.text("<script>");
                button2.text("scripting>");
                addButton(button2);
                button3.text("<js>");
                addButton(button3);
                button4.text("<javascript>");
                addButton(button4);
                break;
            case 2:
                if (answerNumber === 1) {
                    scoreCounter++;
                }
                changeQuestion.text("2. What is the correct JavaScript syntax to change the context of the HTML element below?");
                button1.text('document.getElementById("demo").innerHTML = "Hellow World!";');
                button2.text('document.getElement("p").innerHTML = "Hello World!";');
                button3.text('#demo.innerHTML = "Hellow World!";');
                button4.text('document.getElementByName("p").innerHTML = "Hello World!";');
                break;
            case 3:
                if (answerNumber === 1) {
                    scoreCounter++;
                }
                changeQuestion.text("Where is the correct place to insert a JavaScript?");
                button1.text("Both the <head> section and the <body> section are correct");
                button2.text("The <head> section");
                button3.text("The <body> section");
                removeButton(button4);
                break;
            case 4:
                if (answerNumber === 1) {
                    scoreCounter++;
                }
                changeQuestion.text('What is the correct syntax for referring to an external script called "xxx.js"?');
                button1.text('<script name="xxx.js">');
                button2.text('script href="xxx.js">');
                button3.text('<script src="xxx.js"');
                break;
            case 5:
                if (answerNumber === 3) {
                    scoreCounter++;
                }
                changeQuestion.text("The external JavaScript file must contain the <script> tag.");
                button1.text("True");
                button2.text("False");
                removeButton(button3);
                break;
            case 6:
                if (answerNumber === 2) {
                    scoreCounter++;
                }
                changeQuestion.text('How do you write "Hello World" in an alert box?');
                button1.text('alert("Hello World");');
                button2.text('alertBox("Hello World");');
                button3.text('msg("Hello World");');
                addButton(button3);
                button4.text('msgBox("Hello World");');
                addButton(button4);
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
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