import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './components/login/login.page';
import { LoginContainerPage } from './Login-container.page';

const routes: Routes = [
  {
    path: '',
    component: LoginContainerPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
