import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'game-control',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {
  counter = 0;
  @Output() gameStarted = new EventEmitter<number>();
  funcRef;
  onStart(){
    console.log('Start clicked');
    this.funcRef = setInterval(() => this.gameStarted.emit(++this.counter), 1000);
  }

  onStop(){
    console.log('Stop clicked');
    clearInterval(this.funcRef);
  }
}
