import { Info, Price } from '@/domain/entities';

export interface Dessert {
  name: string;
  alt: string;
  image: string;
  happy: boolean;
  prices: Price[];
  infos: Info[];
}
