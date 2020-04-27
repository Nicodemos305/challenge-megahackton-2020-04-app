import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  exports: [CommonModule, ReactiveFormsModule, IonicModule],
})
export class SharedModule {}
