import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  intervalID: any;
  number = 0;
  @Output() startInterval = new EventEmitter<number>();

  startGame() {
    // this.intervalID = setInterval(() => console.log('hello'), 1000);
    this.intervalID = setInterval(() => {
      this.startInterval.emit((this.number += 1));
    }, 1000);
  }

  stopGame() {
    clearInterval(this.intervalID);
  }
}
