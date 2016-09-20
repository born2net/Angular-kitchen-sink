System.register(['@angular/core', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/do', 'rxjs/add/operator/filter', 'rxjs/add/operator/share', "rxjs/Subject"], function(exports_1, context_1) {
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
    var core_1, Subject_1;
    var CommBroker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            CommBroker = (function () {
                function CommBroker() {
                    this.randomName = Math.random();
                    var self = this;
                    self.services = [];
                    self.streamMessages = new Subject_1.Subject();
                    self.streamMessages.share();
                    document['commBroker'] = this;
                }
                CommBroker.prototype.toString = function () {
                    return 'CommBroker ' + this.randomName;
                };
                CommBroker.prototype.fire = function (iMessage) {
                    var self = this;
                    self.streamMessages.next(iMessage);
                };
                CommBroker.prototype.onEvent = function (event) {
                    var self = this;
                    return self.streamMessages.filter(function (e) {
                        return e.event == event;
                    });
                };
                CommBroker.prototype.onInstance = function (instance) {
                    var self = this;
                    return self.streamMessages.filter(function (e) {
                        return e.fromInstance == instance;
                    });
                };
                CommBroker.prototype.onInstanceAndEvent = function (instance, event) {
                    var self = this;
                    return self.streamMessages.filter(function (e) {
                        return e.fromInstance == instance && e.event == event;
                    });
                };
                CommBroker.prototype.setService = function (i_name, i_service) {
                    this.services[i_name] = i_service;
                };
                CommBroker.prototype.getService = function (i_name) {
                    if (i_name == undefined) {
                        return undefined;
                    }
                    if (this.services[i_name]) {
                        return this.services[i_name];
                    }
                    else {
                        return undefined;
                    }
                };
                CommBroker.prototype.getAllServices = function () {
                    return this.services;
                };
                CommBroker.prototype.clearServices = function () {
                    var self = this;
                    self.services = undefined;
                };
                CommBroker.prototype.setValue = function (i_name, i_value, i_fireEvent) {
                    var self = this;
                    this.services[i_name] = i_value;
                    if (i_fireEvent) {
                        var msg = {
                            fromInstance: self,
                            event: i_fireEvent,
                            context: null,
                            message: { name: i_name, value: i_value }
                        };
                        self.fire(msg);
                    }
                };
                CommBroker.prototype.getValue = function (i_name) {
                    if (this.services[i_name]) {
                        return this.services[i_name];
                    }
                    else {
                        return undefined;
                    }
                };
                CommBroker = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CommBroker);
                return CommBroker;
            }());
            exports_1("CommBroker", CommBroker);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0NvbW1Ccm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0VBO2dCQUtJO29CQUZRLGVBQVUsR0FBVSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBR3RDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxpQkFBTyxFQUFvQixDQUFDO29CQUt0RCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQVU1QixRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNsQyxDQUFDO2dCQUVNLDZCQUFRLEdBQWY7b0JBQ0ksTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMzQyxDQUFDO2dCQU9NLHlCQUFJLEdBQVgsVUFBWSxRQUFpQjtvQkFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFFTSw0QkFBTyxHQUFkLFVBQWUsS0FBWTtvQkFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDO3dCQUNoQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRU0sK0JBQVUsR0FBakIsVUFBa0IsUUFBWTtvQkFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDO3dCQUNoQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUM7b0JBQ3RDLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRU0sdUNBQWtCLEdBQXpCLFVBQTBCLFFBQVksRUFBRSxLQUFZO29CQUNoRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUM7d0JBQ2hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUFJLFFBQVEsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQTtvQkFDekQsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFTRCwrQkFBVSxHQUFWLFVBQVcsTUFBTSxFQUFFLFNBQVM7b0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUN0QyxDQUFDO2dCQVFELCtCQUFVLEdBQVYsVUFBVyxNQUFNO29CQUNiLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUV0QixNQUFNLENBQUMsU0FBUyxDQUFDO29CQUNyQixDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDaEMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsU0FBUyxDQUFDO29CQUNyQixDQUFDO2dCQUNMLENBQUM7Z0JBT0QsbUNBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDekIsQ0FBQztnQkFNRCxrQ0FBYSxHQUFiO29CQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7Z0JBQzlCLENBQUM7Z0JBVUQsNkJBQVEsR0FBUixVQUFTLE1BQVUsRUFBRSxPQUFXLEVBQUUsV0FBbUI7b0JBQ2pELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7b0JBQ2hDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ2QsSUFBSSxHQUFHLEdBQVk7NEJBQ2YsWUFBWSxFQUFFLElBQUk7NEJBQ2xCLEtBQUssRUFBRSxXQUFXOzRCQUNsQixPQUFPLEVBQUUsSUFBSTs0QkFDYixPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUM7eUJBQzFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkIsQ0FBQztnQkFDTCxDQUFDO2dCQVFELDZCQUFRLEdBQVIsVUFBUyxNQUFNO29CQUNYLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDaEMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsU0FBUyxDQUFDO29CQUNyQixDQUFDO2dCQUNMLENBQUM7Z0JBaEpMO29CQUFDLGlCQUFVLEVBQUU7OzhCQUFBO2dCQWlKYixpQkFBQztZQUFELENBaEpBLEFBZ0pDLElBQUE7WUFoSkQsbUNBZ0pDLENBQUEiLCJmaWxlIjoic2VydmljZXMvQ29tbUJyb2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSBcInJ4anMvT2JzZXJ2ZXJcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XHJcblxyXG4vKipcclxuXHJcbiBDb21tQnJva2VyIGlzIGEgUmVhY3QgdHlwZSBNZWRpYXRvciBpbmplY3RhYmxlIHNlcnZpY2UgcHJvdmlkZXJcclxuXHJcbiBFeGFtcGxlc1xyXG4gPT09PT09PT09PT09XHJcbiBzZWxmLm9uRXZlbnQoJ2NsaWNrJykuc3Vic2NyaWJlKChlOklNZXNzYWdlKT0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSSBoZWFyZCBhIGNsaWNrJyk7XHJcbiAgICB9KTtcclxuXHJcbiAvLyB3b24ndCB3b3JrLCBldmVudCAhPSBqdW1wXHJcbiBzZWxmLm9uRXZlbnQoJ2p1bXAnKS5zdWJzY3JpYmUoKGU6SU1lc3NhZ2UpPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJIGhlYXJkIGEgY2xpY2snKTtcclxuICAgIH0pO1xyXG5cclxuIC8vIHdvbnQgd29yaywgdGhpcyAhPSBzZWxmXHJcbiBzZWxmLm9uSW5zdGFuY2UobnVsbCkuc3Vic2NyaWJlKChlOklNZXNzYWdlKT0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnWFlaIyQlXiYgc2hvdWxkIG5ldmVyIGNvbWUgaGVyZS4uLicpO1xyXG4gICAgfSk7XHJcblxyXG4gc2VsZi5vbkluc3RhbmNlQW5kRXZlbnQodGhpcywgJ2NsaWNrJykuc3Vic2NyaWJlKChlOklNZXNzYWdlKT0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgSSBoZWFyZCB5b3UgY29tbUJyb2tlciBvbiBldmVudCBjbGljayBgICsgZS5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG5cclxuIHNlbGYub25JbnN0YW5jZUFuZEV2ZW50KHNlbGYsICdjbGljaycpLmZpcnN0KCkuc3Vic2NyaWJlKChlOklNZXNzYWdlKT0+IHtcclxuICAgICAgICB2YXIgY29tbUJyb2tlcjpDb21tQnJva2VyID0gZS5mcm9tSW5zdGFuY2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGp1c3Qgb25lICR7ZS5ldmVudH0gZnJvbSAke2NvbW1Ccm9rZXIudG9TdHJpbmcoKX1gKTtcclxuICAgIH0pO1xyXG5cclxuIHNlbGYub25JbnN0YW5jZUFuZEV2ZW50KHNlbGYsICdjbGljaycpLnN1YnNjcmliZSgoZTpJTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBoYW5kbGUgc3VjY2VzczogcnggJHtlLmV2ZW50fWApXHJcbiAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBoYW5kbGUgZXJyb3IgJHtlfWApXHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGhhbmRsZSBjb21wbGV0ZWApXHJcbiAgICB9KTtcclxuXHJcbiAvLyBiZWZvcmUgc3RyZWFtIHJlYWR5XHJcbiB2YXIgbXNnMTpJTWVzc2FnZSA9IHtcclxuICAgICAgICBmcm9tSW5zdGFuY2U6IHNlbGYsXHJcbiAgICAgICAgZXZlbnQ6ICdjbGljaycsXHJcbiAgICAgICAgY29udGV4dDogMSxcclxuICAgICAgICBtZXNzYWdlOiAnYmVmb3JlIHN0cmVhbSBpcyByZWFkeSdcclxuICAgIH07XHJcbiBzZWxmLmZpcmUobXNnMSk7XHJcblxyXG4gLy8gYWZ0ZXIgc3RyZWFtIHJlYWR5XHJcbiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbXNnMjpJTWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgZnJvbUluc3RhbmNlOiBzZWxmLFxyXG4gICAgICAgICAgICBldmVudDogJ2NsaWNrJyxcclxuICAgICAgICAgICAgY29udGV4dDogMixcclxuICAgICAgICAgICAgbWVzc2FnZTogJ2FmdGVyIHN0cmVhbSBpcyByZWFkeSdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNlbGYuZmlyZShtc2cyKTtcclxuICAgIH0sIDIwMDApXHJcbiAqKi9cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNZXNzYWdlIHtcclxuICAgIGZyb21JbnN0YW5jZTogYW55LFxyXG4gICAgZXZlbnQ6IHN0cmluZyxcclxuICAgIGNvbnRleHQ6IGFueSxcclxuICAgIG1lc3NhZ2U6IGFueVxyXG59XHJcblxyXG4vLyBjcmVhdGUgYW4gYWxpYXMgdHlwZSBqdXN0IHNvIGl0J3MgZWFzaWVyIHRvIGFzc29jaWF0ZVxyXG50eXBlIFN1YmplY3RNZXNzYWdlID0gU3ViamVjdDxJTWVzc2FnZT47XHJcbnR5cGUgU3ViamVjdE1lc3NhZ2VzID0gU3ViamVjdDxBcnJheTxTdWJqZWN0TWVzc2FnZT4+O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29tbUJyb2tlciB7XHJcbiAgICBwcml2YXRlIHN0cmVhbU1lc3NhZ2VzOlN1YmplY3Q8SU1lc3NhZ2U+O1xyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlczpzdHJpbmdbXTtcclxuICAgIHByaXZhdGUgcmFuZG9tTmFtZTpudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLnNlcnZpY2VzID0gW107XHJcbiAgICAgICAgc2VsZi5zdHJlYW1NZXNzYWdlcyA9IG5ldyBTdWJqZWN0KCkgYXMgU3ViamVjdE1lc3NhZ2U7XHJcblxyXG4gICAgICAgIC8vIHdlIHVzZSBzaGFyZSBhcyBhIHNob3J0aGFuZCBmb3IgcHVibGlzaCgpIHdoaWNoIGNvbnZlcnRzIGNvbGQgdG8gaG90XHJcbiAgICAgICAgLy8gb2JzZXJ2YWJsZSBhcyB3ZWxsIGFzIGNvbm5lY3QoKSAvIHJlZkNvdW50KClcclxuICAgICAgICAvLyB3aGVuIGNvbm5lY3RlZCByZWZlcmVuY2VzIG1vdmVzIGZyb20gMCB0byAxXHJcbiAgICAgICAgc2VsZi5zdHJlYW1NZXNzYWdlcy5zaGFyZSgpO1xyXG5cclxuICAgICAgICAvLyBpZiB3ZSB3aXNoIHRvIHVzZSBhIHVuaWRpcmVjdGlvbmFsIHN0cmVhbSB3ZSBjYW4gY29udmVydCB0byBPYnNlcnZhYmxlIGluc3RlYWQgb2Ygc3ViamVjdFxyXG4gICAgICAgIC8vc2VsZi5zdHJlYW0gPSBuZXcgT2JzZXJ2YWJsZSh0cmlnZ2VyID0+IHtcclxuICAgICAgICAvLyAgICB0cmlnZ2VyLm5leHQobXNnKTtcclxuICAgICAgICAvLyAgICB0cmlnZ2VyLmVycm9yKCdib29tJyk7XHJcbiAgICAgICAgLy8gICAgdHJpZ2dlci5jb21wbGV0ZSgnZG9uZScpO1xyXG4gICAgICAgIC8vfSkuc2hhcmUoKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgb25seSBnbG9iYWwgbWVtYmVyIHdlIGV4cG9zZVxyXG4gICAgICAgIGRvY3VtZW50Wydjb21tQnJva2VyJ10gPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gJ0NvbW1Ccm9rZXIgJyArIHRoaXMucmFuZG9tTmFtZTsgLy8gdG8gdGVzdCB1bmlxdWVuZXNzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgV2l0aCBmaXJlIHdlIHB1c2ggYSBzdHJlYW0gb2YgSU1lc3NhZ2VzIGludG8gb3VyIHN0cmVhbS5cclxuICAgICBAbWV0aG9kIGZpcmVcclxuICAgICBAcGFyYW1zIElNZXNzYWdlXHJcbiAgICAgKiovXHJcbiAgICBwdWJsaWMgZmlyZShpTWVzc2FnZTpJTWVzc2FnZSk6dm9pZCB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYuc3RyZWFtTWVzc2FnZXMubmV4dChpTWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRXZlbnQoZXZlbnQ6c3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBzZWxmLnN0cmVhbU1lc3NhZ2VzLmZpbHRlcigoZSk9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLmV2ZW50ID09IGV2ZW50O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSW5zdGFuY2UoaW5zdGFuY2U6YW55KSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBzZWxmLnN0cmVhbU1lc3NhZ2VzLmZpbHRlcigoZSk9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLmZyb21JbnN0YW5jZSA9PSBpbnN0YW5jZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkluc3RhbmNlQW5kRXZlbnQoaW5zdGFuY2U6YW55LCBldmVudDpzdHJpbmcpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuc3RyZWFtTWVzc2FnZXMuZmlsdGVyKChlKT0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGUuZnJvbUluc3RhbmNlID09IGluc3RhbmNlICYmIGUuZXZlbnQgPT0gZXZlbnRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgIFJlZ2lzdGVyIGEgc2VydmljZSAgdGhhdCBvdGhlcnMgY2FuIHF1ZXJ5LlxyXG4gICAgIEBtZXRob2Qgc2V0U2VydmljZVxyXG4gICAgIEBwYXJhbSB7U3RyaW5nfSBpX25hbWVcclxuICAgICBAcGFyYW0ge09iamVjdH0gaV9zZXJ2aWNlXHJcbiAgICAgQHJldHVybiBub25lXHJcbiAgICAgKiovXHJcbiAgICBzZXRTZXJ2aWNlKGlfbmFtZSwgaV9zZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlc1tpX25hbWVdID0gaV9zZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgIEdldCBhIHJlZ2lzdGVyZWQgc2VydmljZS5cclxuICAgICBAbWV0aG9kIGdldFNlcnZpY2VcclxuICAgICBAcGFyYW0ge1N0cmluZ30gaV9uYW1lXHJcbiAgICAgQHJldHVybiB7T2JqZWN0fSBzZXJ2aWNlcyBtZW1iZXJcclxuICAgICAqKi9cclxuICAgIGdldFNlcnZpY2UoaV9uYW1lKTphbnkge1xyXG4gICAgICAgIGlmIChpX25hbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vbG9nKCdjYW50IGdldCBzZXQgdW5kZWZpbmVkIHNlcnZpY2UgJyArIGlfbmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2VzW2lfbmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZXNbaV9uYW1lXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgIEV4cG9zZSBhbGwgc2VydmljZXMgYW5kIGRhdGEgbWVtYmVycy5cclxuICAgICBAbWV0aG9kIGdldEFsbFNlcnZpY2VzXHJcbiAgICAgQHJldHVybiB7T2JqZWN0fSBzZXJ2aWNlc1xyXG4gICAgICoqL1xyXG4gICAgZ2V0QWxsU2VydmljZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgQ2xlYXIgYWxsIGN1cnJlbnQgcmVnaXN0ZXJlZCBzZXJ2aWNlc1xyXG4gICAgIEBtZXRob2QgY2xlYXJTZXJ2aWNlc1xyXG4gICAgICoqL1xyXG4gICAgY2xlYXJTZXJ2aWNlcygpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy8gZGVsZXRlIHNlbGYuc2VydmljZXM7XHJcbiAgICAgICAgc2VsZi5zZXJ2aWNlcyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICBSZWdpc3RlciBhIGRhdGEgbWVtYmVyIHRoYXQgb3RoZXJzIGNhbiBxdWVyeS5cclxuICAgICBAbWV0aG9kIHNldFZhbHVlXHJcbiAgICAgQHBhcmFtIHtTdHJpbmd9IGlfbmFtZVxyXG4gICAgIEBwYXJhbSB7T2JqZWN0fSBpX3ZhbHVlXHJcbiAgICAgQHBhcmFtIHtFdmVudH0gaV9maXJlRXZlbnRcclxuICAgICBAcmV0dXJuIG5vbmVcclxuICAgICAqKi9cclxuICAgIHNldFZhbHVlKGlfbmFtZTphbnksIGlfdmFsdWU6YW55LCBpX2ZpcmVFdmVudD86c3RyaW5nKTp2b2lkIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlc1tpX25hbWVdID0gaV92YWx1ZTtcclxuICAgICAgICBpZiAoaV9maXJlRXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIG1zZzpJTWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgIGZyb21JbnN0YW5jZTogc2VsZixcclxuICAgICAgICAgICAgICAgIGV2ZW50OiBpX2ZpcmVFdmVudCxcclxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB7bmFtZTogaV9uYW1lLCB2YWx1ZTogaV92YWx1ZX1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2VsZi5maXJlKG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgIEdldCBhIHJlZ2lzdGVyZWQgZGF0YSBtZW1iZXIuXHJcbiAgICAgQG1ldGhvZCBnZXRWYWx1ZVxyXG4gICAgIEBwYXJhbSB7U3RyaW5nfSBpX25hbWVcclxuICAgICBAcmV0dXJuIHtPYmplY3R9IG1fc2VydmljZXMgbWVtYmVyXHJcbiAgICAgKiovXHJcbiAgICBnZXRWYWx1ZShpX25hbWUpOmFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZXNbaV9uYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlc1tpX25hbWVdXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
