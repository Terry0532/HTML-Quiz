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

    answerButton.on("click", function () {
        if (answerButton.hasClass("startQuiz")) {
            dislayQuestionCheckAnswer(questionCounter, answerNumber);
            answerButton.removeClass("startQuiz");
            questionCounter++;
        } else {
            answerNumber = Number($(this).val());
            dislayQuestionCheckAnswer(questionCounter, answerNumber);
        }
    });

    function dislayQuestionCheckAnswer(questionCounter, answerNumber) {
        switch (questionCounter) {
            case 1:
                changeQuestion.text("1. Inside which HTML element do we put the JavaScript?");
                button1.text("<script>");
                button2.text("scripting>");
                button2.removeClass("d-none");
                button3.text("<js>");
                button3.removeClass("d-none");
                button4.text("<javascript>");
                button4.removeClass("d-none");
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
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
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
        }
    }

});