import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

items = [];
counter = 0;
buttonClicked = false;
  constructor() { }

  ngOnInit() {
  }

  onButtonClick(){
    this.buttonClicked = true;
    this.items.push(++this.counter);
  }

  getBackGround(item){
    if(item % 5 == 0){
      return 'blue';
    }else{
      return 'white';
    }
  }

}
