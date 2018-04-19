import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreatedMessage = 'No server is created';
  serverName = '';
	constructor(){
		setTimeout(() => {
			this.allowNewServer = true;
		}, 3000)
	}

  ngOnInit() {
  }

  onAddNewServer(){
  	this.serverCreatedMessage = 'New server is created with name ' + this.serverName;
  }

  onServerNameInput(event: Event){
  	this.serverName = (<HTMLInputElement>event.target).value;
  }

}
