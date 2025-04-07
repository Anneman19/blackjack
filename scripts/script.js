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
      1: { path: "../resources/SVG-cards-1.3/ace_of_clubs.svg", value: gameFunctions.aceValue },
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
      1: { path: "../resources/SVG-cards-1.3/ace_of_diamonds.svg", value: gameFunctions.aceValue },
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
      1: { path: "../resources/SVG-cards-1.3/ace_of_hearts.svg", value: gameFunctions.aceValue },
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
      1: { path: "../resources/SVG-cards-1.3/ace_of_spades.svg", value: gameFunctions.aceValue },
    },
}

const gameFunctions = {
    aceValue: () => {
        userChoiceValue = parseInt(prompt("You drew and ace! Choose a value for this card (1 or 11): "));
        while (userChoiceValue !== 1 || userChoiceValue !== 11) {
            alert("Not a valid choice!");
            userChoiceValue = parseInt(prompt("You drew and ace! Choose a value for this card (1 or 11): "));
        }
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

        cards.push(cardInfo[selectedSuit][selectedCard].value);
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
    }
}

const cardTotals = {
    playerTotal: gameFunctions.getTotal(haveCards.playerCards),
    dealerTotal: gameFunctions.getTotal(haveCards.playerCards),
}

const haveCards = {
    playerCards: [],
    dealerCards: [],
}