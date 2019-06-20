import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places1: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'It is in the heart of New York',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      149.99
    ),
    new Place(
      'p2',
      'Eiffel Tower',
      'Best place in Paris',
      'https://upload.wikimedia.org/wikipedia/commons/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not so ordinary Tour!!',
      'https://i1.trekearth.com/photos/138102/dsc_0681.jpg',
      299.99
    )
  ];

  get places() {
    return [...this.places1];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this.places1.find(p => p.id === id)};

  }
}
