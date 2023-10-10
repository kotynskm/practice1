import { Component } from '@angular/core';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: { id: number; name: string; status: string }[] | undefined;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.users;
  }

  updateStatus(id: number, status: string) {
    this.usersService.setStatus(id, status);
  }
}
