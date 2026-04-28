import { OfferType } from '../types';

export const mockOffers: OfferType[] = [
  {
    id: 'd1efee91-68db-40a0-9e11-148959644f9c',
    title: 'The Pondhouse - A Magical Place',
    type: 'hotel',
    price: 448,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5
  },
  {
    id: '0691c16b-30e2-43d2-bc23-a9ff11f72360',
    title: 'Tile House',
    type: 'house',
    price: 325,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.4
  },
  {
    id: 'df2a4189-83d3-4258-b3e5-06a248882c85',
    title: 'The Pondhouse - A Magical Place',
    type: 'house',
    price: 503,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.7
  },
  {
    id: '7de8d0a9-144b-4eca-9016-afe6ee577d45',
    title: 'Waterfront with extraordinary view',
    type: 'house',
    price: 412,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.4
  },
  {
    id: 'c4be9fdf-77ce-4202-9bb6-e7ae8ede4ae8',
    title: 'Tile House',
    type: 'room',
    price: 209,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1
  }
];
