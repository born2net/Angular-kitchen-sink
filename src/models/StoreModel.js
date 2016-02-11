"use strict";
var immutable_1 = require('immutable');
var angular2_uuid_1 = require('angular2-uuid');
var StoreModel = (function () {
    function StoreModel(data) {
        if (data === void 0) { data = {}; }
        this._data = immutable_1.Map(data);
    }
    StoreModel.UniqueId = function () {
        return angular2_uuid_1.UUID.UUID();
    };
    StoreModel.prototype.setKey = function (ClassName, key, value) {
        return this.setData(ClassName, this._data.set(key, value));
    };
    StoreModel.prototype.getKey = function (key) {
        return this._data.get(key);
    };
    StoreModel.prototype.setData = function (ClassName, data) {
        function ClassFactory(className, data) {
            var created = new className(immutable_1.Map(data));
            return created;
        }
        return ClassFactory(ClassName, data);
    };
    StoreModel.prototype.getData = function () {
        return this._data;
    };
    return StoreModel;
}());
exports.StoreModel = StoreModel;
//# sourceMappingURL=StoreModel.js.map