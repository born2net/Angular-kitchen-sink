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
var core_1 = require('angular2/core');
var Sliderpanel_1 = require("../../sliderpanel/Sliderpanel");
var ModalDialog_1 = require("../../modaldialog/ModalDialog");
var CommBroker_1 = require("../../../services/CommBroker");
var Conts_1 = require("../../../../src/Conts");
var NotesBase_1 = require("./NotesBase");
var MailModel_1 = require("../../../models/MailModel");
var CharCount_1 = require("../../../pipes/CharCount");
var common_1 = require('angular2/common');
var StartCapValidator_1 = require("../../../validators/StartCapValidator");
var NameTakenValidator_1 = require("../../../validators/NameTakenValidator");
var Notes1 = (function (_super) {
    __extends(Notes1, _super);
    function Notes1(fb, sliderPanel, commBroker) {
        _super.call(this, sliderPanel, commBroker);
        this.sliderPanel = sliderPanel;
        this.commBroker = commBroker;
        this.slideLeft = 'notes2';
        this.notesForm = fb.group({
            'userName': ['', common_1.Validators.required],
            'phone': ['(xxx)-xxxx-xxx', common_1.Validators.minLength(10)],
            'notesTextArea': ['enter text here',
                common_1.Validators.compose([
                    common_1.Validators.required,
                    StartCapValidator_1.default])],
            'login': ['',
                common_1.Validators.compose([
                    common_1.Validators.required,
                    StartCapValidator_1.default]), NameTakenValidator_1.default]
        });
        this.notesTextArea = this.notesForm.controls['notesTextArea'];
        this.userName = this.notesForm.controls['userName'];
        this.login = this.notesForm.controls['login'];
        this.phone = this.notesForm.controls['phone'];
        this.model = new MailModel_1.MailModel(0, '', true, '', '');
        this.mapModel = new Map();
        this.mapModel.set('my name', 'Sean Levy');
        this.observeNameChange();
        this.observeFormChange();
        this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('notes1');
    }
    Notes1.prototype.observeNameChange = function () {
        this.userName.valueChanges.debounceTime(100).subscribe(function (value) {
            console.log('name changed, notified via observable: ', value);
        });
    };
    Notes1.prototype.observeFormChange = function () {
        this.notesForm.valueChanges.debounceTime(100).subscribe(function (value) {
            console.log('forum changed, notified via observable: ', value);
        });
    };
    Notes1.prototype.onSubmit = function (event) {
        bootbox.alert("sent " + event.notesTextArea);
    };
    Notes1.prototype.onChange = function (event) {
        if (event.target.value.length < 3)
            console.log('text too short for subject');
    };
    Notes1 = __decorate([
        core_1.Component({
            selector: 'Notes1',
            directives: [ModalDialog_1.ModalDialog, common_1.FORM_DIRECTIVES],
            templateUrl: '/src/comps/app2/notes/Notes1.html',
            styleUrls: ['../comps/app2/notes/Notes1.css'],
            pipes: [CharCount_1.CharCount]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
    ], Notes1);
    return Notes1;
})(NotesBase_1.NotesBase);
exports.Notes1 = Notes1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvbm90ZXMxLnRzIl0sIm5hbWVzIjpbIk5vdGVzMSIsIk5vdGVzMS5jb25zdHJ1Y3RvciIsIk5vdGVzMS5vYnNlcnZlTmFtZUNoYW5nZSIsIk5vdGVzMS5vYnNlcnZlRm9ybUNoYW5nZSIsIk5vdGVzMS5vblN1Ym1pdCIsIk5vdGVzMS5vbkNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNEJBQTBCLCtCQUErQixDQUFDLENBQUE7QUFDMUQsNEJBQTBCLCtCQUErQixDQUFDLENBQUE7QUFDMUQsMkJBQXlCLDhCQUE4QixDQUFDLENBQUE7QUFDeEQsc0JBQXFCLHVCQUF1QixDQUFDLENBQUE7QUFDN0MsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBQ3RDLDBCQUF3QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3BELDBCQUF3QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ25ELHVCQUFzRixpQkFDdEYsQ0FBQyxDQURzRztBQUN2RyxrQ0FBOEIsdUNBQXVDLENBQUMsQ0FBQTtBQUN0RSxtQ0FBK0Isd0NBQXdDLENBQUMsQ0FBQTtBQUV4RTtJQVk0QkEsMEJBQVNBO0lBV2pDQSxnQkFBWUEsRUFBY0EsRUFBWUEsV0FBdUJBLEVBQVlBLFVBQXFCQTtRQUMxRkMsa0JBQU1BLFdBQVdBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO1FBREdBLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFZQTtRQUFZQSxlQUFVQSxHQUFWQSxVQUFVQSxDQUFXQTtRQUUxRkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsUUFBUUEsQ0FBQ0E7UUFFMUJBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBO1lBQ3RCQSxVQUFVQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFFQSxtQkFBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDckNBLE9BQU9BLEVBQUVBLENBQUNBLGdCQUFnQkEs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QUNBLEdBQUdBLENBQUNBLDRCQUE0QkEsQ0FBQ0EsQ0FBQ0E7SUFDbERBLENBQUNBO0lBdkZMTDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7WUFDbEJBLFVBQVVBLEVBQUVBLENBQUNBLHlCQUFXQSxFQUFFQSx3QkFBZUEsQ0FBQ0E7WUFDMUNBLFdBQVdBLEVBQUVBLG1DQUFtQ0E7WUFDaERBLFNBQVNBLEVBQUVBLENBQUNBLGdDQUFnQ0EsQ0FBQ0E7WUFDN0NBLEtBQUtBLEVBQUVBLENBQUNBLHFCQUFTQSxDQUFDQTtTQUNyQkEsQ0FBQ0E7O2VBa0ZEQTtJQUFEQSxhQUFDQTtBQUFEQSxDQXhGQSxBQXdGQ0EsRUE1RTJCLHFCQUFTLEVBNEVwQztBQTVFWSxjQUFNLFNBNEVsQixDQUFBIiwiZmlsZSI6ImNvbXBzL2FwcDIvbm90ZXMvTm90ZXMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9hcHAuZC50c1wiLz5cclxuXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtTbGlkZXJwYW5lbH0gZnJvbSBcIi4uLy4uL3NsaWRlcnBhbmVsL1NsaWRlcnBhbmVsXCI7XHJcbmltcG9ydCB7TW9kYWxEaWFsb2d9IGZyb20gXCIuLi8uLi9tb2RhbGRpYWxvZy9Nb2RhbERpYWxvZ1wiO1xyXG5pbXBvcnQge0NvbW1Ccm9rZXJ9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9Db21tQnJva2VyXCI7XHJcbmltcG9ydCB7Q29uc3RzfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3JjL0NvbnRzXCI7XHJcbmltcG9ydCB7Tm90ZXNCYXNlfSBmcm9tIFwiLi9Ob3Rlc0Jhc2VcIjtcclxuaW1wb3J0IHtNYWlsTW9kZWx9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvTWFpbE1vZGVsXCI7XHJcbmltcG9ydCB7Q2hhckNvdW50fSBmcm9tIFwiLi4vLi4vLi4vcGlwZXMvQ2hhckNvdW50XCI7XHJcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2x9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbidcclxuaW1wb3J0IFN0YXJ0Q2FwVmFsaWRhdG9yIGZyb20gXCIuLi8uLi8uLi92YWxpZGF0b3JzL1N0YXJ0Q2FwVmFsaWRhdG9yXCI7XHJcbmltcG9ydCBOYW1lVGFrZW5WYWxpZGF0b3IgZnJvbSBcIi4uLy4uLy4uL3ZhbGlkYXRvcnMvTmFtZVRha2VuVmFsaWRhdG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnTm90ZXMxJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtNb2RhbERpYWxvZywgRk9STV9ESVJFQ1RJVkVTXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnL3NyYy9jb21wcy9hcHAyL25vdGVzL05vdGVzMS5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuLi9jb21wcy9hcHAyL25vdGVzL05vdGVzMS5jc3MnXSxcclxuICAgIHBpcGVzOiBbQ2hhckNvdW50XVxyXG59KVxyXG5cclxuLyoqXHJcbiBUaGUgZmlyc3QgTm90ZTEgc2xpZGVyIGNvbXBvbmVudCBpbiBhIHNlcmllcyBvZiBzbGlkZXJzIC8gbm90ZXMuXHJcbiBEZW1vbnN0cmF0ZXMgdGhlIHVzYWdlIG9mIGV4cGxpY2l0IGZvcm0gY29uZmlndXJhdGlvbi5cclxuICoqL1xyXG5leHBvcnQgY2xhc3MgTm90ZXMxIGV4dGVuZHMgTm90ZXNCYXNlIHtcclxuXHJcbiAgICBwcml2YXRlIG5vdGVzRm9ybTpDb250cm9sR3JvdXA7XHJcbiAgICBwcml2YXRlIG5vdGVzVGV4dEFyZWE6QWJzdHJhY3RDb250cm9sO1xyXG4gICAgcHJpdmF0ZSB1c2VyTmFtZTpBYnN0cmFjdENvbnRyb2w7XHJcbiAgICBwcml2YXRlIHBob25lOkFic3RyYWN0Q29udHJvbDtcclxuICAgIHByaXZhdGUgbG9naW46QWJzdHJhY3RDb250cm9sO1xyXG4gICAgcHJpdmF0ZSBtb2RlbDpNYWlsTW9kZWw7XHJcbiAgICBwcml2YXRlIG1hcE1vZGVsOk1hcDxhbnksIGFueT47IC8vIGRlbW9uc3RyYXRlcyBtYXAgYWx0aG91Z2ggd2UgYXJlIG5vdCB1c2luZyBpdCBmb3IgYW55dGhpbmdcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoZmI6Rm9ybUJ1aWxkZXIsIHByb3RlY3RlZCBzbGlkZXJQYW5lbDpTbGlkZXJwYW5lbCwgcHJvdGVjdGVkIGNvbW1Ccm9rZXI6Q29tbUJyb2tlcikge1xyXG4gICAgICAgIHN1cGVyKHNsaWRlclBhbmVsLCBjb21tQnJva2VyKTtcclxuICAgICAgICB0aGlzLnNsaWRlTGVmdCA9ICdub3RlczInO1xyXG5cclxuICAgICAgICB0aGlzLm5vdGVzRm9ybSA9IGZiLmdyb3VwKHtcclxuICAgICAgICAgICAgJ3VzZXJOYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgJ3Bob25lJzogWycoeHh4KS14eHh4LXh4eCcsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEwKV0sXHJcbiAgICAgICAgICAgICdub3Rlc1RleHRBcmVhJzogWydlbnRlciB0ZXh0IGhlcmUnLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIFN0YXJ0Q2FwVmFsaWRhdG9yXSldLFxyXG4gICAgICAgICAgICAnbG9naW4nOiBbJycsXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgU3RhcnRDYXBWYWxpZGF0b3JdKSwgTmFtZVRha2VuVmFsaWRhdG9yXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBtYXAgdG8gaW5zdGFuY2VzIGZyb20gZm9ybVxyXG4gICAgICAgIHRoaXMubm90ZXNUZXh0QXJlYSA9IHRoaXMubm90ZXNGb3JtLmNvbnRyb2xzWydub3Rlc1RleHRBcmVhJ107XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IHRoaXMubm90ZXNGb3JtLmNvbnRyb2xzWyd1c2VyTmFtZSddO1xyXG4gICAgICAgIHRoaXMubG9naW4gPSB0aGlzLm5vdGVzRm9ybS5jb250cm9sc1snbG9naW4nXTtcclxuICAgICAgICB0aGlzLnBob25lID0gdGhpcy5ub3Rlc0Zvcm0uY29udHJvbHNbJ3Bob25lJ107XHJcblxyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgTWFpbE1vZGVsKDAsICcnLCB0cnVlLCAnJywgJycpO1xyXG5cclxuICAgICAgICAvLyB1bnJlbGF0ZWQsIGRlbW9uc3RyYXRlIHVzYWdlIG9mIE1hcFxyXG4gICAgICAgIHRoaXMubWFwTW9kZWwgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5tYXBNb2RlbC5zZXQoJ215IG5hbWUnLCAnU2VhbiBMZXZ5Jyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm1hcE1vZGVsLmdldCgnbXkgbmFtZScpKTtcclxuXHJcbiAgICAgICAgdGhpcy5vYnNlcnZlTmFtZUNoYW5nZSgpO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZUZvcm1DaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21tQnJva2VyLmdldFNlcnZpY2UoQ29uc3RzLlNlcnZpY2VzKCkuUHJvcGVydGllcykuc2V0UHJvcFZpZXcoJ25vdGVzMScpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gdG8gb2JzZXJ2YWJsZSBlbWl0dGVkIGV2ZW50cyBmcm9tIG5hbWUgY29udHJvbFxyXG4gICAgICogdXNlIG9uZSBvZiB0aGUgbWFueSBSWCBvcGVyYXRvcnMgZGVib3VuY2VUaW1lIHRvIGNvbnRyb2xcclxuICAgICAqIHRoZSBudW1iZXIgb2YgZXZlbnRzIGVtaXR0ZWQgcGVyIG1pbGxpc2Vjb25kc1xyXG4gICAgICoqL1xyXG4gICAgb2JzZXJ2ZU5hbWVDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZS52YWx1ZUNoYW5nZXMuZGVib3VuY2VUaW1lKDEwMCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAodmFsdWU6c3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmFtZSBjaGFuZ2VkLCBub3RpZmllZCB2aWEgb2JzZXJ2YWJsZTogJywgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvYnNlcnZlRm9ybUNoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLm5vdGVzRm9ybS52YWx1ZUNoYW5nZXMuZGVib3VuY2VUaW1lKDEwMCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAodmFsdWU6c3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZm9ydW0gY2hhbmdlZCwgbm90aWZpZWQgdmlhIG9ic2VydmFibGU6ICcsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoZXZlbnQpIHtcclxuICAgICAgICBib290Ym94LmFsZXJ0KGBzZW50ICR7ZXZlbnQubm90ZXNUZXh0QXJlYX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUubGVuZ3RoIDwgMylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RleHQgdG9vIHNob3J0IGZvciBzdWJqZWN0Jyk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
