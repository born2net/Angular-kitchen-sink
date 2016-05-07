"use strict";
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
var core_1 = require('@angular/core');
var Sliderpanel_1 = require("../../sliderpanel/Sliderpanel");
var ModalDialog_1 = require("../../modaldialog/ModalDialog");
var CommBroker_1 = require("../../../services/CommBroker");
var Conts_1 = require("../../../../src/Conts");
var NotesBase_1 = require("./NotesBase");
var MailModel_1 = require("../../../models/MailModel");
var common_1 = require('@angular/common');
var StartCapValidator_1 = require("../../../validators/StartCapValidator");
var NameTakenValidator_1 = require("../../../validators/NameTakenValidator");
var DisplayError_1 = require("../../displayerror/DisplayError");
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
            'reference': ['', common_1.Validators.required],
            'phone': ['(xxx)-xxxx-xxx', common_1.Validators.minLength(10)],
            'birthdate': ['',
                common_1.Validators.compose([
                    common_1.Validators.required,
                    this.isOldEnough])],
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
        this.reference = this.notesForm.controls['reference'];
        this.login = this.notesForm.controls['login'];
        this.phone = this.notesForm.controls['phone'];
        this.birthdate = this.notesForm.controls['birthdate'];
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
            directives: [ModalDialog_1.ModalDialog, common_1.FORM_DIRECTIVES, DisplayError_1.DisplayError],
            templateUrl: '/src/comps/app2/notes/Notes1.html',
            styleUrls: ['../comps/app2/notes/Notes1.css']
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, Sliderpanel_1.Sliderpanel, CommBroker_1.CommBroker])
    ], Notes1);
    return Notes1;
}(NotesBase_1.NotesBase));
exports.Notes1 = Notes1;
//# sourceMappingURL=Notes1.js.map