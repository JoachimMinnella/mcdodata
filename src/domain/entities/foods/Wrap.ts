import { Info, Price } from '@/domain/entities';

export interface Wrap {
  alt: string;
  name: string;
  price: Price[];
  info: Info[];
  image: string;
  menu: boolean;
  happy: boolean;
}
