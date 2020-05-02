import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayLoadingComponent } from './overlay-loading.component';

@NgModule({
  imports: [CommonModule],
  exports: [OverlayLoadingComponent],
  declarations: [OverlayLoadingComponent],
  providers: [],
})
export class OverlayLoadingModule {}
