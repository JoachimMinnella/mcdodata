import { Info, Price } from '@/domain/entities';

export interface Snack {
  alt: string;
  happy: boolean;
  menu: boolean;
  name: string;
  price: Price[];
  info: Info[];
  image: string;
  nbr: number;
}
