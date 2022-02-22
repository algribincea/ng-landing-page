import { Img } from "./img.model";
import { LocaleStr } from "./locale-str.model";

export class SliderModel {
    id: string;
    image: Img;
    order: number;
    isBlock: boolean;
    title: LocaleStr;
    text: LocaleStr;
}