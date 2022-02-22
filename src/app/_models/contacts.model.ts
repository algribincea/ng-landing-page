import { LocaleStr } from "./locale-str.model"
import { PersonModel } from "./person.model"

export class ContactsModel {
    id: string
    order: number
    isBlock: boolean
    title: LocaleStr
    text: LocaleStr
    email?: string
    address?: string
    phones: any[]
    person?: PersonModel
    facebook?: string
    instagram?: string
    phone?: string
}