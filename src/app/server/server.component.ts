import { Component } from '@angular/core';

@Component({
	selector: 'server-app',
	templateUrl: './server.component.html',
	styleUrls: ['./server.component.css'],
	styles: [`
		p{
			color: red;
		}
	`]
})
export class ServerComponent{
	id:number = 21;
	
}