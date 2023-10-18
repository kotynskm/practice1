import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddServersComponent } from './add-servers/add-servers.component';
import { ServerListComponent } from './add-servers/server-list/server-list.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './game-control/odd/odd.component';
import { EvenComponent } from './game-control/even/even.component';
import { UserComponent } from './user-list/user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormComponent } from './form/form.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddServersComponent,
    ServerListComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    UserComponent,
    UserListComponent,
    FormComponent,
    FormReactiveComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
