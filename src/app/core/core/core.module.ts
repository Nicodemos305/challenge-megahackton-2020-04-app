import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { LoginPageModule } from '@app/functionalities/login/login.module';
import { ProfilePageModule } from '@app/functionalities/profile/profile.module';
import { environment } from '@env/environment';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { ErrorInterceptor } from '../helpers/error.interceptor';
import { JwtInterceptor } from '../helpers/jwt.interceptor';
import { LoadingInterceptor } from '../helpers/loading.interceptor';
import { AuthService } from '../services/auth.service';
import { OverlayEffects } from '../store/effects/overlay.effects';
import { metaReducers, reducers } from '../store/reducers';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  imports: [
    IonicModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([OverlayEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    NgxMaskIonicModule.forRoot(),

    LoginPageModule,
    ProfilePageModule,
  ],
  exports: [BrowserModule, IonicModule, HttpClientModule],
  providers: [
    AuthService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
})
export class CoreModule {}
