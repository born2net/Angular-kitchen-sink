import {
    Component,
    AfterViewInit
} from "@angular/core";
import {DynaFactoryResService} from "./DynaFactoryResService";
@Component({
    selector: 'dynamic-factory-hello-world',
    template: `
        <div>
            Hello, world!, {{name}}
            The answer is: {{getAnswer()}}
        </div>
    `
})
export class DynaFactoryResHelloWorld implements AfterViewInit {
    private name:string = 'You';

    constructor(private helloWorldService: DynaFactoryResService) {
    }

    ngAfterViewInit(): void {
        this.name = 'Me';
    }

    private getAnswer() {
        return this.helloWorldService.giveMeTheAnswer();
    }
}