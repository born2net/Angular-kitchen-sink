import {StoreModel} from "../../../models/StoreModel";

/**
 * Thin wrapper of Immutable data around a single model
 * **/
export class TodoModel extends StoreModel {

    constructor(data:any = {}) {
        super(data);
    }

    invalidateTodoId(i_id = -1) {
        return this.setKey<TodoModel>(TodoModel, 'modelId', i_id);
    }

}