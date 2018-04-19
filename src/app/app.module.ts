import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
