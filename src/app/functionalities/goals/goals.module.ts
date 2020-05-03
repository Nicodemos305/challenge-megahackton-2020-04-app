import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { GoalsEffects } from './effects/goals.effects';
import { GoalsModalComponent } from './goals-modal/goals-modal.component';
import { GoalRoutingModule } from './goals-routing.module';
import { GoalsPage } from './goals.page';
import { featureKey, reducer } from './reducers';
import { GoalsListComponent } from './goals-list/goals-list.component';

@NgModule({
  imports: [
    SharedModule,
    GoalRoutingModule,
    NgxMaskIonicModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([GoalsEffects]),
  ],
  declarations: [GoalsPage, GoalsListComponent, GoalsModalComponent],
  entryComponents: [GoalsModalComponent],
})
export class GoalsPageModule {}
