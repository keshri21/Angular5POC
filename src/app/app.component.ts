import { Component } from '@angular/core';

import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'my-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService]
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
