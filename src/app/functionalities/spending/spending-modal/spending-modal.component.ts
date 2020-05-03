import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { createSpending } from '../actions/spending.actions';

@Component({
  selector: 'app-spending-modal',
  templateUrl: './spending-modal.component.html',
  styleUrls: ['./spending-modal.component.scss'],
})
export class SpendingModalComponent implements OnInit {
  @Input() spending;

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
      payday: [new Date().toJSON(), [Validators.required]],
      value: ['', [Validators.required]],
    });
  }

  onDissmis() {
    this.modalCtrl.dismiss();
  }

  onSalvar() {
    console.log(this.spendingForm.value);
    console.log(this.spendingForm.value.name);
    if (this.spendingForm.valid) {
      this.store$.dispatch(createSpending({ spending: this.spendingForm.value }));
    }
  }
}
