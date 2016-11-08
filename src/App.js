/**
 * License MIT
 **/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require("zone.js/dist/zone");
require("zone.js/dist/long-stack-trace-zone");
require("reflect-metadata");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
require("twbs/bootstrap");
require("twbs/bootstrap/dist/css/bootstrap.css!");
require("./styles/style.css!");
var CharCount_1 = require("./pipes/CharCount");
var AppInjService_1 = require("./services/AppInjService");
var Filemenu_1 = require("../src/comps/filemenu/Filemenu");
var FilemenuItem_1 = require("../src/comps/filemenu/FilemenuItem");
var Logo_1 = require("./comps/logo/Logo");
var Footer_1 = require("./comps/footer/Footer");
var Conts_1 = require("../src/Conts");
var StyleService_1 = require("./styles/StyleService");
var angular2_redux_util_1 = require("angular2-redux-util");
var Lib_1 = require("./Lib");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/observable/fromEvent");
var parts_reducer_1 = require("./comps/app3/starwars/reducers/parts-reducer");
var cart_reducer_1 = require("./comps/app3/starwars/reducers/cart-reducer");
var films_reducer_1 = require("./comps/app3/starwars/reducers/films-reducer");
var users_reducer_1 = require("./comps/app3/starwars/reducers/users-reducer");
var NotifyReducer_1 = require("./reducers/NotifyReducer");
var AppdbReducer_1 = require("./reducers/AppdbReducer");
var TodoReducer_1 = require("./comps/app1/todos/reducers/TodoReducer");
var AppdbAction_1 = require("./actions/AppdbAction");
var App_routes_1 = require("./App.routes");
var LogoutDeactivate_1 = require("./comps/logout/LogoutDeactivate");
var position_service_1 = require("./comps/tooltip/position.service");
var platform_browser_1 = require("@angular/platform-browser");
// import {ModalComponent} from "ng2-bs3-modal/components/modal";
var Welcome_1 = require("./comps/welcome/Welcome");
var Digg_1 = require("./comps/digg/Digg");
var Todos_1 = require("./comps/app1/todos/Todos");
var Settings_1 = require("./comps/app1/settings/Settings");
var LoginPanel_1 = require("./comps/entry/LoginPanel");
var Help_1 = require("./comps/app1/help/Help");
var App1_1 = require("./comps/app1/App1");
var App2_1 = require("./comps/app2/App2");
var App3_1 = require("./comps/app3/App3");
var ForgotPass_1 = require("./comps/entry/ForgotPass");
var AppManager_1 = require("./comps/appmanager/AppManager");
var EntryPanel_1 = require("./comps/entry/EntryPanel");
var Logout_1 = require("./comps/logout/Logout");
var make_draggable_directive_1 = require("./comps/dragndrop/make-draggable.directive");
var make_droppable_directive_1 = require("./comps/dragndrop/make-droppable.directive");
var Sliderpanel_1 = require("./comps/sliderpanel/Sliderpanel");
var Todo1_1 = require("./comps/app1/todos/Todo1");
var Todo2_1 = require("./comps/app1/todos/Todo2");
var Todolist_1 = require("./comps/app1/todos/Todolist");
var SortBy_1 = require("./pipes/SortBy");
var OrderBy_1 = require("./pipes/OrderBy");
var Menu_1 = require("./comps/sidemenu/Menu");
var MenuItem_1 = require("./comps/sidemenu/MenuItem");
var contributors_1 = require("./comps/app1/help/contributors/contributors");
var Todoitem_1 = require("./comps/app1/todos/Todoitem");
var tabs_1 = require("./comps/tabs/tabs");
var tab_1 = require("./comps/tabs/tab");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var MyChart_1 = require("./comps/app1/help/contributors/MyChart");
var ng2_highcharts_1 = require("./comps/ng2-highcharts/src/directives/ng2-highcharts");
var Nodelogger_1 = require("./comps/nodelogger/Nodelogger");
var DividerPanel_1 = require("./comps/dividerpanel/DividerPanel");
var Properties_1 = require("./comps/app2/properties/Properties");
var Weather_1 = require("./comps/app2/weather/Weather");
var Contact_1 = require("./comps/app2/contact/Contact");
var ModalDialog_1 = require("./comps/modaldialog/ModalDialog");
var Notes_1 = require("./comps/app2/notes/Notes");
var Notes3_1 = require("./comps/app2/notes/Notes3");
var Notes4_1 = require("./comps/app2/notes/Notes4");
var Notes5_1 = require("./comps/app2/notes/Notes5");
var Notes1_1 = require("./comps/app2/notes/Notes1");
var Notes2_1 = require("./comps/app2/notes/Notes2");
var CreateEmbedDiffer_1 = require("./comps/app2/notes/CreateEmbedDiffer");
var InjectTemplateChild_1 = require("./comps/app2/notes/InjectTemplateChild");
var DisplayError_1 = require("./comps/displayerror/DisplayError");
var CounterInputComponent_1 = require("./comps/counterinputcomponent/CounterInputComponent");
var Myip_1 = require("./comps/myip/Myip");
var TrimmedInput_1 = require("./comps/trimmedinput/TrimmedInput");
var Minitab_1 = require("./comps/minitabs/Minitab");
var Minitabs_1 = require("./comps/minitabs/Minitabs");
var StarWarsSearch_1 = require("./comps/app2/notes/StarWarsSearch");
var WikiSearch_1 = require("./comps/app2/notes/WikiSearch");
var InfinityScroll_1 = require("./comps/app2/notes/InfinityScroll");
var MultiSlotTransclusion_1 = require("./comps/app2/notes/MultiSlotTransclusion");
var Clock_1 = require("./comps/app2/notes/Clock");
var CompElemBuilder_1 = require("./comps/app2/notes/CompElemBuilder");
var EmbedView_1 = require("./comps/app2/notes/EmbedView");
var ToggleButton_1 = require("./comps/app2/notes/ToggleButton");
var StreamButton_1 = require("./comps/app2/notes/StreamButton");
var ngBookRepeat_1 = require("./comps/ngForIf/ngBookRepeat");
var InjectTemplateParent_1 = require("./comps/app2/notes/InjectTemplateParent");
var optionlistcomponent_1 = require("./comps/optionlistcomponent/optionlistcomponent");
var NotesDetailsItems_1 = require("./comps/app2/notes/NotesDetailsItems");
var NotesDetails_1 = require("./comps/app2/notes/NotesDetails");
var CountDown_1 = require("./comps/countdown/CountDown");
var Notes1Props_1 = require("./comps/app2/notes/Notes1Props");
var SortableHeader_1 = require("./comps/app2/weather/SortableHeader");
var films_component_1 = require("./comps/app3/starwars/components/films-component");
var admin_component_1 = require("./comps/app3/starwars/components/admin-component");
var shopping_component_1 = require("./comps/app3/starwars/components/shopping-component");
var starwars_1 = require("./comps/app3/starwars/starwars");
var users_view_1 = require("./comps/app3/starwars/components/users-view");
var cart_view_1 = require("./comps/app3/starwars/components/cart-view");
var add_part_view_1 = require("./comps/app3/starwars/components/add-part-view");
var Simplelist_1 = require("./comps/simplelist/Simplelist");
var user_view_1 = require("./comps/app3/starwars/components/user-view");
var film_selection_view_1 = require("./comps/app3/starwars/components/film-selection-view");
var film_view_1 = require("./comps/app3/starwars/components/film-view");
var ng2_highstocks_1 = require("./comps/ng2-highcharts/src/directives/ng2-highstocks");
var ng2_highmaps_1 = require("./comps/ng2-highcharts/src/directives/ng2-highmaps");
var parts_view_1 = require("./comps/app3/starwars/components/parts-view");
var accordion_1 = require("./comps/ng2Accordion/accordion");
var button_checkbox_component_1 = require("./comps/ng2button/button-checkbox.component");
var button_radio_component_1 = require("./comps/ng2button/button-radio.component");
var tooltip_component_1 = require("./comps/tooltip/tooltip.component");
var HeightDirective_1 = require("./comps/heightdirective/HeightDirective");
var SharedModule_1 = require("./comps/app1/lazyone/SharedModule");
var DynaFactoryRes_1 = require("./comps/app2/notes/DynaFactoryRes");
var DynaFactoryResHelloWorld_1 = require("./comps/app2/notes/DynaFactoryResHelloWorld");
var PureDialog_1 = require("./comps/puredialog/PureDialog");
var PureDialogDirective_1 = require("./comps/puredialog/PureDialogDirective");
var LoggingErrorHandlerOptions_1 = require("./services/errorhandler/LoggingErrorHandlerOptions");
var ErrorLogService_1 = require("./services/errorhandler/ErrorLogService");
var AnimateCards_1 = require("./comps/app2/notes/AnimateCards");
var AnimateBox_1 = require("./comps/app2/notes/AnimateBox");
var App_html_text_1 = require('./App.html!text');
var hello_world_component_1 = require("./comps/dynmiaccomp/hello-world-component");
var world_hello_component_1 = require("./comps/dynmiaccomp/world-hello-component");
var dynamic_component_1 = require("./comps/dynmiaccomp/dynamic-component");
var dynamic_app_1 = require("./comps/dynmiaccomp/dynamic-app");
var ContentHeros_1 = require("./comps/app2/notes/ContentHeros");
var content_bar_app_1 = require("./comps/contentbar/content-bar-app");
var bar_editor_component_1 = require("./comps/contentbar/bar-editor.component");
var editor_component_1 = require("./comps/contentbar/editor.component");
var foo_editor_component_1 = require("./comps/contentbar/foo-editor.component");
var SwitchComponent_1 = require("./comps/switchcomponent/SwitchComponent");
var ShowHideDirective_1 = require("./comps/showHideDirective/ShowHideDirective");
var Breadcrumb_1 = require("./comps/breadcrumb/Breadcrumb");
var Mousewheel_1 = require("./comps/Mousewheel/Mousewheel");
var providing = [{
        provide: angular2_redux_util_1.AppStore,
        useFactory: Lib_1.Lib.StoreFactory({
            notify: NotifyReducer_1.default,
            appdb: AppdbReducer_1.default,
            parts: parts_reducer_1.default,
            cart: cart_reducer_1.default,
            films: films_reducer_1.default,
            users: users_reducer_1.default,
            todos: TodoReducer_1.todos
        })
    }, {
        provide: position_service_1.PositionService,
        useClass: position_service_1.PositionService
    }, {
        provide: CharCount_1.CharCount
    }, {
        provide: Conts_1.Consts,
        useClass: Conts_1.Consts
    }];
