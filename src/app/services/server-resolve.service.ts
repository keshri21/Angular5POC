import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { ServerService } from './server.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Server } from '../server/server.model';


@Injectable()
export class ServerResolver implements Resolve<Server>{
  constructor(private serverService: ServerService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server{
    return this.serverService.getServer(route.params['id']);
  }

}
