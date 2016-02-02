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
var angular2_redux_util_1 = require("angular2-redux-util");
exports.ADD_PART = 'ADD_PART';
var PartActions = (function (_super) {
    __extends(PartActions, _super);
    function PartActions() {
        _super.apply(this, arguments);
        this.id = 11;
    }
    PartActions.prototype.addPart = function (name) {
        return { type: exports.ADD_PART, id: _.uniqueId(), name: name };
    };
    PartActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PartActions);
    return PartActions;
})(angular2_redux_util_1.Actions);
exports.PartActions = PartActions;
//# sourceMappingURL=part-actions.js.map