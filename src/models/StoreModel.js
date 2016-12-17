"use strict";
var immutable_1 = require("immutable");
var angular2_uuid_1 = require("angular2-uuid");
/**
 * StoreModel is a thin wrapper of Immutable data around for a Class
 * uses the internal immutable map to hold all values.
 * This allows us a base class on which we can extend and inject
 * into any Redux store as we follow Immutability
 *
 * Also ships with a helper static method to create unique IDs
 **/
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
