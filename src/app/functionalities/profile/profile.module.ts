import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './pages/profile/profile.page';

@NgModule({
  imports: [SharedModule, ProfilePageRoutingModule],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}
