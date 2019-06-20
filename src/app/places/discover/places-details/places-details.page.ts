import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../places.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.page.html',
  styleUrls: ['./places-details.page.scss'],
})
export class PlacesDetailsPage implements OnInit {
  place: Place;

  constructor(
    private route: ActivatedRoute,
    private navctrl: NavController,
    private placesService: PlacesService,
    private modalctrl: ModalController ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navctrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlaces() {
    // this.navctrl.navigateBack('/places/tabs/discover');
    this.modalctrl
    .create({
      component: CreateBookingComponent,
      componentProps: {selectedPlace: this.place}
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('BOOKED!');
        }
      });
  }
}
