///<reference path="../../../../typings/app.d.ts"/>
System.register(['angular2/core', "../../sliderpanel/Sliderpanel", "../../modaldialog/ModalDialog", "../../../services/CommBroker", "./NotesBase", "../contact/Contact", "../../../pipes/CharCount", 'angular2/common', "../../../validators/StartCapValidator"], function(exports_1) {
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
    var core_1, Sliderpanel_1, ModalDialog_1, CommBroker_1, NotesBase_1, Contact_1, CharCount_1, common_1, StartCapValidator_1;
    var Notes1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (ModalDialog_1_1) {
                ModalDialog_1 = ModalDialog_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (NotesBase_1_1) {
                NotesBase_1 = NotesBase_1_1;
            },
            function (Contact_1_1) {
                Contact_1 = Contact_1_1;
            },
            function (CharCount_1_1) {
                CharCount_1 = CharCount_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (StartCapValidator_1_1) {
                StartCapValidator_1 = StartCapValidator_1_1;
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
                        'userName': ['user name', common_1.Validators.required],
                        'notesTextArea': ['enter text here',
                            common_1.Validators.compose([
                                common_1.Validators.required,
                                StartCapValidator_1.default])]
                    });
                    // gran an instance of our notesTextControl from the from
                    this.notesTextArea = this.notesForm.controls['notesTextArea'];
                    this.userName = this.notesForm.controls['userName'];
                    this.model = new Contact_1.MailModel(0, '', true, '', '');
                    // Demonstrate usage of Map
                    this.mapModel = new Map();
                    this.mapModel.set('my name', 'Sean Levy');
                    //console.log(this.mapModel.get('my name'));
                }
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
                        pipes: [CharCount_1.CharCount],
                        styles: ["\n               .ng-valid[required] {\n                  border-left: 5px solid #42A948; /* green */\n                }\n                .ng-invalid {\n                  border-left: 5px solid #a94442; /* red */\n                }\n                .form-control {\n                    width: 20%;\n                }\n                #totalChar {\n                   border: none;\n                }\n                #summary {\n                    width: 20%;\n                }\n                .myNotes {\n                   width: 50%;\n                   height: 200px;\n                }\n                .panelColorError {\n                   background-color: #ffe4e4;\n                }\n\n       "],
                        template: " <button type=\"button\" (click)=\"onNext($event)\" class=\"btn btn-default btn-sm goNext\">\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                </button>\n                <hr/>\n                <small>I am notes1 component</small>\n                <hr/>\n                <h1>Notes 1</h1>\n                <div class=\"container\">\n                  <div [hidden]=\"submitted\">\n\n                    <!-- special tx to ng2-book via http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/ -->\n\n                    <!-- create a form and bind it directly to the ControlGroup we created manually instantiated in the controller below (i.e.: notesForm) -->\n                    <!-- this is different from what we did in Contact.ts where we had Angualar automatically create a control group for us -->\n                    <!-- and we just created a local variable their-->\n\n                    <!-- To create a new ControlGroup and Controls implicitly use (used here in Contact.ts): -->\n                    <!--  -->\n                    <!-- ngForm and -->\n                    <!-- ngControl -->\n                    <!-- But to bind to an existing ControlGroup and Controls use explicitly via FormBuilder (used in this component): -->\n                    <!--  -->\n                    <!-- ngFormModel and -->\n                    <!-- ngFormControl -->\n\n                    <div [class.panelColorError]=\"!notesForm.valid\">\n                        <!-- here we are mapping the ControlGroup via the directive ngFormModel to the instance of notesForm -->\n                        <form [ngFormModel]=\"notesForm\" (ngSubmit)=\"onSubmit(notesForm.value)\">\n                          <div class=\"form-group\">\n                          <!-- here we are mapping the Control via the directive ngFormControl to the instance of notesForm.controls['userName'] -->\n                            <input type=\"text\" class=\"form-control\" required [ngFormControl]=\"notesForm.controls['userName']\">\n                              <div *ngIf=\"!userName.valid\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n                                  <strong>Warning!</strong> are you a robot?\n                              </div>\n                            <label for=\"name\">Enter your notes</label>\n\n                            <!-- bind the textarea control to our manually created notesTextArea control -->\n                            <textarea type=\"text\" class=\"myNotes form-control\" [ngFormControl]=\"notesForm.controls['notesTextArea']\" required\n                                [(ngModel)]=\"model.name\" (change)=\"onChange($event)\"></textarea>\n                            <div *ngIf=\"notesTextArea.hasError('notCapped') && notesTextArea.touched\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n                               <strong>Warning!</strong> Must start with first capital letter (Validators are working :)\n                            </div>\n                            <div *ngIf=\"!notesForm.valid && notesTextArea.touched\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\n                                <strong>Warning!</strong> something is not right with the form\n                            </div>\n                            <span>Total characters via Pipes: {{model.name | CharCount}}</span>\n                            <br/>\n                          </div>\n                          <br/>\n                          <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!notesForm.valid\">Submit</button>\n                       </form>\n                    </div>\n\n                "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
                ], Notes1);
                return Notes1;
            })(NotesBase_1.NotesBase);
            exports_1("Notes1", Notes1);
        }
    }
});
//# sourceMappingURL=Notes1.js.map