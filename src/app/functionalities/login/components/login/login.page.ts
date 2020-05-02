import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import * as LoginActions from '../../actions/login.action';
import { selectRegisterLayout, selectConfirmationLogin } from '../../reducers';
import { Register } from '@app/shared/models/register.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authForm: FormGroup;

  registerLayout$ = this.store$.select(selectRegisterLayout);

  private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private fb: FormBuilder, private readonly store$: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^\+\d{2}\s\(\d{2,}\)\s(\d-?){9}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get name(): FormControl {
    return this.getFormControlByName('name');
  }

  get phone(): FormControl {
    return this.getFormControlByName('phone');
  }

  get password(): FormControl {
    return this.getFormControlByName('password');
  }

  private getFormControlByName(nameControl: string): FormControl {
    return <FormControl>this.authForm.get(nameControl);
  }

  changeAuthAction(isSignIn: boolean): void {
    if (isSignIn) {
      this.store$.dispatch(LoginActions.registerLayout());
    } else {
      this.store$.dispatch(LoginActions.loginLayout());
    }
  }

  onShowRegister(isSignIn: boolean) {
    !isSignIn
      ? this.authForm.addControl('name', this.nameControl)
      : this.authForm.removeControl('name');

    return !isSignIn;
  }

  onSubmit(isSignIn: boolean): void {
    console.log(this.authForm.value);
    if (!isSignIn) {
      this.store$.dispatch(LoginActions.register({ register: this.authForm.value }));
    } else {
      this.store$.dispatch(LoginActions.login({ login: this.authForm.value }));
    }
  }
}
