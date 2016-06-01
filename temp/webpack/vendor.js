System.register(['angular2/bundles/angular2-polyfills.js', 'angular2/platform/browser', 'angular2/platform/common_dom', 'angular2/common', 'angular2/core', 'angular2/router', 'angular2/http', 'rxjs'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {}],
        execute: function() {
            require("bootstrap-webpack");
            require("ng2-bootstrap/ng2-bootstrap");
            require("bootbox");
            require("font-awesome-webpack");
            require("./styles/style.css");
            require("./styles/fonts/Raleway.woff2");
            require('underscore');
            require('immutable');
            require('angular2-redux-util');
            require('is-equal');
            require('object-path');
            require('highcharts');
        }
    }
});
//# sourceMappingURL=vendor.js.map