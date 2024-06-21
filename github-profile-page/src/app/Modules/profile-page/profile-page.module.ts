import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../../Components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { CardInfoComponent } from '../../Components/card-info/card-info.component';
import { LoadComponent } from '../../Components/load/load.component';

const routes: Routes = [
  { path: '', component: ProfileComponent }
];

@NgModule({
  declarations: [
    ProfileComponent,
    CardInfoComponent,
    LoadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfilePageModule { }
