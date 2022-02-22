import { LocaleStr } from "./locale-str.model";

export class SeoModel {
    id: number;
    pageType: string;
    title: LocaleStr;
    description: LocaleStr;
    keywords: LocaleStr;
    noindex: boolean;
    nofollow: boolean;
    openGraph: {
        title: LocaleStr;
        description: LocaleStr;
        image: string;
        imageType: string;
        imageWidth: number;
        imageHeight: number;
    }
  }