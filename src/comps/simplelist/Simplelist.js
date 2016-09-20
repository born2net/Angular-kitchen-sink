System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var SimpleList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SimpleList = (function () {
                function SimpleList(differs, changeDetector) {
                    this.changeDetector = changeDetector;
                    this.current = new core_1.EventEmitter();
                    this.linkResultPerItem = {};
                    this.differ = differs.find([]).create(null);
                }
                SimpleList.prototype.ngDoCheck = function () {
                    var changes = this.differ.diff(this.list);
                    if (changes) {
                    }
                };
                SimpleList.prototype.getContent = function (item) {
                    if (this.content) {
                        return this.content(item);
                    }
                    else {
                        return item;
                    }
                };
                SimpleList.prototype.getLink = function (item) {
                    if (this.link) {
                        var key = item;
                        if (typeof key === "object") {
                            key = JSON.stringify(key);
                        }
                        if (this.linkResultPerItem[key] == null) {
                            this.linkResultPerItem[key] = this.link(item);
                        }
                        return this.linkResultPerItem[key];
                    }
                    else {
                        return null;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], SimpleList.prototype, "list", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function)
                ], SimpleList.prototype, "content", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function)
                ], SimpleList.prototype, "link", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], SimpleList.prototype, "current", void 0);
                SimpleList = __decorate([
                    core_1.Component({
                        selector: 'simple-list',
                        template: "\n        <div *ngIf=\"!list\">\n            Loading...\n        </div>\n        <div *ngIf=\"list\">\n            <table class=\"table table-striped table-bordered table-hover\">\n                <tbody>\n                    <tr *ngFor=\"let item of list\" (mouseover)=\"current.emit(item)\" (mouseout)=\"current.emit(null)\">\n                        <td *ngIf=\"!link\">{{getContent(item)}}</td>\n                        <td *ngIf=\"link\"><a [routerLink]=\"getLink(item)\">{{getContent(item)}}</a></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [(typeof (_b = typeof core_1.IterableDiffers !== 'undefined' && core_1.IterableDiffers) === 'function' && _b) || Object, (typeof (_c = typeof core_1.ChangeDetectorRef !== 'undefined' && core_1.ChangeDetectorRef) === 'function' && _c) || Object])
                ], SimpleList);
                return SimpleList;
                var _a, _b, _c;
            }());
            exports_1("SimpleList", SimpleList);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL3NpbXBsZWxpc3QvU2ltcGxlbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFpQkksb0JBQVksT0FBdUIsRUFBVSxjQUFnQztvQkFBaEMsbUJBQWMsR0FBZCxjQUFjLENBQWtCO29CQVpuRSxZQUFPLEdBQXFCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQXVDakQsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO29CQXRCM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFJRCw4QkFBUyxHQUFUO29CQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDMUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFHZCxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsK0JBQVUsR0FBVixVQUFXLElBQUk7b0JBQ1gsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDaEIsQ0FBQztnQkFDTCxDQUFDO2dCQUtELDRCQUFPLEdBQVAsVUFBUSxJQUFJO29CQUNSLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNaLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQzt3QkFDZixFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUMxQixHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDOUIsQ0FBQzt3QkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xELENBQUM7d0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDO2dCQUNMLENBQUM7Z0JBekREO29CQUFDLFlBQUssRUFBRTs7d0RBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzsyREFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7O3dEQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7MkRBQUE7Z0JBdkJiO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSw2bEJBY1Q7cUJBQ0osQ0FBQzs7OEJBQUE7Z0JBOERGLGlCQUFDOztZQUFELENBN0RBLEFBNkRDLElBQUE7WUE3REQsbUNBNkRDLENBQUEiLCJmaWxlIjoiY29tcHMvc2ltcGxlbGlzdC9TaW1wbGVsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJdGVyYWJsZURpZmZlciwgSW5qZWN0LCBJdGVyYWJsZURpZmZlcnMsXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NpbXBsZS1saXN0JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIiFsaXN0XCI+XHJcbiAgICAgICAgICAgIExvYWRpbmcuLi5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwibGlzdFwiPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxpc3RcIiAobW91c2VvdmVyKT1cImN1cnJlbnQuZW1pdChpdGVtKVwiIChtb3VzZW91dCk9XCJjdXJyZW50LmVtaXQobnVsbClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiIWxpbmtcIj57e2dldENvbnRlbnQoaXRlbSl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cImxpbmtcIj48YSBbcm91dGVyTGlua109XCJnZXRMaW5rKGl0ZW0pXCI+e3tnZXRDb250ZW50KGl0ZW0pfX08L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpbXBsZUxpc3Qge1xyXG5cclxuICAgIEBJbnB1dCgpIGxpc3Q6YW55W107XHJcbiAgICBASW5wdXQoKSBjb250ZW50OigoYW55KT0+c3RyaW5nKTtcclxuICAgIEBJbnB1dCgpIGxpbms6KGFueSk9PmFueVtdO1xyXG4gICAgQE91dHB1dCgpIGN1cnJlbnQ6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja2luZyBmb3IgY2hhbmdlcyBJbiBvcmRlciB0byBldmFsdWF0ZSB3aGF0IGNoYW5nZWQsIEFuZ3VsYXIgcHJvdmlkZXMgZGlmZmVycyAuXHJcbiAgICAgKiBEaWZmZXJzIHdpbGwgZXZhbHVhdGUgYSBnaXZlbiBwcm9wZXJ0eSBvZiB5b3VyIGRpcmVjdGl2ZSB0byBkZXRlcm1pbmUgd2hhdCBjaGFuZ2VkIC5cclxuICAgICAqIFRoZXJlIGFyZSB0d28gdHlwZXMgb2YgYnVpbHQtaW4gZGlmZmVyczogaXRlcmFibGUgZGlmZmVycyBhbmQga2V5LXZhbHVlIGRpZmZlcnMgLlxyXG4gICAgICogSXRlcmFibGUgZGlmZmVycyBJdGVyYWJsZSBkaWZmZXJzIHNob3VsZCBiZSB1c2VkIHdoZW4gd2UgaGF2ZSBhIGxpc3QtbGlrZSBzdHJ1Y3R1cmUgYW5kIHdl4oCZcmUgb25seSBpbnRlcmVzdGVkXHJcbiAgICAgKiBvbiBrbm93aW5nIHRoaW5ncyB0aGF0IHdlcmUgYWRkZWQgb3IgcmVtb3ZlZCBmcm9tIHRoYXQgbGlzdC5cclxuICAgICAqIEtleS12YWx1ZSBkaWZmZXJzIEtleS12YWx1ZSBkaWZmZXJzIHNob3VsZCBiZSB1c2VkIGZvciBkaWN0aW9uYXJ5LWxpa2Ugc3RydWN0dXJlcyxcclxuICAgICAqIGFuZCBpdCB3b3JrcyBhdCB0aGUga2V5IGxldmVsLiBUaGlzIGRpZmZlciB3aWxsIGlkZW50aWZ5IGNoYW5nZXMgd2hlbiBhIG5ldyBrZXkgaXMgYWRkZWQsXHJcbiAgICAgKiB3aGVuIGEga2V5IHJlbW92ZWQgYW5kIHdoZW4gdGhlIHZhbHVlIG9mIGEga2V5IGNoYW5nZWQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRpZmZlcnM6SXRlcmFibGVEaWZmZXJzLCBwcml2YXRlIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XHJcblxyXG4gICAgICAgIC8vIHdlIGNhbiBhbHNvIHJlLXVzZSBhbiBleGlzdGluZyBjaGFuZ2VEZXRlY3RvciB2aWE6XHJcbiAgICAgICAgLy8gdGhpcy5kaWZmZXIgPSB0aGlzLmRpZmZlcnMuZmluZChpdGVtcykuY3JlYXRlKHRoaXMuY2hhbmdlRGV0ZWN0b3IpO1xyXG4gICAgICAgIC8vIHRvIGtlZXAgdHJhY2sgb2YgY2hhbmdlc1xyXG4gICAgICAgIHRoaXMuZGlmZmVyID0gZGlmZmVycy5maW5kKFtdKS5jcmVhdGUobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaWZmZXI6SXRlcmFibGVEaWZmZXI7XHJcblxyXG4gICAgbmdEb0NoZWNrKCk6dm9pZCB7XHJcbiAgICAgICAgdmFyIGNoYW5nZXMgPSB0aGlzLmRpZmZlci5kaWZmKHRoaXMubGlzdCk7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMpIHtcclxuICAgICAgICAgICAgLy9jaGFuZ2VzLmZvckVhY2hBZGRlZEl0ZW0ociA9PiBjb25zb2xlLmxvZygnQWRkZWQgdG8gbW92aWUgbGlzdCcsIEpTT04uc3RyaW5naWZ5KHIuaXRlbSkpKTtcclxuICAgICAgICAgICAgLy9jaGFuZ2VzLmZvckVhY2hSZW1vdmVkSXRlbShyID0+IGNvbnNvbGUubG9nKCdSZW1vdmVkIGZyb20gbGlzdCcsIEpTT04uc3RyaW5naWZ5KHIuaXRlbSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udGVudChpdGVtKTpzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd29yayBhcm91bmQgYSBwcm9ibGVtIHdpdGggY2hhbmdpbmcgbGlua3MgZm9yIGl0ZW1zIChBbmd1bGFyMi1iZXRhIGRvZXNuJ3QgbGlrZSB0aGF0KVxyXG4gICAgcHJpdmF0ZSBsaW5rUmVzdWx0UGVySXRlbSA9IHt9O1xyXG5cclxuICAgIGdldExpbmsoaXRlbSk6KGFueSk9PmFueVtdIHtcclxuICAgICAgICBpZiAodGhpcy5saW5rKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBpdGVtO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAga2V5ID0gSlNPTi5zdHJpbmdpZnkoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5saW5rUmVzdWx0UGVySXRlbVtrZXldID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlua1Jlc3VsdFBlckl0ZW1ba2V5XSA9IHRoaXMubGluayhpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rUmVzdWx0UGVySXRlbVtrZXldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
