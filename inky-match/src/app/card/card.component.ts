import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  flippedCard: boolean = false;
  whichColor: string;
  whichOtherColor: string;
  revertToggle: boolean = false;
  reventCard: Element;
  otherRevertCard: Element;
  count: number = 0;
  triesCount: number = 0;
  showFirstTryMessage: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.startGameModal();
    this.cardFlip();
    this.shuffleCards();

  }
  // on page load show modal and onclick of start button close modal
  startGameModal(): void {
    let modal = document.getElementById("startModal");
    modal.style.display = "block";
    document.getElementById('startButton').addEventListener('click', () => {
      modal.style.display = "none"
    })

  }
  /// gets the flipped card value 
  // loops thru the array of cards 
  // sets both counts by 1
  // check to see if the selected cards are undefined and if so get the data-intent value
  // then add the is-flipped class so css will flip the card
  // if both are not undefined call do they match method
  // if the count is equal to 12 
  // takes triescount and divide by 2 to get how many tries they have had
  // if triescount is 6 so first try message if not show try again message
  // then after timeout the game will restart
  cardFlip(): void {
    let selectedCard = document.querySelectorAll('.base-card');
    selectedCard.forEach(card => card.addEventListener('click', () => {
      this.count++;
      this.triesCount++;
      this.whichColor === undefined ? (this.reventCard = card, this.whichColor = card.getAttribute("data-intent")) : (this.whichOtherColor = card.getAttribute("data-intent"), this.otherRevertCard = card);
      card.classList.add('is-flipped');
      if (this.whichColor !== undefined && this.whichOtherColor !== undefined) {
        this.doTheyMatch()
      }
      if (this.count === 12) {
        this.triesCount = this.triesCount / 2;
        this.triesCount === 6 ? this.showFirstTryMessage = true : this.showFirstTryMessage = false;
        console.log(this.showFirstTryMessage);
        setTimeout(() => {
          this.reStartGameModal()
        }, 2000);

      }
    }));
  }
  // checks to see if the cards match - if they do the event listner is removed to both cards - if not the count is decreased by 2 and the card is flipped back over
  // after the timeout is done so the user can see the cards
  // resets the variable to undfined to check it again when clicked
  doTheyMatch(): void {
    this.whichColor === this.whichOtherColor ? (this.reventCard.removeEventListener('click', this.cardFlip), this.otherRevertCard.removeEventListener('click', this.cardFlip)) : setTimeout(() => {
      this.count -= 2;
      this.reventCard.classList.remove('is-flipped')
      this.otherRevertCard.classList.remove('is-flipped');
    }, 2000);
    this.whichColor = undefined;
    this.whichOtherColor = undefined;
  }
  // shows the score modal and then restarts after the timeout
  reStartGameModal(): void {
    let modal = document.getElementById("endModal");
    modal.style.display = "block";
    setTimeout(() => {
      location.reload();
    }, 6500);
  }

// shuffles the cards at the start of the game every time.
  shuffleCards() {
    let list = document.getElementById("cardWraps");
    for (var i = list.children.length; i >= 0; i--) {
      list.appendChild(list.children[Math.random() * i | 0]);
    }
  }
}
