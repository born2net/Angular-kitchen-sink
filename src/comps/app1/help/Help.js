var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var contributors_1 = require("./contributors/contributors");
var Help = (function () {
    function Help(contributors) {
    }
    Help = __decorate([
        core_1.Component({
            selector: 'Help',
            providers: [contributors_1.Contributors],
            template: " <small>I am Help component</small>\n                <ng-content></ng-content>\n                "
        }), 
        __metadata('design:paramtypes', [contributors_1.Contributors])
    ], Help);
    return Help;
})();
exports.Help = Help;
//# sourceMappingURL=Help.js.map