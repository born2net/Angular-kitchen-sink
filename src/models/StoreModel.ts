import {Map} from 'immutable';
import { UUID } from 'angular2-uuid';


/**
 * StoreModel is a thin wrapper of Immutable data around for a Class
 * uses the internal immutable map to hold all values.
 * This allows us a base class on which we can extend and inject
 * into any Redux store as we follow Immutability
 *
 * Also ships with a helper static method to create unique IDs
 **/
export class StoreModel {

    static UniqueId(){
        return UUID.UUID();
    }

    constructor(data:any = {}) {
        this._data = Map<string, any>(data);
    }

    _data:Map<string, any>;

    public setKey<T>(ClassName:any, key:string, value:any):T {
        return this.setData(ClassName, this._data.set(key, value)) as T;
    }

    public getKey(key:string) {
        return this._data.get(key);
    }

    public setData<T>(ClassName, data:any):T {
        function ClassFactory(className:{new(data): T;}, data:any):T {
            var created:T = new className(Map<string, any>(data));
            return created;
        }

        return ClassFactory(ClassName, data);
    }

    public getData():Map<string, any> {
        return this._data;
    }

}