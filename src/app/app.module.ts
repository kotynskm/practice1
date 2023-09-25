import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AddServersComponent } from './add-servers/add-servers.component';
import { ServerListComponent } from './add-servers/server-list/server-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddServersComponent,
    ServerListComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
