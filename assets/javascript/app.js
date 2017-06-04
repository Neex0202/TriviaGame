// Declaring Variables
// Question and Answer Array
var qaArray = {
    question1: ["Question_1", ["A", "B", "C", "D"]],
    question2: ["Question_2", ["A", "B", "C", "D"]],
    question3: ["Question_3", ["A", "B", "C", "D"]],
    question4: ["Question_4", ["A", "B", "C", "D"]],
    question5: ["Question_5", ["A", "B", "C", "D"]],
    question6: ["Question_6", ["A", "B", "C", "D"]],
    question7: ["Question_7", ["A", "B", "C", "D"]],
    question8: ["Question_8", ["A", "B", "C", "D"]],
    question9: ["Question_9", ["A", "B", "C", "D"]],
    question10: ["Question_10", ["A", "B", "C", "D"]],
}

// Score
var number = 120;
var intervalId;
var correct = 0;
var incorrect = 0;
var userPick;

// Test for calling items in array
console.log(qaArray.question1[0]);
console.log(qaArray.question1[1][0]);


$("#start").on("click", run);

//  The run function sets an interval
//  that runs the decrement function once a second.
function run() {
    intervalId = setInterval(decrement, 1000);

    // Appending Question 1 to Div
    $("#question1").append("<br>" + qaArray.question1[0]);

    // Appending Radio buttons with answers to Div
    $("#answer1").append('<input type="radio" id="correct1" value=' + qaArray.question1[1][0] + '>' + "Correct");
    $("#answer1").append('<input type="radio" class="incorrect1" value=' + qaArray.question1[1][1] + '>' + "B");
    $("#answer1").append('<input type="radio" class="incorrect1" value=' + qaArray.question1[1][2] + '>' + "C");
    $("#answer1").append('<input type="radio" class="incorrect1" value=' + qaArray.question1[1][3] + '>' + "D");

    // Added Event Listener on click of correct answer
    $("#correct1").click(function() {
        alert("Correct!");
        correct++;
        console.log(correct);
    });

    // Added Event Listener on click of incorrect answer
    $(".incorrect1").click(function() {
        alert("EHHHH!");
        incorrect++;
        console.log(incorrect);
    });


    // Appending Question2 to Div
    $("#question2").append("<br>" + qaArray.question2[0]);

    // Appending Radio buttons with answers to Div
    $("#answer2").append('<input type="radio" class="incorrect2" value=' + qaArray.question2[1][0] + '>' + "A");
    $("#answer2").append('<input type="radio" id="correct2" value=' + qaArray.question2[1][1] + '>' + "Correct");
    $("#answer2").append('<input type="radio" class="incorrect2" value=' + qaArray.question2[1][2] + '>' + "C");
    $("#answer2").append('<input type="radio" class="incorrect2" value=' + qaArray.question2[1][3] + '>' + "D");

    // Added Event Listener on click of correct answer
    $("#correct2").click(function() {
        alert("Correct!");
        correct++;
        console.log(correct);
    });

    // Added Event Listener on click of incorrect answer
    $(".incorrect2").click(function() {
        alert("EHHH!");
        incorrect++;
        console.log(incorrect);
    });



    // Appending Question3 to Div
    $("#question3").append("<br>" + qaArray.question3[0]);

    // Appending Radio buttons with answers to Div
    $("#answer3").append('<input type="radio" class="incorrect3" value=' + qaArray.question3[1][0] + '>' + "A");
    $("#answer3").append('<input type="radio" class="incorrect3" value=' + qaArray.question3[1][1] + '>' + "B");
    $("#answer3").append('<input type="radio" class="incorrect3" value=' + qaArray.question3[1][2] + '>' + "C");
    $("#answer3").append('<input type="radio" id="correct3" value=' + qaArray.question3[1][3] + '>' + "Correct");

    // Added Event Listener on click of correct answer
    $("#correct3").click(function() {
        alert("Correct!");
        correct++;
        console.log(correct);
    });

    // Added Event Listener on click of incorrect answer
    $(".incorrect3").click(function() {
        alert("EHHH!");
        incorrect++;
        console.log(incorrect);
    });


    // Appending Question4 to Div
    $("#question4").append("<br>" + qaArray.question4[0]);

    // Appending Radio buttons with answers to Div
    $("#answer4").append('<input type="radio" id="correct4" value=' + qaArray.question4[1][0] + '>' + "Correct");
    $("#answer4").append('<input type="radio" class="incorrect4" value=' + qaArray.question4[1][1] + '>' + "B");
    $("#answer4").append('<input type="radio" class="incorrect4" value=' + qaArray.question4[1][2] + '>' + "C");
    $("#answer4").append('<input type="radio" class="incorrect4" value=' + qaArray.question4[1][3] + '>' + "D");

    // Added Event Listener on click of correct answer
    $("#correct4").click(function() {
        alert("Correct!");
        correct++;
        console.log(correct);
    });

    // Added Event Listener on click of incorrect answer
    $(".incorrect4").click(function() {
        alert("EHHH!");
        incorrect++;
        console.log(incorrect);
    });



    // Appending Question5 to Div
    $("#question5").append("<br>" + qaArray.question5[0]);

    // Appending Radio buttons with answers to Div
    $("#answer5").append('<input type="radio" class="incorrect5" value=' + qaArray.question5[1][0] + '>' + "A");
    $("#answer5").append('<input type="radio" class="incorrect5" value=' + qaArray.question5[1][1] + '>' + "B");
    $("#answer5").append('<input type="radio" id="correct5" value=' + qaArray.question5[1][2] + '>' + "Correct");
    $("#answer5").append('<input type="radio" class="incorrect5" value=' + qaArray.question5[1][3] + '>' + "D");

    // Added Event Listener on click of correct answer
    $("#correct5").click(function() {
        alert("Correct!");
        correct++;
        console.log(correct);
    });

    // Added Event Listener on click of incorrect answer
    $(".incorrect5").click(function() {
        alert("EHHH!");
        incorrect++;
        console.log(incorrect);
    });



}

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>" + number + "</h2>");


    //  Conditional if number reaches 0
    if (number === 0) {

        // Execute Stop function
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
    }
}


//  The stop function
function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}






// Dont button to Execute Grade function
$("#done").on("click", function() {


    // Grade Function
    function grade() {

        // Create variable for radio button chosen
        var selected = $('input[type=radio]:checked');

        // Grabs the user Input for each selected button
        $.each(selected, function() {

            // Logging user Input value of radio buttons for answer key
            console.log(this.value);

            // Console Log Corrent Answer Count
            console.log(correct);

            // Console Log Incorrect Answer Count
            console.log(incorrect);

            // Header for Grade
            $("#grade").html("<br><br><h2>Show Me What You Got!</h2>");


            // Creating new Div for answers correct
            $("#grade").append("<br>Answers Correct: " + correct);


            // Creating new Div for answers incorrect

           $("#grade").append("<br>Answers Incorrect: " + incorrect);
        });
    }
    // runs Grade function
    grade();
});
