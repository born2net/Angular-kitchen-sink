System.register(["@angular/core", "../../services/CommBroker", "../../../src/Conts", "./App2.html!text"], function(exports_1, context_1) {
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
    var core_1, CommBroker_1, Conts_1, App2_html_text_1;
    var App2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (App2_html_text_1_1) {
                App2_html_text_1 = App2_html_text_1_1;
            }],
        execute: function() {
            App2 = (function () {
                function App2(commBroker) {
                    var self = this;
                    jQuery(".navbar-header .navbar-toggle").trigger("click");
                    jQuery('.navbar-nav').css({
                        display: 'block'
                    });
                    self.commBroker = commBroker;
                    self.screens = {
                        notes: true,
                        weather: false,
                        digg: false,
                        contact: false,
                        logout: false
                    };
                    self.listenMenuChanges();
                }
                App2.prototype.ngOnInit = function () {
                    this.commBroker.getService(Conts_1.Consts.Services().App).appResized();
                };
                App2.prototype.listenMenuChanges = function () {
                    var self = this;
                    self.commBroker.onEvent(Conts_1.Consts.Events().MENU_SELECTION).subscribe(function (e) {
                        var screen = (e.message).toLowerCase();
                        if (!self.screens.hasOwnProperty(screen))
                            return;
                        for (var screen_1 in self.screens)
                            self.screens[screen_1] = false;
                        self.screens[screen] = true;
                    });
                };
                App2 = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        template: App2_html_text_1.default
                    }), 
                    __metadata('design:paramtypes', [CommBroker_1.CommBroker])
                ], App2);
                return App2;
            }());
            exports_1("App2", App2);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvQXBwMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFJSSxjQUFZLFVBQXNCO29CQUM5QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2hCLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDekQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQzt3QkFDdEIsT0FBTyxFQUFFLE9BQU87cUJBQ25CLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRzt3QkFDWCxLQUFLLEVBQUUsSUFBSTt3QkFDWCxPQUFPLEVBQUUsS0FBSzt3QkFDZCxJQUFJLEVBQUUsS0FBSzt3QkFDWCxPQUFPLEVBQUUsS0FBSzt3QkFDZCxNQUFNLEVBQUUsS0FBSztxQkFDaEIsQ0FBQztvQkFDRixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCx1QkFBUSxHQUFSO29CQUVJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLGNBQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbkUsQ0FBQztnQkFFTyxnQ0FBaUIsR0FBekI7b0JBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxjQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBVzt3QkFDMUUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3JDLE1BQU0sQ0FBQzt3QkFDWCxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQzt3QkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ2hDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBMUNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSx3QkFBWTtxQkFDekIsQ0FBQzs7d0JBQUE7Z0JBd0NGLFdBQUM7WUFBRCxDQXRDQSxBQXNDQyxJQUFBO1lBdENELHVCQXNDQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvQXBwMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ29tbUJyb2tlcixcclxuICAgIElNZXNzYWdlXHJcbn0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0IHtDb25zdHN9IGZyb20gXCIuLi8uLi8uLi9zcmMvQ29udHNcIjtcclxuaW1wb3J0IEFwcDJUZW1wbGF0ZSBmcm9tIFwiLi9BcHAyLmh0bWwhdGV4dFwiO1xyXG5cclxuLyoqXHJcbiBBcHBsaWNhdGlvbiAyIGxhenkgbG9hZGVkXHJcbiAqKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogX19tb2R1bGVOYW1lLFxyXG4gICAgdGVtcGxhdGU6IEFwcDJUZW1wbGF0ZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcDIge1xyXG4gICAgcHJpdmF0ZSBzY3JlZW5zOiBhbnk7XHJcbiAgICBwcml2YXRlIGNvbW1Ccm9rZXI6IENvbW1Ccm9rZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29tbUJyb2tlcjogQ29tbUJyb2tlcikge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBqUXVlcnkoXCIubmF2YmFyLWhlYWRlciAubmF2YmFyLXRvZ2dsZVwiKS50cmlnZ2VyKFwiY2xpY2tcIik7XHJcbiAgICAgICAgalF1ZXJ5KCcubmF2YmFyLW5hdicpLmNzcyh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZi5jb21tQnJva2VyID0gY29tbUJyb2tlcjtcclxuICAgICAgICBzZWxmLnNjcmVlbnMgPSB7XHJcbiAgICAgICAgICAgIG5vdGVzOiB0cnVlLFxyXG4gICAgICAgICAgICB3ZWF0aGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgZGlnZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRhY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2dvdXQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZWxmLmxpc3Rlbk1lbnVDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy90aGlzLnJvdXRlckFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb21tQnJva2VyLmdldFNlcnZpY2UoQ29uc3RzLlNlcnZpY2VzKCkuQXBwKS5hcHBSZXNpemVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0ZW5NZW51Q2hhbmdlcygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5jb21tQnJva2VyLm9uRXZlbnQoQ29uc3RzLkV2ZW50cygpLk1FTlVfU0VMRUNUSU9OKS5zdWJzY3JpYmUoKGU6IElNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBzY3JlZW4gPSAoZS5tZXNzYWdlKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuc2NyZWVucy5oYXNPd25Qcm9wZXJ0eShzY3JlZW4pKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzY3JlZW4gaW4gc2VsZi5zY3JlZW5zKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5zY3JlZW5zW3NjcmVlbl0gPSBmYWxzZTtcclxuICAgICAgICAgICAgc2VsZi5zY3JlZW5zW3NjcmVlbl0gPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBpbiBUUzEuOCsgd2UgY2FuIEF1Z21lbnQgdGhlIGdsb2JhbC9tb2R1bGUgc2NvcGUgZnJvbSBpbnNpZGUgbW9kdWxlczpcclxuLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvd2lraS9XaGF0J3MtbmV3LWluLVR5cGVTY3JpcHRcclxuLy8gZGVjbGFyZSBnbG9iYWwge1xyXG4vLyAgICAgaW50ZXJmYWNlIEFycmF5PFQ+IHtcclxuLy8gICAgICAgICBtYXBUb051bWJlcnMoKTogbnVtYmVyW107XHJcbi8vICAgICB9XHJcbi8vIH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
