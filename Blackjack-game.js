// Function to generate a deck of cards
const generateDeck = () => {
    const deck = [];
    const suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
    const cards = [
      "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"
    ];
  
    // Loop through each card and suit to generate the deck
    for (const card of cards) {
      for (const suit of suits) {
        deck.push({
          card: card,
          suit: suit
        });
      }
    }
    return deck;
  };
  
  // Function to draw a card from the deck
  const drawCard = (deck) => {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];
    deck.splice(randomIndex, 1); // Remove the drawn card from the deck
    return card;
  };
  
  // Function to calculate the score of a hand
  const checkScore = (hand) => {
    let totalScore = 0;
    // Loop through each card in the hand and calculate the total score
    for (const cardObject of hand) {
      // Assign score based on card value
      if (cardObject.card === "King" || cardObject.card === "Queen" || cardObject.card === "Jack") {
        totalScore += 10;
      } else if (cardObject.card === "Ace") {
        totalScore += 1;
      } else {
        totalScore += Number(cardObject.card);
      }
    }
    return totalScore;
  };
  
  // Generate a deck of cards
  const myDeck = generateDeck();
  // Initialize player and dealer hands
  const playerHand = [];
  const dealerHand = [];
  
  // Deal initial cards to player and dealer
  playerHand.push(drawCard(myDeck));
  playerHand.push(drawCard(myDeck));
  dealerHand.push(drawCard(myDeck));
  dealerHand.push(drawCard(myDeck));
  
  // Display starting hands and scores
  console.log("Starting Player Hand: ", playerHand);
  console.log("Starting Player Score: ", checkScore(playerHand));
  console.log("Starting Dealer Hand: ", dealerHand);
  console.log("Starting Dealer Score: ", checkScore(dealerHand));
  
  // Game loop
  while (true) {
    // Player draws a card
    playerHand.push(drawCard(myDeck));
    const playerScore = checkScore(playerHand);
    let dealerScore = checkScore(dealerHand);
  
    // Check if player busts (score over 21)
    if (playerScore > 21) {
      console.log(`You Lost! Your score was ${playerScore} while dealer had ${dealerScore}`);
      break;
    }
  
    // Check if player hits 21
    if (playerScore === 21) {
      console.log(`You Won! Your score was ${playerScore} while dealer had ${dealerScore}`);
      break;
    }
  
    // Dealer draws a card
    dealerHand.push(drawCard(myDeck));
    dealerScore = checkScore(dealerHand);
  
    // Check if dealer busts
    if (dealerScore > 21) {
      console.log(`You Won! Your score was ${playerScore} while dealer had ${dealerScore}`);
      break;
    }
  
    // Check if dealer hits 21
    if (dealerScore === 21) {
      console.log(`You Lost! Your score was ${playerScore} while dealer had ${dealerScore}`);
      break;
    }
  }
  
  // Display ending hands and scores
  console.log("Ending Player Hand: ", playerHand);
  console.log("Ending Player Score: ", checkScore(playerHand));
  console.log("Ending Dealer Hand: ", dealerHand);
  console.log("Ending Dealer Score: ", checkScore(dealerHand));
  