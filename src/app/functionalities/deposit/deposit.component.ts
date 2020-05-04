import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';
import { OverlayService } from '@app/core/services/overlay.service';
import { OverlayEnum } from '@app/core/models/overlay.model';
import { map } from 'rxjs/operators';
import { DepositService } from './deposit.service';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { update } from '../home/actions/home.actions';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent implements OnInit {
  depForm: FormGroup;

  constructor(
    private store$: Store<fromRoot.State>,
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private depositService: DepositService,
    private overlayService: OverlayService
  ) {}

  ngOnInit() {
    this.depForm = this.fb.group({
      deposit: ['', [Validators.required]],
    });
  }

  async onDepositar() {
    const alert = await this.alertCtrl.create({
      message: 'Confirmar o depósito?',
      buttons: [
        {
          text: 'Não',
          handler: () => this.resolveFunction(false),
        },
        {
          text: 'Sim',
          handler: () => this.resolveFunction(true),
        },
      ],
    });

    alert.present();
  }

  resolveFunction(situacao) {
    if (situacao) {
      let { deposit } = this.depForm.value;
      deposit = Number(deposit.replace(',', '.'));
      console.log(deposit);
      this.depositService
        .depositFinancialAccount({ deposit })
        .toPromise()
        .then(() =>
          this.overlayService.showToast({
            message: 'Depósito realizado',
          })
        )
        .finally(() => {
          this.store$.dispatch(update({ page: 'Deposit' }));
          this.modalCtrl.dismiss();
        });
    }
  }

  onCancelar() {
    this.modalCtrl.dismiss();
  }

  onSubmit() {
    if (this.depForm.valid) {
      this.modalCtrl.dismiss();
    }
  }
}
