import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from '../services/server.service';


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
	server: {id: number, name: string, allowEdit: boolean}

	constructor(private router: Router,
			private route: ActivatedRoute, private serverService: ServerService){

	}

	ngOnInit(){
		this.server = {
			id: this.route.snapshot.params['id'],
			name: this.serverService.getServerName(this.route.snapshot.params['id'])
		}
		this.route.params.subscribe(
			(params: Params) => {
				this.server.id = params['id'];
				this.server.name = this.serverService.getServerName(this.server.id);
			}
		)

		this.route.queryParams.subscribe(
			(queryParams : Params) => {
				this.server.allowEdit = queryParams['allowEdit'] == 'true' ? true : false;
			}
		)
	}

	onUpdateServerClick(){
		this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
	}
}
