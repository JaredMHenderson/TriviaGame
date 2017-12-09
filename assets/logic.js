

$('#start').on('click', function () {
    $('#start').remove();
    game.loadQuestion();
});

$(document).on('click', '.answer-button', function(e){
    game.clicked(e);
});

$(document).on('click', '#reset', function(){
    game.reset();
})

var questions = [{
    question: 'At Jims house party, what does Pam find in Jims room that he later gives her as a gift?',
    answers: ['A Piggy Bank', 'A Sweater', 'A Yearbook Photo', 'A Baseball Trophy'],
    answer: 'A Yearbook Photo'
    }, {
    question: 'What food item caused the unintentional fire to start in the office building?',
    answers: ['Kevins homemade chilli', 'Ryans cheesy pita', 'Creeds Mung Beans', 'Michaels Chicken Pot Pie'],
    answer: 'Ryans cheesy pita'
    }, {
    question: 'What animal did the employees of the office hold a funeral for in the parking lot?',
    answers: ['A bird', 'A Racoon', 'A Turtle', 'A Bat'],
    answer: 'A Bird'
    }, {
    question: 'Jim sends Dwight on a quest for the Holy Grail, the instructsion are called what?',
    answers: ['Threat Level Midnight', 'The Dunder Code', 'Dunder Mifflin Infinity', 'Second Life'],
    answer: 'The Dunder Code'

    }];

var game = {
    questions: questions,
    currentQuestion:0,
    counter:30,
    correct:0,
    incorrect:0,
    unanswered:0,

    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter <= 0){
            console.log('TIME UP');
            game.timeup();
        }
    },

    loadQuestion: function(){

        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').html(`<h2 id="counter">${'30'}</h2>`);
        $('#subwrapper').append('<h2>'+ questions[game.currentQuestion].question + '</h2>');
        for(var i = 0;i < questions[game.currentQuestion].answers.length; i++){
            $('#subwrapper').append('<button class="answer-button" id ="button-'+i+' "data-name="'
            +questions[game.currentQuestion].answers[i]+' ">' + questions[game.currentQuestion].answers[i]+'</button>');
        }
    },

    nextQuestion: function(){
        game.counter = 30;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
     },

    timeup: function(){
        clearInterval(timer);
        game.unanswered++;
        $('#subwrapper').html(`<h1>${"TIME IS UP"}</h2>`);
        $('#subwrapper').append(`<h3>${"The Correct Answer is: "} ${questions[game.currentQuestion].answer}</h3>`);
        if(game.currentQuestion == questions.length){
            setTimeout(game.results, 3*1000);
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }
    },

     results: function(){
        clearInterval(timer);
        $('#subwrapper').html(`<h2>${"GAME OVER"}</h2>`)
        $('#subwrapper').append(`<h3>${"Correct Answers: "} ${game.correct}</h3>`)
        $('#subwrapper').append(`<h3>${"Incorrect Answers: "} ${game.incorrect}</h3>`)
        $('#subwrapper').append(`<h3>${"Unanswered Questions: "} ${game.unanswered}</h3>`)
        $('#subwrapper').append(`<button id="reset">${"Restart Game"}</button>`);
    },

     clicked: function(e) {
        clearInterval(timer);
                if($(e.target).data("name") == questions[game.currentQuestion].answer){
            game.answeredCorrectly();
        } else{
            game.answeredIncorrectly();
        }
    },

    answeredCorrectly: function(){
        clearInterval(timer);
        game.correct++;
        $('#subwrapper').html(`<h3>${'That is Correct!'}</h3`)
        if(game.currentQuestion == questions.length){
            setTimeout(game.results, 3*1000);
        } else {
            setTimeout(game.nextQuestion, 3*1000);
        }
        console.log('Correct!');

    },

    answeredIncorrectly: function(){
        clearInterval(timer);
        game.incorrect++;
        $('#subwrapper').html(`<h3>${'That is Incorrect!'}</h3`)
        if(game.currentQuestion == questions.length-1){
            setTimeout(game.results, 3000);
        } else {
            setTimeout(game.nextQuestion, 3000);
        }
        console.log('Incorrect');
    },

    reset: function(){
        game.currentQuestion = 0;
        game.counter = 30;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();

    }
}








