import { Component } from '@angular/core';
import { Server } from './server-model';

@Component({
  selector: 'app-add-servers',
  templateUrl: './add-servers.component.html',
  styleUrls: ['./add-servers.component.css'],
})
export class AddServersComponent {
  serverName = '';
  serverContent = '';
  isBlueprint = false;
  serverList: Server[] = [];

  addServer() {
    this.serverList.push(
      new Server(
        this.serverName,
        this.serverContent,
        (this.isBlueprint = false)
      )
    );
  }

  addBlueprint() {
    this.serverList.push(
      new Server(this.serverName, this.serverContent, (this.isBlueprint = true))
    );
  }
}
