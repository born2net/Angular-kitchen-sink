System.register(["@angular/core", "@angular/router", "../../services/CommBroker", "../../../src/Conts", "./todos/TodoStatsModel", "./todos/TodoService", './App1.html!text', "ng2-bootstrap"], function(exports_1, context_1) {
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
    var core_1, router_1, CommBroker_1, Conts_1, TodoStatsModel_1, TodoService_1, App1_html_text_1, ng2_bootstrap_1;
    var App1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (App1_html_text_1_1) {
                App1_html_text_1 = App1_html_text_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            }],
        execute: function() {
            App1 = (function () {
                function App1(commBroker, router) {
                    this.commBroker = commBroker;
                    this.router = router;
                    this.loading = false;
                    this.listenMenuChanges();
                    router.navigate(['/App1/Todos']);
                }
                App1.prototype.ngOnInit = function () {
                    this.routerActive = true;
                    this.commBroker.getService(Conts_1.Consts.Services().App).appResized();
                };
                App1.prototype.listenMenuChanges = function () {
                    var _this = this;
                    var self = this;
                    this.unsub1 = self.commBroker.onEvent(Conts_1.Consts.Events().LAZYLOAD_COMPLETED).subscribe(function (e) {
                        _this.lgModal.hide();
                    });
                    this.unsub2 = self.commBroker.onEvent(Conts_1.Consts.Events().MENU_SELECTION).subscribe(function (e) {
                        if (!self.routerActive)
                            return;
                        var screen = (e.message);
                        if (screen == 'LazyLoad')
                            if (!_this.loading) {
                                _this.loading = true;
                                _this.lgModal.show();
                            }
                        self.router.navigate([("/App1/" + screen)]);
                    });
                };
                App1.prototype.ngOnDestroy = function () {
                    this.unsub1.unsubscribe();
                    this.unsub2.unsubscribe();
                };
                __decorate([
                    core_1.ViewChild('lgModal'), 
                    __metadata('design:type', ng2_bootstrap_1.ModalDirective)
                ], App1.prototype, "lgModal", void 0);
                App1 = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        providers: [TodoStatsModel_1.default, TodoService_1.TodoService],
                        template: App1_html_text_1.default
                    }), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker, router_1.Router])
                ], App1);
                return App1;
            }());
            exports_1("App1", App1);
        }
    }
});
