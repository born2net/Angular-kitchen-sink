System.register(["../../../models/StoreModel"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var StoreModel_1;
    var TodoModel;
    return {
        setters:[
            function (StoreModel_1_1) {
                StoreModel_1 = StoreModel_1_1;
            }],
        execute: function() {
            TodoModel = (function (_super) {
                __extends(TodoModel, _super);
                function TodoModel(data) {
                    if (data === void 0) { data = {}; }
                    _super.call(this, data);
                }
                TodoModel.prototype.setModelKey = function (key, value) {
                    return this.setData(TodoModel, this._data.set(key, value));
                };
                TodoModel.prototype.setModelId = function (id) {
                    return this.setKey(TodoModel, 'modelId', id);
                };
                TodoModel.prototype.getModelId = function () {
                    return this.getKey('modelId');
                };
                TodoModel.prototype.invalidateTodoId = function (i_id) {
                    if (i_id === void 0) { i_id = -1; }
                    return this.setKey(TodoModel, 'modelId', i_id);
                };
                return TodoModel;
            }(StoreModel_1.StoreModel));
            exports_1("TodoModel", TodoModel);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvVG9kb01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBK0IsNkJBQVU7Z0JBRXJDLG1CQUFZLElBQWE7b0JBQWIsb0JBQWEsR0FBYixTQUFhO29CQUNyQixrQkFBTSxJQUFJLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkFJTSwrQkFBVyxHQUFsQixVQUFtQixHQUFVLEVBQUUsS0FBUztvQkFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBYyxDQUFDO2dCQUM1RSxDQUFDO2dCQUtNLDhCQUFVLEdBQWpCLFVBQWtCLEVBQVM7b0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFZLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzVELENBQUM7Z0JBR00sOEJBQVUsR0FBakI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBRUQsb0NBQWdCLEdBQWhCLFVBQWlCLElBQVM7b0JBQVQsb0JBQVMsR0FBVCxRQUFRLENBQUM7b0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFZLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBRUwsZ0JBQUM7WUFBRCxDQTVCQSxBQTRCQyxDQTVCOEIsdUJBQVUsR0E0QnhDO1lBNUJELGlDQTRCQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDEvdG9kb3MvVG9kb01vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdG9yZU1vZGVsfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1N0b3JlTW9kZWxcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGluIHdyYXBwZXIgb2YgSW1tdXRhYmxlIGRhdGEgYXJvdW5kIGEgc2luZ2xlIG1vZGVsXHJcbiAqICoqL1xyXG5leHBvcnQgY2xhc3MgVG9kb01vZGVsIGV4dGVuZHMgU3RvcmVNb2RlbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YTphbnkgPSB7fSkge1xyXG4gICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGEgd3JhcHBlciBhcm91bmQgYmFzZSBjbGFzcyBwdWJsaWMgc2V0S2V5PFQ+KENsYXNzTmFtZTphbnksIGtleTpzdHJpbmcsIHZhbHVlOmFueSk6VCB7Li4uXHJcbiAgICAvLyBzbyB3ZSBkb24ndCBoYXZlIHRvIHBhc3MgaW4gdGhlIGdlbmVyaWMgZXZlcnkgdGltZVxyXG4gICAgcHVibGljIHNldE1vZGVsS2V5KGtleTpzdHJpbmcsIHZhbHVlOmFueSk6VG9kb01vZGVsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXREYXRhKFRvZG9Nb2RlbCwgdGhpcy5fZGF0YS5zZXQoa2V5LCB2YWx1ZSkpIGFzIFRvZG9Nb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGlzIGEgZ3JlYXQgd2F5IHRvIGFkZCBzcGVjaWZpYyBmdW5jdGlvbmFsaXR5IHRvIHlvdXIgbW9kZWwgYW5kIGdldHRpbmcgZnJlZVxyXG4gICAgLy8gdHlwZSBjaGVja2luZyBmb3IgeW91ciBzcGVjaWZpYyBtb2RlbCBuZWVkcy4gSXQgYWxzbyBzaW1wbGlmaWVzIHRoZSBjYWxsIGFzXHJcbiAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIHBhc3MgZ2VuZXJpY3NcclxuICAgIHB1YmxpYyBzZXRNb2RlbElkKGlkOnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0S2V5PFRvZG9Nb2RlbD4oVG9kb01vZGVsLCAnbW9kZWxJZCcsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3cmFwcGVyIGZ1bmN0aW9uIHNwZWNpZmljIHRvIHRoaXMgbW9kZWxcclxuICAgIHB1YmxpYyBnZXRNb2RlbElkKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0S2V5KCdtb2RlbElkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW52YWxpZGF0ZVRvZG9JZChpX2lkID0gLTEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRLZXk8VG9kb01vZGVsPihUb2RvTW9kZWwsICdtb2RlbElkJywgaV9pZCk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
