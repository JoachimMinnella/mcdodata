import { Info } from "./Info";
import { Price } from "./Price";

export interface Wrap {
    alt: string
    name: string
    price: Price[]
    info: Info[]
    illu: string
    menu: boolean
    happy: boolean
}