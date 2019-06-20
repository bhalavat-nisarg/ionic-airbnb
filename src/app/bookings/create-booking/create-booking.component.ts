import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../places/places.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;

  constructor(private modalctrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalctrl.dismiss(null, 'cancel');
  }

  onBookingPlace() {
    this.modalctrl.dismiss({message: 'This is a dummy Message!'}, 'confirm');
  }

}
