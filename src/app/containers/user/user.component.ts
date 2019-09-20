import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from 'src/app/store/state/app.state';
import { GetUser } from 'src/app/store/actions/user.actions';
import { selectSelectedUser } from 'src/app/store/selectors/user.selectors';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  user$ = this.store.pipe(select(selectSelectedUser));

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetUser(this.route.snapshot.params.id));
  }
}
