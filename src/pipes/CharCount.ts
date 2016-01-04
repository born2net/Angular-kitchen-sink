import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'CharCount',
    pure: false // false = update when any field changes, vs true which only updates when our input changes
})
export class CharCount implements PipeTransform {
    transform(input: string): number {
        return input.length;
    }

}