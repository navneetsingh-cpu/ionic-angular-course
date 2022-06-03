import { Injectable } from '@angular/core';


export interface Place {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  availableTo: Date;
  availableFrom: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private placeList: Place[] = [];

  constructor() {

    this.placeList = [
      {
        id: 'p1',
        title: 'Manhattan Mansion',
        description: 'In the heart of New York City.',
        imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
        price: 149.99,
        availableFrom: new Date('2022-01-01'),
        availableTo: new Date(),
      }, {
        id: 'p2',
        title: `L'Amour Toujours`,
        description: 'A romantic place in Paris!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
        price: 189.99,
        availableFrom: new Date('2022-01-01'),
        availableTo: new Date(),
      },

      {
        id: 'p3',
        title: 'The Foggy Palace',
        description: 'Not your average city trip!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
        price: 99.99,
        availableFrom: new Date('2022-01-01'),
        availableTo: new Date(),
      }
    ];
  }


  get places(): Place[] {
    return [...this.placeList];
  }

  getPlace(id: string): Place {
    return { ...this.placeList.find((place) => place.id === id) };
  }
}
