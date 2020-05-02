import { Component, OnInit } from '@angular/core';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { selectConfirmationLogin } from './reducers';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.page.html',
  styleUrls: ['./login-container.page.scss'],
})
export class LoginContainerPage implements OnInit {
  selectConfirmationLogin$ = this.store$.select(selectConfirmationLogin);

  constructor(private store$: Store<fromRoot.State>) {}

  ngOnInit() {}
}
