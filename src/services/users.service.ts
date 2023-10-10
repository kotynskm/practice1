import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  users = [
    { id: 1, name: 'John', status: 'active' },
    { id: 2, name: 'Mary', status: 'inactive' },
    { id: 3, name: 'Fuyu', status: 'active' },
    { id: 4, name: 'Mweasel', status: 'inactive' },
  ];

  setStatus(id: number, status: string) {
    this.users[id].status = status;
  }
}
