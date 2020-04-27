import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { selectRegisterLayout } from './reducers';
import * as LoginActions from './actions/login.action';

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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get name(): FormControl {
    return this.getFormControlByName('name');
  }

  get email(): FormControl {
    return this.getFormControlByName('email');
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

  onSubmit(): void {
    console.log(this.authForm.value);
  }
}
