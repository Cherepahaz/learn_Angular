import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsCardComponent } from '../../Components/details-card/details-card.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DetailsCardComponent }
]

@NgModule({
  declarations: [DetailsCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailsModule { }
