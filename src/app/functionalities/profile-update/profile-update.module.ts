import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProfileUpdateEffects } from './effects/profile-update.effects';
import { ProfileUpdatePageRoutingModule } from './profile-update-routing.module';
import { ProfileUpdatePage } from './profile-update.page';
import { featureKey, reducer } from './reducers';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    ProfileUpdatePageRoutingModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([ProfileUpdateEffects]),
    NgxMaskIonicModule,
  ],
  declarations: [ProfileUpdatePage],
})
export class ProfileUpdatePageModule {}
