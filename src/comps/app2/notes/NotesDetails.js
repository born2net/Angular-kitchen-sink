System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var NotesDetails;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NotesDetails = (function () {
                function NotesDetails() {
                }
                NotesDetails = __decorate([
                    core_1.Component({
                        selector: 'notes-details',
                        template: "\n                I see {{items?.length}} items. <ng-content></ng-content>\n                <small>I am NotesDetails (constructor based QueryList)</small>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NotesDetails);
                return NotesDetails;
            }());
            exports_1("NotesDetails", NotesDetails);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvTm90ZXNEZXRhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFSRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsOEtBR0c7cUJBQ2hCLENBQUM7O2dDQUFBO2dCQUVGLG1CQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCx1Q0FDQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvbm90ZXMvTm90ZXNEZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gbm90aWNlIHRoZSBvcHRpb25hbCB7e2l0ZW1zPy5sZW5ndGh9fSBkZWNlbGVyYXRpb25cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdub3Rlcy1kZXRhaWxzJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgICAgICBJIHNlZSB7e2l0ZW1zPy5sZW5ndGh9fSBpdGVtcy4gPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPkkgYW0gTm90ZXNEZXRhaWxzIChjb25zdHJ1Y3RvciBiYXNlZCBRdWVyeUxpc3QpPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGVzRGV0YWlscyB7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
