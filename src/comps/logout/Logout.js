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
var Conts_1 = require("../../../src/Conts");
var CommBroker_1 = require("../../services/CommBroker");
var Logout = (function () {
    function Logout(commBroker) {
        this.commBroker = commBroker;
        this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('Logout');
        jQuery('body').fadeOut(3000, function () {
            window.location.replace("https://github.com/born2net/ng2Boilerplate");
        });
    }
    Logout = __decorate([
        core_1.Component({
            selector: 'Logout',
            template: "\n        <h1><Center>Goodbye</Center></h1>\n        <small>I am Logout component</small>\n        "
        }), 
        __metadata('design:paramtypes', [CommBroker_1.CommBroker])
    ], Logout);
    return Logout;
})();
exports.Logout = Logout;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2xvZ291dC9sb2dvdXQudHMiXSwibmFtZXMiOlsiTG9nb3V0IiwiTG9nb3V0LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsc0JBQXFCLG9CQUFvQixDQUFDLENBQUE7QUFDMUMsMkJBQXlCLDJCQUEyQixDQUFDLENBQUE7QUFFckQ7SUFTSUEsZ0JBQW9CQSxVQUFxQkE7UUFBckJDLGVBQVVBLEdBQVZBLFVBQVVBLENBQVdBO1FBQ3JDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxVQUFVQSxDQUFDQSxjQUFNQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtRQUMvRUEsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsRUFBRUE7WUFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUMxRSxDQUFDLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBZExEO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxRQUFRQTtZQUNsQkEsUUFBUUEsRUFBRUEscUdBR0xBO1NBQ1JBLENBQUNBOztlQVNEQTtJQUFEQSxhQUFDQTtBQUFEQSxDQWZBLEFBZUNBLElBQUE7QUFQWSxjQUFNLFNBT2xCLENBQUEiLCJmaWxlIjoiY29tcHMvbG9nb3V0L0xvZ291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3MvYXBwLmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7Q29uc3RzfSBmcm9tIFwiLi4vLi4vLi4vc3JjL0NvbnRzXCI7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdMb2dvdXQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aDE+PENlbnRlcj5Hb29kYnllPC9DZW50ZXI+PC9oMT5cclxuICAgICAgICA8c21hbGw+SSBhbSBMb2dvdXQgY29tcG9uZW50PC9zbWFsbD5cclxuICAgICAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9nb3V0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbUJyb2tlcjpDb21tQnJva2VyKSB7XHJcbiAgICAgICAgdGhpcy5jb21tQnJva2VyLmdldFNlcnZpY2UoQ29uc3RzLlNlcnZpY2VzKCkuUHJvcGVydGllcykuc2V0UHJvcFZpZXcoJ0xvZ291dCcpO1xyXG4gICAgICAgIGpRdWVyeSgnYm9keScpLmZhZGVPdXQoMzAwMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcImh0dHBzOi8vZ2l0aHViLmNvbS9ib3JuMm5ldC9uZzJCb2lsZXJwbGF0ZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
