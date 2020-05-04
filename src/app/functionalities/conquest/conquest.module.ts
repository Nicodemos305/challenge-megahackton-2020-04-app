import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConquestPageRoutingModule } from './conquest-routing.module';

import { ConquestPage } from './conquest.page';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [SharedModule, ConquestPageRoutingModule],
  declarations: [ConquestPage],
})
export class ConquestPageModule {}
