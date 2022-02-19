import { Info } from "./Info";
import { Price } from "./Price";

export interface Snack {
    alt: string
    happy: boolean
    menu: boolean
    name: string
    price: Price[]
    info: Info[]
    illu: string
    nbr: number
}