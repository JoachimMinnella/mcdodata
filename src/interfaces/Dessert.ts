import { Info } from "./Info";
import { Price } from "./Price";

export interface Dessert {
    name: string,
    alt: string,
    illu: string,
    happy: boolean,
    price: Price[],
    info: Info[]
}