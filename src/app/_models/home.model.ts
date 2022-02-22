import { AboutModel } from "./about.model";
import { ContactsModel } from "./contacts.model";
import { CounterModel } from "./counter.model";
import { Img } from "./img.model";
import { LocaleStr } from "./locale-str.model";
import { PartnerModel } from "./partner.model";
import { ProductModel } from "./product.model";
import { ServiceModel } from "./service.model";
import { SliderModel } from "./slider.model";

export class HomeModel {
    slider: SliderModel[];
    about: AboutModel;
    other: {
        phone: string;
        email: string;
        facebook: string;
        instagram: string;
    };
    counter: CounterModel[];
    services: ServiceModel[];
    products: ProductModel[];
    partners: PartnerModel[];
    contacts: ContactsModel[];
}