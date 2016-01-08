///<reference path="../../../../typings/app.d.ts"/>
System.register(['angular2/core', "../../sliderpanel/Sliderpanel", "../../modaldialog/ModalDialog", "../../../services/CommBroker", "../../../Conts", "./NotesBase", "../../../models/MailModel", "../../../pipes/CharCount", 'angular2/common', "../../../validators/StartCapValidator", "../../../validators/NameTakenValidator"], function(exports_1) {
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
    var core_1, Sliderpanel_1, ModalDialog_1, CommBroker_1, Conts_1, NotesBase_1, MailModel_1, CharCount_1, common_1, StartCapValidator_1, NameTakenValidator_1;
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
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (NotesBase_1_1) {
                NotesBase_1 = NotesBase_1_1;
            },
            function (MailModel_1_1) {
                MailModel_1 = MailModel_1_1;
            },
            function (CharCount_1_1) {
                CharCount_1 = CharCount_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (StartCapValidator_1_1) {
                StartCapValidator_1 = StartCapValidator_1_1;
            },
            function (NameTakenValidator_1_1) {
                NameTakenValidator_1 = NameTakenValidator_1_1;
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
                    // map to instances from form
                    this.notesTextArea = this.notesForm.controls['notesTextArea'];
                    this.userName = this.notesForm.controls['userName'];
                    this.login = this.notesForm.controls['login'];
                    this.phone = this.notesForm.controls['phone'];
                    this.model = new MailModel_1.MailModel(0, '', true, '', '');
                    // unrelated, demonstrate usage of Map
                    this.mapModel = new Map();
                    this.mapModel.set('my name', 'Sean Levy');
                    //console.log(this.mapModel.get('my name'));
                    this.observeNameChange();
                    this.observeFormChange();
                    this.commBroker.getService(Conts_1.Consts.Services().Properties).setPropView('notes1');
                }
                /**
                 * Listen to observable emitted events from name control
                 * use one of the many RX operators debounceTime to control
                 * the number of events emitted per milliseconds
                 **/
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
                        pipes: [CharCount_1.CharCount],
                        styleUrls: ['src/comps/app2/notes/Notes1.css'],
                        templateUrl: 'src/comps/app2/notes/Notes1.html'
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