import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPage } from './components/confirmation/confirmation.page';
import { LoginPage } from './components/login/login.page';
import { LoginEffects } from './effects/login.effects';
import { LoginPageRoutingModule } from './login-routing.module';
import { featureKey, reducer } from './reducers';
import { LoginContainerPage } from './login-container.page';

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
