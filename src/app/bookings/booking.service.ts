import { Injectable } from '@angular/core';


export interface Booking {
  id: string;
  placeId: string;
  userId: string;
  placeTitle: string;
  guestNumber: number;
}
@Injectable({ providedIn: 'root' })

export class BookingService {

  private booking: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Manhattan Manhattan',
      guestNumber: 2,
      userId: 'abc'
    }
  ];

  get bookings() {
    return [...this.booking];
  }
}
