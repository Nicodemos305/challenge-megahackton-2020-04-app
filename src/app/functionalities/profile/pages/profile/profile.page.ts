import { Component, OnInit } from '@angular/core';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(private readonly store$: Store<fromRoot.State>) {}

  ngOnInit() {}
}
