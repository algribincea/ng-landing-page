import { LocaleStr } from "./locale-str.model"

export class PersonModel {
    id: string
    order: number
    isBlock: boolean
    name: LocaleStr
    email: string
    phone: string
}