/**
 Main application bootstrap
 @class Main
 **/
var Main = (function () {
    function Main(appStore, commBroker, styleService, appdbAction, _http, viewContainerRef) {
        var _this = this;
        this.appStore = appStore;
        this.commBroker = commBroker;
        this.appdbAction = appdbAction;
        this._http = _http;
        this.viewContainerRef = viewContainerRef;
        appStore.dispatch(appdbAction.appStartTime());
        this.m_styleService = styleService;
        this.commBroker.setService(Conts_1.Consts.Services().App, this);
        Observable_1.Observable.fromEvent(window, 'resize').debounceTime(250).subscribe(function () {
            _this.appResized();
        });
    }
    /**
     On application resize deal with height changes
     @method appResized
     **/
    Main.prototype.appResized = function () {
        var appHeight = document.body.clientHeight;
        var appWidth = document.body.clientWidth;
        //console.log('resized ' + appHeight);
        jQuery(Conts_1.Consts.Elems().APP_NAVIGATOR_EVER).height(appHeight - 115);
        jQuery(Conts_1.Consts.Elems().APP_NAVIGATOR_WASP).height(appHeight - 115);
        jQuery(Conts_1.Consts.Clas().CLASS_APP_HEIGHT).height(appHeight - 420);
        jQuery('#mainPanelWrap').height(appHeight - 115);
        jQuery('#propPanel').height(appHeight - 130);
        this.commBroker.setValue(Conts_1.Consts.Values().APP_SIZE, {
            height: appHeight,
            width: appWidth
        });
        this.commBroker.fire({
            fromInstance: self,
            event: Conts_1.Consts.Events().WIN_SIZED,
            context: '',
            message: {
                height: appHeight,
                width: appWidth
            }
        });
    };
    Main = __decorate([
        core_1.Component({
            selector: 'app',
            moduleId: __moduleName,
            encapsulation: core_1.ViewEncapsulation.Emulated,
            providers: [StyleService_1.StyleService, AppdbAction_1.AppdbAction, providing],
            template: App_html_text_1.default
        })
    ], Main);
    return Main;
}());
exports.Main = Main;
if (!Lib_1.Lib.DevMode())
    core_1.enableProdMode();
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng2_bootstrap_1.ModalModule, SharedModule_1.SharedModule.forRoot(), App_routes_1.routing],
            providers: [
                LogoutDeactivate_1.LogoutDeactivate,
                ErrorLogService_1.ErrorLogService,
                // CAUTION: This providers collection overrides the CORE ErrorHandler with our
                // custom version of the service that logs errors to the ErrorLogService.
                LoggingErrorHandlerOptions_1.LOGGING_ERROR_HANDLER_PROVIDERS,
                // OPTIONAL: By default, our custom LoggingErrorHandler has behavior around
                // rethrowing and / or unwrapping errors. In order to facilitate dependency-
                // injection instead of resorting to the use of a Factory for instantiation,
                // these options can be overridden in the providers collection.
                {
                    provide: LoggingErrorHandlerOptions_1.LOGGING_ERROR_HANDLER_OPTIONS,
                    useValue: {
                        rethrowError: false,
                        unwrapError: false
                    }
                }],
            entryComponents: [DynaFactoryResHelloWorld_1.DynaFactoryResHelloWorld],
            declarations: [Main, Welcome_1.Welcome, Digg_1.Digg, Todos_1.Todos, Settings_1.Settings, LoginPanel_1.LoginPanel, Help_1.Help, App1_1.App1, App2_1.App2, App3_1.App3, ForgotPass_1.ForgotPass, AppManager_1.AppManager, EntryPanel_1.EntryPanel, Logout_1.Logout, make_draggable_directive_1.MakeDraggable, make_droppable_directive_1.MakeDroppable, Sliderpanel_1.Sliderpanel, Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList, CharCount_1.CharCount, SortBy_1.SortBy, OrderBy_1.OrderBy, Filemenu_1.Filemenu, FilemenuItem_1.FilemenuItem, Logo_1.Logo, Footer_1.Footer, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, contributors_1.Contributors, Todos_1.Todos, Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList, Todoitem_1.TodoItem, Logout_1.Logout, Settings_1.Settings, tabs_1.Tabs, tab_1.Tab, Help_1.Help, MyChart_1.MyChart, ng2_bootstrap_1.AlertComponent, ng2_bootstrap_1.RatingComponent, tab_1.Tab, tabs_1.Tabs, contributors_1.Contributors, ng2_highcharts_1.Ng2Highcharts, Todoitem_1.TodoItem, Nodelogger_1.Nodelogger, DividerPanel_1.DividerPanel, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, Properties_1.Properties, Weather_1.Weather, Contact_1.Contact, ModalDialog_1.ModalDialog, Notes_1.Notes, Notes1_1.Notes1, Notes2_1.Notes2, Notes3_1.Notes3, Notes4_1.Notes4, Notes5_1.Notes5, Contact_1.Contact, ModalDialog_1.ModalDialog, CreateEmbedDiffer_1.CardComponent, InjectTemplateChild_1.InjectTemplateChild, DisplayError_1.DisplayError, CounterInputComponent_1.CounterInputComponent, TrimmedInput_1.TrimmedInput, Myip_1.MyIp, ModalDialog_1.ModalDialog, Minitab_1.Minitab, Minitabs_1.Minitabs, StarWarsSearch_1.StarWarsSearch, WikiSearch_1.WikiSearch, InfinityScroll_1.InfinityScroll, Clock_1.Clock, MultiSlotTransclusion_1.MultiSlotTransclusion, EmbedView_1.EmbedView, CompElemBuilder_1.CompElemBuilder, CreateEmbedDiffer_1.CreateEmbedDiffer, ToggleButton_1.ToggleButtonApp, StreamButton_1.StreamButton, ngBookRepeat_1.ngBookRepeatSample, CountDown_1.CountDown, InjectTemplateParent_1.InjectTemplateParent, tooltip_component_1.TooltipDirective, optionlistcomponent_1.OptionListComponent, NotesDetails_1.NotesDetails, NotesDetailsItems_1.NotesDetailsItems, StreamButton_1.IncrementingDisplay, StreamButton_1.ToggleBut, ToggleButton_1.ToggleButton, Notes1Props_1.Notes1Props, SortableHeader_1.SortableHeader, starwars_1.Starwars, shopping_component_1.ShoppingComponent, admin_component_1.AdminComponent, films_component_1.FilmsComponent, users_view_1.UsersView, user_view_1.UserView, ng2_highcharts_1.Ng2Highcharts, ng2_highstocks_1.Ng2Highstocks, ng2_highmaps_1.Ng2Highmaps, film_selection_view_1.FilmSelectionView, film_view_1.FilmView, parts_view_1.PartsView, cart_view_1.CartView, add_part_view_1.AddPartsView, Simplelist_1.SimpleList, accordion_1.Accordion, accordion_1.AccordionGroup, button_checkbox_component_1.ButtonCheckbox, button_radio_component_1.ButtonRadio, ngBookRepeat_1.ngBookRepeat, HeightDirective_1.HeightDirective, DynaFactoryRes_1.DynaFactoryRes, PureDialog_1.PureDialog, PureDialogDirective_1.PureDialogDirective, DynaFactoryResHelloWorld_1.DynaFactoryResHelloWorld, AnimateCards_1.AnimateCards, AnimateBox_1.AnimateBox, dynamic_app_1.DynamicApp, hello_world_component_1.default, world_hello_component_1.default, dynamic_component_1.default, ContentHeros_1.ContentHero, ContentHeros_1.ContentHeroes, content_bar_app_1.ContentBarApp, bar_editor_component_1.BarEditorComponent, editor_component_1.EditorComponent, foo_editor_component_1.FooEditorComponent, SwitchComponent_1.SwitchComponent, ShowHideDirective_1.ShowHideDirective, Breadcrumb_1.BreadcrumbComponent, Mousewheel_1.MouseWheelDirective],
            bootstrap: [Main],
        })
    ], App);
    return App;
}());
exports.App = App;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(App, providing).then(function (appRef) {
    AppInjService_1.appInjService(appRef.injector);
});
window['hr'] && window['hr'].on('change', function (fileName) {
    if (fileName.indexOf('html') !== -1) {
        var newBody = document.createElement('body');
        newBody.appendChild(document.createElement('app'));
        document.body = newBody;
        platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(App, providing).then(function (appRef) {
            AppInjService_1.appInjService(appRef.injector);
        });
    }
});
