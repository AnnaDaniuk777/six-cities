import { SortType } from './types';

export const SORT_TYPES: SortType[] = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const SETTING = {
  RentalOffersCount: 4
};

export enum APP_ROUTE {
  ROOT = '/',
  LOGIN = '/login',
  FAVORITES = '/favorites',
  OFFER = '/offer/:id',
  NOT_FOUND = '*'
}

export enum AUTH_STATUS {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
