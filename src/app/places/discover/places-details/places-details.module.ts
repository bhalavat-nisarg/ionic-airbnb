import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlacesDetailsPage } from './places-details.page';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

const routes: Routes = [
  {
    path: '',
    component: PlacesDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlacesDetailsPage, CreateBookingComponent], entryComponents: [CreateBookingComponent]
})
export class PlacesDetailsPageModule {}
