import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {
  @Input()
  user: IUser;
}
