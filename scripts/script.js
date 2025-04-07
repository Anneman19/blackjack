const cardNames = {
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
      J: { path: "../resources/SVG-cards-1.3/jack_of_clubs.svg", value: 10 },
      Q: { path: "../resources/SVG-cards-1.3/queen_of_clubs.svg", value: 10 },
      K: { path: "../resources/SVG-cards-1.3/king_of_clubs.svg", value: 10 },
      A: { path: "../resources/SVG-cards-1.3/ace_of_clubs.svg", value: 1, chooseValue: () => {
        userValueChoice = parseInt(prompt("You drew an ace! Choose the value (1 or 11): "));
      }},
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
      J: { path: "../resources/SVG-cards-1.3/jack_of_diamonds.svg", value: 10 },
      Q: { path: "../resources/SVG-cards-1.3/queen_of_diamonds.svg", value: 10 },
      K: { path: "../resources/SVG-cards-1.3/king_of_diamonds.svg", value: 10 },
      A: { path: "../resources/SVG-cards-1.3/ace_of_diamonds.svg", value:1, chooseValue: () => {
        userValueChoice = parseInt(prompt("You drew an ace! Choose the value (1 or 11): "));
      }},
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
      J: { path: "../resources/SVG-cards-1.3/jack_of_hearts.svg", value: 10 },
      Q: { path: "../resources/SVG-cards-1.3/queen_of_hearts.svg", value: 10 },
      K: { path: "../resources/SVG-cards-1.3/king_of_hearts.svg", value: 10 },
      A: { path: "../resources/SVG-cards-1.3/ace_of_hearts.svg", value:1, chooseValue: () => {
        userValueChoice = parseInt(prompt("You drew an ace! Choose the value (1 or 11): "));
      }},
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
      J: { path: "../resources/SVG-cards-1.3/jack_of_spades.svg", value: 10 },
      Q: { path: "../resources/SVG-cards-1.3/queen_of_spades.svg", value: 10 },
      K: { path: "../resources/SVG-cards-1.3/king_of_spades.svg", value: 10 },
      A: { path: "../resources/SVG-cards-1.3/ace_of_spades.svg", value:1, chooseValue: () => {
        userValueChoice = parseInt(prompt("You drew an ace! Choose the value (1 or 11): "));
      }},
    },
  };
  