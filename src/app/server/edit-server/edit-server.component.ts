import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
serverName: string = '';
serverId: number = 0;
allowEdit: boolean = false;
  constructor(private router: Router,
      private route: ActivatedRoute,
      private serverService: ServerService) { }

  ngOnInit() {
    this.serverId = this.route.snapshot.params['id'];
    this.serverName = this.serverService.getServerName(this.serverId);
    this.route.queryParams.subscribe(
      (queryParams : Params) => this.allowEdit = queryParams['allowEdit'] == 'true' ? true : false
    )
  }

  onEditServer(id: number){
    console.log('On Edit server id = ' + id);
    this.serverService.updateServer(this.serverId, this.serverName);
    this.router.navigate(['/server', id], {queryParamsHandling: 'preserve'});
  }

}
