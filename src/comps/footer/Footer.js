System.register(["@angular/core"], function(exports_1, context_1) {
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
    var Footer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Footer = (function () {
                function Footer() {
                }
                Footer.prototype.onClick = function (link) {
                    console.log("Let's go to Github...");
                    return false;
                };
                __decorate([
                    core_1.HostListener('mouseover', ['$event.target']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], Footer.prototype, "onClick", null);
                Footer = __decorate([
                    core_1.Directive({
                        selector: 'a[data-footer]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Footer);
                return Footer;
            }());
            exports_1("Footer", Footer);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2Zvb3Rlci9Gb290ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQTtnQkF5QkEsQ0FBQztnQkFsQkcsd0JBQU8sR0FBUCxVQUFRLElBQUk7b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUNyQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUpEO29CQUFDLG1CQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7cURBQUE7Z0JBVGpEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtxQkFDN0IsQ0FBQzs7MEJBQUE7Z0JBMEJGLGFBQUM7WUFBRCxDQXpCQSxBQXlCQyxJQUFBO1lBekJELDJCQXlCQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2Zvb3Rlci9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZ30gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdhW2RhdGEtZm9vdGVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvb3RlciB7XHJcbiAgICAvLyBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXHJcbiAgICAvLyBvbkhvc3RLZXl1cCgkZXZlbnQpe1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCRldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3ZlcicsIFsnJGV2ZW50LnRhcmdldCddKVxyXG4gICAgb25DbGljayhsaW5rKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMZXQncyBnbyB0byBHaXRodWIuLi5cIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1vb3JlIGV4YW1wbGVzXHJcbiAgICAvLyBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAnYnV0dG9uJztcclxuICAgIC8vIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBvbk1vdXNlRW50ZXIoKSB7Li4ufVxyXG5cclxuICAgIC8vIEBIb3N0QmluZGluZygpXHJcbiAgICAvLyB2YWx1ZTpzdHJpbmc7XHJcbiAgICAvL1xyXG4gICAgLy8gQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudC50YXJnZXQudmFsdWUnXSlcclxuICAgIC8vIG9uVmFsdWVVcGRhdGUodXBkYXRlZFZhbHVlOnN0cmluZykge1xyXG4gICAgLy8gICAgIHRoaXMudmFsdWUgPSB1cGRhdGVkVmFsdWUudHJpbSgpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
