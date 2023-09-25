import { Component, Input } from '@angular/core';
import { Server } from '../server-model';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
})
export class ServerListComponent {
  @Input() serverList: Server[] = [];
}
