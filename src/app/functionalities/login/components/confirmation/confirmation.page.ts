import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { confirmationCode } from '../../actions/login.action';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
  @Input() confirmation: any;

  confirmForm: FormGroup;

  constructor(private fb: FormBuilder, private readonly store$: Store<fromRoot.State>) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.confirmForm = this.fb.group({
      phone: [this.confirmation.phone, [Validators.required]],
      code: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/\d{6}/)]],
    });
  }

  get phone(): FormControl {
    return <FormControl>this.confirmForm.get('phone');
  }

  onConfirmation() {
    if (this.confirmForm.valid) {
      const login = {
        phone: this.confirmation.phone,
        password: this.confirmation.password,
      };
      const confirm = this.confirmForm.value;
      confirm.password = this.confirmation.password;
      this.store$.dispatch(confirmationCode({ confirm }));
    }
  }
}
