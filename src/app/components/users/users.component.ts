import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  @Input()
  users: IUser[];

  @Output()
  userSelected: EventEmitter<number> = new EventEmitter();

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }
}
