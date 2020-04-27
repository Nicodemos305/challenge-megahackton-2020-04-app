import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { StoreModule } from '@ngrx/store';
import { LoginEffects } from './effects/login.effects';
import { EffectsModule } from '@ngrx/effects';
import { featureKey, reducer } from './reducers';

@NgModule({
  imports: [
    SharedModule,
    LoginPageRoutingModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
