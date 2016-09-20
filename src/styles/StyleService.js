System.register(["@angular/core", "../services/LocalStorage", "../models/StyleModel", "../services/CommBroker", "../Conts", 'bootbox'], function(exports_1, context_1) {
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
    var core_1, LocalStorage_1, StyleModel_1, CommBroker_1, Conts_1, bootbox;
    var StyleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LocalStorage_1_1) {
                LocalStorage_1 = LocalStorage_1_1;
            },
            function (StyleModel_1_1) {
                StyleModel_1 = StyleModel_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (bootbox_1) {
                bootbox = bootbox_1;
            }],
        execute: function() {
            StyleService = (function () {
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
            }());
            exports_1("StyleService", StyleService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy9TdHlsZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFJSSxzQkFBb0IsVUFBcUI7b0JBQXJCLGVBQVUsR0FBVixVQUFVLENBQVc7b0JBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7b0JBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGNBQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBRWpFLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTt3QkFDcEQsS0FBSyxFQUFFLE1BQU07d0JBQ2IsUUFBUSxFQUFFLElBQUk7cUJBQ2pCLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO29CQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO29CQUVuQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7d0JBQzdCLE1BQU0sQ0FBQztvQkFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRU8sZ0NBQVMsR0FBakIsVUFBa0IsU0FBZ0I7b0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztvQkFDckMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsS0FBSyxNQUFNOzRCQUNYLENBQUM7Z0NBQ0csSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dDQUNwQyxLQUFLLENBQUM7NEJBQ1YsQ0FBQzt3QkFDRCxLQUFLLE1BQU07NEJBQ1gsQ0FBQztnQ0FDRyxJQUFJLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0NBQ3pDLEtBQUssQ0FBQzs0QkFDVixDQUFDO3dCQUNELEtBQUssU0FBUzs0QkFDZCxDQUFDO2dDQUNHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQ0FDcEIsS0FBSyxDQUFDOzRCQUNWLENBQUM7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDO2dCQUVPLG1DQUFZLEdBQXBCO2dCQVVBLENBQUM7Z0JBRU8sOEJBQU8sR0FBZixVQUFnQixHQUFVO29CQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixNQUFNLENBQUM7b0JBQ1gsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDO29CQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7b0JBQ2hCLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9ELENBQUM7Z0JBRU0sK0JBQVEsR0FBZjtvQkFBQSxpQkFXQztvQkFWRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2hCLFVBQVUsQ0FBQyxVQUFBLENBQUM7d0JBQ1IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFOzRCQUNwQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLOzRCQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO3lCQUNoQyxDQUFDLENBQUM7d0JBQ0gsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDO29CQUN2RixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7Z0JBQ1YsQ0FBQztnQkFFRCxzQkFBVywrQkFBSzt5QkFBaEI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQzNCLENBQUM7eUJBRUQsVUFBaUIsVUFBcUI7d0JBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO29CQUNqQyxDQUFDOzs7bUJBSkE7Z0JBakZMO29CQUFDLGlCQUFVLEVBQUU7O2dDQUFBO2dCQXNGYixtQkFBQztZQUFELENBckZBLEFBcUZDLElBQUE7WUFyRkQsdUNBcUZDLENBQUEiLCJmaWxlIjoic3R5bGVzL1N0eWxlU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvYXBwLmQudHNcIi8+XHJcblxyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TG9jYWxTdG9yYWdlfSBmcm9tIFwiLi4vc2VydmljZXMvTG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCB7U3R5bGVNb2RlbH0gZnJvbSBcIi4uL21vZGVscy9TdHlsZU1vZGVsXCI7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0IHtDb25zdHN9IGZyb20gXCIuLi9Db250c1wiO1xyXG5pbXBvcnQgKiBhcyBib290Ym94IGZyb20gJ2Jvb3Rib3gnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3R5bGVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlOkxvY2FsU3RvcmFnZTtcclxuICAgIHByaXZhdGUgc3R5bGVNb2RlbDpTdHlsZU1vZGVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbUJyb2tlcjpDb21tQnJva2VyKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBTdHlsZU1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgdGhpcy5jb21tQnJva2VyLnNldFNlcnZpY2UoQ29uc3RzLlNlcnZpY2VzKCkuU3R5bGVTZXJ2aWNlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IHN0eWxlRGF0YSA9IHRoaXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0eWxlX2RhdGEnLCB7XHJcbiAgICAgICAgICAgIHRoZW1lOiAnbGl0ZScsXHJcbiAgICAgICAgICAgIHJlbWVtYmVyOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5yZW1lbWJlciA9IHN0eWxlRGF0YS5yZW1lbWJlcjtcclxuICAgICAgICB0aGlzLm1vZGVsLnRoZW1lID0gc3R5bGVEYXRhLnRoZW1lO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tb2RlbC5yZW1lbWJlciA9PSBmYWxzZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubG9hZFRoZW1lKHRoaXMubW9kZWwudGhlbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFRoZW1lKHN0eWxlTmFtZTpzdHJpbmcpOnZvaWQge1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2VsZWN0ZWRUaGVtZSA9IHN0eWxlTmFtZTtcclxuICAgICAgICBzd2l0Y2ggKHN0eWxlTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlICdsaXRlJzpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ3NzKCcuLi9zdHlsZXMvc3R5bGUuY3NzJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdkYXJrJzpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ3NzKCcuLi9zdHlsZXMvc3R5bGVfZGFyay5jc3MnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3BvbHltZXInOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNYXRlcmlhbCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkTWF0ZXJpYWwoKSB7XHJcbiAgICAgICAgLy95b3UgY2FuIGNoZWNrIG1hbnVhbGx5IGlmIGEgbW9kdWxlIGhhcyBkb3dubG9hZGVkIHVzaW5nIHN5c3RlbS5qc1xyXG4gICAgICAgIC8vU3lzdGVtLmhhcyhgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9zcmMvc3R5bGVzL21hdGVyaWFsLWRlc2lnbi9qcy9tYXRlcmlhbC5taW4uanNgKVxyXG4gICAgICAgIC8vdGhpcy5sb2FkQ3NzKCdzcmMvc3R5bGVzL21hdGVyaWFsLWRlc2lnbi9jc3MvYm9vdHN0cmFwLW1hdGVyaWFsLWRlc2lnbi5jc3MnKTtcclxuICAgICAgICAvL3RoaXMubG9hZENzcygnc3JjL3N0eWxlcy9tYXRlcmlhbC1kZXNpZ24vY3NzL3JpcHBsZXMubWluLmNzcycpO1xyXG4gICAgICAgIC8vdmFyIGE6UHJvbWlzZTxhbnk+ID0gU3lzdGVtLmltcG9ydCgnc3JjL3N0eWxlcy9tYXRlcmlhbC1kZXNpZ24vanMvbWF0ZXJpYWwubWluLmpzJyk7XHJcbiAgICAgICAgLy92YXIgYjpQcm9taXNlPGFueT4gPSBTeXN0ZW0uaW1wb3J0KCdzcmMvc3R5bGVzL21hdGVyaWFsLWRlc2lnbi9qcy9yaXBwbGVzLm1pbi5qcycpO1xyXG4gICAgICAgIC8vUHJvbWlzZS5hbGwoW2EsIGJdKS50aGVuKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8gICAgalF1ZXJ5Lm1hdGVyaWFsLmluaXQoKTtcclxuICAgICAgICAvL30pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkQ3NzKHVybDpzdHJpbmcpIHtcclxuICAgICAgICBpZiAodXJsLmluZGV4T2YoJ18nKSA9PSAtMSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcbiAgICAgICAgbGluay50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG4gICAgICAgIGxpbmsucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcbiAgICAgICAgbGluay5jbGFzc05hbWUgPSAnY3VzdG9tU3R5bGVzJztcclxuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblVwZGF0ZSgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2V0VGltZW91dChlPT4ge1xyXG4gICAgICAgICAgICBzZWxmLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdHlsZV9kYXRhJywge1xyXG4gICAgICAgICAgICAgICAgdGhlbWU6IHNlbGYubW9kZWwudGhlbWUsXHJcbiAgICAgICAgICAgICAgICByZW1lbWJlcjogc2VsZi5tb2RlbC5yZW1lbWJlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkVGhlbWUoc2VsZi5tb2RlbC50aGVtZSk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLm1vZGVsLnJlbWVtYmVyKVxyXG4gICAgICAgICAgICAgICAgYm9vdGJveC5hbGVydCgncmVsb2FkIHRoZSBhcHBsaWNhdGlvbiB0byBzZWUgdGhlIGZ1bGwgZWZmZWN0IG9mIHRoZSB0aGVtZS4uLicpO1xyXG4gICAgICAgIH0sIDEwKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbW9kZWwoKTpTdHlsZU1vZGVsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZU1vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbW9kZWwoc3R5bGVNb2RlbDpTdHlsZU1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZU1vZGVsID0gc3R5bGVNb2RlbDtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
