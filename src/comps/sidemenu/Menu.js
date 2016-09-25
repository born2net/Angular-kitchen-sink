System.register(["@angular/core", "../../services/CommBroker", "../../Conts"], function(exports_1, context_1) {
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
    var core_1, CommBroker_1, Conts_1;
    var Menu;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            }],
        execute: function() {
            Menu = (function () {
                function Menu(commBroker) {
                    this.m_hidden = false;
                    this.m_items = [];
                    this.m_commBroker = commBroker;
                    this.listenWinResize();
                }
                Menu.prototype.listenWinResize = function () {
                    var _this = this;
                    var self = this;
                    self.m_commBroker.onEvent(Conts_1.Consts.Events().WIN_SIZED).subscribe(function (e) {
                        if (e.message.width < Conts_1.Consts.Values().MENU_MIN_ICON_SHOW) {
                            _this.m_hidden = true;
                        }
                        else {
                            _this.m_hidden = false;
                        }
                    });
                };
                Menu.prototype.listenMenuSelected = function (event) {
                    var text = event.target.nodeName.toLocaleLowerCase() == 'li' ? jQuery(event.target).find('span').text() : jQuery(event.target).closest('li').find('span').text();
                    event.preventDefault();
                    this.m_commBroker.fire({
                        fromInstance: self,
                        event: Conts_1.Consts.Events().MENU_SELECTION,
                        context: null,
                        message: text
                    });
                    return false;
                };
                Menu.prototype.addMenuItem = function (i_item) {
                    this.m_items.push(i_item);
                };
                Menu = __decorate([
                    core_1.Component({
                        selector: 'Menu',
                        inputs: ['fontAwesome:fontAwesome'],
                        styles: ["\n    .appMenu {\n      background: #3e3f48;\n    }\n  "],
                        template: "\n        <section id=\"appNavigatorWasp\" (click)=\"listenMenuSelected($event)\" class=\"appMenu hidden-xs hidden-sm hidden-md col-lg-1\">\n         <li *ngFor=\"let item of m_items\" data-ripple-color=\"white\" class=\"btn btn-default list-group-item\">\n            <i class=\"navicons fa {{item.localFontAwesome}}\" [hidden]=\"m_hidden\">\n            </i>\n            <span>{{item.localTabTitle}}</span>\n          </li>\n      </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker])
                ], Menu);
                return Menu;
            }());
            exports_1("Menu", Menu);
        }
    }
});
