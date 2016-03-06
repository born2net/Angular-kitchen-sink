"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StoreModel_1 = require("../../../models/StoreModel");
var TodoModel = (function (_super) {
    __extends(TodoModel, _super);
    function TodoModel(data) {
        if (data === void 0) { data = {}; }
        _super.call(this, data);
    }
    TodoModel.prototype.setModelKey = function (key, value) {
        return this.setData(TodoModel, this._data.set(key, value));
    };
    TodoModel.prototype.setModelId = function (id) {
        return this.setKey(TodoModel, 'modelId', id);
    };
    TodoModel.prototype.getModelId = function () {
        return this.getKey('modelId');
    };
    TodoModel.prototype.invalidateTodoId = function (i_id) {
        if (i_id === void 0) { i_id = -1; }
        return this.setKey(TodoModel, 'modelId', i_id);
    };
    return TodoModel;
}(StoreModel_1.StoreModel));
exports.TodoModel = TodoModel;
//# sourceMappingURL=TodoModel.js.map