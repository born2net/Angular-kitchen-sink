import {StoreModel} from "../../../models/StoreModel";

/**
 * Thin wrapper of Immutable data around a single business
 * **/
export class TodoModel extends StoreModel {

    constructor(data:any = {}) {
        super(data);
    }

    invalidateTodoId(i_id = -1) {
        return this.setKey<TodoModel>(TodoModel, 'id', i_id);
    }

}