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
var core_1 = require('@angular/core');
var NotesDetailsItems = (function () {
    function NotesDetailsItems(zone) {
        this.zone = zone;
        this.select = new core_1.EventEmitter();
        this.myValue = 'val';
        this.random = Math.random();
        this.zone.run(function () {
            console.log('force update zone UI');
        });
    }
    NotesDetailsItems.prototype.onClick = function () {
        this.select.emit(this.myValue);
    };
    NotesDetailsItems.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NotesDetailsItems.prototype, "select", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], NotesDetailsItems.prototype, "content", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NotesDetailsItems.prototype, "myValue", void 0);
    NotesDetailsItems = __decorate([
        core_1.Component({
            selector: 'notes-details-item',
            changeDetection: core_1.ChangeDetectionStrategy.CheckAlways,
            template: "<br/>\n    <button (click)=\"onClick()\">click me</button>\n    <p>content from parent is: {{content(random)}}</p>\n    <ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], NotesDetailsItems);
    return NotesDetailsItems;
}());
exports.NotesDetailsItems = NotesDetailsItems;
//# sourceMappingURL=NotesDetailsItems.js.map