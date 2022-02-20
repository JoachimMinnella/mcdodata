import { Info, Price } from '@/domain/entities';

export interface Drink {
  alt: string;
  happy: boolean;
  image: string;
  infos: Info[];
  menu: boolean;
  name: string;
  prices: Price[];
  quantity: number;
}
