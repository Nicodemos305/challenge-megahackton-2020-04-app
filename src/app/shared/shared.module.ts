import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OverlayLoadingModule } from '@app/core/components/overlay-loading/overlay-loading.module';

@NgModule({
  exports: [CommonModule, ReactiveFormsModule, IonicModule, OverlayLoadingModule],
})
export class SharedModule {}
