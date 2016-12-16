import {Component, ViewChild, ElementRef} from "@angular/core";
import {Contributors} from "./contributors/contributors";
import {CommBroker} from "../../../services/CommBroker";
import {Consts} from "../../../Conts";

@Component({
    selector: 'Help',
    providers: [Contributors],
    styles: [`
        svg {
          display: block;
          max-width: 300px;
          margin: 0 auto;
        }
        .left, .shield {
          fill:#DD0031;
        }
        .right {
          fill:#C3002F;
        }
        .a {
          fill:#FFFFFF;
        }
        `],
    template: ` <small>I am Help component and using
                <a href="https://github.com/valor-software/ng2-bootstrap" target="_blank">ng2-bootstrap</a></small>
                <br/>
                <alert type="info">Some examples on animation and SVG</alert>
                <br/>
                  <tabs>
                    <tab [tabtitle]="'Greensock animation'">
                    <a href="https://greensock.com" target="_blank">Click to learn more about green sock</a>
                    <svg viewBox="0 0 250 250">
                      <svg:polygon #left class="left" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" />
                      <svg:polygon #right class="right" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30" />
                      <svg:path class="a" d="M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1
                        L125,52.1z M142,135.4H108l17-40.9L142,135.4z"/>
                    </svg>
                    <hr/>
                      <h5>Pure CSS animation still works in Angular</h5>
                        <a id="largeGit" href="https://github.com/born2net/Angular-kitchen-sink" target="_blank" class="fa fa-github"></a>
                    </tab>
                    <tab [tabtitle]="'Contributors'" >
                      <Contributors></Contributors>
                    </tab>
                    <tab tabtitle="Angular 2 Resources">
                      <div class="container">
                        <div class="notice notice-info">
                          <strong>videos</strong> <a target="_blank" href="https://youtube.com">Watch the video tutorial on this project</a>
                        </div>
                        <div class="notice notice-success">
                          <strong>home page</strong> <a target="_blank" href="https://angular.io/">Angular 2 home page</a>
                        </div>
                        <div class="notice notice-danger">
                          <strong>docs</strong> <a target="_blank" href="https://angular.io/docs/js/latest//">Angular 2 docs</a>
                        </div>
                        <div class="notice notice-info">
                          <strong>videos</strong> <a target="_blank" href="https://egghead.io/technologies/angular2">EggHead Angular 2 tutorials</a>
                        </div>
                        <div class="notice notice-warning">
                          <strong>books</strong> <a target="_blank" href="https://pragprog.com/book/smreactjs/reactive-programming-with-rxjs">rx.js book</a>
                        </div>
                        <div class="notice notice-warning">
                          <strong>books</strong> <a target="_blank" href="https://www.ng-book.com/2/">ng2 book</a>
                        </div>
                      </div>
                    </tab>
                  </tabs>
                `
})

export class Help {
    constructor(private commBroker: CommBroker) {
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
