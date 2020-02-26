let cardsAll = [
    { img: 'img/2C.png', points: 2},
    { img: 'img/2D.png', points: 2},
    { img: 'img/2H.png', points: 2},
    { img: 'img/2S.png', points: 2},
    { img: 'img/3C.png', points: 3},
    { img: 'img/3D.png', points: 3},
    { img: 'img/3H.png', points: 3},
    { img: 'img/3S.png', points: 3},
    { img: 'img/4C.png', points: 4},
    { img: 'img/4D.png', points: 4},
    { img: 'img/4H.png', points: 4},
    { img: 'img/4S.png', points: 4},
    { img: 'img/5C.png', points: 5},
    { img: 'img/5D.png', points: 5},
    { img: 'img/5H.png', points: 5},
    { img: 'img/5S.png', points: 5},
    { img: 'img/6C.png', points: 6},
    { img: 'img/6D.png', points: 6},
    { img: 'img/6H.png', points: 6},
    { img: 'img/6S.png', points: 6},
    { img: 'img/7C.png', points: 7},
    { img: 'img/7D.png', points: 7},
    { img: 'img/7H.png', points: 7},
    { img: 'img/7S.png', points: 7},
    { img: 'img/8C.png', points: 8},
    { img: 'img/8D.png', points: 8},
    { img: 'img/8H.png', points: 8},
    { img: 'img/8S.png', points: 8},
    { img: 'img/9C.png', points: 9},
    { img: 'img/9D.png', points: 9},
    { img: 'img/9H.png', points: 9},
    { img: 'img/9S.png', points: 9},
    { img: 'img/10C.png', points: 10},
    { img: 'img/10D.png', points: 10},
    { img: 'img/10H.png', points: 10},
    { img: 'img/10S.png', points: 10},
    { img: 'img/JC.png', points: 10},
    { img: 'img/JD.png', points: 10},
    { img: 'img/JH.png', points: 10},
    { img: 'img/JS.png', points: 10},
    { img: 'img/QC.png', points: 10},
    { img: 'img/QD.png', points: 10},
    { img: 'img/QH.png', points: 10},
    { img: 'img/QS.png', points: 10},
    { img: 'img/KC.png', points: 10},
    { img: 'img/KD.png', points: 10},
    { img: 'img/KH.png', points: 10},
    { img: 'img/KS.png', points: 10},
    { img: 'img/AC.png', points: 11},
    { img: 'img/AH.png', points: 11},
    { img: 'img/AS.png', points: 11}
];

let playerCard = [];
let dealerCard = [];

let playerRoundScore = 0;
let dealerRoundScore = 0;

function randomCard(cardsAll, player, itteration) {
    for(let i = 0; i<itteration; i++) {
        player.push(cardsAll[Math.floor(Math.random() * cardsAll.length)]);
    }   
}

newGame();

document.querySelector('.btn__new').addEventListener('click', function() {
    newGame()
});

function newGame() {
    //delete scores
    playerCard = [];
    dealerCard = [];

    playerRoundScore = 0;
    dealerRoundScore = 0;
    document.getElementById('player__score').textContent = "0";
    document.getElementById('dealer__score').textContent = "0";
    // add event listener to all btns
    document.querySelector('.all-cards').addEventListener('click', startGame);
    document.querySelector('.btn__add').addEventListener('click', addCard);
    document.querySelector('.btn__show').addEventListener('click', showCompareCard);
    // make properly styling
    document.querySelector('.start-game').style.display = "inline-block";
    document.querySelector('.all-cards').style.display = "block";
    document.querySelector('#player__score').classList.remove('score--scale');
    document.querySelector('.final-message__wrapper').style.display = "none";
    document.querySelector('.btn__wrapper').style.display = "none";
    document.querySelector('.btn__new').style.display = "none";
    document.querySelector('.player__card-1').style.display = "none";
    document.querySelector('.player__card-2').style.display = "none";
    document.querySelector('.player__card-3').style.display = "none";
    document.querySelector('.dealer__card-1').style.display = "none";
    document.querySelector('.dealer__card-2').style.display = "none";
};

function startGame(){
    // hide start game btn // display add & compare btn
    document.querySelector('.start-game').style.display = "none";
    setTimeout(() => document.querySelector('.btn__wrapper').style.display = "inline-block", 2500);
    // take random cards
    randomCard(cardsAll, playerCard, 2);
    randomCard(cardsAll, dealerCard, 1);
    //delete cards
    cardsAll.splice(cardsAll.indexOf(playerCard[0]), 1);
    cardsAll.splice(cardsAll.indexOf(playerCard[1]), 1);
    cardsAll.splice(cardsAll.indexOf(dealerCard[0]), 1);
    //display the img result
    document.querySelector('.player__card-1').style.display = "inline-block";
    setTimeout(() => document.querySelector('.player__card-2').style.display = "inline-block", 500);
    setTimeout(() => document.querySelector('.dealer__card-1').style.display = "inline-block", 1200);
    setTimeout(() => document.querySelector('.dealer__card-2').style.display = "inline-block", 1800);
    document.querySelector('.player__card-1').src = playerCard[0].img;
    document.querySelector('.player__card-2').src = playerCard[1].img;
    document.querySelector('.dealer__card-1').src = dealerCard[0].img;
    document.querySelector('.dealer__card-2').src = 'img/gray_back.png';
    //display and add scores
    playerRoundScore = playerCard[0].points + playerCard[1].points;
    dealerRoundScore = dealerCard[0].points;
    setTimeout(() => document.querySelector('#player__score').textContent = playerRoundScore, 1300)
    setTimeout(() => document.querySelector('#dealer__score').textContent = dealerRoundScore + ' + ?', 2500)
     // make start btn disabled
    document.querySelector('.all-cards').removeEventListener('click', startGame);
};

function addCard() {
    // random card for player
    randomCard(cardsAll, playerCard, 1);
    cardsAll.splice(cardsAll.indexOf(playerCard[2]), 1);
    // show img and scores
    document.querySelector('.player__card-3').src = playerCard[2].img;
    document.querySelector('.player__card-3').style.display = "inline-block";
    playerRoundScore += playerCard[2].points;
    document.querySelector('#player__score').textContent = playerRoundScore;
    // make add card btn disabled
    document.querySelector('.btn__add').removeEventListener('click', addCard); 
    // check whether player hasn`t more than 21 score, if has - end game
    if (playerRoundScore > 21) {
        document.querySelector('#player__score').classList.add('score--scale');
        showCompareCard(800);
    }
};

showCompareCard(100);

function showCompareCard(time) {
    // show dealer card
    randomCard(cardsAll, dealerCard, 1);
    cardsAll.splice(cardsAll.indexOf(dealerCard[1]), 1);
    // show dealer score
    document.querySelector('.dealer__card-2').src = dealerCard[1].img;
    dealerRoundScore += dealerCard[1].points;
    document.querySelector('#dealer__score').textContent = dealerRoundScore
    // check who won the game
    setTimeout(() => document.querySelector('.final-message__wrapper').style.display = "block", time)
    setTimeout(() => document.querySelector('.all-cards').style.display = "none", time)
    if (playerRoundScore < dealerRoundScore || playerRoundScore > 21) {
        document.querySelector('.final-message').textContent = 'You are looser!'
    } else if (playerRoundScore > dealerRoundScore) {
        document.querySelector('.final-message').textContent = 'You are winner!'
    } else {
        document.querySelector('.final-message').textContent = 'It is a draw!'
    }
    // hide add & compare btn // display start game btn
    document.querySelector('.btn__wrapper').style.display = "none";
    document.querySelector('.btn__new').style.display = "inline-block";
};