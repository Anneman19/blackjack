const cardInfo = {
    clubs: {
      2: { path: "../resources/SVG-cards-1.3/2_of_clubs.svg", value: 2 },
      3: { path: "../resources/SVG-cards-1.3/3_of_clubs.svg", value: 3 },
      4: { path: "../resources/SVG-cards-1.3/4_of_clubs.svg", value: 4 },
      5: { path: "../resources/SVG-cards-1.3/5_of_clubs.svg", value: 5 },
      6: { path: "../resources/SVG-cards-1.3/6_of_clubs.svg", value: 6 },
      7: { path: "../resources/SVG-cards-1.3/7_of_clubs.svg", value: 7 },
      8: { path: "../resources/SVG-cards-1.3/8_of_clubs.svg", value: 8 },
      9: { path: "../resources/SVG-cards-1.3/9_of_clubs.svg", value: 9 },
      10: { path: "../resources/SVG-cards-1.3/10_of_clubs.svg", value: 10 },
      11: { path: "../resources/SVG-cards-1.3/jack_of_clubs.svg", value: 10 },
      12: { path: "../resources/SVG-cards-1.3/queen_of_clubs.svg", value: 10 },
      13: { path: "../resources/SVG-cards-1.3/king_of_clubs.svg", value: 10 },
      1: { path: "../resources/SVG-cards-1.3/ace_of_clubs.svg", value: null },
      },
    diamonds: {
      2: { path: "../resources/SVG-cards-1.3/2_of_diamonds.svg", value: 2 },
      3: { path: "../resources/SVG-cards-1.3/3_of_diamonds.svg", value: 3 },
      4: { path: "../resources/SVG-cards-1.3/4_of_diamonds.svg", value: 4 },
      5: { path: "../resources/SVG-cards-1.3/5_of_diamonds.svg", value: 5 },
      6: { path: "../resources/SVG-cards-1.3/6_of_diamonds.svg", value: 6 },
      7: { path: "../resources/SVG-cards-1.3/7_of_diamonds.svg", value: 7 },
      8: { path: "../resources/SVG-cards-1.3/8_of_diamonds.svg", value: 8 },
      9: { path: "../resources/SVG-cards-1.3/9_of_diamonds.svg", value: 9 },
      10: { path: "../resources/SVG-cards-1.3/10_of_diamonds.svg", value: 10 },
      11: { path: "../resources/SVG-cards-1.3/jack_of_diamonds.svg", value: 10 },
      12: { path: "../resources/SVG-cards-1.3/queen_of_diamonds.svg", value: 10 },
      13: { path: "../resources/SVG-cards-1.3/king_of_diamonds.svg", value: 10 },
      1: { path: "../resources/SVG-cards-1.3/ace_of_diamonds.svg", value: null },
      },
    hearts: {
      2: { path: "../resources/SVG-cards-1.3/2_of_hearts.svg", value: 2 },
      3: { path: "../resources/SVG-cards-1.3/3_of_hearts.svg", value: 3 },
      4: { path: "../resources/SVG-cards-1.3/4_of_hearts.svg", value: 4 },
      5: { path: "../resources/SVG-cards-1.3/5_of_hearts.svg", value: 5 },
      6: { path: "../resources/SVG-cards-1.3/6_of_hearts.svg", value: 6 },
      7: { path: "../resources/SVG-cards-1.3/7_of_hearts.svg", value: 7 },
      8: { path: "../resources/SVG-cards-1.3/8_of_hearts.svg", value: 8 },
      9: { path: "../resources/SVG-cards-1.3/9_of_hearts.svg", value: 9 },
      10: { path: "../resources/SVG-cards-1.3/10_of_hearts.svg", value: 10 },
      11: { path: "../resources/SVG-cards-1.3/jack_of_hearts.svg", value: 10 },
      12: { path: "../resources/SVG-cards-1.3/queen_of_hearts.svg", value: 10 },
      13: { path: "../resources/SVG-cards-1.3/king_of_hearts.svg", value: 10 },
      1: { path: "../resources/SVG-cards-1.3/ace_of_hearts.svg", value: null },
      },
    spades: {
      2: { path: "../resources/SVG-cards-1.3/2_of_spades.svg", value: 2 },
      3: { path: "../resources/SVG-cards-1.3/3_of_spades.svg", value: 3 },
      4: { path: "../resources/SVG-cards-1.3/4_of_spades.svg", value: 4 },
      5: { path: "../resources/SVG-cards-1.3/5_of_spades.svg", value: 5 },
      6: { path: "../resources/SVG-cards-1.3/6_of_spades.svg", value: 6 },
      7: { path: "../resources/SVG-cards-1.3/7_of_spades.svg", value: 7 },
      8: { path: "../resources/SVG-cards-1.3/8_of_spades.svg", value: 8 },
      9: { path: "../resources/SVG-cards-1.3/9_of_spades.svg", value: 9 },
      10: { path: "../resources/SVG-cards-1.3/10_of_spades.svg", value: 10 },
      11: { path: "../resources/SVG-cards-1.3/jack_of_spades.svg", value: 10 },
      12: { path: "../resources/SVG-cards-1.3/queen_of_spades.svg", value: 10 },
      13: { path: "../resources/SVG-cards-1.3/king_of_spades.svg", value: 10 },
      1: { path: "../resources/SVG-cards-1.3/ace_of_spades.svg", value: null },
    },
}

