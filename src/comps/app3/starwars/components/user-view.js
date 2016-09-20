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
    var UserView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UserView = (function () {
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
            exports_1("UserView", UserView);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy91c2VyLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7b0JBQ2EsU0FBSSxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQztnQkFERztvQkFBQyxZQUFLLEVBQUU7O3NEQUFBO2dCQXJCWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixRQUFRLEVBQUUsc2tCQWVUO3dCQUNELGVBQWUsRUFBQyw4QkFBdUIsQ0FBQyxNQUFNO3FCQUNqRCxDQUFDOzs0QkFBQTtnQkFHRixlQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCwrQkFFQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy91c2VyLXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3VzZXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8Zm9ybSAqbmdJZj1cImRhdGFcIiBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPk5hbWU6PC9zcGFuPjxsYWJlbD57e2RhdGEubmFtZX19PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5IYWlyOjwvc3Bhbj48bGFiZWw+e3tkYXRhLmhhaXJfY29sb3J9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+R2VuZGVyOjwvc3Bhbj48bGFiZWw+e3tkYXRhLmdlbmRlcn19PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5FeWVzOjwvc3Bhbj48bGFiZWw+e3tkYXRhLmV5ZV9jb2xvcn19PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgYCxcclxuICAgIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJWaWV3IHtcclxuICAgIEBJbnB1dCgpIGRhdGEgPSB7fTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
