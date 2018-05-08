import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningAlert } from './alert/warning.component';
import { SuccessAlert } from './alert/success.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './user/user.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { OddComponent } from './game/odd/odd.component';
import { EvenComponent } from './game/even/even.component';
import { GameComponent } from './game/game.component';
import { ActiveUserComponent } from './user/active-user/active-user.component';
import { InactiveUserComponent } from './user/inactive-user/inactive-user.component';
import { HomeComponent } from './home/home.component';

import { EditServerComponent } from './server/edit-server/edit-server.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginService } from './services/login.service';
import { ServerResolver } from './services/server-resolve.service';
import { ServerService } from './services/server.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlert,
    SuccessAlert,
    UserComponent,
    DisplayDetailsComponent,
    GameComponent,
    OddComponent,
    EvenComponent,
    ActiveUserComponent,
    InactiveUserComponent,
    HomeComponent,
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ AuthGuardService, LoginService, ServerResolver, ServerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
