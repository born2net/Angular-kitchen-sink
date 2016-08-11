System.register(['@angular/core', '@angular/router', "@angular/http", "../../services/CommBroker", "../../../src/Conts", "./todos/TodoStatsModel", "./todos/TodoService", "./todos/actions/TodoAction"], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, CommBroker_1, Conts_1, TodoStatsModel_1, TodoService_1, TodoAction_1;
    var App1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (TodoStatsModel_1_1) {
                TodoStatsModel_1 = TodoStatsModel_1_1;
            },
            function (TodoService_1_1) {
                TodoService_1 = TodoService_1_1;
            },
            function (TodoAction_1_1) {
                TodoAction_1 = TodoAction_1_1;
            }],
        execute: function() {
            App1 = (function () {
                function App1(commBroker, router) {
                    this.commBroker = commBroker;
                    this.router = router;
                    this.listenMenuChanges();
                    router.navigate(['/App1/Todos']);
                }
                App1.prototype.ngOnInit = function () {
                    this.routerActive = true;
                    this.commBroker.getService(Conts_1.Consts.Services().App).appResized();
                };
                App1.prototype.listenMenuChanges = function () {
                    var self = this;
                    var unsub = self.commBroker.onEvent(Conts_1.Consts.Events().MENU_SELECTION).subscribe(function (e) {
                        if (!self.routerActive)
                            return;
                        var screen = (e.message);
                        self.router.navigate([("/App1/" + screen)]);
                    });
                };
                App1 = __decorate([
                    core_1.Component({
                        providers: [http_1.HTTP_PROVIDERS, TodoStatsModel_1.default, TodoService_1.TodoService, TodoAction_1.TodoAction],
                        templateUrl: '/src/comps/app1/App1.html'
                    }), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker, router_1.Router])
                ], App1);
                return App1;
            }());
            exports_1("App1", App1);
        }
    }
});
//# sourceMappingURL=App1.js.map