import { Info } from "./Info";
import { Price } from "./Price";

export interface Sandwich {
    alt: string
    happy: boolean
    name: string
    price: Price[]
    info: Info[]
    illu: string
    menu: boolean
}