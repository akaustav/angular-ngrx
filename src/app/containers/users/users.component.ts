import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetUsers } from 'src/app/store/actions/user.actions';
import { selectUserList } from 'src/app/store/selectors/user.selectors';

@Component({
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users$ = this.store.pipe(select(selectUserList));

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this.router.navigate(['user', id]);
  }
}
