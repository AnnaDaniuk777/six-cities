export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CityType = {
  name: string;
  location: LocationType;
};

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type CardType = 'favorite' | 'cities';

export type CityName = string;

export type RatingType = number;

export type SortType = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';
