import {
    Component,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'pureDialog',
    template: `
    <div class="dialog">
        <header><div class="title">Dialog box</div><div class="exit-button" (click)="onClickedExit()">x</div></header>
        <h3>I am dynamic component injected at runtime</h3>
        <h4>auto closing in 3 seconds</h4>
    </div>
    `,
    styles: [`
        .dialog {
            width: 450px;
            position: absolute;
            border: 1px solid black;
            border-radius: 5px;
            background-color: #f0f0f0;
            opacity: 1;
            overflow: hidden;
            position: fixed;
            left: calc(50% - 225px);
            top: 100px;
        }
        .dialog p {
            text-align: center;
        }
        .dialog header {
            border-bottom: 1px solid black;
            font-size: 12px;
            padding: 5px;
            display: flex;
        }
        .dialog header .title {
            flex-grow: 1;
            cursor: default;
        }
        .dialog header .exit-button {
            cursor: pointer;
            padding: 0 5px;
        }
    `]
})
export class PureDialog {
    close = new EventEmitter();

    public onClickedExit() {
        this.close.emit('event');
    }
}