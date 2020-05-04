import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConquestPage } from './conquest.page';

const routes: Routes = [
  {
    path: '',
    component: ConquestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConquestPageRoutingModule {}
