var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var ForgotPass_1 = require('../../../src/comps/entry/ForgotPass');
var LoginPanel_1 = require('../../../src/comps/entry/LoginPanel');
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var CommBroker_1 = require("../../services/CommBroker");
var Conts_1 = require("../../Conts");
var EntryPanel = (function () {
    function EntryPanel(params, commBroker) {
        if (params.get('id') != null) {
            commBroker.setValue(Conts_1.Consts.Values().USER_NAME, params.get('id'));
        }
        else {
            commBroker.setValue(Conts_1.Consts.Values().USER_NAME, 'foo-bar');
        }
    }
    EntryPanel = __decorate([
        router_2.RouteConfig([
            { path: '/Another2', component: LoginPanel_1.LoginPanel, as: 'Route3' },
            { path: '/Another3', component: ForgotPass_1.ForgotPass, as: 'Route4' },
            { path: '/ForgotPass', component: ForgotPass_1.ForgotPass, as: 'ForgotPass' },
            { path: '/Login', component: LoginPanel_1.LoginPanel, as: 'Login' }
        ]),
        core_1.Component({
            providers: [LoginPanel_1.LoginPanel],
            directives: [router_1.ROUTER_DIRECTIVES, router_2.RouterLink],
            selector: 'EntryPanel',
            template: "\n                <!--<a [routerLink]=\"['/App1']\">And back to Test1</a><br/>-->\n                <!--<a [routerLink]=\"['/EntryPanel', {id: 1111}, 'Route3']\">Login {{someId}}</a><br/>-->\n                <!--<a [routerLink]=\"['/EntryPanel', {id: 1111}, 'Route4']\">Forgot pass {{someId}}</a><br/>-->\n                <small>I am entrypanel component and I am inside main App</small>\n                <router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [router_2.RouteParams, CommBroker_1.CommBroker])
    ], EntryPanel);
    return EntryPanel;
})();
exports.EntryPanel = EntryPanel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2VudHJ5L2VudHJ5cGFuZWwudHMiXSwibmFtZXMiOlsiRW50cnlQYW5lbCIsIkVudHJ5UGFuZWwuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QywyQkFBeUIscUNBQXFDLENBQUMsQ0FBQTtBQUMvRCwyQkFBeUIscUNBQXFDLENBQUMsQ0FBQTtBQUMvRCx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCx1QkFBbUQsaUJBQWlCLENBQUMsQ0FBQTtBQUNyRSwyQkFBeUIsMkJBQTJCLENBQUMsQ0FBQTtBQUNyRCxzQkFBcUIsYUFBYSxDQUFDLENBQUE7QUFHbkM7SUFrQklBLG9CQUFZQSxNQUFrQkEsRUFBRUEsVUFBcUJBO1FBQ2pEQyxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzQkEsVUFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsY0FBTUEsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsU0FBU0EsRUFBRUEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDckVBLENBQUNBO1FBQUNBLElBQUlBLENBQUNBLENBQUNBO1lBQ0pBLFVBQVVBLENBQUNBLFFBQVFBLENBQUNBLGNBQU1BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLFNBQVNBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBO1FBQzlEQSxDQUFDQTtJQUVMQSxDQUFDQTtJQXpCTEQ7UUFBQ0Esb0JBQVdBLENBQUNBO1lBQ1RBLEVBQUNBLElBQUlBLEVBQUVBLFdBQVdBLEVBQUVBLFNBQVNBLEVBQUVBLHVCQUFVQSxFQUFFQSxFQUFFQSxFQUFFQSxRQUFRQSxFQUFDQTtZQUN4REEsRUFBQ0EsSUFBSUEsRUFBRUEsV0FBV0EsRUFBRUEsU0FBU0EsRUFBRUEsdUJBQVVBLEVBQUVBLEVBQUVBLEVBQUVBLFFBQVFBLEVBQUNBO1lBQ3hEQSxFQUFDQSxJQUFJQSxFQUFFQSxhQUFhQSxFQUFFQSxTQUFTQSxFQUFFQSx1QkFBVUEsRUFBRUEsRUFBRUEsRUFBRUEsWUFBWUEsRUFBQ0E7WUFDOURBLEVBQUNBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLHVCQUFVQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFDQTtTQUN2REEsQ0FBQ0E7UUFDREEsZ0JBQVNBLENBQUNBO1lBQ1BBLFNBQVNBLEVBQUVBLENBQUNBLHVCQUFVQSxDQUFDQTtZQUN2QkEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSxtQkFBVUEsQ0FBQ0E7WUFDM0NBLFFBQVFBLEVBQUVBLFlBQVlBO1lBQ3RCQSxRQUFRQSxFQUFFQSxxYkFLa0NBO1NBQy9DQSxDQUFDQTs7bUJBVURBO0lBQURBLGlCQUFDQTtBQUFEQSxDQTFCQSxBQTBCQ0EsSUFBQTtBQVRZLGtCQUFVLGFBU3RCLENBQUEiLCJmaWxlIjoiY29tcHMvZW50cnkvRW50cnlQYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtGb3Jnb3RQYXNzfSBmcm9tICcuLi8uLi8uLi9zcmMvY29tcHMvZW50cnkvRm9yZ290UGFzcyc7XHJcbmltcG9ydCB7TG9naW5QYW5lbH0gZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBzL2VudHJ5L0xvZ2luUGFuZWwnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXJMaW5rLCBSb3V0ZUNvbmZpZ30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtDb21tQnJva2VyfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQ29tbUJyb2tlclwiO1xyXG5pbXBvcnQge0NvbnN0c30gZnJvbSBcIi4uLy4uL0NvbnRzXCI7XHJcblxyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOiAnL0Fub3RoZXIyJywgY29tcG9uZW50OiBMb2dpblBhbmVsLCBhczogJ1JvdXRlMyd9LFxyXG4gICAge3BhdGg6ICcvQW5vdGhlcjMnLCBjb21wb25lbnQ6IEZvcmdvdFBhc3MsIGFzOiAnUm91dGU0J30sXHJcbiAgICB7cGF0aDogJy9Gb3Jnb3RQYXNzJywgY29tcG9uZW50OiBGb3Jnb3RQYXNzLCBhczogJ0ZvcmdvdFBhc3MnfSxcclxuICAgIHtwYXRoOiAnL0xvZ2luJywgY29tcG9uZW50OiBMb2dpblBhbmVsLCBhczogJ0xvZ2luJ31cclxuXSlcclxuQENvbXBvbmVudCh7XHJcbiAgICBwcm92aWRlcnM6IFtMb2dpblBhbmVsXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgUm91dGVyTGlua10sXHJcbiAgICBzZWxlY3RvcjogJ0VudHJ5UGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICAgIDwhLS08YSBbcm91dGVyTGlua109XCJbJy9BcHAxJ11cIj5BbmQgYmFjayB0byBUZXN0MTwvYT48YnIvPi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxhIFtyb3V0ZXJMaW5rXT1cIlsnL0VudHJ5UGFuZWwnLCB7aWQ6IDExMTF9LCAnUm91dGUzJ11cIj5Mb2dpbiB7e3NvbWVJZH19PC9hPjxici8+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGEgW3JvdXRlckxpbmtdPVwiWycvRW50cnlQYW5lbCcsIHtpZDogMTExMX0sICdSb3V0ZTQnXVwiPkZvcmdvdCBwYXNzIHt7c29tZUlkfX08L2E+PGJyLz4tLT5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD5JIGFtIGVudHJ5cGFuZWwgY29tcG9uZW50IGFuZCBJIGFtIGluc2lkZSBtYWluIEFwcDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW50cnlQYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6Um91dGVQYXJhbXMsIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcikge1xyXG4gICAgICAgIGlmIChwYXJhbXMuZ2V0KCdpZCcpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY29tbUJyb2tlci5zZXRWYWx1ZShDb25zdHMuVmFsdWVzKCkuVVNFUl9OQU1FLCBwYXJhbXMuZ2V0KCdpZCcpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb21tQnJva2VyLnNldFZhbHVlKENvbnN0cy5WYWx1ZXMoKS5VU0VSX05BTUUsICdmb28tYmFyJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
