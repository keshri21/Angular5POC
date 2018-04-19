import { Component } from '@angular/core';

@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
oddNumbers: number[] = [];
evenNumbers: number[] = [];
  onGameStarted(counter){
    console.log('Counter in app component is : '+ counter);
    if(counter % 2 === 0){
      this.evenNumbers.push(counter);
    }else{
      this.oddNumbers.push(counter);
    }
  }
}
