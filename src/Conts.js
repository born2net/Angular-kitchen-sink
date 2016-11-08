System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Consts;
    return {
        setters:[],
        execute: function() {
            Consts = (function () {
                function Consts() {
                }
                Consts.Elems = function () {
                    return {
                        COMMON_FILE_MENU: '#commonFileMenu',
                        FILE_NAV_EVER: '#fileNavEver',
                        APP_NAVIGATOR_WASP: '#appNavigatorWasp',
                        APP_NAVIGATOR_EVER: '#appNavigatorEver',
                        TOGGLE_PANEL: '#togglePanel',
                        PROP_PANEL_WRAP: '#propPanelWrap',
                        MAIN_PANEL_WRAP: '#mainPanelWrap'
                    };
                };
                Consts.Clas = function () {
                    return {
                        CLASS_APP_HEIGHT: '.appHeight'
                    };
                };
                Consts.Events = function () {
                    return {
                        WIN_SIZED: 'winSized',
                        MENU_SELECTION: 'menuSelection',
                        LAZYLOAD_COMPLETED: 'lazyLoadedCompleted'
                    };
                };
                Consts.Values = function () {
                    return {
                        MENU_MIN_ICON_SHOW: 1550,
                        APP_SIZE: 'AppSize',
                        USER_NAME: 'userName',
                        USER_PASS: 'userPass'
                    };
                };
                Consts.Services = function () {
                    return {
                        App: 'Application',
                        Properties: 'Properties',
                        StyleService: 'StyleService',
                        ActionService: 'ActionService'
                    };
                };
                return Consts;
            }());
            exports_1("Consts", Consts);
        }
    }
});
//# sourceMappingURL=Conts.js.map