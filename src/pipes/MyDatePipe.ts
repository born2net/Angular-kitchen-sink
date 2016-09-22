import {Pipe} from "@angular/core";
import {DatePipe} from "@angular/common";

/**
 * Custom date pipe
 *
 * reference: https://devblog.dymel.pl/2016/09/22/how-to-extend-angular2-pipe/
 *
 * The format variable is hardcoded here, but you can inject any other service and use it to get some other value.
 * When you have your pipe created, there two things you need to modify in your AppModule.
 * One is to add MyDatePipe in the declarations section, second to add DatePipe to providers -
 * this is needed to make it available in the Dependency Injection.
 **/

@Pipe({
    name: "myDate"
})
export class MyDatePipe {

    constructor(private datePipe: DatePipe) {
    }

    transform(value: any): string {
        let format = "yyyy-MM-dd"; // you can pass format here or even use momentjs for different output
        return this.datePipe.transform(new Date(value), format);
    }
}