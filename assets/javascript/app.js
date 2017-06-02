// Declaring Variables
  // Question and Answer Array
var qaArray = {
    question1: ["Question_1", ["A", "B", "C", "D"] ],
    question2: ["Question_2", ["A", "B", "C", "D"] ],
    question3: ["Question_3", ["A", "B", "C", "D"] ],
    question4: ["Question_4", ["A", "B", "C", "D"] ],
    question5: ["Question_5", ["A", "B", "C", "D"] ],
    question6: ["Question_6", ["A", "B", "C", "D"] ],
    question7: ["Question_7", ["A", "B", "C", "D"] ],
    question8: ["Question_8", ["A", "B", "C", "D"] ],
    question9: ["Question_9", ["A", "B", "C", "D"] ],
    question10: ["Question_10", ["A", "B", "C", "D"] ],
}

// Score
var timer = 120;
var intervalId;
var correct = 0;
var incorrect = 0;

// Test for calling items in array
console.log(qaArray.question1[0]);
console.log(qaArray.question1[1][0]);

// Start Button Function
$("#start-btn").click(function(){

  // Update HMTL with Quiz "pg"

  // Runs decrement function
  function run(){
    intervalId = setInterval(decrement, 1000)
  }

  // Start Timer with 1 second intervals
function decrement()  {
  timer--;
}
  // Show timer header
  $("timer").html("<h2>" + timer + "</h2>");



  // 


});

// Score Counter Conditionals
// if( ){
//   correct++;
// }else{
//   incorrect++;
// }