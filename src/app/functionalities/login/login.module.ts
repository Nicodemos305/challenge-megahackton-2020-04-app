import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginEffects } from './effects/login.effects';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './components/login/login.page';
import { LoginContainerPage } from './login-container.page';
import { featureKey, reducer } from './reducers';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { ConfirmationPage } from './components/confirmation/confirmation.page';

@NgModule({
  imports: [
    SharedModule,
    LoginPageRoutingModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([LoginEffects]),
    NgxMaskIonicModule,
  ],
  declarations: [LoginContainerPage, LoginPage, ConfirmationPage],
})
export class LoginPageModule {}
