//Quiz Cards
var startCard = document.getElementById('start-card');
var firstQuestion = document.getElementById('first-question');
var secondQuestion = document.getElementById('second-question');
var thirdQuestion = document.getElementById('third-question');
var fourthQuestion = document.getElementById('fourth-question');
var fifthQuestion = document.getElementById('fifth-question');
var sixthQuestion = document.getElementById('sixth-question');
var seventhQuestion = document.getElementById('seventh-question');
var eighthQuestion = document.getElementById('eighth-question');
var ninthQuestion = document.getElementById('ninth-question');
var tenthQuestion = document.getElementById('tenth-question');

//Card Button
var startButton = document.getElementById('start-button');
var firstButton = document.getElementById('first-button');
var secondButton = document.getElementById('second-button');
var thirdButton = document.getElementById('third-button');
var fourthButton = document.getElementById('fourth-button');
var fifthButton = document.getElementById('fifth-button');
var sixthButton = document.getElementById('sixth-button');
var seventhButton = document.getElementById('seventh-button');
var eighthButton = document.getElementById('eighth-button');
var ninthButton = document.getElementById('ninth-button');
var tenthButton = document.getElementById('tenth-button');

//Hide or show question cards
startCard.hidden = false;
firstQuestion.hidden = true;
secondQuestion.hidden = true;
thirdQuestion.hidden = true;
fourthQuestion.hidden = true;
fifthQuestion.hidden = true;
sixthQuestion.hidden = true;
seventhQuestion.hidden = true;
eighthQuestion.hidden = true;
ninthQuestion.hidden = true;
tenthQuestion.hidden = true;

//Button Interactivity
startButton.addEventListener('click', function(){
    firstQuestion.hidden = false;
    startCard.hidden = true;
});

firstButton.addEventListener('click', function(){
    secondQuestion.hidden = false;
    firstQuestion.hidden = true;
    var firstOpt = document.querySelectorAll('#first-question input[name="answer"]');
    var answerOne;
    for(var opt of firstOpt){
        if(opt.checked){
            answerOne = opt.value;
        };
    };
    console.log(answerOne);
});

secondButton.addEventListener('click', function(){
    thirdQuestion.hidden = false;
    secondQuestion.hidden = true;
});

thirdButton.addEventListener('click', function(){
    fourthQuestion.hidden = false;
    thirdQuestion.hidden = true;
});

fourthButton.addEventListener('click', function(){
    fifthQuestion.hidden = false;
    fourthQuestion.hidden = true;
});

fifthButton.addEventListener('click', function(){
    sixthQuestion.hidden = false;
    fifthQuestion.hidden = true;
});

sixthButton.addEventListener('click', function(){
    seventhQuestion.hidden = false;
    sixthQuestion.hidden = true;
});

seventhButton.addEventListener('click', function(){
    eighthQuestion.hidden = false;
    seventhQuestion.hidden = true;
});

eighthButton.addEventListener('click', function(){
    ninthQuestion.hidden = false;
    eighthQuestion.hidden = true;
});

ninthButton.addEventListener('click', function(){
    tenthQuestion.hidden = false;
    ninthQuestion.hidden = true;
});



