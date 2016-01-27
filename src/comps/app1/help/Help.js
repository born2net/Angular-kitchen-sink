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
var core_1 = require("angular2/core");
var contributors_1 = require("./contributors/contributors");
var RefreshTheme_1 = require("../../../styles/RefreshTheme");
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var Help = (function (_super) {
    __extends(Help, _super);
    function Help(contributors) {
        _super.call(this);
    }
    Help = __decorate([
        core_1.Component({
            selector: 'Help',
            providers: [contributors_1.Contributors],
            directives: [ng2_bootstrap_1.Alert, ng2_bootstrap_1.Rating],
            template: " <small>I am Help component and using <a href=\"https://github.com/valor-software/ng2-bootstrap\" target=\"_blank\">ng2-bootstrap</a></small>\n                <br/>\n                <alert type=\"info\">Welcome to Angular2 Bootstrap starter pack!</alert>\n                <rating [(ngModel)]=\"rate\" [max]=\"max\" [readonly]=\"isReadonly\" [titles]=\"['one','two','three']\" ></rating>\n                <ng-content></ng-content>\n                "
        }), 
        __metadata('design:paramtypes', [contributors_1.Contributors])
    ], Help);
    return Help;
})(RefreshTheme_1.RefreshTheme);
exports.Help = Help;
//# sourceMappingURL=Help.js.map