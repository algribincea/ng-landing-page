import { Img } from "./img.model"
import { LocaleStr } from "./locale-str.model"

export class ProductModel {
    id: string
    order: number
    isBlock: boolean
    title: LocaleStr
    text: LocaleStr
    image: Img
    pdf: LocaleStr
    url: string
}