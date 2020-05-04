import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoalsModalComponent } from './goals-modal/goals-modal.component';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { update } from '../home/actions/home.actions';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {
  constructor(public modalController: ModalController, private store: Store<fromRoot.State>) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: GoalsModalComponent,
    });
    return await modal.present();
  }

  ngOnInit() {}

  onClose() {
    this.store.dispatch(update({ page: 'conquest' }));
  }
}
