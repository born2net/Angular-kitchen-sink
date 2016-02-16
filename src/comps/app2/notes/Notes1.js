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
var common_1 = require('angular2/common');
var StartCapValidator_1 = require("../../../validators/StartCapValidator");
var NameTakenValidator_1 = require("../../../validators/NameTakenValidator");
var bootbox = require('bootbox');
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
            styleUrls: ['../comps/app2/notes/Notes1.css']
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
    ], Notes1);
    return Notes1;
})(NotesBase_1.NotesBase);
exports.Notes1 = Notes1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvbm90ZXMxLnRzIl0sIm5hbWVzIjpbIk5vdGVzMSIsIk5vdGVzMS5jb25zdHJ1Y3RvciIsIk5vdGVzMS5vYnNlcnZlTmFtZUNoYW5nZSIsIk5vdGVzMS5vYnNlcnZlRm9ybUNoYW5nZSIsIk5vdGVzMS5vblN1Ym1pdCIsIk5vdGVzMS5vbkNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNEJBQTBCLCtCQUErQixDQUFDLENBQUE7QUFDMUQsNEJBQTBCLCtCQUErQixDQUFDLENBQUE7QUFDMUQsMkJBQXlCLDhCQUE4QixDQUFDLENBQUE7QUFDeEQsc0JBQXFCLHVCQUF1QixDQUFDLENBQUE7QUFDN0MsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBQ3RDLDBCQUF3QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3BELHVCQUFzRixpQkFDdEYsQ0FBQyxDQURzRztBQUN2RyxrQ0FBOEIsdUNBQXVDLENBQUMsQ0FBQTtBQUN0RSxtQ0FBK0Isd0NBQXdDLENBQUMsQ0FBQTtBQUV4RSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFakM7SUFXNEJBLDBCQUFTQTtJQVdqQ0EsZ0JBQVlBLEVBQWNBLEVBQVlBLFdBQXVCQSxFQUFZQSxVQUFxQkE7UUFDMUZDLGtCQUFNQSxXQUFXQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtRQURHQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBWUE7UUFBWUEsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBV0E7UUFFMUZBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLFFBQVFBLENBQUNBO1FBRTFCQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQTtZQUN0QkEsVUFBVUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsbUJBQVVBLENBQUNBLFFBQVFBLENBQUNBO1lBQ3JDQSxPQUFPQSxFQUFF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O1lBQzlCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSw0QkFBNEJBLENBQUNBLENBQUNBO0lBQ2xEQSxDQUFDQTtJQXRGTEw7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO1lBQ2xCQSxVQUFVQSxFQUFFQSxDQUFDQSx5QkFBV0EsRUFBRUEsd0JBQWVBLENBQUNBO1lBQzFDQSxXQUFXQSxFQUFFQSxtQ0FBbUNBO1lBQ2hEQSxTQUFTQSxFQUFFQSxDQUFDQSxnQ0FBZ0NBLENBQUNBO1NBQ2hEQSxDQUFDQTs7ZUFrRkRBO0lBQURBLGFBQUNBO0FBQURBLENBdkZBLEFBdUZDQSxFQTVFMkIscUJBQVMsRUE0RXBDO0FBNUVZLGNBQU0sU0E0RWxCLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMi9ub3Rlcy9Ob3RlczEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2FwcC5kLnRzXCIvPlxyXG5cclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1NsaWRlcnBhbmVsfSBmcm9tIFwiLi4vLi4vc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuaW1wb3J0IHtNb2RhbERpYWxvZ30gZnJvbSBcIi4uLy4uL21vZGFsZGlhbG9nL01vZGFsRGlhbG9nXCI7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0IHtDb25zdHN9IGZyb20gXCIuLi8uLi8uLi8uLi9zcmMvQ29udHNcIjtcclxuaW1wb3J0IHtOb3Rlc0Jhc2V9IGZyb20gXCIuL05vdGVzQmFzZVwiO1xyXG5pbXBvcnQge01haWxNb2RlbH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9NYWlsTW9kZWxcIjtcclxuaW1wb3J0IHtGT1JNX0RJUkVDVElWRVMsIEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJ1xyXG5pbXBvcnQgU3RhcnRDYXBWYWxpZGF0b3IgZnJvbSBcIi4uLy4uLy4uL3ZhbGlkYXRvcnMvU3RhcnRDYXBWYWxpZGF0b3JcIjtcclxuaW1wb3J0IE5hbWVUYWtlblZhbGlkYXRvciBmcm9tIFwiLi4vLi4vLi4vdmFsaWRhdG9ycy9OYW1lVGFrZW5WYWxpZGF0b3JcIjtcclxuXHJcbnZhciBib290Ym94ID0gcmVxdWlyZSgnYm9vdGJveCcpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ05vdGVzMScsXHJcbiAgICBkaXJlY3RpdmVzOiBbTW9kYWxEaWFsb2csIEZPUk1fRElSRUNUSVZFU10sXHJcbiAgICB0ZW1wbGF0ZVVybDogJy9zcmMvY29tcHMvYXBwMi9ub3Rlcy9Ob3RlczEuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vY29tcHMvYXBwMi9ub3Rlcy9Ob3RlczEuY3NzJ11cclxufSlcclxuXHJcbi8qKlxyXG4gVGhlIGZpcnN0IE5vdGUxIHNsaWRlciBjb21wb25lbnQgaW4gYSBzZXJpZXMgb2Ygc2xpZGVycyAvIG5vdGVzLlxyXG4gRGVtb25zdHJhdGVzIHRoZSB1c2FnZSBvZiBleHBsaWNpdCBmb3JtIGNvbmZpZ3VyYXRpb24uXHJcbiAqKi9cclxuZXhwb3J0IGNsYXNzIE5vdGVzMSBleHRlbmRzIE5vdGVzQmFzZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBub3Rlc0Zvcm06Q29udHJvbEdyb3VwO1xyXG4gICAgcHJpdmF0ZSBub3Rlc1RleHRBcmVhOkFic3RyYWN0Q29udHJvbDtcclxuICAgIHByaXZhdGUgdXNlck5hbWU6QWJzdHJhY3RDb250cm9sO1xyXG4gICAgcHJpdmF0ZSBwaG9uZTpBYnN0cmFjdENvbnRyb2w7XHJcbiAgICBwcml2YXRlIGxvZ2luOkFic3RyYWN0Q29udHJvbDtcclxuICAgIHByaXZhdGUgbW9kZWw6TWFpbE1vZGVsO1xyXG4gICAgcHJpdmF0ZSBtYXBNb2RlbDpNYXA8YW55LCBhbnk+OyAvLyBkZW1vbnN0cmF0ZXMgbWFwIGFsdGhvdWdoIHdlIGFyZSBub3QgdXNpbmcgaXQgZm9yIGFueXRoaW5nXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZiOkZvcm1CdWlsZGVyLCBwcm90ZWN0ZWQgc2xpZGVyUGFuZWw6U2xpZGVycGFuZWwsIHByb3RlY3RlZCBjb21tQnJva2VyOkNvbW1Ccm9rZXIpIHtcclxuICAgICAgICBzdXBlcihzbGlkZXJQYW5lbCwgY29tbUJyb2tlcik7XHJcbiAgICAgICAgdGhpcy5zbGlkZUxlZnQgPSAnbm90ZXMyJztcclxuXHJcbiAgICAgICAgdGhpcy5ub3Rlc0Zvcm0gPSBmYi5ncm91cCh7XHJcbiAgICAgICAgICAgICd1c2VyTmFtZSc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICdwaG9uZSc6IFsnKHh4eCkteHh4eC14eHgnLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgxMCldLFxyXG4gICAgICAgICAgICAnbm90ZXNUZXh0QXJlYSc6IFsnZW50ZXIgdGV4dCBoZXJlJyxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgICBTdGFydENhcFZhbGlkYXRvcl0pXSxcclxuICAgICAgICAgICAgJ2xvZ2luJzogWycnLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIFN0YXJ0Q2FwVmFsaWRhdG9yXSksIE5hbWVUYWtlblZhbGlkYXRvcl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gbWFwIHRvIGluc3RhbmNlcyBmcm9tIGZvcm1cclxuICAgICAgICB0aGlzLm5vdGVzVGV4dEFyZWEgPSB0aGlzLm5vdGVzRm9ybS5jb250cm9sc1snbm90ZXNUZXh0QXJlYSddO1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSB0aGlzLm5vdGVzRm9ybS5jb250cm9sc1sndXNlck5hbWUnXTtcclxuICAgICAgICB0aGlzLmxvZ2luID0gdGhpcy5ub3Rlc0Zvcm0uY29udHJvbHNbJ2xvZ2luJ107XHJcbiAgICAgICAgdGhpcy5waG9uZSA9IHRoaXMubm90ZXNGb3JtLmNvbnRyb2xzWydwaG9uZSddO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IE1haWxNb2RlbCgwLCAnJywgdHJ1ZSwgJycsICcnKTtcclxuXHJcbiAgICAgICAgLy8gdW5yZWxhdGVkLCBkZW1vbnN0cmF0ZSB1c2FnZSBvZiBNYXBcclxuICAgICAgICB0aGlzLm1hcE1vZGVsID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMubWFwTW9kZWwuc2V0KCdteSBuYW1lJywgJ1NlYW4gTGV2eScpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5tYXBNb2RlbC5nZXQoJ215IG5hbWUnKSk7XHJcblxyXG4gICAgICAgIHRoaXMub2JzZXJ2ZU5hbWVDaGFuZ2UoKTtcclxuICAgICAgICB0aGlzLm9ic2VydmVGb3JtQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tbUJyb2tlci5nZXRTZXJ2aWNlKENvbnN0cy5TZXJ2aWNlcygpLlByb3BlcnRpZXMpLnNldFByb3BWaWV3KCdub3RlczEnKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuIHRvIG9ic2VydmFibGUgZW1pdHRlZCBldmVudHMgZnJvbSBuYW1lIGNvbnRyb2xcclxuICAgICAqIHVzZSBvbmUgb2YgdGhlIG1hbnkgUlggb3BlcmF0b3JzIGRlYm91bmNlVGltZSB0byBjb250cm9sXHJcbiAgICAgKiB0aGUgbnVtYmVyIG9mIGV2ZW50cyBlbWl0dGVkIHBlciBtaWxsaXNlY29uZHNcclxuICAgICAqKi9cclxuICAgIG9ic2VydmVOYW1lQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUudmFsdWVDaGFuZ2VzLmRlYm91bmNlVGltZSgxMDApLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHZhbHVlOnN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25hbWUgY2hhbmdlZCwgbm90aWZpZWQgdmlhIG9ic2VydmFibGU6ICcsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb2JzZXJ2ZUZvcm1DaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub3Rlc0Zvcm0udmFsdWVDaGFuZ2VzLmRlYm91bmNlVGltZSgxMDApLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHZhbHVlOnN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZvcnVtIGNoYW5nZWQsIG5vdGlmaWVkIHZpYSBvYnNlcnZhYmxlOiAnLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgYm9vdGJveC5hbGVydChgc2VudCAke2V2ZW50Lm5vdGVzVGV4dEFyZWF9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA8IDMpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXh0IHRvbyBzaG9ydCBmb3Igc3ViamVjdCcpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
