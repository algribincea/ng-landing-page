import { Img } from "./img.model"
import { LocaleStr } from "./locale-str.model"

export class PartnerModel {
    id: string
    order: number
    isBlock: boolean
    title?: LocaleStr
    image: Img
}