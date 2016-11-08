System.register(['immutable', 'angular2-uuid'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var immutable_1, angular2_uuid_1;
    var StoreModel;
    return {
        setters:[
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            },
            function (angular2_uuid_1_1) {
                angular2_uuid_1 = angular2_uuid_1_1;
            }],
        execute: function() {
            StoreModel = (function () {
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
            exports_1("StoreModel", StoreModel);
        }
    }
});
//# sourceMappingURL=StoreModel.js.map