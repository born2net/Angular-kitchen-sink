System.register(["@angular/core", "angular2-redux-util", "lodash"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_redux_util_1, _;
    var ADD_PART, PartActions;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            exports_1("ADD_PART", ADD_PART = 'ADD_PART');
            PartActions = (function (_super) {
                __extends(PartActions, _super);
                function PartActions() {
                    _super.apply(this, arguments);
                    this.id = 11;
                }
                PartActions.prototype.addPart = function (name) {
                    return { type: ADD_PART, id: _.uniqueId(), name: name };
                };
                PartActions = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PartActions);
                return PartActions;
            }(angular2_redux_util_1.Actions));
            exports_1("PartActions", PartActions);
        }
    }
});
