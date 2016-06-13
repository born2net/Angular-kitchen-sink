System.register(['@angular/core', '@angular/platform-browser/src/browser/browser_adapter', "@angular/router", "../../services/CommBroker", "../../Conts"], function(exports_1, context_1) {
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
    var core_1, browser_adapter_1, router_1, CommBroker_1, Conts_1;
    var Filemenu;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_adapter_1_1) {
                browser_adapter_1 = browser_adapter_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            }],
        execute: function() {
            Filemenu = (function () {
                function Filemenu(viewContainer, router, commBroker) {
                    this.dom = new browser_adapter_1.BrowserDomAdapter();
                    var self = this;
                    self.m_commBroker = commBroker;
                    self.m_items = [];
                    self.m_renderedItems = [];
                    self.viewContainer = viewContainer;
                    self.el = viewContainer.element.nativeElement;
                    self.m_fileMenuWrap = self.dom.getElementsByClassName(self.el, 'm_fileMenuWrap');
                    jQuery('.navbar-nav').css({
                        display: 'block'
                    });
                }
                Filemenu.prototype.listenMenuSelected = function (event) {
                    this.m_commBroker.fire({
                        fromInstance: self,
                        event: Conts_1.Consts.Events().MENU_SELECTION,
                        context: null,
                        message: event.target.text
                    });
                    event.preventDefault();
                    return false;
                };
                Filemenu.prototype.addFileMenuItem = function (i_item) {
                    this.m_items.push(i_item);
                };
                Filemenu = __decorate([
                    core_1.Component({
                        selector: 'Filemenu',
                        inputs: ['appPrefix'],
                        template: "\n        <div>\n             <div class=\"m_fileMenuWrap\">\n                <ul class=\"nav navbar-nav\" >\n                <li id=\"commonFileMenu\" class=\"hidden-lg\" dropdown>\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Navigatior<b class=\"caret\"></b></a>\n                  <ul class=\"dropdown-menu\">\n                  <li class=\"divider\"></li>\n                    <li *ngFor=\"let item of m_renderedItems\" (click)=\"listenMenuSelected($event)\">\n                       <a href=\"#\">{{item.title}}</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef, router_1.Router, CommBroker_1.CommBroker])
                ], Filemenu);
                return Filemenu;
            }());
            exports_1("Filemenu", Filemenu);
        }
    }
});
//# sourceMappingURL=Filemenu.js.map