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
var resultCard = document.getElementById('result-card');

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
var saveButton = document.getElementById('save-button');

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
resultCard.hidden = true;

//Score
var finalResult = document.getElementById('final-result');
let scoreValue = 0;

//Timer
var timer = document.getElementById('timer');
var secLeft = 60;

//Button Interactivity
startButton.addEventListener('click', function(){
    firstQuestion.hidden = false;
    startCard.hidden = true;
    var timerInterval = setInterval(function(){
        secLeft--;
        timer.textContent = secLeft;

        if(secLeft === 0 || !resultCard.hidden){
            clearInterval(timerInterval);
            startCard.hidden = true;
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
            resultCard.hidden = false;
            finalResult.textContent = scoreValue.toString();
        }
       
    }, 1000);

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
    switch(answerOne){
        case 'right':
            document.getElementById('result-one').textContent = 'Previous Answer was Right!'
            scoreValue+=10;
            break;
        case 'wrong':
            document.getElementById('result-one').textContent = 'Previous Answer was Wrong!'
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
});

secondButton.addEventListener('click', function(){
    thirdQuestion.hidden = false;
    secondQuestion.hidden = true;
    var secondOpt = document.querySelectorAll('#second-question input[name="answer"]');
    var answerTwo;
    for(var opt of secondOpt){
        if(opt.checked){
            answerTwo = opt.value;
        };
    };
    switch(answerTwo){
        case 'right':
            document.getElementById('result-two').textContent = 'Previous Answer was Right!'
            scoreValue+=10;
            break;
        case 'wrong':
            document.getElementById('result-two').textContent = 'Previous Answer was Wrong!'
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
});

thirdButton.addEventListener('click', function(){
    fourthQuestion.hidden = false;
    thirdQuestion.hidden = true;
    var thirdOpt = document.querySelectorAll('#third-question input[name="answer"]');
    var answerThree;
    for(var opt of thirdOpt){
        if(opt.checked){
            answerThree = opt.value;
        };
    };
    switch(answerThree){
        case 'right':
            document.getElementById('result-three').textContent = 'Previous Answer was Right!'
            scoreValue+=10;
            break;
        case 'wrong':
            document.getElementById('result-three').textContent = 'Previous Answer was Wrong!'
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
});

fourthButton.addEventListener('click', function(){
    fifthQuestion.hidden = false;
    fourthQuestion.hidden = true;
    var fourthOpt = document.querySelectorAll('#fourth-question input[name="answer"]');
    var answerFour;
    for(var opt of fourthOpt){
        if(opt.checked){
            answerFour = opt.value;
        };
    };
    switch(answerFour){
        case 'right':
            document.getElementById('result-four').textContent = 'Previous Answer was Right!'
            scoreValue+=10;
            break;
        case 'wrong':
            document.getElementById('result-four').textContent = 'Previous Answer was Wrong!'
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
});

fifthButton.addEventListener('click', function(){
    sixthQuestion.hidden = false;
    fifthQuestion.hidden = true;
    var fifthOpt = document.querySelectorAll('#fifth-question input[name="answer"]');
    var answerFive;
    for(var opt of fifthOpt){
        if(opt.checked){
            answerFive = opt.value;
        };
    };
    switch(answerFive){
        case 'right':
            document.getElementById('result-five').textContent = 'Previous Answer was Right!'
            scoreValue+=10;
            break;
        case 'wrong':
            document.getElementById('result-five').textContent = 'Previous Answer was Wrong!'
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
});

sixthButton.addEventListener('click', function(){
    seventhQuestion.hidden = false;
    sixthQuestion.hidden = true;
    var sixthOpt = document.querySelectorAll('#sixth-question input[name="answer"]');
    var answerSix;
    for(var opt of sixthOpt){
        if(opt.checked){
            answerSix = opt.value;
        };
    };
    switch(answerSix){
        case 'right':
            document.getElementById('result-six').textContent = 'Previous Answer was Right!'
            scoreValue+=10;
            break;
        case 'wrong':
            document.getElementById('result-six').textContent = 'Previous Answer was Wrong!'
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
});

seventhButton.addEventListener('click', function(){
    eighthQuestion.hidden = false;
    seventhQuestion.hidden = true;
    var seventhOpt = document.querySelectorAll('#seventh-question input[name="answer"]');
    var answerSeven;
    for(var opt of seventhOpt){
        if(opt.checked){
            answerSeven = opt.value;
        };
    };
    switch(answerSeven){
        case 'right':
            document.getElementById('result-seven').textContent = 'Previous Answer was Right!'
            scoreValue+=10;
            break;
        case 'wrong':
            document.getElementById('result-seven').textContent = 'Previous Answer was Wrong!'
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
});

eighthButton.addEventListener('click', function(){
    ninthQuestion.hidden = false;
    eighthQuestion.hidden = true;
    var eighthOpt = document.querySelectorAll('#eighth-question input[name="answer"]');
    var answerEight;
    for(var opt of eighthOpt){
        if(opt.checked){
            answerEight = opt.value;
        };
    };
    switch(answerEight){
        case 'right':
            document.getElementById('result-eight').textContent = 'Previous Answer was Right!'
            scoreValue+=10;
            break;
        case 'wrong':
            document.getElementById('result-eight').textContent = 'Previous Answer was Wrong!'
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
});

ninthButton.addEventListener('click', function(){
    tenthQuestion.hidden = false;
    ninthQuestion.hidden = true;
    var ninthOpt = document.querySelectorAll('#ninth-question input[name="answer"]');
    var answerNine;
    for(var opt of ninthOpt){
        if(opt.checked){
            answerNine = opt.value;
        };
    };
    switch(answerNine){
        case 'right':
            document.getElementById('result-nine').textContent = 'Previous Answer was Right!'
            scoreValue+=10;
            break;
        case 'wrong':
            document.getElementById('result-nine').textContent = 'Previous Answer was Wrong!'
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
});

tenthButton.addEventListener('click', function(){
    resultCard.hidden = false;
    tenthQuestion.hidden = true;
    var tenthOpt = document.querySelectorAll('#tenth-question input[name="answer"]');
    var answerTen;
    for(var opt of tenthOpt){
        if(opt.checked){
            answerTen = opt.value;
        };
    };
    switch(answerTen){
        case 'right':
            scoreValue+=10;
            break;
        case 'wrong':
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
    finalResult.textContent = scoreValue.toString();
});


function makeEntry(u_initials,u_highscore){
    var entry = {
        initials: u_initials,
        highscore: u_highscore
    };
    
    return entry;
}

saveButton.addEventListener('click', function(){
    var userInitials = document.getElementById('user-initials').value;
    if(!userInitials){
        alert('Please enter your initials');
    } else {
        var newEntry = makeEntry(userInitials,scoreValue);
        if (localStorage.getItem('highscores')) {
            var updatedHighScore = JSON.parse(localStorage.getItem('highscores'));
            updatedHighScore.push(newEntry)
            localStorage.setItem('highscores', JSON.stringify(updatedHighScore));
        } else {
            var highScores = [];
            highScores.push(newEntry);
            localStorage.setItem('highscores', JSON.stringify(highScores));
        };
    }; 
    window.location.assign('score.html'); 
})


