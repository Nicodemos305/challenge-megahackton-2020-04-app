import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, featureKey } from './reducers';
import { HomeEffects } from './effects/home.effects';
import { DepositModule } from '../deposit/deposit.module';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { DepositComponent } from '../deposit/deposit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([HomeEffects]),
    NgxMaskIonicModule,
    DepositModule,
  ],
  declarations: [HomePage],
  exports: [NgxMaskIonicModule],
  entryComponents: [DepositComponent],
})
export class HomePageModule {}
