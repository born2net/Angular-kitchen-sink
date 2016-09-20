System.register(["@angular/core", "../../../../src/Conts", "./WeatherService", "./SortableHeader", "@angular/forms", 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/switchMap', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/catch', 'rxjs/add/operator/do', "../../../services/CommBroker"], function(exports_1, context_1) {
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
    var core_1, Conts_1, WeatherService_1, SortableHeader_1, forms_1, CommBroker_1;
    var Weather;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (WeatherService_1_1) {
                WeatherService_1 = WeatherService_1_1;
            },
            function (SortableHeader_1_1) {
                SortableHeader_1 = SortableHeader_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            }],
        execute: function() {
            Weather = (function () {
                function Weather(renderer, weatherService, commBroker) {
                    this.renderer = renderer;
                    this.weatherService = weatherService;
                    this.commBroker = commBroker;
                    this.zipControl = new forms_1.FormControl();
                    this.sort = { field: null, desc: false };
                    this.listenWeatherInput();
                    this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('Weather');
                }
                Weather.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.zipControl.setValue('91301');
                    setTimeout(function () {
                        _this.renderer.invokeElementMethod(_this.myWeatherInput.nativeElement, 'focus', []);
                    }, 1000);
                };
                Weather.prototype.listenWeatherInput = function () {
                    var _this = this;
                    return this.weatherItems = this.zipControl.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .filter(function (zip) {
                        return zip.length > 3;
                    }).switchMap(function (zip) {
                        console.log(zip);
                        return _this.weatherService.search(zip + "/1");
                    });
                };
                __decorate([
                    core_1.ViewChild('anotherWayToGetInput'), 
                    __metadata('design:type', (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object)
                ], Weather.prototype, "myWeatherInput", void 0);
                Weather = __decorate([
                    core_1.Component({
                        selector: 'Weather',
                        providers: [WeatherService_1.WeatherService, SortableHeader_1.SortableHeader],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                        styles: ["input {margin: 20px; width: 50%}"],
                        template: "\n    <small>I am a weather component</small>\n    <input type=\"text\" #anotherWayToGetInput class=\"form-control\" placeholder=\"enter city or zip code\" [formControl]=\"zipControl\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>day</th>\n          <th>icon</th>\n          <th sortableHeader=\"maxtempF\" [sort]=\"sort\">high</th>\n          <th sortableHeader=\"mintempF\" [sort]=\"sort\">low</th>\n        </tr>\n      </thead>\n      <tbody>\n      <!-- no need to subscribe to observable since async does this for us -->\n        <tr *ngFor=\"let item of weatherItems | async | OrderBy:sort.field:sort.desc\">\n          <td>{{ item.day }}</td>\n          <td><img src=\"{{ item.iconPath }}\" style=\"width: 40px; height: 40px\"/></td>\n          <td>{{ item.maxtempF }}</td>\n          <td>{{ item.mintempF }}</td>\n          <!-- <td [innerHtml]=\"item.day\"></td> -->\n        </tr>\n      </tbody>\n    </table>\n  ",
                    }), 
                    __metadata('design:paramtypes', [(typeof (_b = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _b) || Object, WeatherService_1.WeatherService, CommBroker_1.CommBroker])
                ], Weather);
                return Weather;
                var _a, _b;
            }());
            exports_1("Weather", Weather);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvd2VhdGhlci9XZWF0aGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQ0E7Z0JBZ0RJLGlCQUFvQixRQUFpQixFQUFVLGNBQTZCLEVBQVUsVUFBcUI7b0JBQXZGLGFBQVEsR0FBUixRQUFRLENBQVM7b0JBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBVztvQkE5Q25HLGVBQVUsR0FBZSxJQUFJLG1CQUFXLEVBQUUsQ0FBQztvQkFTNUMsU0FBSSxHQUFnQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO29CQXNDbEUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGNBQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BGLENBQUM7Z0JBRUQsaUNBQWUsR0FBZjtvQkFBQSxpQkFPQztvQkFORyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFHbEMsVUFBVSxDQUFDO3dCQUNQLEtBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFBO29CQUNyRixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2IsQ0FBQztnQkFFRCxvQ0FBa0IsR0FBbEI7b0JBQUEsaUJBYUM7b0JBWkcsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZO3lCQUNsRCxZQUFZLENBQUMsR0FBRyxDQUFDO3lCQUNqQixvQkFBb0IsRUFBRTt5QkFDdEIsTUFBTSxDQUFDLFVBQUMsR0FBVTt3QkFDZixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBSTFCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7d0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDakIsTUFBTSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFJLEdBQUcsT0FBSSxDQUFDLENBQUE7b0JBQ2pELENBQUMsQ0FBQyxDQUFBO2dCQUNWLENBQUM7Z0JBM0REO29CQUFDLGdCQUFTLENBQUMsc0JBQXNCLENBQUM7OytEQUFBO2dCQS9DdEM7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsU0FBUyxFQUFFLENBQUMsK0JBQWMsRUFBRSwrQkFBYyxDQUFDO3dCQUMzQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTt3QkFDL0MsTUFBTSxFQUFFLENBQUMsa0NBQWtDLENBQUM7d0JBQzVDLFFBQVEsRUFBRSw0N0JBdUJYO3FCQUNGLENBQUM7OzJCQUFBO2dCQThFRixjQUFDOztZQUFELENBNUVBLEFBNEVDLElBQUE7WUE1RUQsNkJBNEVDLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMi93ZWF0aGVyL1dlYXRoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFJlbmRlcmVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29uc3RzfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3JjL0NvbnRzXCI7XHJcbmltcG9ydCB7SVdlYXRoZXJJdGVtfSBmcm9tIFwiLi9JV2VhdGhlclwiO1xyXG5pbXBvcnQge1dlYXRoZXJTZXJ2aWNlfSBmcm9tIFwiLi9XZWF0aGVyU2VydmljZVwiO1xyXG5pbXBvcnQge1NvcnRhYmxlSGVhZGVyfSBmcm9tIFwiLi9Tb3J0YWJsZUhlYWRlclwiO1xyXG5pbXBvcnQge0Zvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wsIEZvcm1CdWlsZGVyfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtPcmRlckJ5fSBmcm9tIFwiLi4vLi4vLi4vcGlwZXMvT3JkZXJCeVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kaXN0aW5jdFVudGlsQ2hhbmdlZCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xyXG5pbXBvcnQge0NvbW1Ccm9rZXJ9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9Db21tQnJva2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnV2VhdGhlcicsXHJcbiAgICBwcm92aWRlcnM6IFtXZWF0aGVyU2VydmljZSwgU29ydGFibGVIZWFkZXJdLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBzdHlsZXM6IFtgaW5wdXQge21hcmdpbjogMjBweDsgd2lkdGg6IDUwJX1gXSxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c21hbGw+SSBhbSBhIHdlYXRoZXIgY29tcG9uZW50PC9zbWFsbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNhbm90aGVyV2F5VG9HZXRJbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiZW50ZXIgY2l0eSBvciB6aXAgY29kZVwiIFtmb3JtQ29udHJvbF09XCJ6aXBDb250cm9sXCI+XHJcbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPmRheTwvdGg+XHJcbiAgICAgICAgICA8dGg+aWNvbjwvdGg+XHJcbiAgICAgICAgICA8dGggc29ydGFibGVIZWFkZXI9XCJtYXh0ZW1wRlwiIFtzb3J0XT1cInNvcnRcIj5oaWdoPC90aD5cclxuICAgICAgICAgIDx0aCBzb3J0YWJsZUhlYWRlcj1cIm1pbnRlbXBGXCIgW3NvcnRdPVwic29ydFwiPmxvdzwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICA8IS0tIG5vIG5lZWQgdG8gc3Vic2NyaWJlIHRvIG9ic2VydmFibGUgc2luY2UgYXN5bmMgZG9lcyB0aGlzIGZvciB1cyAtLT5cclxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygd2VhdGhlckl0ZW1zIHwgYXN5bmMgfCBPcmRlckJ5OnNvcnQuZmllbGQ6c29ydC5kZXNjXCI+XHJcbiAgICAgICAgICA8dGQ+e3sgaXRlbS5kYXkgfX08L3RkPlxyXG4gICAgICAgICAgPHRkPjxpbWcgc3JjPVwie3sgaXRlbS5pY29uUGF0aCB9fVwiIHN0eWxlPVwid2lkdGg6IDQwcHg7IGhlaWdodDogNDBweFwiLz48L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IGl0ZW0ubWF4dGVtcEYgfX08L3RkPlxyXG4gICAgICAgICAgPHRkPnt7IGl0ZW0ubWludGVtcEYgfX08L3RkPlxyXG4gICAgICAgICAgPCEtLSA8dGQgW2lubmVySHRtbF09XCJpdGVtLmRheVwiPjwvdGQ+IC0tPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gIGAsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhdGhlciB7XHJcbiAgICBwcml2YXRlIHdlYXRoZXJJdGVtczpPYnNlcnZhYmxlPElXZWF0aGVySXRlbVtdPjtcclxuICAgIHByaXZhdGUgemlwQ29udHJvbDpGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG5cclxuICAgIC8vIHRoZSByZWFsIG1hZ2ljIGhlcmUgaXMgdGhhdCB0aGUgc29ydCB2YXJpYWJsZSBpcyBiZWluZyB1c2VkIGluIHNldmVyYWwgcGxhY2VzXHJcbiAgICAvLyBpbmNsdWRpbmcgaGVyZSB0byBzZXQgdGhlIHBpcGUgc29ydGluZywgaW4gdGhlIFNvcnRhYmxlSGVhZGVyIGNvbXBvbmVudCB0byBzaG93IGFuZCBoaWRlXHJcbiAgICAvLyB0aGUgaGVhZGVyIGljb25zLCBhcyB3ZWxsIGFzIGluIFNvcnRhYmxlSGVhZGVyIHRvIGNoYW5nZSB0aGUgc29ydCBvcmRlciBvbiBoZWFkZXIgY2xpY2tzLlxyXG4gICAgLy8gU28gd2UgcGFzcyB0aGUgU0FNRSBzb3J0IHZhciB0byBhbGwgU29ydGFibGVIZWFkZXIgZGlyZWN0aXZlcyBhbmQgYWxsIHdvcmsgd2l0aCBpdFxyXG4gICAgLy8gaW4gYm90aCBkaXNwbGF5aW5nIGFuZCB0aGUgc29ydGluZyBtZWNoYW5pY3NcclxuICAgIC8vIHdlIGFsc28gdXNlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoT2JzZXJ2ZSB0byBtYWtlIHN1cmUgd2UgdXNlXHJcbiAgICAvLyBlZmZpY2llbnQgcmVuZGVyaW5nIG9mIHRoZSBwYWdlIG9ubHkgd2hlbiB0aGUgT2JzZXJ2YWJsZSBpcyBjaGFuZ2VzXHJcbiAgICBwdWJsaWMgc29ydDp7ZmllbGQ6c3RyaW5nLCBkZXNjOmJvb2xlYW59ID0ge2ZpZWxkOiBudWxsLCBkZXNjOiBmYWxzZX07XHJcblxyXG4gICAgLy8gcmVmZXJlbmNlOiBodHRwOi8vYW5ndWxhcmpzLmJsb2dzcG90LmNvbS8yMDE2LzA0LzUtcm9va2llLW1pc3Rha2VzLXRvLWF2b2lkLXdpdGgtYW5ndWxhci5odG1sXHJcbiAgICAvLyB0aGlzIGlzIGEgbmljZSBleGFtcGxlIG9mIGdldHRpbmcgYSByZWZlcmVuY2UgdG8gYSBuYXRpdmUgZWxlbWVudCAoaW5wdXQpIGp1c3QgYnkgaW5zZXJ0aW5nXHJcbiAgICAvLyBhbiBuZzIgaWRlbnRpZmllciB0byBpdCAoI2Fub3RoZXJXYXlUb0dldElucHV0KVxyXG4gICAgQFZpZXdDaGlsZCgnYW5vdGhlcldheVRvR2V0SW5wdXQnKSBteVdlYXRoZXJJbnB1dDpFbGVtZW50UmVmO1xyXG5cclxuICAgIC8vIGlmIHlvdSBuZWVkIHRvIGFjY2VzcyBhbiBlbGVtZW50IG5vdCBpbiB5b3VyIHZpZXcgYnV0IGluc3RlYWQgdGhyb3VnaCBjb250ZW50IHByb2plY3Rpb25cclxuICAgIC8vIHlvdSBjYW4gdXNlIENvbnRlbnRDaGlsZHJlbiBpbnN0ZWFkOlxyXG4gICAgLy9AQ29udGVudENoaWxkcmVuKCdteUxpc3RJbnB1dHMnKSBteUxpc3RJbnB1dHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcclxuXHJcblxyXG4gICAgLy8gQW5vdGhlciBncmVhdCBzb2x1dGlvbiBpcyB0byB0YWtlIGFkdmFudGFnZSBvZiB0aGUgc2VsZWN0b3IgaW4gdGhlXHJcbiAgICAvLyBARGlyZWN0aXZlIGRlY29yYXRvci4gWW91IHNpbXBseSBkZWZpbmUgYSBkaXJlY3RpdmUgdGhhdCBzZWxlY3RzIGZvciA8bGk+IGVsZW1lbnRzLFxyXG4gICAgLy8gdGhlbiB1c2UgSVQgKHRoZSBkaXJlY3RpdmUpIElOU0lERSB5b3VyIEBDb250ZW50Q2hpbGRyZW4gcXVlcnkgdG8gZmlsdGVyIGFsbCA8bGk+IGVsZW1lbnRzIGRvd24gdG8gb25seSB0aG9zZVxyXG4gICAgLy8gdGhhdCBhcmUgY29udGVudCBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50LlxyXG4gICAgLy9cclxuICAgIC8vIENvbnRlbnRDaGlsZHJlbiBhbmQgZGlyZWN0aXZlIChyZWNvbW1lbmRlZCksIHVzZXIgY29kZTpcclxuICAgIC8vIDxteS1saXN0PlxyXG4gICAgLy8gICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj4ge3tpdGVtfX0gPC9saT5cclxuICAgIC8vIDwvbXktbGlzdD5cclxuICAgIC8vXHJcbiAgICAvLyBARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdsaScgfSlcclxuICAgIC8vIGV4cG9ydCBjbGFzcyBMaXN0SXRlbSB7fVxyXG4gICAgLy9cclxuICAgIC8vIFRoZSBjb21wb25lbnQgY29kZTpcclxuICAgIC8vIEBDb21wb25lbnQoe1xyXG4gICAgLy8gICAgIHNlbGVjdG9yOiAnbXktbGlzdCdcclxuICAgIC8vIH0pXHJcbiAgICAvLyBleHBvcnQgY2xhc3MgTXlMaXN0IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgICAvLyAgICAgQENvbnRlbnRDaGlsZHJlbihMaXN0SXRlbSkgaXRlbXM6IFF1ZXJ5TGlzdDxMaXN0SXRlbT47IC8vIDwtLS0gTUFHSUMgSVMgSEVSRSwgdXNlIGRpcmVjdGl2ZSB0byBwdWxsIG91dCBsaXN0XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIC8vICAgICAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggbGlzdCBpdGVtc1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOlJlbmRlcmVyLCBwcml2YXRlIHdlYXRoZXJTZXJ2aWNlOldlYXRoZXJTZXJ2aWNlLCBwcml2YXRlIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcikge1xyXG4gICAgICAgIHRoaXMubGlzdGVuV2VhdGhlcklucHV0KCk7XHJcbiAgICAgICAgdGhpcy5jb21tQnJva2VyLmdldFNlcnZpY2UoQ29uc3RzLlNlcnZpY2VzKCkuUHJvcGVydGllcykuc2V0UHJvcFZpZXcoJ1dlYXRoZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy56aXBDb250cm9sLnNldFZhbHVlKCc5MTMwMScpO1xyXG5cclxuICAgICAgICAvLyBub3cgd2UgY2FuIGFjY2VzcyBhIG5hdGl2ZSBpbnB1dCBlbGVtZW50IGFuZCBzZXQgaXRzIGZvY3VzXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMubXlXZWF0aGVySW5wdXQubmF0aXZlRWxlbWVudCwgJ2ZvY3VzJywgW10pXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuV2VhdGhlcklucHV0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlYXRoZXJJdGVtcyA9IHRoaXMuemlwQ29udHJvbC52YWx1ZUNoYW5nZXNcclxuICAgICAgICAgICAgLmRlYm91bmNlVGltZSg0MDApXHJcbiAgICAgICAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHppcDpzdHJpbmcpPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHppcC5sZW5ndGggPiAzO1xyXG4gICAgICAgICAgICAgICAgLy8gc3dpdGNoTWFwIGlzIHJlYWxseSBjb29sIGFzIGl0IHdpbGwgYm90aCBmbGF0TWFwIG91ciBPYnNlcnZhYmxlc1xyXG4gICAgICAgICAgICAgICAgLy8gYXMgd2VsbCBhcyBpdCB1bnN1YnNjcmliZXMgZnJvbSBhbGwgcHJldmlvdXMgLyBwZW5kaW5nIGNhbGxzIHRvIHNlcnZlciBhbmQgb25seVxyXG4gICAgICAgICAgICAgICAgLy8gbGlzdGVuIHRvIHRvIG5ld2x5IGNyZWF0ZWQgT2JzZXJ2YWJsZVxyXG4gICAgICAgICAgICB9KS5zd2l0Y2hNYXAoemlwID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHppcCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53ZWF0aGVyU2VydmljZS5zZWFyY2goYCR7emlwfS8xYClcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
