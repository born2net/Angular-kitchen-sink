import {Map, List} from "immutable";
import {UUID} from "angular2-uuid";


/**
 * StoreModel is a thin wrapper of Immutable data around for a Class
 * uses the internal immutable map to hold all values.
 * This allows us a base class on which we can extend and inject
 * into any Redux store as we follow Immutability
 *
 * Also ships with a helper static method to create unique IDs
 **/
export class StoreModel {

  static UniqueId() {
    return UUID.UUID();
  }

  constructor(data: any = {}) {
    this._data = Map<string, any>(data);
  }

  _data: Map<string, any>;

  public setKey<T>(ClassName: any, key: string, value: any): T {
    return this.setData(ClassName, this._data.set(key, value)) as T;
  }

  public getKey(key: string) {
    return this._data.get(key);
  }

  public setData<T>(ClassName, data: any): T {
    function ClassFactory(className: {new(data): T;}, data: any): T {
      var created: T = new className(Map<string, any>(data));
      return created;
    }

    return ClassFactory(ClassName, data);
  }

  public getData(): Map<string, any> {
    return this._data;
  }

  /**
   * Create a List or update a list if one exists, with the Map key provided and the value to push to the new/updated list
   * @param ClassName
   * @param i_key
   * @param i_value
   * @returns {T}
   */
  public listPush<T>(ClassName, i_key: string, i_value: string): any {
    var value = this.getKey(i_key);
    var model: StoreModel = this;
    if (!value)
      model = this.setKey<T>(ClassName, i_key, List<any>()) as any;
    var list: List<any> = model.getKey(i_key);
    list = list.push(i_value);
    return model.setKey<T>(ClassName, i_key, list) as T;
  }
}
