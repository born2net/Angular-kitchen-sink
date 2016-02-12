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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var tabs_1 = require('../tabs/tabs');
var Tab = (function () {
    function Tab(tabs) {
        this.active = this.active || false;
        tabs.addTab(this);
    }
    Tab = __decorate([
        core_1.Component({
            selector: 'tab',
            inputs: [
                'title:tabtitle',
                'active'
            ],
            styles: ["\n    .pane{\n      padding: 1em;\n    }\n  "],
            template: "\n    <div [hidden]=\"!active\" class=\"pane\">\n      <ng-content></ng-content>\n    </div>\n  "
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [tabs_1.Tabs])
    ], Tab);
    return Tab;
}());
exports.Tab = Tab;
//# sourceMappingURL=tab.js.map