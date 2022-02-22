import { Img } from "./img.model";
import { LocaleStr } from "./locale-str.model";

export class AboutModel {
    id: number;
        image: Img;
        isBlock: boolean;
        title: LocaleStr;
        text: LocaleStr;
        alt: LocaleStr
}