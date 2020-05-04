import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('@core/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('@app/functionalities/profile/profile.module').then((m) => m.ProfilePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile-update',
    loadChildren: () =>
      import('./functionalities/profile-update/profile-update.module').then(
        (m) => m.ProfileUpdatePageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'spending',
    loadChildren: () =>
      import('./functionalities/spending/spending.module').then((m) => m.SpendingPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'goals',
    loadChildren: () =>
      import('./functionalities/goals/goals.module').then((m) => m.GoalsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./functionalities/home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
