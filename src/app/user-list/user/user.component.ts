import { Component, Input } from '@angular/core';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private usersService: UsersService) {}

  @Input()
  user!: { id: number; name: string; status: string };
}
