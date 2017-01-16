import {Component, OnInit, Input, Directive, ElementRef, AfterViewChecked, HostListener} from "@angular/core";

@Component({
    selector: 'card-same-height',
    template: `
        <div class="card card-block">
          <h4 class="card-title">{{ title }}</h4>
          <p class="card-text">
            {{ content }}
            <!--testing nested component-->
            <!--<third [content]="content"></third>-->
          </p>
        </div>
    `
})
export class CardSameHeightComponent implements OnInit {

    @Input()
    title: string;

    @Input()
    content: string;

    constructor() {
    }

    ngOnInit() {
    }


}


@Directive({
    selector: '[myMatchHeight]'
})
export class MatchHeightDirective implements AfterViewChecked {

    // class name to match height
    @Input()
    myMatchHeight: any;

    constructor(private el: ElementRef) {
    }

    ngAfterViewChecked() {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    }

    @HostListener('window:resize')
    onResize() {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    }

    matchHeight(parent: HTMLElement, className: string) {
        // match height logic here

        if (!parent) return;
        const children = parent.getElementsByClassName(className);

        if (!children) return;

        // reset all children height
        Array.from(children).forEach((x: HTMLElement) => {
            x.style.height = 'initial';
        })

        // gather all height
        const itemHeights = Array.from(children)
            .map(x => x.getBoundingClientRect().height);

        // find max height
        const maxHeight = itemHeights.reduce((prev, curr) => {
            return curr > prev ? curr : prev;
        }, 0);

        // apply max height
        Array.from(children)
            .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
    }
}


@Component({
    selector: 'page-same-height',
    template: `
        <main class="container">
            <h2>Malaysia States</h2>
        
            <!-- Example 1: Use it in the same component -->
            <div class="row" myMatchHeight="card">
                <div class="col-sm-4" *ngFor="let state of list">
                    <div class="card card-block">
                        <h4 class="card-title">{{ state.title }}</h4>
                        <p class="card-text">
                            {{ state.content }}
                        </p>
                    </div>
                </div>
            </div>
        
            <!-- Example 2: Use it in different component -->
            <!--<div class="row" myMatchHeight="card">
                <div class="col-sm-4" *ngFor="let state of list">
                    <card-same-height [title]="state.title" [content]="state.content">
                    </card-same-height>
                </div>
            </div>-->
        
            <!-- Example 3: Use it with different elements -->
            <!--<div myMatchHeight="half">
                <div class="half">
                    <p>
                        Cats are similar in anatomy to the other felids, with a strong, flexible body, 
                        quick reflexes, sharp retractable claws, and teeth adapted to killing small prey. 
                        Cat senses fit a crepuscular and predatory ecological niche. 
                        Cats can hear sounds too faint or too high in frequency for human ears, 
                        such as those made by mice and other small animals.
                    </p>
                </div>
                <div class="half">
                    <p>
                        The domestic dog (Canis lupus familiaris or Canis familiaris)[2] is a member of 
                        genus Canis (canines) that forms part of the wolf-like canids,[3] 
                        and is the most widely abundant carnivore.
                    </p>
                </div>
            </div>-->
        </main>
    `,
    styles: [`
       .half {
            width: 50%;
            border: 1px solid blue;
            margin: 10px;
            padding: 10px;
      }
    `]
})
export class PageSameHeightComponent {
    list = [
        {
            title: 'Selangor',
            content: 'Selangor is a state on the west coast of Peninsular Malaysia, encircling the capital Kuala Lumpur. In the state capital, Shah Alam, the Sultan Salahuddin Abdul Aziz Mosque has 4 soaring minarets and a huge blue dome.'
        },
        {
            title: 'Kuala Lumpur',
            content: 'Kuala Lumpur is the capital of Malaysia. Its modern skyline is dominated by the 451m-tall Petronas Twin Towers, a pair of glass-and-steel-clad skyscrapers with Islamic motifs. The towers also offer a public skybridge and observation deck. The city is also home to British colonial-era landmarks such as the Kuala Lumpur Railway Station and the Sultan Abdul Samad Building.'
        },
        {
            title: 'Perak',
            content: 'Perak is a state in the northwest of Peninsular Malaysia. The capital city Ipoh is known for its British colonial landmarks, including a baroque railway station. Sam Poh Tong is a huge Buddhist cave temple filled with wall paintings. The town of Gopeng is a base for rafting on the Kampar river.'
        }
    ]
}