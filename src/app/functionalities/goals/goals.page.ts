import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoalsModalComponent } from './goals-modal/goals-modal.component';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {
  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: GoalsModalComponent,
    });
    return await modal.present();
  }

  ngOnInit() {}
}
