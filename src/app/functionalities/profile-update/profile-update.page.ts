import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import * as ProfileUpdateActions from './actions/profile-update.actions';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.page.html',
  styleUrls: ['./profile-update.page.scss'],
})
export class ProfileUpdatePage implements OnInit {
  private stages = ['name', 'genre', 'dateOfBirth', 'maritalStatus', 'email', 'location', 'salary'];
  private questions = [
    'Você informou o seu nome, mas qual é o sobrenome? 📝',
    'Qual seu genêro? 😁',
    'Data de nascimento? 👶',
    'E qual o seu estado civil? 🧡❤💛💚💙❓',
    'Já temos uma forma de contato 📱, mas poderia informar seu email? 📧',
    'Agora as informações de sua localidade? 🗺🌎🧭',
    'E por último, a sua renda? 💰',
  ];

  userForm: FormGroup;
  stage = 'name';
  question = this.questions[0];
  next = true;
  previous = false;

  constructor(private fb: FormBuilder, private readonly store$: Store<fromRoot.State>) {}

  ngOnInit() {
    this.initNextPrevious();
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      genre: [''],
      dateOfBirth: ['', Validators.required],
      maritalStatus: [''],
      email: ['', Validators.required],
      country: [''],
      state: [''],
      city: [''],
      salary: ['', Validators.required],
    });
  }

  private initNextPrevious(): void {
    const index = this.stages.indexOf(this.stage);
    this.next = index < this.stages.length - 1;
    this.previous = index > 0;
  }

  onNextPrevious(next: boolean) {
    const index = this.stages.indexOf(this.stage);
    let anotherIndex = index;

    next ? ++anotherIndex : --anotherIndex;

    this.next = anotherIndex < this.stages.length - 1;
    this.previous = anotherIndex > 0;

    this.stage = this.stages[anotherIndex];
    this.question = this.questions[anotherIndex];
  }

  control(attr: string): FormControl {
    return <FormControl>this.userForm.get(attr);
  }

  hasError(attr: string, type: string): boolean {
    return this.control(attr).hasError(type);
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.store$.dispatch(ProfileUpdateActions.profileUpdate({ profile: this.userForm.value }));
    }
  }
}
