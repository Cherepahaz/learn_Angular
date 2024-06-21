import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'profile/Cherepahaz', pathMatch: 'full' },
  {
    path: 'profile/:username',
    loadChildren: () => import('./Modules/profile-page/profile-page.module').then(
      (m) => m.ProfilePageModule
    )
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./Modules/details/details.module').then(
      (m) => m.DetailsModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
