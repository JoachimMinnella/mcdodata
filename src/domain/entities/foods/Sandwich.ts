import { Info, Price } from '@/domain/entities';

export interface Sandwich {
  alt: string;
  happy: boolean;
  name: string;
  price: Price[];
  info: Info[];
  image: string;
  menu: boolean;
}
