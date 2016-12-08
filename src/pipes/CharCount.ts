import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'CharCount'
})
export class CharCount implements PipeTransform {
    transform(input: string): number {
        return input.length;
    }

}