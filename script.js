var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.querySelector(".close");

btn.onclick = function () {
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}

var pcScoreCount = 0;
var userScoreCount = 0;


window.onload = function () {
    if (localStorage.getItem('userScoreCount')) {
        userScoreCount = parseInt(localStorage.getItem('userScoreCount'));
        document.getElementById('userScoreCount').innerHTML = userScoreCount;
    }
    if (localStorage.getItem('pcScoreCount')) {
        pcScoreCount = parseInt(localStorage.getItem('pcScoreCount'));
        document.getElementById('pcScoreCount').innerHTML = pcScoreCount;
    }
}


function playAgain() {
    document.getElementById('choices').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
}



var userChoice;
var pcChoice;

function play(userChoice) {

    var options = ["rock", "paper", "scissor"];

    userChoice = userChoice;
    var pcChoice = options[Math.floor(Math.random() * options.length)];

    document.getElementById('choices').style.display = 'none';
    document.getElementById('results').style.display = 'block';


    var userImg = document.getElementById('userImg');
    userImg.src = './Assets/' + userChoice + '.png';
    userImg.parentNode.id = userChoice;

    var pcImg = document.getElementById('pcImg');
    pcImg.src = './Assets/' + pcChoice + '.png';
    pcImg.parentNode.id = pcChoice;


    if (userChoice == pcChoice) {
        document.getElementById('resultTitle').innerHTML = "It's a tie!";
    } else if (
        (userChoice === 'rock' && pcChoice === 'scissor') ||
        (userChoice === 'paper' && pcChoice === 'rock') ||
        (userChoice === 'scissor' && pcChoice === 'paper')
    ) {
        document.getElementById('resultTitle').innerHTML = 'You win!';
        userScoreCount++;
        localStorage.setItem('userScoreCount', userScoreCount);
        document.getElementById('userScoreCount').innerHTML = userScoreCount;
        document.getElementById('nextBtn').style.display = 'block';
    } else {
        document.getElementById('resultTitle').innerHTML = 'Computer wins!';
        pcScoreCount++;
        localStorage.setItem('pcScoreCount', pcScoreCount);
        document.getElementById('pcScoreCount').innerHTML = pcScoreCount;
    }

}
