"use strict";
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
var core_1 = require("@angular/core");
var angular2_redux_util_1 = require("angular2-redux-util");
exports.APP_START_TIME = 'APP_START_TIME';
var AppdbAction = (function (_super) {
    __extends(AppdbAction, _super);
    function AppdbAction() {
        _super.apply(this, arguments);
    }
    AppdbAction.prototype.appStartTime = function () {
        return { type: exports.APP_START_TIME, value: Date.now() };
    };
    AppdbAction = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppdbAction);
    return AppdbAction;
}(angular2_redux_util_1.Actions));
exports.AppdbAction = AppdbAction;
//# sourceMappingURL=AppdbAction.js.map