import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';
import { LanguageService } from '../internationality-settings/language.service';



@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[language]'
})
export class LngDirective implements OnInit {
    // tslint:disable-next-line:no-input-rename
    @Input('language') key: string;
    @Input('element') element: any;
    @Input('names') names: { key: string, lng: string }[] = [
        {
            key: 'name_1',
            lng: this.app.LANGUAGES.ru
        },
        {
            key: 'name_2',
            lng: this.app.LANGUAGES.ro
        },
        {
            key: 'name_3',
            lng: this.app.LANGUAGES.en
        }
    ];

    constructor(
        private app: LanguageService,
        private elementRef: ElementRef,
        private renderer: Renderer2) {
        }

    ngOnInit() {
        if (this.key) {
            this.changeText(this.app.langCurrent);
            this.app.LanguageEvent.subscribe(data => this.changeText(data));
        }

        if (this.element) {
            this.changeTextForElement(this.app.langCurrent);
            this.app.LanguageEvent.subscribe(data => this.changeTextForElement(data));
        }
    }

    private changeText(lng: string) {
        const text = this.app.dictionary[this.key][lng];
        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', text);
    }

    private changeTextForElement(lng: string) {
        let text = 'Not Found';

        this.names.forEach(a => {
            // tslint:disable-next-line:curly
            if (a.lng === lng) text = this.element[a.key];
        });

        this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', text);
    }


}
