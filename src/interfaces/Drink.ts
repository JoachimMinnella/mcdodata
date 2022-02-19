import { Info } from "./Info";
import { Price } from "./Price";

export interface Drink {
    alt: string
    happy: boolean
    illu: string
    info: Info[]
    menu: boolean
    name: string
    price: Price[]
    quantity: number
}