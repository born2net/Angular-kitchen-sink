var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var TodoStatsModel = (function () {
    function TodoStatsModel() {
        this.updates = 0;
        this.deletes = 0;
        this.reads = 0;
        this.creates = 0;
    }
    TodoStatsModel = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoStatsModel);
    return TodoStatsModel;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TodoStatsModel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDEvdG9kb3MvdG9kb3N0YXRzbW9kZWwudHMiXSwibmFtZXMiOlsiVG9kb1N0YXRzTW9kZWwiLCJUb2RvU3RhdHNNb2RlbC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBRXBEO0lBQUFBO1FBRUlDLFlBQU9BLEdBQUdBLENBQUNBLENBQUNBO1FBQ1pBLFlBQU9BLEdBQUdBLENBQUNBLENBQUNBO1FBQ1pBLFVBQUtBLEdBQUdBLENBQUNBLENBQUNBO1FBQ1ZBLFlBQU9BLEdBQUdBLENBQUNBLENBQUFBO0lBQ2ZBLENBQUNBO0lBTkREO1FBQUNBLGlCQUFVQSxFQUFFQTs7dUJBTVpBO0lBQURBLHFCQUFDQTtBQUFEQSxDQU5BLEFBTUNBLElBQUE7QUFORDtnQ0FNQyxDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDEvdG9kb3MvVG9kb1N0YXRzTW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb1N0YXRzTW9kZWwge1xyXG4gICAgdXBkYXRlcyA9IDA7XHJcbiAgICBkZWxldGVzID0gMDtcclxuICAgIHJlYWRzID0gMDtcclxuICAgIGNyZWF0ZXMgPSAwXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
