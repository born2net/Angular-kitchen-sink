System.register(["@angular/core", "../../../src/comps/entry/LoginPanel"], function(exports_1, context_1) {
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
    var core_1, LoginPanel_1;
    var EntryPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LoginPanel_1_1) {
                LoginPanel_1 = LoginPanel_1_1;
            }],
        execute: function() {
            EntryPanel = (function () {
                function EntryPanel() {
                }
                EntryPanel = __decorate([
                    core_1.Component({
                        providers: [LoginPanel_1.LoginPanel],
                        selector: 'EntryPanel',
                        template: "\n                <small>I am entrypanel component and I am inside main App</small>\n                <router-outlet></router-outlet>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], EntryPanel);
                return EntryPanel;
            }());
            exports_1("EntryPanel", EntryPanel);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2VudHJ5L0VudHJ5UGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQTtnQkFDQSxDQUFDO2dCQVJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsU0FBUyxFQUFFLENBQUMsdUJBQVUsQ0FBQzt3QkFDdkIsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxzSUFFa0M7cUJBQy9DLENBQUM7OzhCQUFBO2dCQUVGLGlCQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCxtQ0FDQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2VudHJ5L0VudHJ5UGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtMb2dpblBhbmVsfSBmcm9tIFwiLi4vLi4vLi4vc3JjL2NvbXBzL2VudHJ5L0xvZ2luUGFuZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgcHJvdmlkZXJzOiBbTG9naW5QYW5lbF0sXHJcbiAgICBzZWxlY3RvcjogJ0VudHJ5UGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICAgIDxzbWFsbD5JIGFtIGVudHJ5cGFuZWwgY29tcG9uZW50IGFuZCBJIGFtIGluc2lkZSBtYWluIEFwcDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW50cnlQYW5lbCB7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
