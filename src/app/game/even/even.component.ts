import { Component, Input } from '@angular/core';

@Component({
  selector: 'even-count',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})

export class EvenComponent{
  @Input() counter: number;
}
