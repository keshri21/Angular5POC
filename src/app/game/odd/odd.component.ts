import { Component,Input } from '@angular/core';

@Component({
  selector: 'odd-count',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})

export class OddComponent{
  @Input() counter: number;
}
