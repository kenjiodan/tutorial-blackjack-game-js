let player = {
    name: "Daniel",
    chips: 14,
    sayHello: function() {
    return "Hello, "
    }
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = ""; 
let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");
let playerEl = document.querySelector(".player-el")
playerEl.textContent =  player.sayHello() + " " + player.name + ":" + " " + "R$" + player.chips 


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber == 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
};

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?";
        cardsEl.textContent = "Cards: / ";
        for (let i = 0; i < cards.length; i++) {
            cardsEl.textContent += cards[i] + " " + "/" + " "; 
        }
        sumEl.textContent = "Sum: " + sum;
    } else if (sum === 21) {
        message = "Wohoo, you've got a Blackjack!";
        hasBlackJack = true;
        cardsEl.textContent = "Cards: / ";
        for (let i = 0; i < cards.length; i++) {
            cardsEl.textContent += cards[i] + " " + "/" + " "; 
        }
        sumEl.textContent = "Sum: " + sum;
    } else {
        message = "You're out of the game!";
        isAlive = false;
        cardsEl.textContent = "Cards: / ";
        for (let i = 0; i < cards.length; i++) {
            cardsEl.textContent += cards[i] + " " + "/" + " "; 
        }
        sumEl.textContent = "Sum: " + sum;
        
    }
    messageEl.textContent = message;    
}

function newCard() {
    if (isAlive == true && hasBlackJack == false) {
        message = "Drawing a new card from the deck!";
        let newCards = getRandomCard();
        sum += newCards;
        cards.push(newCards);
        renderGame();
    } else {
        ;
    }
}

// Math.floor: rounds down 
// Math.trunc: remove fractional digits
// Math.ceil: rounds up
// Math.round: rounds to the nearest integer
