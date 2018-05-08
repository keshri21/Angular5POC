import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Server } from './server.model';


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
export class ServerComponent implements OnInit{
	server: Server

	constructor(private router: Router,
			private route: ActivatedRoute){

	}

	ngOnInit(){
		this.route.data.
				subscribe(
					(data: Data) => {
						this.server = data['serverData'];
					}
				)
		// this.route.params.subscribe(
		// 	(params: Params) => {
		// 		this.server.id = +params['id'];
		// 		this.server.name = this.serverService.getServerName(this.server.id);
		// 		this.server.allowEdit = false;
		// 	}
		// )
		//
		// this.route.queryParams.subscribe(
		// 	(queryParams : Params) => {
		// 		this.server.allowEdit = queryParams['allowEdit'] == 'true' ? true : false;
		// 	}
		// )
	}

	onUpdateServerClick(){
		this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
	}
}
