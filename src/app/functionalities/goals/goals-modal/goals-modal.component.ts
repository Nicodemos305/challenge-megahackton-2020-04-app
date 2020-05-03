import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { createGoal, updateGoal } from '../actions/goals.actions';
import { Spending } from '../goals.model';

@Component({
  selector: 'app-goals-modal',
  templateUrl: './goals-modal.component.html',
  styleUrls: ['./goals-modal.component.scss'],
})
export class GoalsModalComponent implements OnInit {
  @Input() goal: any;

  goalsForm: FormGroup;

  constructor(
    private readonly store$: Store<fromRoot.State>,
    private fb: FormBuilder,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.goalsForm = this.fb.group({
      name: ['', [Validators.required]],
      expectedDate: ['', [Validators.required]],
      value: ['', [Validators.required]],
    });
    if (this.goal) {
      this.goalsForm.patchValue({ name: this.goal.name });
      this.goalsForm.patchValue({ expectedDate: new Date(this.goal.expectedDate).toJSON() });
      this.goalsForm.patchValue({ value: this.goal.value.toString().replace('.', ',') });
    }
  }

  onDissmis() {
    this.modalCtrl.dismiss();
  }

  onSalvar() {
    console.log(this.goalsForm.value);
    console.log(this.goalsForm.value.name);
    if (this.goalsForm.valid) {
      console.log(this.goal);
      if (!this.goal) {
        this.store$.dispatch(createGoal({ goal: this.goalsForm.value }));
      } else {
        const form = this.goalsForm.value;
        form._id = this.goal._id;
        this.store$.dispatch(updateGoal({ goal: form }));
      }
    }
  }
}
