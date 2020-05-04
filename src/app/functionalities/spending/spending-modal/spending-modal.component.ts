import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { createSpending, updateSpending } from '../actions/spending.actions';
import { Spending } from '../spending.model';
import { update } from '@app/functionalities/home/actions/home.actions';

@Component({
  selector: 'app-spending-modal',
  templateUrl: './spending-modal.component.html',
  styleUrls: ['./spending-modal.component.scss'],
})
export class SpendingModalComponent implements OnInit {
  @Input() spending: Spending;

  spendingForm: FormGroup;

  constructor(
    private readonly store$: Store<fromRoot.State>,
    private fb: FormBuilder,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.spendingForm = this.fb.group({
      name: ['', [Validators.required]],
      kind: ['', [Validators.required]],
      payday: ['', [Validators.required]],
      value: ['', [Validators.required]],
    });
    if (this.spending) {
      this.spendingForm.patchValue({ name: this.spending.name });
      this.spendingForm.patchValue({ kind: this.spending.kind });
      this.spendingForm.patchValue({ payday: new Date(this.spending.payday).toJSON() });
      this.spendingForm.patchValue({ value: this.spending.value.toString().replace('.', ',') });
    }
  }

  onDissmis() {
    this.modalCtrl.dismiss();
  }

  onSalvar() {
    console.log(this.spendingForm.value);
    console.log(this.spendingForm.value.name);
    if (this.spendingForm.valid) {
      console.log(this.spending);
      if (!this.spending) {
        this.store$.dispatch(createSpending({ spending: this.spendingForm.value }));
      } else {
        const form = this.spendingForm.value;
        form._id = this.spending._id;
        this.store$.dispatch(updateSpending({ spending: form }));
      }
      this.store$.dispatch(update({ page: 'spending' }));
    }
  }
}
