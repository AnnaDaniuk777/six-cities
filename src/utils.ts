import { CityName, OfferType } from './types';

export type OfferGroups = Record<CityName, OfferType[]>;

export function getOfferGroups(offers: OfferType[]): OfferGroups {
  return offers.reduce((acc, offer) => {
    const cityName = offer.city.name;
    const group = acc[cityName];

    if (group) {
      group.push(offer);
    } else {
      acc[cityName] = [offer];
    }

    return acc;
  }, {} as OfferGroups);
}
