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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var Help = (function () {
    function Help() {
    }
    Help = __decorate([
        core_1.Component({
            selector: 'Help',
            providers: [contributors_1.Contributors],
            directives: [ng2_bootstrap_1.Alert, ng2_bootstrap_1.Rating],
            template: " <small>I am Help component and using <a href=\"https://github.com/valor-software/ng2-bootstrap\" target=\"_blank\">ng2-bootstrap</a></small>\n                <br/>\n                <alert type=\"info\">Welcome to Angular2 Bootstrap starter pack!</alert>\n                <rating [(ngModel)]=\"rate\" [max]=\"max\" [readonly]=\"isReadonly\" [titles]=\"['one','two','three']\" ></rating>\n                <ng-content></ng-content>\n                "
        }), 
        __metadata('design:paramtypes', [])
    ], Help);
    return Help;
})();
exports.Help = Help;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvaGVscC9oZWxwLnRzIl0sIm5hbWVzIjpbIkhlbHAiLCJIZWxwLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNkJBQTJCLDZCQUE2QixDQUFDLENBQUE7QUFDekQsOEJBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFFMUQ7SUFhSUE7SUFDQUMsQ0FBQ0E7SUFkTEQ7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLE1BQU1BO1lBQ2hCQSxTQUFTQSxFQUFFQSxDQUFDQSwyQkFBWUEsQ0FBQ0E7WUFDekJBLFVBQVVBLEVBQUVBLENBQUNBLHFCQUFLQSxFQUFFQSxzQkFBTUEsQ0FBQ0E7WUFDM0JBLFFBQVFBLEVBQUVBLGljQUtHQTtTQUNoQkEsQ0FBQ0E7O2FBS0RBO0lBQURBLFdBQUNBO0FBQURBLENBZkEsQUFlQ0EsSUFBQTtBQUhZLFlBQUksT0FHaEIsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAxL2hlbHAvSGVscC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0NvbnRyaWJ1dG9yc30gZnJvbSBcIi4vY29udHJpYnV0b3JzL2NvbnRyaWJ1dG9yc1wiO1xyXG5pbXBvcnQge0FsZXJ0LCBSYXRpbmd9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnSGVscCcsXHJcbiAgICBwcm92aWRlcnM6IFtDb250cmlidXRvcnNdLFxyXG4gICAgZGlyZWN0aXZlczogW0FsZXJ0LCBSYXRpbmddLFxyXG4gICAgdGVtcGxhdGU6IGAgPHNtYWxsPkkgYW0gSGVscCBjb21wb25lbnQgYW5kIHVzaW5nIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmFsb3Itc29mdHdhcmUvbmcyLWJvb3RzdHJhcFwiIHRhcmdldD1cIl9ibGFua1wiPm5nMi1ib290c3RyYXA8L2E+PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8YWxlcnQgdHlwZT1cImluZm9cIj5XZWxjb21lIHRvIEFuZ3VsYXIyIEJvb3RzdHJhcCBzdGFydGVyIHBhY2shPC9hbGVydD5cclxuICAgICAgICAgICAgICAgIDxyYXRpbmcgWyhuZ01vZGVsKV09XCJyYXRlXCIgW21heF09XCJtYXhcIiBbcmVhZG9ubHldPVwiaXNSZWFkb25seVwiIFt0aXRsZXNdPVwiWydvbmUnLCd0d28nLCd0aHJlZSddXCIgPjwvcmF0aW5nPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlbHAgIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
