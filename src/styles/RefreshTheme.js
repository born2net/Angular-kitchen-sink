System.register(["../Conts"], function(exports_1) {
    var Conts_1;
    var RefreshTheme;
    return {
        setters:[
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            }],
        execute: function() {
            RefreshTheme = (function () {
                function RefreshTheme() {
                    setTimeout(function (e) {
                        if (document['commBroker']) {
                            document['commBroker'].getService(Conts_1.Consts.Services().StyleService).refreshTheme();
                        }
                    }, 100);
                }
                return RefreshTheme;
            })();
            exports_1("RefreshTheme", RefreshTheme);
        }
    }
});
// example below of doing class decoration, which we can't use because we need to inject
// in constructor as well, so we must extend...
//export function RefreshTheme(theme:string) {
//    return function <TFunction extends Function>(Target:TFunction):TFunction {
//        var newConstructor = function () {
//            Target.apply(this);
//            Object.freeze(this);
//        };
//        newConstructor.prototype = Object.create(Target.prototype);
//        newConstructor.prototype.constructor = Target;
//        return <any> newConstructor;
//    }
//}
//# sourceMappingURL=RefreshTheme.js.map