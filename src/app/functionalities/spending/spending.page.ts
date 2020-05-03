import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpendingModalComponent } from './spending-modal/spending-modal.component';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.page.html',
  styleUrls: ['./spending.page.scss'],
})
export class SpendingPage implements OnInit {
  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: SpendingModalComponent,
    });
    return await modal.present();
  }

  ngOnInit() {}
}
