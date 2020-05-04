import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { DepositComponent } from './deposit.component';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';

@NgModule({
  declarations: [DepositComponent],
  imports: [SharedModule, NgxMaskIonicModule],
  entryComponents: [DepositComponent],
  exports: [DepositComponent],
})
export class DepositModule {}
