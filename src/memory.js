class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards !== undefined) {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        const temp = this.cards[i];
        this.cards[i] = this.cards[randomIndex];
        this.cards[randomIndex] = temp;
      }
      return this.cards;
    }
    return undefined;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.cards.length / 2 === this.pairsGuessed) {
      return true;
    }
    return false;
  }
}
