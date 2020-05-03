import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { SpendingEffects } from './effects/spending.effects';
import { featureKey, reducer } from './reducers';
import { SpendingListComponent } from './spending-list/spending-list.component';
import { SpendingPageRoutingModule } from './spending-routing.module';
import { SpendingPage } from './spending.page';
import { SpendingModalComponent } from './spending-modal/spending-modal.component';

@NgModule({
  imports: [
    SharedModule,
    SpendingPageRoutingModule,
    NgxMaskIonicModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([SpendingEffects]),
  ],
  declarations: [SpendingPage, SpendingListComponent, SpendingModalComponent],
  entryComponents: [SpendingModalComponent],
})
export class SpendingPageModule {}
