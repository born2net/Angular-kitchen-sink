// reference: http://www.talkingdotnet.com/bind-radiobutton-list-in-angular-2/

import {Component} from '@angular/core';
import OptionlistComponentTemplate from './optionlistcomponent.html!text';
export class Options {
    constructor(public id: number, public name: string) { }
}

@Component({
    selector: 'optionsList',
    moduleId: __moduleName,
    template: OptionlistComponentTemplate
})
export class OptionListComponent {
    selectedOption:Options = new Options(2, 'T-Shirts');
    options = [
        new Options(1, 'Jeans' ),
        new Options(2, 'T-Shirts' ),
        new Options(3, 'Shorts' ),
        new Options(4, 'Shirts'),
        new Options(5, 'Trousers'),
        new Options(6, 'Chinos'),
        new Options(7, 'Shoes')
    ];

    setValue(optionid) {
        this.selectedOption = this.options.filter((item)=> item.id == optionid)[0];
    }
}

