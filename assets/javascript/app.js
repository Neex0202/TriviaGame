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
    $("#answer1").append('<input type="radio" value=' + qaArray.question1[1][0] + '>' + "A");
    $("#answer1").append('<input type="radio" value=' + qaArray.question1[1][1] + '>' + "B");
    $("#answer1").append('<input type="radio" value=' + qaArray.question1[1][2] + '>' + "C");
    $("#answer1").append('<input type="radio" value=' + qaArray.question1[1][3] + '>' + "D");




    // Appending Question2 to Div
    $("#question2").append("<br>" + qaArray.question2[0]);

    // Appending Radio buttons with answers to Div
    $("#answer2").append('<input type="radio" value=' + qaArray.question2[1][0] + '>' + "A");
    $("#answer2").append('<input type="radio" value=' + qaArray.question2[1][1] + '>' + "B");
    $("#answer2").append('<input type="radio" value=' + qaArray.question2[1][2] + '>' + "C");
    $("#answer2").append('<input type="radio" value=' + qaArray.question2[1][3] + '>' + "D");




    // Appending Question3 to Div
    $("#question3").append("<br>" + qaArray.question3[0]);

    // Appending Radio buttons with answers to Div
    $("#answer3").append('<input type="radio" value=' + qaArray.question3[1][0] + '>' + "A");
    $("#answer3").append('<input type="radio" value=' + qaArray.question3[1][1] + '>' + "B");
    $("#answer3").append('<input type="radio" value=' + qaArray.question3[1][2] + '>' + "C");
    $("#answer3").append('<input type="radio" value=' + qaArray.question3[1][3] + '>' + "D");




    // // Appending Question4 to Div
    // $("#question1").append("<br>" + qaArray.question1[3]);

    // // Appending Radio buttons with answers to Div
    // $("#answer1").append('<input type="radio" value=' + qaArray.question1[1][0] + '>' + "A");
    // $("#answer1").append('<input type="radio" value=' + qaArray.question1[1][1] + '>' + "B");
    // $("#answer1").append('<input type="radio" value=' + qaArray.question1[1][2] + '>' + "C");
    // $("#answer1").append('<input type="radio" value=' + qaArray.question1[1][3] + '>' + "D");




    // // Appending Question5 to Div
    // $("#question1").append("<br>" + qaArray.question1[4]);

    // // Appending Radio buttons with answers to Div
    // $("#answer1").append('<input type="radio" value=' + qaArray.question1[1][0] + '>' + "A");
    // $("#answer1").append('<input type="radio" value=' + qaArray.question1[1][1] + '>' + "B");
    // $("#answer1").append('<input type="radio" value=' + qaArray.question1[1][2] + '>' + "C");
    // $("#answer1").append('<input type="radio" value=' + qaArray.question1[1][3] + '>' + "D");


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
$("#done").on("click", function(){

function grade() {
    var selected = $('input[type=radio]:checked');
    console.log(selected);
}

// runs Grade function
grade();
});



// Conditionals for Grade
// if('input[type=radio]:checked' = )

    




// // Start Button Function
// $("#start").click(function() {

//     // Update HMTL with Quiz "pg"

//     // Runs decrement function once every second
//     function run() {
//         intervalId = setInterval(decrement, 1000)
//     }

//     // Decrement function
//     function decrement() {
//     		// Decreases number by 1
//         number--;

//         // Show the number in 

//         $("show-number").html("<h2>" + number + "</h2>");


//     }

//     run();




//     // 


// });

// Score Counter Conditionals
// if( ){
//   correct++;
// }else{
//   incorrect++;
// }
