System.register(["@angular/core", "../../Conts"], function(exports_1, context_1) {
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
    var core_1, Conts_1;
    var DividerPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            }],
        execute: function() {
            DividerPanel = (function () {
                function DividerPanel() {
                    this.panelOpen = true;
                }
                DividerPanel.prototype.onToggleSidePanel = function () {
                    var self = this;
                    if (jQuery(Conts_1.Consts.Elems().TOGGLE_PANEL).hasClass('propPanelIsOpen')) {
                        this.panelOpen = false;
                        ;
                        jQuery(Conts_1.Consts.Elems().TOGGLE_PANEL).toggleClass('propPanelIsOpen');
                        jQuery(Conts_1.Consts.Elems().PROP_PANEL_WRAP).addClass('hidden-xs hidden-sm hidden-md');
                        jQuery(Conts_1.Consts.Elems().MAIN_PANEL_WRAP).removeClass('col-xs-9 col-sm-9 col-md-9');
                        jQuery(Conts_1.Consts.Elems().MAIN_PANEL_WRAP).addClass('col-xs-12 col-md-12');
                    }
                    else {
                        this.panelOpen = true;
                        jQuery(Conts_1.Consts.Elems().TOGGLE_PANEL).toggleClass('propPanelIsOpen');
                        jQuery(Conts_1.Consts.Elems().MAIN_PANEL_WRAP).addClass('col-xs-9 col-sm-9 col-md-9');
                        setTimeout(function () {
                            jQuery(Conts_1.Consts.Elems().PROP_PANEL_WRAP).hide();
                            jQuery(Conts_1.Consts.Elems().MAIN_PANEL_WRAP).removeClass('col-xs-12 col-md-12');
                            jQuery(Conts_1.Consts.Elems().PROP_PANEL_WRAP).removeClass('hidden-xs hidden-sm hidden-md');
                            jQuery(Conts_1.Consts.Elems().PROP_PANEL_WRAP).fadeIn('fast');
                        }, 500);
                    }
                };
                DividerPanel = __decorate([
                    core_1.Component({
                        selector: 'DividerPanel',
                        styles: ["\n        #togglePanel {\n                position: fixed;\n                margin: 10px;\n                right: -5px;\n                top: 50px;\n                z-index: 1050;\n                height: 30px;\n                width: 30px;\n                text-align: center;\n                padding: 6px 0;\n                font-size: 11px;\n                outline:none;\n                border-radius: 15px !important;\n        }\n        #togglePanel > span {\n           opacity: 0.5;\n           position: relative;\n           top: -3px;\n           font-size: 2em;\n        }\n    "],
                        template: "\n                <button id=\"togglePanel\" (click)=\"onToggleSidePanel($event)\" class=\"propPanelIsOpen btn btn-default btn-sm hidden-lg\">\n                    <span [ngClass]=\"{'fa-arrow-circle-right': panelOpen, 'fa-arrow-circle-left': !panelOpen}\"  class=\"fa\"></span>\n                  </button>\n                <ng-content></ng-content>\n              "
                    }), 
                    __metadata('design:paramtypes', [])
                ], DividerPanel);
                return DividerPanel;
            }());
            exports_1("DividerPanel", DividerPanel);
        }
    }
});
