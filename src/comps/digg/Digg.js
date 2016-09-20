System.register(["@angular/core", "@angular/platform-browser", "../../../src/Conts", "rxjs/Observable", "../../../src/comps/digg/DiggLoader", "../../services/CommBroker", "rxjs/add/observable/from", "rxjs/add/operator/do", "rxjs/add/operator/debounceTime", "rxjs/add/operator/distinctUntilChanged"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, platform_browser_1, Conts_1, Observable_1, DiggLoader_1, CommBroker_1;
    var Digg;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (DiggLoader_1_1) {
                DiggLoader_1 = DiggLoader_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            Digg = (function () {
                function Digg(commBroker, diggLoader, doc, m_commBroker, viewContainer) {
                    this.commBroker = commBroker;
                    this.doc = doc;
                    this.m_commBroker = m_commBroker;
                    var self = this;
                    self.mode = 'list';
                    this.dom = this.doc.body;
                    this.diggs = [];
                    self.viewContainer = viewContainer;
                    self.el = viewContainer.element.nativeElement;
                    self.channel = new Observable_1.Observable(function (observer) {
                        self.stream = observer;
                    }).share();
                    self.channel.debounceTime(1000).distinctUntilChanged().subscribe(function (e) {
                        self.diggs = [];
                        diggLoader.loadDiggs(e, self.diggs);
                    });
                    this.listenWinResize();
                    var propView = this.commBroker.getService(Conts_1.Consts.Services().Properties);
                    if (propView)
                        propView.setPropView('Digg');
                }
                Digg.prototype.listenWinResize = function () {
                    var self = this;
                    self.m_commBroker.onEvent(Conts_1.Consts.Events().WIN_SIZED).subscribe(function (e) {
                        self.setSize(e.message.height);
                    });
                };
                Digg.prototype.ngAfterContentInit = function () {
                    this.tileStyle = this.mode == "tiles" ? true : false;
                    this.setSize(this.m_commBroker.getValue(Conts_1.Consts.Values().APP_SIZE).height);
                };
                Digg.prototype.setSize = function (height) {
                    var h = height - 400;
                    var el = jQuery(this.dom).find('diggContainer', this.el)[0];
                    jQuery(this.dom).find(el).css({ height: h });
                };
                Digg.prototype.onSearch = function (event) {
                    this.stream.next(event.target.value);
                };
                Digg = __decorate([
                    core_1.Component({
                        selector: 'Digg',
                        inputs: ['mode:mode'],
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        providers: [DiggLoader_1.DiggLoader],
                        styles: ["\n        .diggContainer {\n            overflow-y: scroll;\n            height: 300px;\n        };\n        .largeImage {\n           max-width: 100px;\n           max-height: 60px;\n        }\n        .smallImage {\n           width: 70px;\n           height: 40px;\n        }\n        .grow { transition: all .2s ease-in-out; }\n        .grow:hover { transform: scale(1.1); opacity: 0.7}\n    "],
                        template: "\n        <h1>Digg</h1>\n        <div class=\"appHeight\" HeightDirective (resizing)=\"smallHeight = $event\">\n                 <h5>\n                    component height: {{smallHeight}}px\n                </h5>\n             <form (submit)=\"$event.preventDefault();\">\n                <br/>\n                <div class=\"input-group\">\n                      <span class=\"input-group-addon\" id=\"symbol-input\">Digg filter</span>\n                      <input type=\"text\" class=\"form-control\" (keyup)=\"onSearch($event)\" placeholder=\"press [ENTER] for unfiltered result\">\n                    </div>\n              </form>\n              <div class=\"diggContainer list\">\n                  <table class=\"table table-striped\">\n                  <tbody>\n                    <tr *ngFor=\"let digg of diggs\" [ngClass]=\"{'col-xs-4': tileStyle, 'col-lg-3': tileStyle}\">\n                      <td>\n                      <img class=\"img-responsive grow\" [ngClass]=\"{'largeImage': tileStyle, 'smallImage': !tileStyle}\" src=\"{{digg.link}}\"/>\n                      <span>{{digg.title}}</span>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n        </div>\n  "
                    }),
                    __param(2, core_1.Inject(platform_browser_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker, DiggLoader_1.DiggLoader, Object, CommBroker_1.CommBroker, (typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object])
                ], Digg);
                return Digg;
                var _a;
            }());
            exports_1("Digg", Digg);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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Q0FBQyxFQUFDLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztnQkFFTyx1QkFBUSxHQUFoQixVQUFpQixLQUFLO29CQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQXZHTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ3JCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxRQUFRO3dCQUN6QyxTQUFTLEVBQUUsQ0FBQyx1QkFBVSxDQUFDO3dCQUN2QixNQUFNLEVBQUUsQ0FBQyw4WUFlUixDQUFDO3dCQUNGLFFBQVEsRUFBRSxtdkNBMEJYO3FCQUNGLENBQUM7K0JBWXVFLGFBQU0sQ0FBQywyQkFBUSxDQUFDOzt3QkFadkY7Z0JBd0RGLFdBQUM7O1lBQUQsQ0F0REEsQUFzREMsSUFBQTtZQXRERCx1QkFzREMsQ0FBQSIsImZpbGUiOiJjb21wcy9kaWdnL0RpZ2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgVmlld0NvbnRhaW5lclJlZixcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgSW5qZWN0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHtDb25zdHN9IGZyb20gXCIuLi8uLi8uLi9zcmMvQ29udHNcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7RGlnZ0xvYWRlcn0gZnJvbSBcIi4uLy4uLy4uL3NyYy9jb21wcy9kaWdnL0RpZ2dMb2FkZXJcIjtcclxuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSBcInJ4anMvT2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtJRGlnZ30gZnJvbSBcIi4vRGlnZ0xvYWRlclwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ29tbUJyb2tlcixcclxuICAgIElNZXNzYWdlXHJcbn0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RlYm91bmNlVGltZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ0RpZ2cnLFxyXG4gICAgaW5wdXRzOiBbJ21vZGU6bW9kZSddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsIC8vIHNvIHdlIGRvbid0IGJsZWVkIG91ciBzdHlsZXMgdG8gcmVzdCBvZiBkb21cclxuICAgIHByb3ZpZGVyczogW0RpZ2dMb2FkZXJdLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5kaWdnQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLmxhcmdlSW1hZ2Uge1xyXG4gICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNtYWxsSW1hZ2Uge1xyXG4gICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdyb3cgeyB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0OyB9XHJcbiAgICAgICAgLmdyb3c6aG92ZXIgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IG9wYWNpdHk6IDAuN31cclxuICAgIGBdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aDE+RGlnZzwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFwcEhlaWdodFwiIEhlaWdodERpcmVjdGl2ZSAocmVzaXppbmcpPVwic21hbGxIZWlnaHQgPSAkZXZlbnRcIj5cclxuICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50IGhlaWdodDoge3tzbWFsbEhlaWdodH19cHhcclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICA8Zm9ybSAoc3VibWl0KT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1wiPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiIGlkPVwic3ltYm9sLWlucHV0XCI+RGlnZyBmaWx0ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIChrZXl1cCk9XCJvblNlYXJjaCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJwcmVzcyBbRU5URVJdIGZvciB1bmZpbHRlcmVkIHJlc3VsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlnZ0NvbnRhaW5lciBsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZGlnZyBvZiBkaWdnc1wiIFtuZ0NsYXNzXT1cInsnY29sLXhzLTQnOiB0aWxlU3R5bGUsICdjb2wtbGctMyc6IHRpbGVTdHlsZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBncm93XCIgW25nQ2xhc3NdPVwieydsYXJnZUltYWdlJzogdGlsZVN0eWxlLCAnc21hbGxJbWFnZSc6ICF0aWxlU3R5bGV9XCIgc3JjPVwie3tkaWdnLmxpbmt9fVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7ZGlnZy50aXRsZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGlnZyB7XHJcbiAgICBwcml2YXRlIG1vZGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGlsZVN0eWxlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBjaGFubmVsOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgICBwcml2YXRlIHN0cmVhbTogT2JzZXJ2ZXI8YW55W10+O1xyXG4gICAgcHJpdmF0ZSBkaWdnczogSURpZ2dbXTtcclxuICAgIHByaXZhdGUgZWw6IGFueTtcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuICAgIHByaXZhdGUgZG9tOiBIVE1MQm9keUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21tQnJva2VyOiBDb21tQnJva2VyLCBkaWdnTG9hZGVyOiBEaWdnTG9hZGVyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYywgcHJpdmF0ZSBtX2NvbW1Ccm9rZXI6IENvbW1Ccm9rZXIsIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5tb2RlID0gJ2xpc3QnO1xyXG4gICAgICAgIHRoaXMuZG9tID0gdGhpcy5kb2MuYm9keTtcclxuICAgICAgICB0aGlzLmRpZ2dzID0gW107XHJcbiAgICAgICAgc2VsZi52aWV3Q29udGFpbmVyID0gdmlld0NvbnRhaW5lcjtcclxuICAgICAgICBzZWxmLmVsID0gdmlld0NvbnRhaW5lci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIHNlbGYuY2hhbm5lbCA9IG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcclxuICAgICAgICAgICAgc2VsZi5zdHJlYW0gPSBvYnNlcnZlcjtcclxuICAgICAgICB9KS5zaGFyZSgpO1xyXG5cclxuICAgICAgICAvLyBmb3IgYSBjbGVhbmVyIGFwcHJvYWNoIHRvIE9ic2VydmFibGUgZW5kcG9pbnQgc2VydmVyIGNhbGxzIHNlZSBXZWF0aGVyIGNvbXBvbmVudFxyXG4gICAgICAgIHNlbGYuY2hhbm5lbC5kZWJvdW5jZVRpbWUoMTAwMCkuZGlzdGluY3RVbnRpbENoYW5nZWQoKS5zdWJzY3JpYmUoKGUpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5kaWdncyA9IFtdO1xyXG4gICAgICAgICAgICBkaWdnTG9hZGVyLmxvYWREaWdncyhlLCBzZWxmLmRpZ2dzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubGlzdGVuV2luUmVzaXplKCk7XHJcbiAgICAgICAgdmFyIHByb3BWaWV3ID0gdGhpcy5jb21tQnJva2VyLmdldFNlcnZpY2UoQ29uc3RzLlNlcnZpY2VzKCkuUHJvcGVydGllcyk7XHJcbiAgICAgICAgaWYgKHByb3BWaWV3KVxyXG4gICAgICAgICAgICBwcm9wVmlldy5zZXRQcm9wVmlldygnRGlnZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGlzdGVuV2luUmVzaXplKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLm1fY29tbUJyb2tlci5vbkV2ZW50KENvbnN0cy5FdmVudHMoKS5XSU5fU0laRUQpLnN1YnNjcmliZSgoZTogSU1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5zZXRTaXplKGUubWVzc2FnZS5oZWlnaHQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgICAgIHRoaXMudGlsZVN0eWxlID0gdGhpcy5tb2RlID09IFwidGlsZXNcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldFNpemUodGhpcy5tX2NvbW1Ccm9rZXIuZ2V0VmFsdWUoQ29uc3RzLlZhbHVlcygpLkFQUF9TSVpFKS5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U2l6ZShoZWlnaHQpIHtcclxuICAgICAgICB2YXIgaDogYW55ID0gaGVpZ2h0IC0gNDAwO1xyXG4gICAgICAgIHZhciBlbCA9IGpRdWVyeSh0aGlzLmRvbSkuZmluZCgnZGlnZ0NvbnRhaW5lcicsIHRoaXMuZWwpWzBdO1xyXG4gICAgICAgIGpRdWVyeSh0aGlzLmRvbSkuZmluZChlbCkuY3NzKHtoZWlnaHQ6IGh9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU2VhcmNoKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zdHJlYW0ubmV4dChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
