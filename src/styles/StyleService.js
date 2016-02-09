var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var LocalStorage_1 = require("../services/LocalStorage");
var StyleModel_1 = require("../models/StyleModel");
var CommBroker_1 = require("../services/CommBroker");
var Conts_1 = require("../Conts");
var StyleService = (function () {
    function StyleService(commBroker) {
        this.commBroker = commBroker;
        this.model = new StyleModel_1.StyleModel();
        this.localStorage = new LocalStorage_1.LocalStorage();
        this.commBroker.setService(Conts_1.Consts.Services().StyleService, this);
        var styleData = this.localStorage.getItem('style_data', {
            theme: 'lite',
            remember: true
        });
        this.model.remember = styleData.remember;
        this.model.theme = styleData.theme;
        if (this.model.remember == false)
            return;
        this.loadTheme(this.model.theme);
    }
    StyleService.prototype.loadTheme = function (styleName) {
        this.model.selectedTheme = styleName;
        switch (styleName) {
            case 'lite':
                {
                    this.loadCss('../styles/style.css');
                    break;
                }
            case 'dark':
                {
                    this.loadCss('../styles/style_dark.css');
                    break;
                }
            case 'polymer':
                {
                    this.loadMaterial();
                    break;
                }
        }
    };
    StyleService.prototype.loadMaterial = function () {
    };
    StyleService.prototype.loadCss = function (url) {
        if (url.indexOf('_') == -1)
            return;
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.className = 'customStyles';
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    };
    StyleService.prototype.onUpdate = function () {
        var _this = this;
        var self = this;
        setTimeout(function (e) {
            self.localStorage.setItem('style_data', {
                theme: self.model.theme,
                remember: self.model.remember
            });
            _this.loadTheme(self.model.theme);
            if (self.model.remember)
                bootbox.alert('reload the application to see the full effect of the theme...');
        }, 10);
    };
    Object.defineProperty(StyleService.prototype, "model", {
        get: function () {
            return this.styleModel;
        },
        set: function (styleModel) {
            this.styleModel = styleModel;
        },
        enumerable: true,
        configurable: true
    });
    StyleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
    ], StyleService);
    return StyleService;
})();
exports.StyleService = StyleService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy9zdHlsZXNlcnZpY2UudHMiXSwibmFtZXMiOlsiU3R5bGVTZXJ2aWNlIiwiU3R5bGVTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiU3R5bGVTZXJ2aWNlLmxvYWRUaGVtZSIsIlN0eWxlU2VydmljZS5sb2FkTWF0ZXJpYWwiLCJTdHlsZVNlcnZpY2UubG9hZENzcyIsIlN0eWxlU2VydmljZS5vblVwZGF0ZSIsIlN0eWxlU2VydmljZS5tb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDZCQUEyQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3RELDJCQUF5QixzQkFBc0IsQ0FBQyxDQUFBO0FBQ2hELDJCQUF5Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ2xELHNCQUFxQixVQUFVLENBQUMsQ0FBQTtBQUVoQztJQUtJQSxzQkFBb0JBLFVBQXFCQTtRQUFyQkMsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBV0E7UUFDckNBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLHVCQUFVQSxFQUFFQSxDQUFDQTtRQUM5QkEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsMkJBQVlBLEVBQUVBLENBQUNBO1FBQ3ZDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxVQUFVQSxDQUFDQSxjQUFNQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxZQUFZQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUVqRUEsSUFBSUEsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsWUFBWUEsRUFBRUE7WUFDcERBLEtBQUtBLEVBQUVBLE1BQU1BO1lBQ2JBLFFBQVFBLEVBQUVBLElBQUlBO1NBQ2pCQSxDQUFDQSxDQUFDQTtRQUNIQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxHQUFHQSxTQUFTQSxDQUFDQSxRQUFRQSxDQUFDQTtRQUN6Q0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0Es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UUFDM0JBLENBQUNBO2FBRUROLFVBQWlCQSxVQUFxQkE7WUFDbENNLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFVBQVVBLENBQUNBO1FBQ2pDQSxDQUFDQTs7O09BSkFOO0lBakZMQTtRQUFDQSxpQkFBVUEsRUFBRUE7O3FCQXNGWkE7SUFBREEsbUJBQUNBO0FBQURBLENBdEZBLEFBc0ZDQSxJQUFBO0FBckZZLG9CQUFZLGVBcUZ4QixDQUFBIiwiZmlsZSI6InN0eWxlcy9TdHlsZVNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2FwcC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge0xvY2FsU3RvcmFnZX0gZnJvbSBcIi4uL3NlcnZpY2VzL0xvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQge1N0eWxlTW9kZWx9IGZyb20gXCIuLi9tb2RlbHMvU3R5bGVNb2RlbFwiO1xyXG5pbXBvcnQge0NvbW1Ccm9rZXJ9IGZyb20gXCIuLi9zZXJ2aWNlcy9Db21tQnJva2VyXCI7XHJcbmltcG9ydCB7Q29uc3RzfSBmcm9tIFwiLi4vQ29udHNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0eWxlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGxvY2FsU3RvcmFnZTpMb2NhbFN0b3JhZ2U7XHJcbiAgICBwcml2YXRlIHN0eWxlTW9kZWw6U3R5bGVNb2RlbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcikge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgU3R5bGVNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIHRoaXMuY29tbUJyb2tlci5zZXRTZXJ2aWNlKENvbnN0cy5TZXJ2aWNlcygpLlN0eWxlU2VydmljZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZURhdGEgPSB0aGlzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdHlsZV9kYXRhJywge1xyXG4gICAgICAgICAgICB0aGVtZTogJ2xpdGUnLFxyXG4gICAgICAgICAgICByZW1lbWJlcjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubW9kZWwucmVtZW1iZXIgPSBzdHlsZURhdGEucmVtZW1iZXI7XHJcbiAgICAgICAgdGhpcy5tb2RlbC50aGVtZSA9IHN0eWxlRGF0YS50aGVtZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWwucmVtZW1iZXIgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmxvYWRUaGVtZSh0aGlzLm1vZGVsLnRoZW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRUaGVtZShzdHlsZU5hbWU6c3RyaW5nKTp2b2lkIHtcclxuICAgICAgICB0aGlzLm1vZGVsLnNlbGVjdGVkVGhlbWUgPSBzdHlsZU5hbWU7XHJcbiAgICAgICAgc3dpdGNoIChzdHlsZU5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnbGl0ZSc6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZENzcygnLi4vc3R5bGVzL3N0eWxlLmNzcycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAnZGFyayc6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZENzcygnLi4vc3R5bGVzL3N0eWxlX2RhcmsuY3NzJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdwb2x5bWVyJzpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTWF0ZXJpYWwoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZE1hdGVyaWFsKCkge1xyXG4gICAgICAgIC8veW91IGNhbiBjaGVjayBtYW51YWxseSBpZiBhIG1vZHVsZSBoYXMgZG93bmxvYWRlZCB1c2luZyBzeXN0ZW0uanNcclxuICAgICAgICAvL1N5c3RlbS5oYXMoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vc3JjL3N0eWxlcy9tYXRlcmlhbC1kZXNpZ24vanMvbWF0ZXJpYWwubWluLmpzYClcclxuICAgICAgICAvL3RoaXMubG9hZENzcygnc3JjL3N0eWxlcy9tYXRlcmlhbC1kZXNpZ24vY3NzL2Jvb3RzdHJhcC1tYXRlcmlhbC1kZXNpZ24uY3NzJyk7XHJcbiAgICAgICAgLy90aGlzLmxvYWRDc3MoJ3NyYy9zdHlsZXMvbWF0ZXJpYWwtZGVzaWduL2Nzcy9yaXBwbGVzLm1pbi5jc3MnKTtcclxuICAgICAgICAvL3ZhciBhOlByb21pc2U8YW55PiA9IFN5c3RlbS5pbXBvcnQoJ3NyYy9zdHlsZXMvbWF0ZXJpYWwtZGVzaWduL2pzL21hdGVyaWFsLm1pbi5qcycpO1xyXG4gICAgICAgIC8vdmFyIGI6UHJvbWlzZTxhbnk+ID0gU3lzdGVtLmltcG9ydCgnc3JjL3N0eWxlcy9tYXRlcmlhbC1kZXNpZ24vanMvcmlwcGxlcy5taW4uanMnKTtcclxuICAgICAgICAvL1Byb21pc2UuYWxsKFthLCBiXSkudGhlbihmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vICAgIGpRdWVyeS5tYXRlcmlhbC5pbml0KCk7XHJcbiAgICAgICAgLy99KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZENzcyh1cmw6c3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKCdfJykgPT0gLTEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG4gICAgICAgIGxpbmsudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuICAgICAgICBsaW5rLnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG4gICAgICAgIGxpbmsuY2xhc3NOYW1lID0gJ2N1c3RvbVN0eWxlcyc7XHJcbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZT0+IHtcclxuICAgICAgICAgICAgc2VsZi5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3R5bGVfZGF0YScsIHtcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBzZWxmLm1vZGVsLnRoZW1lLFxyXG4gICAgICAgICAgICAgICAgcmVtZW1iZXI6IHNlbGYubW9kZWwucmVtZW1iZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFRoZW1lKHNlbGYubW9kZWwudGhlbWUpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5tb2RlbC5yZW1lbWJlcilcclxuICAgICAgICAgICAgICAgIGJvb3Rib3guYWxlcnQoJ3JlbG9hZCB0aGUgYXBwbGljYXRpb24gdG8gc2VlIHRoZSBmdWxsIGVmZmVjdCBvZiB0aGUgdGhlbWUuLi4nKTtcclxuICAgICAgICB9LCAxMClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1vZGVsKCk6U3R5bGVNb2RlbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVNb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG1vZGVsKHN0eWxlTW9kZWw6U3R5bGVNb2RlbCkge1xyXG4gICAgICAgIHRoaXMuc3R5bGVNb2RlbCA9IHN0eWxlTW9kZWw7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
