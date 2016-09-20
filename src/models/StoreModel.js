System.register(['immutable', 'angular2-uuid'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var immutable_1, angular2_uuid_1;
    var StoreModel;
    return {
        setters:[
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            },
            function (angular2_uuid_1_1) {
                angular2_uuid_1 = angular2_uuid_1_1;
            }],
        execute: function() {
            StoreModel = (function () {
                function StoreModel(data) {
                    if (data === void 0) { data = {}; }
                    this._data = immutable_1.Map(data);
                }
                StoreModel.UniqueId = function () {
                    return angular2_uuid_1.UUID.UUID();
                };
                StoreModel.prototype.setKey = function (ClassName, key, value) {
                    return this.setData(ClassName, this._data.set(key, value));
                };
                StoreModel.prototype.getKey = function (key) {
                    return this._data.get(key);
                };
                StoreModel.prototype.setData = function (ClassName, data) {
                    function ClassFactory(className, data) {
                        var created = new className(immutable_1.Map(data));
                        return created;
                    }
                    return ClassFactory(ClassName, data);
                };
                StoreModel.prototype.getData = function () {
                    return this._data;
                };
                return StoreModel;
            }());
            exports_1("StoreModel", StoreModel);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9TdG9yZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBTUksb0JBQVksSUFBYTtvQkFBYixvQkFBYSxHQUFiLFNBQWE7b0JBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBRyxDQUFjLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQU5NLG1CQUFRLEdBQWY7b0JBQ0ksTUFBTSxDQUFDLG9CQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBUU0sMkJBQU0sR0FBYixVQUFpQixTQUFhLEVBQUUsR0FBVSxFQUFFLEtBQVM7b0JBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQU0sQ0FBQztnQkFDcEUsQ0FBQztnQkFFTSwyQkFBTSxHQUFiLFVBQWMsR0FBVTtvQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUVNLDRCQUFPLEdBQWQsVUFBa0IsU0FBUyxFQUFFLElBQVE7b0JBQ2pDLHNCQUFzQixTQUF5QixFQUFFLElBQVE7d0JBQ3JELElBQUksT0FBTyxHQUFLLElBQUksU0FBUyxDQUFDLGVBQUcsQ0FBYyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUN0RCxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUNuQixDQUFDO29CQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUVNLDRCQUFPLEdBQWQ7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRUwsaUJBQUM7WUFBRCxDQWpDQSxBQWlDQyxJQUFBO1lBakNELG1DQWlDQyxDQUFBIiwiZmlsZSI6Im1vZGVscy9TdG9yZU1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNYXB9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCB7IFVVSUQgfSBmcm9tICdhbmd1bGFyMi11dWlkJztcclxuXHJcblxyXG4vKipcclxuICogU3RvcmVNb2RlbCBpcyBhIHRoaW4gd3JhcHBlciBvZiBJbW11dGFibGUgZGF0YSBhcm91bmQgZm9yIGEgQ2xhc3NcclxuICogdXNlcyB0aGUgaW50ZXJuYWwgaW1tdXRhYmxlIG1hcCB0byBob2xkIGFsbCB2YWx1ZXMuXHJcbiAqIFRoaXMgYWxsb3dzIHVzIGEgYmFzZSBjbGFzcyBvbiB3aGljaCB3ZSBjYW4gZXh0ZW5kIGFuZCBpbmplY3RcclxuICogaW50byBhbnkgUmVkdXggc3RvcmUgYXMgd2UgZm9sbG93IEltbXV0YWJpbGl0eVxyXG4gKlxyXG4gKiBBbHNvIHNoaXBzIHdpdGggYSBoZWxwZXIgc3RhdGljIG1ldGhvZCB0byBjcmVhdGUgdW5pcXVlIElEc1xyXG4gKiovXHJcbmV4cG9ydCBjbGFzcyBTdG9yZU1vZGVsIHtcclxuXHJcbiAgICBzdGF0aWMgVW5pcXVlSWQoKXtcclxuICAgICAgICByZXR1cm4gVVVJRC5VVUlEKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YTphbnkgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBNYXA8c3RyaW5nLCBhbnk+KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIF9kYXRhOk1hcDxzdHJpbmcsIGFueT47XHJcblxyXG4gICAgcHVibGljIHNldEtleTxUPihDbGFzc05hbWU6YW55LCBrZXk6c3RyaW5nLCB2YWx1ZTphbnkpOlQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldERhdGEoQ2xhc3NOYW1lLCB0aGlzLl9kYXRhLnNldChrZXksIHZhbHVlKSkgYXMgVDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0S2V5KGtleTpzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5nZXQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGF0YTxUPihDbGFzc05hbWUsIGRhdGE6YW55KTpUIHtcclxuICAgICAgICBmdW5jdGlvbiBDbGFzc0ZhY3RvcnkoY2xhc3NOYW1lOntuZXcoZGF0YSk6IFQ7fSwgZGF0YTphbnkpOlQge1xyXG4gICAgICAgICAgICB2YXIgY3JlYXRlZDpUID0gbmV3IGNsYXNzTmFtZShNYXA8c3RyaW5nLCBhbnk+KGRhdGEpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gQ2xhc3NGYWN0b3J5KENsYXNzTmFtZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERhdGEoKTpNYXA8c3RyaW5nLCBhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
