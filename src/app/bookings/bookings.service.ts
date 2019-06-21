import { Injectable } from '@angular/core';
import { Booking } from './bookings.model';

@Injectable({ providedIn: 'root' })


export class BookingService {
// tslint:disable-next-line: variable-name
    private _bookings: Booking[] = [
        {
            id: 'xyz',
            placeId: 'p1',
            placeTitle: 'Manhattan Mansion',
            userId: 'abc',
            guestNumber: 2
        }
    ];

    get booking() {
        return [...this._bookings];
    }
}

