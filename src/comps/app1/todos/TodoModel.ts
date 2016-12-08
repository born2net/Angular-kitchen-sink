import {StoreModel} from "../../../models/StoreModel";

/**
 * Thin wrapper of Immutable data around a single model
 * **/
export class TodoModel extends StoreModel {

    constructor(data:any = {}) {
        super(data);
    }

    // a wrapper around base class public setKey<T>(ClassName:any, key:string, value:any):T {...
    // so we don't have to pass in the generic every time
    public setModelKey(key:string, value:any):TodoModel {
        return this.setData(TodoModel, this._data.set(key, value)) as TodoModel;
    }

    // this is a great way to add specific functionality to your model and getting free
    // type checking for your specific model needs. It also simplifies the call as
    // we don't need to pass generics
    public setModelId(id:string){
        return this.setKey<TodoModel>(TodoModel, 'modelId', id);
    }

    // wrapper function specific to this model
    public getModelId(){
        return this.getKey('modelId');
    }

    invalidateTodoId(i_id = -1) {
        return this.setKey<TodoModel>(TodoModel, 'modelId', i_id);
    }

}