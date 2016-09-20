System.register(["@angular/core"], function(exports_1, context_1) {
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
    var Todos;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Todos = (function () {
                function Todos() {
                }
                Todos = __decorate([
                    core_1.Component({
                        selector: 'Todos',
                        template: "\n        <br/>\n        <br/>\n        <br/>\n        <br/>\n        <Sliderpanel>\n            <div class=\"campaignSlider noScroll\">\n              <Todo1 class=\"page center todo1 selected\">\n                <div class=\"yScroll\">\n                  <hr/>\n                  <h3>To do sample application with remote server save</h3>\n                  <h5>uses your ip address as unique token and keeps data on server for 2 days</h5>\n                  <hr/>\n                  <todo-list>\n                  </todo-list>\n                </div>\n              </Todo1>\n              <Todo2 class=\"page right todo2\">\n                <hr/>\n                <h3>To do remote server statistics</h3>\n                <h5>display your total CRUD operations to remote node server</h5>\n                <hr/>\n              </Todo2>\n            </div>\n          </Sliderpanel>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Todos);
                return Todos;
            }());
            exports_1("Todos", Todos);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvVG9kb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQ0E7Z0JBQ0k7Z0JBQ0EsQ0FBQztnQkFoQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsUUFBUSxFQUFFLDAzQkF5QlQ7cUJBQ0osQ0FBQzs7eUJBQUE7Z0JBS0YsWUFBQztZQUFELENBSEEsQUFHQyxJQUFBO1lBSEQseUJBR0MsQ0FBQSIsImZpbGUiOiJjb21wcy9hcHAxL3RvZG9zL1RvZG9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7U2xpZGVycGFuZWx9IGZyb20gXCIuLi8uLi9zbGlkZXJwYW5lbC9TbGlkZXJwYW5lbFwiO1xyXG5pbXBvcnQge1RvZG8xfSBmcm9tIFwiLi9Ub2RvMVwiO1xyXG5pbXBvcnQge1RvZG8yfSBmcm9tIFwiLi9Ub2RvMlwiO1xyXG5pbXBvcnQge1RvZG9MaXN0fSBmcm9tIFwiLi9Ub2RvbGlzdFwiO1xyXG5pbXBvcnQge1RvZG9TZXJ2aWNlfSBmcm9tIFwiLi9Ub2RvU2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ1RvZG9zJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8U2xpZGVycGFuZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYW1wYWlnblNsaWRlciBub1Njcm9sbFwiPlxyXG4gICAgICAgICAgICAgIDxUb2RvMSBjbGFzcz1cInBhZ2UgY2VudGVyIHRvZG8xIHNlbGVjdGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieVNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+VG8gZG8gc2FtcGxlIGFwcGxpY2F0aW9uIHdpdGggcmVtb3RlIHNlcnZlciBzYXZlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGg1PnVzZXMgeW91ciBpcCBhZGRyZXNzIGFzIHVuaXF1ZSB0b2tlbiBhbmQga2VlcHMgZGF0YSBvbiBzZXJ2ZXIgZm9yIDIgZGF5czwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgIDx0b2RvLWxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvdG9kby1saXN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Ub2RvMT5cclxuICAgICAgICAgICAgICA8VG9kbzIgY2xhc3M9XCJwYWdlIHJpZ2h0IHRvZG8yXCI+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPGgzPlRvIGRvIHJlbW90ZSBzZXJ2ZXIgc3RhdGlzdGljczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDU+ZGlzcGxheSB5b3VyIHRvdGFsIENSVUQgb3BlcmF0aW9ucyB0byByZW1vdGUgbm9kZSBzZXJ2ZXI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICA8L1RvZG8yPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2xpZGVycGFuZWw+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVG9kb3Mge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
