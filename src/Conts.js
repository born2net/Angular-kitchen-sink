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
                        MENU_SELECTION: 'menuSelection'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFBQTtnQkFBQTtnQkEyQ0EsQ0FBQztnQkExQ2lCLFlBQUssR0FBbkI7b0JBQ0ksTUFBTSxDQUFDO3dCQUNILGdCQUFnQixFQUFFLGlCQUFpQjt3QkFDbkMsYUFBYSxFQUFFLGNBQWM7d0JBQzdCLGtCQUFrQixFQUFFLG1CQUFtQjt3QkFDdkMsa0JBQWtCLEVBQUUsbUJBQW1CO3dCQUN2QyxZQUFZLEVBQUUsY0FBYzt3QkFDNUIsZUFBZSxFQUFFLGdCQUFnQjt3QkFDakMsZUFBZSxFQUFFLGdCQUFnQjtxQkFDcEMsQ0FBQztnQkFDTixDQUFDO2dCQUVhLFdBQUksR0FBbEI7b0JBQ0ksTUFBTSxDQUFDO3dCQUNDLGdCQUFnQixFQUFFLFlBQVk7cUJBQ3JDLENBQUM7Z0JBQ04sQ0FBQztnQkFFYSxhQUFNLEdBQXBCO29CQUNJLE1BQU0sQ0FBQzt3QkFDSCxTQUFTLEVBQUUsVUFBVTt3QkFDckIsY0FBYyxFQUFFLGVBQWU7cUJBQ2xDLENBQUM7Z0JBQ04sQ0FBQztnQkFFYSxhQUFNLEdBQXBCO29CQUNJLE1BQU0sQ0FBQzt3QkFDSCxrQkFBa0IsRUFBRSxJQUFJO3dCQUN4QixRQUFRLEVBQUUsU0FBUzt3QkFDbkIsU0FBUyxFQUFFLFVBQVU7d0JBQ3JCLFNBQVMsRUFBRSxVQUFVO3FCQUN4QixDQUFDO2dCQUNOLENBQUM7Z0JBRWEsZUFBUSxHQUF0QjtvQkFDSSxNQUFNLENBQUM7d0JBQ0gsR0FBRyxFQUFFLGFBQWE7d0JBQ2xCLFVBQVUsRUFBRSxZQUFZO3dCQUN4QixZQUFZLEVBQUUsY0FBYzt3QkFDNUIsYUFBYSxFQUFFLGVBQWU7cUJBQ2pDLENBQUM7Z0JBQ04sQ0FBQztnQkFDTCxhQUFDO1lBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtZQTNDRCwyQkEyQ0MsQ0FBQSIsImZpbGUiOiJDb250cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb25zdHMge1xyXG4gICAgcHVibGljIHN0YXRpYyBFbGVtcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBDT01NT05fRklMRV9NRU5VOiAnI2NvbW1vbkZpbGVNZW51JyxcclxuICAgICAgICAgICAgRklMRV9OQVZfRVZFUjogJyNmaWxlTmF2RXZlcicsXHJcbiAgICAgICAgICAgIEFQUF9OQVZJR0FUT1JfV0FTUDogJyNhcHBOYXZpZ2F0b3JXYXNwJyxcclxuICAgICAgICAgICAgQVBQX05BVklHQVRPUl9FVkVSOiAnI2FwcE5hdmlnYXRvckV2ZXInLFxyXG4gICAgICAgICAgICBUT0dHTEVfUEFORUw6ICcjdG9nZ2xlUGFuZWwnLFxyXG4gICAgICAgICAgICBQUk9QX1BBTkVMX1dSQVA6ICcjcHJvcFBhbmVsV3JhcCcsXHJcbiAgICAgICAgICAgIE1BSU5fUEFORUxfV1JBUDogJyNtYWluUGFuZWxXcmFwJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDbGFzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBDTEFTU19BUFBfSEVJR0hUOiAnLmFwcEhlaWdodCdcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRXZlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFdJTl9TSVpFRDogJ3dpblNpemVkJyxcclxuICAgICAgICAgICAgTUVOVV9TRUxFQ1RJT046ICdtZW51U2VsZWN0aW9uJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBWYWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgTUVOVV9NSU5fSUNPTl9TSE9XOiAxNTUwLFxyXG4gICAgICAgICAgICBBUFBfU0laRTogJ0FwcFNpemUnLFxyXG4gICAgICAgICAgICBVU0VSX05BTUU6ICd1c2VyTmFtZScsXHJcbiAgICAgICAgICAgIFVTRVJfUEFTUzogJ3VzZXJQYXNzJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTZXJ2aWNlcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBBcHA6ICdBcHBsaWNhdGlvbicsXHJcbiAgICAgICAgICAgIFByb3BlcnRpZXM6ICdQcm9wZXJ0aWVzJyxcclxuICAgICAgICAgICAgU3R5bGVTZXJ2aWNlOiAnU3R5bGVTZXJ2aWNlJyxcclxuICAgICAgICAgICAgQWN0aW9uU2VydmljZTogJ0FjdGlvblNlcnZpY2UnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
