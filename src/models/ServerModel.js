"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StoreModel_1 = require("../models/StoreModel");
/**
 * Thin wrapper of Immutable data around a single business
 * **/
var ServerModel = (function (_super) {
    __extends(ServerModel, _super);
    function ServerModel(data) {
        if (data === void 0) { data = {}; }
        _super.call(this, data);
    }
    ServerModel.prototype.getConnection = function () {
        return this.getKey('connection');
    };
    ServerModel.prototype.getBusinessId = function () {
        return this.getKey('businessId');
    };
    ServerModel.prototype.getPublicIp = function () {
        return this.getKey('publicIp');
    };
    ServerModel.prototype.getLocalIp = function () {
        return this.getKey('localIp');
    };
    ServerModel.prototype.getLocation = function () {
        return this.getKey('geoLocation');
    };
    ServerModel.prototype.getStationName = function () {
        return this.getKey('name');
    };
    ServerModel.prototype.getWatchDogConnection = function () {
        var watchDogConnection = this.getKey('watchDogConnection');
        var connection = this.getConnection();
        if (connection == '0')
            return 'fa-minus';
        switch (watchDogConnection) {
            case '0':
                return 'fa-minus';
            case '1':
                return 'fa-shield';
            case '':
                return 'fa-minus';
            default:
                return 'fa-minus';
        }
    };
    ServerModel.prototype.getConnectionIcon = function (style) {
        var connection = this.getConnection();
        switch (style) {
            case 'icon': {
                switch (connection) {
                    case '0':
                        return 'fa-circle-thin';
                    case '1':
                        return 'fa-check-circle';
                    case '2':
                        return 'fa-circle';
                    default:
                        return 'fa-minus';
                }
            }
            case 'color': {
                switch (connection) {
                    case '0':
                        return 'red';
                    case '1':
                        return 'green';
                    case '2':
                        return 'yellow';
                    default:
                        return 'red';
                }
            }
        }
    };
    return ServerModel;
}(StoreModel_1.StoreModel));
exports.ServerModel = ServerModel;
