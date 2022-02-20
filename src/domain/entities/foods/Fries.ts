import { Info, Price } from '@/domain/entities';

export interface Fries {
  name: string;
  alt: string;
  happy: boolean;
  illustration: string;
  info: Info[];
  menu: boolean;
  price: Price[];
  quantity: number;
}
