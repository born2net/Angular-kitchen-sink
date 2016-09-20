System.register(["@angular/core", "../../sliderpanel/Sliderpanel", "../../../services/CommBroker", "../../../../src/Conts", "./NotesBase", "../../../models/MailModel", "@angular/forms", "../../../validators/StartCapValidator", "../../../validators/NameTakenValidator", "bootbox", "./Notes1.html!text", "./Notes1.css!text"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, Sliderpanel_1, CommBroker_1, Conts_1, NotesBase_1, MailModel_1, forms_1, StartCapValidator_1, NameTakenValidator_1, bootbox, Notes1_html_text_1, Notes1_css_text_1;
    var Notes1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (NotesBase_1_1) {
                NotesBase_1 = NotesBase_1_1;
            },
            function (MailModel_1_1) {
                MailModel_1 = MailModel_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (StartCapValidator_1_1) {
                StartCapValidator_1 = StartCapValidator_1_1;
            },
            function (NameTakenValidator_1_1) {
                NameTakenValidator_1 = NameTakenValidator_1_1;
            },
            function (bootbox_1) {
                bootbox = bootbox_1;
            },
            function (Notes1_html_text_1_1) {
                Notes1_html_text_1 = Notes1_html_text_1_1;
            },
            function (Notes1_css_text_1_1) {
                Notes1_css_text_1 = Notes1_css_text_1_1;
            }],
        execute: function() {
            Notes1 = (function (_super) {
                __extends(Notes1, _super);
                function Notes1(fb, sliderPanel, commBroker) {
                    _super.call(this, sliderPanel, commBroker);
                    this.sliderPanel = sliderPanel;
                    this.commBroker = commBroker;
                    this.slideLeft = 'notes2';
                    this.notesForm = fb.group({
                        'userName': ['', forms_1.Validators.required],
                        'reference': ['', forms_1.Validators.required],
                        'phone': ['(xxx)-xxxx-xxx', forms_1.Validators.minLength(10)],
                        'birthdate': ['', [forms_1.Validators.required, this.isOldEnough]],
                        'counter': [''],
                        'notesTextArea': ['enter text here', [forms_1.Validators.required, StartCapValidator_1.default]],
                        'login': ['', [forms_1.Validators.required, StartCapValidator_1.default], NameTakenValidator_1.default]
                    });
                    this.notesTextArea = this.notesForm.controls['notesTextArea'];
                    this.userName = this.notesForm.controls['userName'];
                    this.reference = this.notesForm.controls['reference'];
                    this.login = this.notesForm.controls['login'];
                    this.phone = this.notesForm.controls['phone'];
                    this.birthdate = this.notesForm.controls['birthdate'];
                    this.counter = this.notesForm.controls['counter'];
                    this.model = new MailModel_1.MailModel(0, '', true, '', '');
                    this.mapModel = new Map();
                    this.mapModel.set('my name', 'Sean Levy');
                    this.observeNameChange();
                    this.observeFormChange();
                    this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('notes1');
                }
                Notes1.prototype.isOldEnough = function (control) {
                    if (!control.value) {
                        return null;
                    }
                    var birthDatePlus18 = new Date(control.value);
                    var year = birthDatePlus18.getFullYear();
                    if (year < 1925)
                        return { notValid: true };
                    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
                    return birthDatePlus18 < new Date() ? null : { tooYoung: true };
                };
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
                Notes1.prototype.onReset = function (event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    try {
                        this.notesForm.reset();
                    }
                    catch (e) {
                    }
                    return false;
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
                        moduleId: __moduleName,
                        template: Notes1_html_text_1.default,
                        styles: [Notes1_css_text_1.default]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object, Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
                ], Notes1);
                return Notes1;
                var _a;
            }(NotesBase_1.NotesBase));
            exports_1("Notes1", Notes1);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzL2FwcDIvbm90ZXMvTm90ZXMxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2Qks7Z0JBQTRCLDBCQUFTO2dCQWN0QyxnQkFBWSxFQUFlLEVBQVksV0FBd0IsRUFBWSxVQUFzQjtvQkFDN0Ysa0JBQU0sV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQURJLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUFZLGVBQVUsR0FBVixVQUFVLENBQVk7b0JBRTdGLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO29CQUUxQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ3RCLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDckMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO3dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDckQsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUMxRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQ2YsZUFBZSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSwyQkFBaUIsQ0FBQyxDQUFDO3dCQUM5RSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSwyQkFBaUIsQ0FBQyxFQUFFLDRCQUFrQixDQUFDO3FCQUM5RSxDQUFDLENBQUM7b0JBR0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFl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SUFBSSxDQUFDO3dCQUNELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzNCLENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDYixDQUFDO29CQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBRWpCLENBQUM7Z0JBRUQseUJBQVEsR0FBUixVQUFTLEtBQUs7b0JBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFRLEtBQUssQ0FBQyxhQUFlLENBQUMsQ0FBQztnQkFDakQsQ0FBQztnQkFFRCx5QkFBUSxHQUFSLFVBQVMsS0FBSztvQkFDVixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7Z0JBQ2xELENBQUM7Z0JBM0dMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsMEJBQWM7d0JBQ3hCLE1BQU0sRUFBRSxDQUFDLHlCQUFZLENBQUM7cUJBQ3pCLENBQUM7OzBCQUFBO2dCQXVHRixhQUFDOztZQUFELENBbEdLLEFBa0dKLENBbEdnQyxxQkFBUyxHQWtHekM7WUFsR0ksMkJBa0dKLENBQUEiLCJmaWxlIjoiY29tcHMvYXBwMi9ub3Rlcy9Ob3RlczEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTbGlkZXJwYW5lbH0gZnJvbSBcIi4uLy4uL3NsaWRlcnBhbmVsL1NsaWRlcnBhbmVsXCI7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL0NvbW1Ccm9rZXJcIjtcclxuaW1wb3J0IHtDb25zdHN9IGZyb20gXCIuLi8uLi8uLi8uLi9zcmMvQ29udHNcIjtcclxuaW1wb3J0IHtOb3Rlc0Jhc2V9IGZyb20gXCIuL05vdGVzQmFzZVwiO1xyXG5pbXBvcnQge01haWxNb2RlbH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9NYWlsTW9kZWxcIjtcclxuaW1wb3J0IHtcclxuICAgIEZvcm1Hcm91cCxcclxuICAgIEZvcm1Db250cm9sLFxyXG4gICAgRm9ybUJ1aWxkZXIsXHJcbiAgICBWYWxpZGF0b3JzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCBTdGFydENhcFZhbGlkYXRvciBmcm9tIFwiLi4vLi4vLi4vdmFsaWRhdG9ycy9TdGFydENhcFZhbGlkYXRvclwiO1xyXG5pbXBvcnQgTmFtZVRha2VuVmFsaWRhdG9yIGZyb20gXCIuLi8uLi8uLi92YWxpZGF0b3JzL05hbWVUYWtlblZhbGlkYXRvclwiO1xyXG5pbXBvcnQgKiBhcyBib290Ym94IGZyb20gXCJib290Ym94XCI7XHJcbmltcG9ydCBOb3RlczFUZW1wbGF0ZSBmcm9tIFwiLi9Ob3RlczEuaHRtbCF0ZXh0XCI7XHJcbmltcG9ydCBOb3RlczFTdHlsZXMgZnJvbSBcIi4vTm90ZXMxLmNzcyF0ZXh0XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ05vdGVzMScsXHJcbiAgICBtb2R1bGVJZDogX19tb2R1bGVOYW1lLFxyXG4gICAgdGVtcGxhdGU6IE5vdGVzMVRlbXBsYXRlLFxyXG4gICAgc3R5bGVzOiBbTm90ZXMxU3R5bGVzXVxyXG59KVxyXG5cclxuLyoqXHJcbiBUaGUgZmlyc3QgTm90ZTEgc2xpZGVyIGNvbXBvbmVudCBpbiBhIHNlcmllcyBvZiBzbGlkZXJzIC8gbm90ZXMuXHJcbiBEZW1vbnN0cmF0ZXMgdGhlIHVzYWdlIG9mIGV4cGxpY2l0IGZvcm0gY29uZmlndXJhdGlvbi5cclxuICoqLyBleHBvcnQgY2xhc3MgTm90ZXMxIGV4dGVuZHMgTm90ZXNCYXNlIHtcclxuXHJcbiAgICBwcml2YXRlIG5vdGVzRm9ybTogRm9ybUdyb3VwO1xyXG4gICAgcHJpdmF0ZSBub3Rlc1RleHRBcmVhOiBGb3JtQ29udHJvbDtcclxuICAgIHByaXZhdGUgdXNlck5hbWU6IEZvcm1Db250cm9sO1xyXG4gICAgcHJpdmF0ZSByZWZlcmVuY2U6IEZvcm1Db250cm9sO1xyXG4gICAgcHJpdmF0ZSBwaG9uZTogRm9ybUNvbnRyb2w7XHJcbiAgICBwcml2YXRlIGJpcnRoZGF0ZTogRm9ybUNvbnRyb2w7XHJcbiAgICBwcml2YXRlIGNvdW50ZXI6IEZvcm1Db250cm9sO1xyXG4gICAgcHJpdmF0ZSBsb2dpbjogRm9ybUNvbnRyb2w7XHJcbiAgICBwcml2YXRlIG1vZGVsOiBNYWlsTW9kZWw7XHJcbiAgICBwcml2YXRlIG1hcE1vZGVsOiBNYXA8YW55LCBhbnk+OyAvLyBkZW1vbnN0cmF0ZXMgbWFwIGFsdGhvdWdoIHdlIGFyZSBub3QgdXNpbmcgaXQgZm9yIGFueXRoaW5nXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlciwgcHJvdGVjdGVkIHNsaWRlclBhbmVsOiBTbGlkZXJwYW5lbCwgcHJvdGVjdGVkIGNvbW1Ccm9rZXI6IENvbW1Ccm9rZXIpIHtcclxuICAgICAgICBzdXBlcihzbGlkZXJQYW5lbCwgY29tbUJyb2tlcik7XHJcbiAgICAgICAgdGhpcy5zbGlkZUxlZnQgPSAnbm90ZXMyJztcclxuXHJcbiAgICAgICAgdGhpcy5ub3Rlc0Zvcm0gPSBmYi5ncm91cCh7XHJcbiAgICAgICAgICAgICd1c2VyTmFtZSc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgICdyZWZlcmVuY2UnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAncGhvbmUnOiBbJyh4eHgpLXh4eHgteHh4JywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMTApXSxcclxuICAgICAgICAgICAgJ2JpcnRoZGF0ZSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuaXNPbGRFbm91Z2hdXSxcclxuICAgICAgICAgICAgJ2NvdW50ZXInOiBbJyddLFxyXG4gICAgICAgICAgICAnbm90ZXNUZXh0QXJlYSc6IFsnZW50ZXIgdGV4dCBoZXJlJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFN0YXJ0Q2FwVmFsaWRhdG9yXV0sXHJcbiAgICAgICAgICAgICdsb2dpbic6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFN0YXJ0Q2FwVmFsaWRhdG9yXSwgTmFtZVRha2VuVmFsaWRhdG9yXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBtYXAgdG8gaW5zdGFuY2VzIGZyb20gZm9ybVxyXG4gICAgICAgIHRoaXMubm90ZXNUZXh0QXJlYSA9IHRoaXMubm90ZXNGb3JtLmNvbnRyb2xzWydub3Rlc1RleHRBcmVhJ10gYXMgRm9ybUNvbnRyb2w7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IHRoaXMubm90ZXNGb3JtLmNvbnRyb2xzWyd1c2VyTmFtZSddIGFzIEZvcm1Db250cm9sO1xyXG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gdGhpcy5ub3Rlc0Zvcm0uY29udHJvbHNbJ3JlZmVyZW5jZSddICBhcyBGb3JtQ29udHJvbDtcclxuICAgICAgICB0aGlzLmxvZ2luID0gdGhpcy5ub3Rlc0Zvcm0uY29udHJvbHNbJ2xvZ2luJ10gIGFzIEZvcm1Db250cm9sO1xyXG4gICAgICAgIHRoaXMucGhvbmUgPSB0aGlzLm5vdGVzRm9ybS5jb250cm9sc1sncGhvbmUnXSAgYXMgRm9ybUNvbnRyb2w7XHJcbiAgICAgICAgdGhpcy5iaXJ0aGRhdGUgPSB0aGlzLm5vdGVzRm9ybS5jb250cm9sc1snYmlydGhkYXRlJ10gIGFzIEZvcm1Db250cm9sO1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMubm90ZXNGb3JtLmNvbnRyb2xzWydjb3VudGVyJ10gIGFzIEZvcm1Db250cm9sO1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgTWFpbE1vZGVsKDAsICcnLCB0cnVlLCAnJywgJycpO1xyXG5cclxuICAgICAgICAvLyB1bnJlbGF0ZWQsIGRlbW9uc3RyYXRlIHVzYWdlIG9mIE1hcFxyXG4gICAgICAgIHRoaXMubWFwTW9kZWwgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5tYXBNb2RlbC5zZXQoJ215IG5hbWUnLCAnU2VhbiBMZXZ5Jyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm1hcE1vZGVsLmdldCgnbXkgbmFtZScpKTtcclxuXHJcbiAgICAgICAgdGhpcy5vYnNlcnZlTmFtZUNoYW5nZSgpO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZUZvcm1DaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21tQnJva2VyLmdldFNlcnZpY2UoQ29uc3RzLlNlcnZpY2VzKCkuUHJvcGVydGllcykuc2V0UHJvcFZpZXcoJ25vdGVzMScpXHJcbiAgICB9XHJcblxyXG4gICAgaXNPbGRFbm91Z2goY29udHJvbDogRm9ybUNvbnRyb2wpOiBhbnkge1xyXG4gICAgICAgIGlmICghY29udHJvbC52YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJpcnRoRGF0ZVBsdXMxOCA9IG5ldyBEYXRlKGNvbnRyb2wudmFsdWUpO1xyXG4gICAgICAgIGxldCB5ZWFyID0gYmlydGhEYXRlUGx1czE4LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgaWYgKHllYXIgPCAxOTI1KVxyXG4gICAgICAgICAgICByZXR1cm4ge25vdFZhbGlkOiB0cnVlfTtcclxuXHJcbiAgICAgICAgYmlydGhEYXRlUGx1czE4LnNldEZ1bGxZZWFyKGJpcnRoRGF0ZVBsdXMxOC5nZXRGdWxsWWVhcigpICsgMTgpO1xyXG4gICAgICAgIHJldHVybiBiaXJ0aERhdGVQbHVzMTggPCBuZXcgRGF0ZSgpID8gbnVsbCA6IHt0b29Zb3VuZzogdHJ1ZX07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gdG8gb2JzZXJ2YWJsZSBlbWl0dGVkIGV2ZW50cyBmcm9tIG5hbWUgY29udHJvbFxyXG4gICAgICogdXNlIG9uZSBvZiB0aGUgbWFueSBSWCBvcGVyYXRvcnMgZGVib3VuY2VUaW1lIHRvIGNvbnRyb2xcclxuICAgICAqIHRoZSBudW1iZXIgb2YgZXZlbnRzIGVtaXR0ZWQgcGVyIG1pbGxpc2Vjb25kc1xyXG4gICAgICoqL1xyXG4gICAgb2JzZXJ2ZU5hbWVDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZS52YWx1ZUNoYW5nZXMuZGVib3VuY2VUaW1lKDEwMCkuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCduYW1lIGNoYW5nZWQsIG5vdGlmaWVkIHZpYSBvYnNlcnZhYmxlOiAnLCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb2JzZXJ2ZUZvcm1DaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5ub3Rlc0Zvcm0udmFsdWVDaGFuZ2VzLmRlYm91bmNlVGltZSgxMDApLnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZm9ydW0gY2hhbmdlZCwgbm90aWZpZWQgdmlhIG9ic2VydmFibGU6ICcsIHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlc2V0KGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzRm9ybS5yZXNldCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChldmVudCkge1xyXG4gICAgICAgIGJvb3Rib3guYWxlcnQoYHNlbnQgJHtldmVudC5ub3Rlc1RleHRBcmVhfWApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPCAzKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGV4dCB0b28gc2hvcnQgZm9yIHN1YmplY3QnKTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
