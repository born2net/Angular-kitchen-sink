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
    var FilmView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FilmView = (function () {
                function FilmView() {
                    this.data = null;
                    this.loading = false;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FilmView.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FilmView.prototype, "loading", void 0);
                FilmView = __decorate([
                    core_1.Component({
                        selector: 'film',
                        template: "\n        <label>{{data?.title}}</label><span *ngIf=\"loading\" class=\"blink\">loading...</span>\n        <p>{{data?.opening_crawl}}</p>\n    ",
                        styles: ["\n        .blink {\n            margin-left:10px;\n            animation: blink .75s linear infinite;\n        }\n        @keyframes blink {\n            0% { opacity: 1; }\n            50% { opacity: 1; }\n            50.01% { opacity: 0; }\n            100% { opacity: 0; }\n        }\n    "],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush
                    }), 
                    __metadata('design:paramtypes', [])
                ], FilmView);
                return FilmView;
            }());
            exports_1("FilmView", FilmView);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9maWxtLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7b0JBRWEsU0FBSSxHQUFHLElBQUksQ0FBQztvQkFDWixZQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUU3QixDQUFDO2dCQUhHO29CQUFDLFlBQUssRUFBRTs7c0RBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzt5REFBQTtnQkF2Qlo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsTUFBTTt3QkFDaEIsUUFBUSxFQUFFLGlKQUdUO3dCQUNELE1BQU0sRUFBRSxDQUFDLHNTQVdSLENBQUM7d0JBQ0YsZUFBZSxFQUFDLDhCQUF1QixDQUFDLE1BQU07cUJBQ2pELENBQUM7OzRCQUFBO2dCQU1GLGVBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELCtCQUtDLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL2ZpbG0tdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2ZpbG0nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8bGFiZWw+e3tkYXRhPy50aXRsZX19PC9sYWJlbD48c3BhbiAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cImJsaW5rXCI+bG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICA8cD57e2RhdGE/Lm9wZW5pbmdfY3Jhd2x9fTwvcD5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLmJsaW5rIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBibGluayAuNzVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBibGluayB7XHJcbiAgICAgICAgICAgIDAlIHsgb3BhY2l0eTogMTsgfVxyXG4gICAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAxOyB9XHJcbiAgICAgICAgICAgIDUwLjAxJSB7IG9wYWNpdHk6IDA7IH1cclxuICAgICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cclxuICAgICAgICB9XHJcbiAgICBgXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjpDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbG1WaWV3IHtcclxuXHJcbiAgICBASW5wdXQoKSBkYXRhID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
