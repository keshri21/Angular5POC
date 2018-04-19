import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreatedMessage = 'No server is created';
  serverName = '';
  serverList: {id: number, name: string, allowEdit: boolean}[] = [];
	constructor(private serverService: ServerService){
		setTimeout(() => {
			this.allowNewServer = true;
		}, 3000)
	}

  ngOnInit() {
    this.serverList = this.serverService.serverList;
  }

  onAddNewServer(){
  	this.serverCreatedMessage = 'New server is created with name ' + this.serverName;

    this.serverService.addServer(this.serverName);
  }

  onServerNameInput(event: Event){
  	this.serverName = (<HTMLInputElement>event.target).value;
  }

}
