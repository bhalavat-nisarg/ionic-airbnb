import { Component, OnInit } from '@angular/core';
import { BookingService } from './bookings.service';
import { Booking } from './bookings.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBooking: Booking[];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.loadedBooking = this.bookingService.booking;
  }

}
