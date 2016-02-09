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
var Filemenu_1 = require("./Filemenu");
var FilemenuItem = (function () {
    function FilemenuItem(fileMenu) {
        this.m_fileMenu = fileMenu;
        this.m_fileMenu.addFileMenuItem(this);
    }
    FilemenuItem.prototype.ngAfterViewInit = function () {
    };
    FilemenuItem = __decorate([
        core_1.Component({
            selector: 'FilemenuItem',
            inputs: ['title:title', 'app:app'],
            template: ""
        }), 
        __metadata('design:paramtypes', [Filemenu_1.Filemenu])
    ], FilemenuItem);
    return FilemenuItem;
})();
exports.FilemenuItem = FilemenuItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2ZpbGVtZW51L2ZpbGVtZW51aXRlbS50cyJdLCJuYW1lcyI6WyJGaWxlbWVudUl0ZW0iLCJGaWxlbWVudUl0ZW0uY29uc3RydWN0b3IiLCJGaWxlbWVudUl0ZW0ubmdBZnRlclZpZXdJbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMseUJBQXVCLFlBQVksQ0FBQyxDQUFBO0FBT3BDO0lBT0lBLHNCQUFZQSxRQUFpQkE7UUFDekJDLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLFFBQVFBLENBQUNBO1FBQzNCQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxlQUFlQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUMxQ0EsQ0FBQ0E7SUFFREQsc0NBQWVBLEdBQWZBO0lBQ0FFLENBQUNBO0lBYkxGO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxjQUFjQTtZQUN4QkEsTUFBTUEsRUFBRUEsQ0FBQ0EsYUFBYUEsRUFBRUEsU0FBU0EsQ0FBQ0E7WUFDbENBLFFBQVFBLEVBQUVBLEVBQUVBO1NBQ2ZBLENBQUNBOztxQkFVREE7SUFBREEsbUJBQUNBO0FBQURBLENBZEEsQUFjQ0EsSUFBQTtBQVRZLG9CQUFZLGVBU3hCLENBQUEiLCJmaWxlIjoiY29tcHMvZmlsZW1lbnUvRmlsZW1lbnVJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0ZpbGVtZW51fSBmcm9tIFwiLi9GaWxlbWVudVwiO1xyXG5cclxuLyoqXHJcbiBGaWxlbWVudSBtYW5hZ2VzIHRoZSB0b3AgaGVhZGVyIGZpbGUgbWVudSBwZXIgYXBwbGljYXRpb24gYXMgaXQgbXV0YXRlcyBpdCdzIGNvbnRlbnQgZGVwZW5kaW5nXHJcbiBvbiB3aGljaCBBcHAgaGFzIGxvYWRlZFxyXG4gQGNsYXNzIEZpbGVtZW51XHJcbiAqKi9cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ0ZpbGVtZW51SXRlbScsXHJcbiAgICBpbnB1dHM6IFsndGl0bGU6dGl0bGUnLCAnYXBwOmFwcCddLFxyXG4gICAgdGVtcGxhdGU6IGBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlbWVudUl0ZW0ge1xyXG4gICAgcHJpdmF0ZSBtX2ZpbGVNZW51OkZpbGVtZW51O1xyXG4gICAgY29uc3RydWN0b3IoZmlsZU1lbnU6RmlsZW1lbnUpIHtcclxuICAgICAgICB0aGlzLm1fZmlsZU1lbnUgPSBmaWxlTWVudTtcclxuICAgICAgICB0aGlzLm1fZmlsZU1lbnUuYWRkRmlsZU1lbnVJdGVtKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpe1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
