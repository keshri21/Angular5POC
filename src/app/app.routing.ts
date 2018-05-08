import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { EditServerComponent } from './server/edit-server/edit-server.component';
import { UserComponent } from './user/user.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ServerResolver } from './services/server-resolve.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'server', canActivateChild: [ AuthGuardService ], component: ServersComponent, children: [
    {path: ':id', component: ServerComponent, resolve: {serverData: ServerResolver}},
    {path: ':id/edit', component: EditServerComponent}
  ]},
  {path: 'user', component: UserComponent},
  {path: 'details', component: DisplayDetailsComponent}
]

@NgModule({
imports: [
  RouterModule.forRoot(appRoutes)
],
exports: [
  RouterModule
]
})

export class AppRoutingModule{

}
