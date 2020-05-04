import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpendingModalComponent } from './spending-modal/spending-modal.component';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { update } from '../home/actions/home.actions';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.page.html',
  styleUrls: ['./spending.page.scss'],
})
export class SpendingPage implements OnInit {
  constructor(public modalController: ModalController, private store: Store<fromRoot.State>) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: SpendingModalComponent,
    });
    return await modal.present();
  }

  onClose() {
    this.store.dispatch(update({ page: 'conquest' }));
  }

  ngOnInit() {}
}
