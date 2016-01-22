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
var AddPartsView = (function () {
    function AddPartsView() {
        this.add = new core_1.EventEmitter();
    }
    AddPartsView.prototype.onSubmit = function ($event, value) {
        $event.preventDefault();
        this.add.next(value);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AddPartsView.prototype, "add", void 0);
    AddPartsView = __decorate([
        core_1.Component({
            selector: 'add-part',
            template: "\n        <form class=\"form-inline\" (submit)=\"onSubmit($event,name.value);name.value=''\">\n            <div class=\"form-group\">\n                <input #name type=\"text\" class=\"form-control\" placeholder=\"Part Name\" autocomplete=\"off\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Add</button>\n        </form>\n    ",
            changeDetection: core_1.ChangeDetectionStrategy.CheckOnce
        }), 
        __metadata('design:paramtypes', [])
    ], AddPartsView);
    return AddPartsView;
})();
exports.AddPartsView = AddPartsView;
//# sourceMappingURL=add-part-view.js.map