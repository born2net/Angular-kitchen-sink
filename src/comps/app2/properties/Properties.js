System.register(["angular2/core", "src/Conts"], function(exports_1) {
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
    var Properties;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            }],
        execute: function() {
            Properties = (function () {
                function Properties() {
                    this._listenClickSlidingPanel();
                }
                /**
                 Listen for open/close actions on properties panel that can slide in and out
                 @method _listenClickSlidingPanel
                 **/
                Properties.prototype._listenClickSlidingPanel = function () {
                    var self = this;
                    self.sliderHandler = function () {
                        if (jQuery(Conts_1.Consts.Elems().TOGGLE_PANEL).hasClass('propPanelIsOpen')) {
                            jQuery(Conts_1.Consts.Elems().TOGGLE_PANEL).toggleClass('propPanelIsOpen');
                            jQuery(Conts_1.Consts.Elems().PROP_PANEL_WRAP).addClass('hidden-xs hidden-sm hidden-md');
                            jQuery(Conts_1.Consts.Elems().MAIN_PANEL_WRAP).removeClass('col-xs-9 col-sm-9 col-md-9');
                            jQuery(Conts_1.Consts.Elems().MAIN_PANEL_WRAP).addClass('col-xs-12 col-md-12');
                        }
                        else {
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
                    jQuery(Conts_1.Consts.Elems().TOGGLE_PANEL).on('click', this.sliderHandler);
                };
                Properties.prototype.ngOnDestroy = function () {
                    jQuery(Conts_1.Consts.Elems().TOGGLE_PANEL).off('click', this.sliderHandler);
                };
                Properties = __decorate([
                    core_1.Component({
                        selector: 'Properties',
                        template: "<ng-content></ng-content>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Properties);
                return Properties;
            })();
            exports_1("Properties", Properties);
        }
    }
});
//# sourceMappingURL=Properties.js.map