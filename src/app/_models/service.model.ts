import { Img } from "./img.model"
import { LocaleStr } from "./locale-str.model"

export class ServiceModel {
    id: string
    order: number
    isBlock: boolean
    title: LocaleStr
    text: LocaleStr
    image: Img
}