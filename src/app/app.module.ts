import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AddServersComponent } from './add-servers/add-servers.component';
import { ServerListComponent } from './add-servers/server-list/server-list.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './game-control/odd/odd.component';
import { EvenComponent } from './game-control/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddServersComponent,
    ServerListComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
