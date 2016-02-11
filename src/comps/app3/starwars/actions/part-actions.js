var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var angular2_redux_util_1 = require("angular2-redux-util");
exports.ADD_PART = 'ADD_PART';
var PartActions = (function (_super) {
    __extends(PartActions, _super);
    function PartActions() {
        _super.apply(this, arguments);
        this.id = 11;
    }
    PartActions.prototype.addPart = function (name) {
        return { type: exports.ADD_PART, id: _.uniqueId(), name: name };
    };
    PartActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PartActions);
    return PartActions;
})(angular2_redux_util_1.Actions);
exports.PartActions = PartActions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDMvc3RhcndhcnMvYWN0aW9ucy9wYXJ0LWFjdGlvbnMudHMiXSwibmFtZXMiOlsiUGFydEFjdGlvbnMiLCJQYXJ0QWN0aW9ucy5jb25zdHJ1Y3RvciIsIlBhcnRBY3Rpb25zLmFkZFBhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLG9DQUFzQixxQkFBcUIsQ0FBQyxDQUFBO0FBRS9CLGdCQUFRLEdBQUcsVUFBVSxDQUFDO0FBRW5DO0lBQ2lDQSwrQkFBT0E7SUFEeENBO1FBQ2lDQyw4QkFBT0E7UUFDNUJBLE9BQUVBLEdBQVVBLEVBQUVBLENBQUNBO0lBSzNCQSxDQUFDQTtJQUhHRCw2QkFBT0EsR0FBUEEsVUFBUUEsSUFBSUE7UUFDUkUsTUFBTUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBRUEsZ0JBQVFBLEVBQUVBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLEVBQUVBLEVBQUVBLE1BQUFBLElBQUlBLEVBQUNBLENBQUNBO0lBQ3BEQSxDQUFDQTtJQU5MRjtRQUFDQSxpQkFBVUEsRUFBRUE7O29CQU9aQTtJQUFEQSxrQkFBQ0E7QUFBREEsQ0FQQSxBQU9DQSxFQU5nQyw2QkFBTyxFQU12QztBQU5ZLG1CQUFXLGNBTXZCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMy9zdGFyd2Fycy9hY3Rpb25zL3BhcnQtYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuaW1wb3J0IHtBY3Rpb25zfSBmcm9tIFwiYW5ndWxhcjItcmVkdXgtdXRpbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QQVJUID0gJ0FERF9QQVJUJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBhcnRBY3Rpb25zIGV4dGVuZHMgQWN0aW9ucyB7XHJcbiAgICBwcml2YXRlIGlkOm51bWJlciA9IDExO1xyXG5cclxuICAgIGFkZFBhcnQobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB7dHlwZTogQUREX1BBUlQsIGlkOiBfLnVuaXF1ZUlkKCksIG5hbWV9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
