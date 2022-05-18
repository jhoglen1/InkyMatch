import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Get the modal
let modal = document.getElementById("myModal");

  modal.style.display = "block";

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.getElementById('startButton').addEventListener('click',() => {
  modal.style.display ="none"
})
this.cardFlip();
  }


  cardFlip(){
let cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});
  }
}
