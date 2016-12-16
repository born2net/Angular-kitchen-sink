import {Component, ViewChild, ElementRef, animate, keyframes, state, style, transition, trigger} from "@angular/core";
import {Contributors} from "./contributors/contributors";
import {CommBroker} from "../../../services/CommBroker";
import {Consts} from "../../../Conts";

@Component({
    selector: 'Help',
    providers: [Contributors],
    styleUrls: ['./Help.css'],
    templateUrl: './Help.html',
    animations: [
        trigger('aState', [
            state('small', style({transform: 'scale(1)'})),
            state('large', style({transform: 'scale(4.2)'})),
            transition('small => large', animate('1s ease', keyframes([
                style({transform: 'scale(1)', offset: 0}),
                style({transform: 'scale(0.7) rotate(15deg)', offset: 0.15}),
                style({transform: 'scale(1)', offset: 0.3}),
                style({transform: 'scale(4.2)', offset: 1})
            ]))),
            transition('large => small', animate('1s ease', keyframes([
                style({transform: 'scale(4.2)', offset: 0}),
                style({transform: 'scale(5) rotate(-15deg)', offset: 0.15}),
                style({transform: 'scale(4.2)', offset: 0.3}),
                style({transform: 'scale(1)', offset: 1})
            ])))
        ])
    ]
})

export class Help {
    constructor(private commBroker: CommBroker) {
    }

    aState = 'small';

    toggleAState() {
        this.aState = this.aState === 'small' ? 'large' : 'small';
    }

    @ViewChild('left') left: ElementRef;
    @ViewChild('right') right: ElementRef;

    ngOnInit() {
        this.commBroker.getService(Consts.Services().App).appResized();
        TweenMax.to(this.left.nativeElement, 1, {
            attr: {
                points: '125,30 125,30 125,30 31.9,30 31.9,230 125,230 125,230 125,230 203.9,186.3 218.1,63.2'
            },
            repeat: -1,
            yoyo: true,
            ease: Cubic.easeInOut
        });
        TweenMax.to(this.right.nativeElement, 1, {
            attr: {
                points: '125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 218.1,230 218.1,30 125,30'
            },
            repeat: -1,
            yoyo: true,
            ease: Cubic.easeInOut
        });
    }
}
