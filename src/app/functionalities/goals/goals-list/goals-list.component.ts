import { Component, OnInit } from '@angular/core';
import * as fromRoot from '@core/store/reducers';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { deleteGoalById, listGoals } from '../actions/goals.actions';
import { GoalsModalComponent } from '../goals-modal/goals-modal.component';
import { selectListSpendings } from '../reducers';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.scss'],
})
export class GoalsListComponent implements OnInit {
  spendings$ = this.store$.select(selectListSpendings);

  constructor(private store$: Store<fromRoot.State>, public modalController: ModalController) {}

  ngOnInit() {
    this.store$.dispatch(listGoals());
  }

  async presentModal(goal = null) {
    const modal = await this.modalController.create({
      component: GoalsModalComponent,
      componentProps: {
        goal,
      },
    });
    return await modal.present();
  }

  onDeleteSpending(_id: String) {
    if (_id) {
      this.store$.dispatch(deleteGoalById({ id: _id }));
    }
  }
}
