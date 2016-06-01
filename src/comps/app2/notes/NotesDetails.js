System.register(['@angular/core', "./NotesDetailsItems"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, NotesDetailsItems_1;
    var NotesDetails;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (NotesDetailsItems_1_1) {
                NotesDetailsItems_1 = NotesDetailsItems_1_1;
            }],
        execute: function() {
            NotesDetails = (function () {
                function NotesDetails(items) {
                    this.items = items;
                }
                NotesDetails.prototype.ngAfterContentInit = function () {
                    var self = this;
                    self.items.changes.subscribe(function (e) {
                        console.log("I see " + self.items.length + " items");
                    });
                };
                NotesDetails = __decorate([
                    core_1.Component({
                        selector: 'notes-details',
                        template: "\n                I see {{items?.length}} items. <ng-content></ng-content>\n                <small>I am NotesDetails (constructor based QueryList)</small>\n                "
                    }),
                    __param(0, core_1.Query(NotesDetailsItems_1.NotesDetailsItems)), 
                    __metadata('design:paramtypes', [core_1.QueryList])
                ], NotesDetails);
                return NotesDetails;
            }());
            exports_1("NotesDetails", NotesDetails);
        }
    }
});
//# sourceMappingURL=NotesDetails.js.map