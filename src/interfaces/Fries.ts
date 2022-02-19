import { Info } from "./Info";
import { Price } from "./Price";

export interface Fries {
    name: string
    alt: string
    happy: boolean
    illu: string
    info: Info[]
    menu: boolean
    price: Price[]
    quantity: number
}