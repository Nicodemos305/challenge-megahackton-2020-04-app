import { Component, OnInit } from '@angular/core';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { selectFeature, selectListSpendings } from '../reducers';
import { listSpending, deleteSpendingById } from '../actions/spending.actions';
import { SpendingModalComponent } from '../spending-modal/spending-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-spending-list',
  templateUrl: './spending-list.component.html',
  styleUrls: ['./spending-list.component.scss'],
})
export class SpendingListComponent implements OnInit {
  spendings$ = this.store$.select(selectListSpendings);

  constructor(private store$: Store<fromRoot.State>, public modalController: ModalController) {}

  ngOnInit() {
    this.store$.dispatch(listSpending());
  }

  async presentModal(spending = null) {
    const modal = await this.modalController.create({
      component: SpendingModalComponent,
      componentProps: {
        spending,
      },
    });
    return await modal.present();
  }

  onDeleteSpending(_id: String) {
    if (_id) {
      this.store$.dispatch(deleteSpendingById({ id: _id }));
    }
  }
}
