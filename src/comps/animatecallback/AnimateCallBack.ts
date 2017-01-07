import {Component, Input, trigger, state, style, transition, keyframes, animate} from "@angular/core";

@Component({
    selector: 'AnimateCallBack',

    template: `
    <div>
      <h4>Multi-Step animation with Callbacks</h4>
      
      <button (click)="start()" [disabled]="!canRun">Start</button>
      <button (click)="reset()" [disabled]="!canReset">Reset</button>
      
      <div id="container">
        <ul>
          <li *ngFor="let item of list"
            (@flyInOut.start)="animationStarted($event, item)"
            (@flyInOut.done)="animationDone($event, item)"
            [@flyInOut]="'in'">
            {{ item }}
          </li>
        </ul>
      </div>
      
    </div>
  `,
    styles: [`
    #container {
      margin-top: 15px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
  `],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(0)'})),
            transition('void => *', [
                animate(300, keyframes([
                    style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
                    style({opacity: 1, transform: 'translateX(15px)', offset: 0.3, backgroundColor: "red"}),
                    style({opacity: 1, transform: 'translateX(0)', offset: 1.0, backgroundColor: "orange"})
                ]))
            ]),
            transition('* => void', [
                animate(600, keyframes([
                    style({opacity: 1, transform: 'translateX(0)', offset: 0, backgroundColor: "#FCF3CF"}),
                    style({opacity: 1, transform: 'translateX(-10px)', offset: 0.5, backgroundColor: "#F7DC6F"}),
                    style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7, backgroundColor: "#F1C40F"}),
                    style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
                ]))
            ])
        ])
    ]
})
export class AnimateCallBack {

    @Input() list = [];

    private intv: any;
    public canRun = true;
    public canReset = false;

    reset() {
        this.canReset = false;

        this.intv = setInterval(() => {
            if (this.list.length) {
                this.list.shift();
            } else {
                clearInterval(this.intv);
                this.canRun = true;
            }
        }, 400);

    }

    start() {

        this.canRun = false;
        let li = [
            "One",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight"
        ];

        this.intv = setInterval(() => {
            if (li.length) {
                this.list.push(li.shift());
            } else {
                clearInterval(this.intv);
                this.canReset = true;
            }
        }, 400);
    }

    animationStarted(e, i) {
        console.log(i + ' started');
    }

    animationDone(e, i) {
        console.log(i + ' done');
    }

}

