"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var UserView = (function () {
    function UserView() {
        this.data = {};
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UserView.prototype, "data", void 0);
    UserView = __decorate([
        core_1.Component({
            selector: 'user',
            template: "\n        <form *ngIf=\"data\" class=\"form\">\n            <div class=\"form-group\">\n                <span>Name:</span><label>{{data.name}}</label>\n            </div>\n            <div class=\"form-group\">\n                <span>Hair:</span><label>{{data.hair_color}}</label>\n            </div>\n            <div class=\"form-group\">\n                <span>Gender:</span><label>{{data.gender}}</label>\n            </div>\n            <div class=\"form-group\">\n                <span>Eyes:</span><label>{{data.eye_color}}</label>\n            </div>\n        </form>\n    ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], UserView);
    return UserView;
}());
exports.UserView = UserView;
//# sourceMappingURL=user-view.js.map