const gameFunctions = {
    aceValue: (card) => {
        userChoiceValue = parseInt(prompt("You drew an ace! Choose a value for this card (1 or 11): "));
        while (userChoiceValue !== 1 || userChoiceValue !== 11) {
            alert("Not a valid choice!");
            userChoiceValue = parseInt(prompt("You drew an ace! Choose a value for this card (1 or 11): "));
        }
        cardInfo["clubs"][1].value = userChoiceValue;
        cardInfo["diamonds"][1].value = userChoiceValue;
        cardInfo["hearts"][1].value = userChoiceValue;
        cardInfo["spades"][1].value = userChoiceValue;
        return userChoiceValue;
    },
    getTotal: (cards) => {
        total = 0;
        for (let i = 0; i < cards.length; i++) {
            total += cards.at(i);
        }
        return total;
    },
    getCard: (cards) => {
        const selectedSuit = randomSuit;
        const selectedCard = randomCard;

        if (randomCard === 1) {
            aceValue(randomCard);
        }

        cards.push(cardInfo[selectedSuit][selectedCard].value);
        gameVisuals.showCard(selectedSuit, selectedCard);
    },
    randomSuit: () => {
        const randomValue = getRandomNumber(1, 4);

        if (randomValue === 1) {
            return "clubs";
        } else if (randomValue === 2) {
            return "diamonds";
        } else if (randomValue === 3) {
            return "hearts";
        } else if (randomValue === 4) {
            return "spades";
        }
    },
    randomCard: () => {
        const randomValue = getRandomNumber(1, 13);
        return randomValue;
    },
    getRandomNumber: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
}
const haveCards = {
    playerCards: [],
    dealerCards: [],
}
const cardTotals = {
    playerTotal: gameFunctions.getTotal(haveCards.playerCards),
    dealerTotal: gameFunctions.getTotal(haveCards.playerCards),
}
// add turn function
const gameVisuals = {
    showCard: (selectedSuit, selectedCard) => {
        const dealerArea = document.querySelector(".dealer-cards");
        const playerArea = document.querySelector(".player-cards");

        const cardImage = cardInfo[selectedSuit][selectedCard].path;
        const card = document.createElement("img");
        card.classList.add("card");
        card.src = cardImage;

        dealerArea.appendChild(card);
    },
}

console.log(gameVisuals.showCard("clubs", 5));
console.log("awe");

//create overlay on card hover to show value

// use imports and exports to split up file