///<reference path="../typings/app.d.ts"/>
System.register(['angular2/core'], function(exports_1) {
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
    var Lib;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Lib = (function () {
                function Lib() {
                }
                Lib.log = function (msg) {
                    console.log(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1") + ': ' + msg);
                };
                Lib.guid = function () {
                    function s4() {
                        return Math.floor((1 + Math.random()) * 0x10000)
                            .toString(16)
                            .substring(1);
                    }
                    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                        s4() + '-' + s4() + s4() + s4();
                };
                Lib.loadMaterial = function () {
                    if (System.has(window.location.origin + "/src/styles/material-design/js/material.min.js") ||
                        System.has('/src/styles/material-design/js/material.min.js') ||
                        System.has('material.min.js')) {
                        jQuery.material.init();
                        console.log('re-init material');
                        return;
                    }
                    var a = System.import('src/styles/material-design/js/material.min.js');
                    var b = System.import('src/styles/material-design/js/ripples.min.js');
                    Promise.all([a, b]).then(function (e) {
                        console.log('loaded material');
                    });
                };
                Lib = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Lib);
                return Lib;
            })();
            exports_1("Lib", Lib);
        }
    }
});
//# sourceMappingURL=Lib.js.map