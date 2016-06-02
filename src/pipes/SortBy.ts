import {Pipe, PipeTransform} from '@angular/core';
import {List} from 'Immutable';
import {StoreModel} from "../models/StoreModel";
@Pipe({
    name: 'sortBy'
})
export class SortBy implements PipeTransform {

    transform(items:List<StoreModel>, config:any = '+'):any {
        if (Array.isArray(items))
            return items;
        return items.sort((a:StoreModel, b:StoreModel)=> {
            if (a.getKey('order') < b.getKey('order'))
                return -1;
            if (a.getKey('order') > b.getKey('order'))
                return 1;
            return 0;
        })
    }
}