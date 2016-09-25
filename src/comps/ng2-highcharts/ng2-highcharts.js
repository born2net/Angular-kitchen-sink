System.register(['./src/directives/ng2-highcharts', './src/directives/ng2-highstocks', './src/directives/ng2-highmaps'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (ng2_highcharts_1_1) {
                exportStar_1(ng2_highcharts_1_1);
            },
            function (ng2_highstocks_1_1) {
                exportStar_1(ng2_highstocks_1_1);
            },
            function (ng2_highmaps_1_1) {
                exportStar_1(ng2_highmaps_1_1);
            }],
        execute: function() {
            exports_1("default",{});
        }
    }
});
