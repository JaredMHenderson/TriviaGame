
$( document ).ready(function() {
    console.log( "ready!" );

var correctAnswers      = 0;
var wrongAnswers        = 0;
var unansweredQuestions = 0;

var timeLeft = 60;
var elem =  $('.timeRemaining');
            //

var timerId = setInterval(countdown, 1000);


$('.startButton').click(function() {
   countdown();
});

var countdown = function() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    console.log('Times up');
    alert("Times up");
  } else {
    $('.timeRemaining').html(timeLeft + ' seconds remaining');
    timeLeft--;
  }
}


//Function to check if the answers are correct






});



  $('.submitButton').click(function() {
        answerCheck();

  });


  function answerCheck() {
    if($("input[class='yearbook']:checked").val()){
        alert('NICE')
    }
};

  // if ($("input[name='questionOne']:checked").val()) {
  //      alert('Nothing is checked!');
  //       return false;
  //   }
  //   else {
  //     alert('One of the radio buttons is checked!');
  //   }




// var timeLeft = 60;
// var element = $('#countdownClock');


// var timerId = setInterval(countdown, 1000);


// function countdown() {

//     if (timeLeft === 0) {
//         clearTimeout(timerId);
//         reset();
//     } else {
//         $
//     }
// }