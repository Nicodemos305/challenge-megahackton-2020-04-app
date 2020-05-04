import { Component, OnInit } from '@angular/core';
import { ConquestService } from './conquest.service';
import { Observable } from 'rxjs';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { update } from '../home/actions/home.actions';

@Component({
  selector: 'app-conquest',
  templateUrl: './conquest.page.html',
  styleUrls: ['./conquest.page.scss'],
})
export class ConquestPage implements OnInit {
  conquests$: Observable<any>;

  constructor(private conquestService: ConquestService, private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.conquests$ = this.conquestService.getAll();
  }

  onClose() {
    this.store.dispatch(update({ page: 'conquest' }));
  }
}
