System.register(["zone.js/dist/zone", "zone.js/dist/long-stack-trace-zone", "reflect-metadata", "@angular/platform-browser-dynamic", "@angular/core", "twbs/bootstrap", "twbs/bootstrap/dist/css/bootstrap.css!", "./styles/style.css!", "./pipes/CharCount", "./services/AppInjService", "@angular/http", "../src/services/CommBroker", "../src/comps/filemenu/Filemenu", "../src/comps/filemenu/FilemenuItem", "./comps/logo/Logo", "./comps/footer/Footer", "../src/Conts", "./styles/StyleService", "angular2-redux-util", "./Lib", "rxjs/Observable", "rxjs/add/operator/map", "rxjs/add/operator/debounceTime", "rxjs/add/observable/fromEvent", "./comps/app3/starwars/reducers/parts-reducer", "./comps/app3/starwars/reducers/cart-reducer", "./comps/app3/starwars/reducers/films-reducer", "./comps/app3/starwars/reducers/users-reducer", "./reducers/NotifyReducer", "./reducers/AppdbReducer", "./comps/app1/todos/reducers/TodoReducer", "./actions/AppdbAction", "./App.routes", "./comps/logout/LogoutDeactivate", "./comps/tooltip/position.service", "@angular/platform-browser", "./comps/welcome/Welcome", "./comps/digg/Digg", "./comps/app1/todos/Todos", "./comps/app1/settings/Settings", "./comps/entry/LoginPanel", "./comps/app1/help/Help", "./comps/app1/App1", "./comps/app2/App2", "./comps/app3/App3", "./comps/entry/ForgotPass", "./comps/appmanager/AppManager", "./comps/entry/EntryPanel", "./comps/logout/Logout", "./comps/dragndrop/make-draggable.directive", "./comps/dragndrop/make-droppable.directive", "./comps/sliderpanel/Sliderpanel", "./comps/app1/todos/Todo1", "./comps/app1/todos/Todo2", "./comps/app1/todos/Todolist", "./pipes/SortBy", "./pipes/OrderBy", "./comps/sidemenu/Menu", "./comps/sidemenu/MenuItem", "./comps/app1/help/contributors/contributors", "./comps/app1/todos/Todoitem", "./comps/tabs/tabs", "./comps/tabs/tab", "ng2-bootstrap", "./comps/app1/help/contributors/MyChart", "./comps/ng2-highcharts/src/directives/ng2-highcharts", "./comps/nodelogger/Nodelogger", "./comps/dividerpanel/DividerPanel", "./comps/app2/properties/Properties", "./comps/app2/weather/Weather", "./comps/app2/contact/Contact", "./comps/modaldialog/ModalDialog", "./comps/app2/notes/Notes", "./comps/app2/notes/Notes3", "./comps/app2/notes/Notes4", "./comps/app2/notes/Notes5", "./comps/app2/notes/Notes1", "./comps/app2/notes/Notes2", "./comps/app2/notes/CreateEmbedDiffer", "./comps/app2/notes/InjectTemplateChild", "./comps/displayerror/DisplayError", "./comps/counterinputcomponent/CounterInputComponent", "./comps/myip/Myip", "./comps/trimmedinput/TrimmedInput", "./comps/minitabs/Minitab", "./comps/minitabs/Minitabs", "./comps/app2/notes/StarWarsSearch", "./comps/app2/notes/WikiSearch", "./comps/app2/notes/InfinityScroll", "./comps/app2/notes/MultiSlotTransclusion", "./comps/app2/notes/Clock", "./comps/app2/notes/CompElemBuilder", "./comps/app2/notes/EmbedView", "./comps/app2/notes/ToggleButton", "./comps/app2/notes/StreamButton", "./comps/ngForIf/ngBookRepeat", "./comps/app2/notes/InjectTemplateParent", "./comps/optionlistcomponent/optionlistcomponent", "./comps/app2/notes/NotesDetailsItems", "./comps/app2/notes/NotesDetails", "./comps/countdown/CountDown", "./comps/app2/notes/Notes1Props", "./comps/app2/weather/SortableHeader", "./comps/app3/starwars/components/films-component", "./comps/app3/starwars/components/admin-component", "./comps/app3/starwars/components/shopping-component", "./comps/app3/starwars/Starwars", "./comps/app3/starwars/components/users-view", "./comps/app3/starwars/components/cart-view", "./comps/app3/starwars/components/add-part-view", "./comps/simplelist/Simplelist", "./comps/app3/starwars/components/user-view", "./comps/app3/starwars/components/film-selection-view", "./comps/app3/starwars/components/film-view", "./comps/ng2-highcharts/src/directives/ng2-highstocks", "./comps/ng2-highcharts/src/directives/ng2-highmaps", "./comps/app3/starwars/components/parts-view", "./comps/ng2Accordion/accordion", "./comps/ng2button/button-checkbox.component", "./comps/ng2button/button-radio.component", "./comps/tooltip/tooltip.component", "./comps/heightdirective/HeightDirective", "./comps/app1/lazyone/SharedModule", "./comps/app2/notes/DynaFactoryRes", "./comps/app2/notes/DynaFactoryResHelloWorld", "./comps/puredialog/PureDialog", "./comps/puredialog/PureDialogDirective", "./services/errorhandler/LoggingErrorHandlerOptions", "./services/errorhandler/ErrorLogService", "./comps/app2/notes/AnimateCards", "./comps/app2/notes/AnimateBox", './App.html!text'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var platform_browser_dynamic_1, core_1, CharCount_1, AppInjService_1, http_1, CommBroker_1, Filemenu_1, FilemenuItem_1, Logo_1, Footer_1, Conts_1, StyleService_1, angular2_redux_util_1, Lib_1, Observable_1, parts_reducer_1, cart_reducer_1, films_reducer_1, users_reducer_1, NotifyReducer_1, AppdbReducer_1, TodoReducer_1, AppdbAction_1, App_routes_1, LogoutDeactivate_1, position_service_1, platform_browser_1, Welcome_1, Digg_1, Todos_1, Settings_1, LoginPanel_1, Help_1, App1_1, App2_1, App3_1, ForgotPass_1, AppManager_1, EntryPanel_1, Logout_1, make_draggable_directive_1, make_droppable_directive_1, Sliderpanel_1, Todo1_1, Todo2_1, Todolist_1, SortBy_1, OrderBy_1, Menu_1, MenuItem_1, contributors_1, Todoitem_1, tabs_1, tab_1, ng2_bootstrap_1, MyChart_1, ng2_highcharts_1, Nodelogger_1, DividerPanel_1, Properties_1, Weather_1, Contact_1, ModalDialog_1, Notes_1, Notes3_1, Notes4_1, Notes5_1, Notes1_1, Notes2_1, CreateEmbedDiffer_1, InjectTemplateChild_1, DisplayError_1, CounterInputComponent_1, Myip_1, TrimmedInput_1, Minitab_1, Minitabs_1, StarWarsSearch_1, WikiSearch_1, InfinityScroll_1, MultiSlotTransclusion_1, Clock_1, CompElemBuilder_1, EmbedView_1, ToggleButton_1, StreamButton_1, ngBookRepeat_1, InjectTemplateParent_1, optionlistcomponent_1, NotesDetailsItems_1, NotesDetails_1, CountDown_1, Notes1Props_1, SortableHeader_1, films_component_1, admin_component_1, shopping_component_1, Starwars_1, users_view_1, cart_view_1, add_part_view_1, Simplelist_1, user_view_1, film_selection_view_1, film_view_1, ng2_highstocks_1, ng2_highmaps_1, parts_view_1, accordion_1, button_checkbox_component_1, button_radio_component_1, tooltip_component_1, HeightDirective_1, SharedModule_1, DynaFactoryRes_1, DynaFactoryResHelloWorld_1, PureDialog_1, PureDialogDirective_1, LoggingErrorHandlerOptions_1, ErrorLogService_1, AnimateCards_1, AnimateBox_1, App_html_text_1;
    var providing, Main, App;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (CharCount_1_1) {
                CharCount_1 = CharCount_1_1;
            },
            function (AppInjService_1_1) {
                AppInjService_1 = AppInjService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (CommBroker_1_1) {
                CommBroker_1 = CommBroker_1_1;
            },
            function (Filemenu_1_1) {
                Filemenu_1 = Filemenu_1_1;
            },
            function (FilemenuItem_1_1) {
                FilemenuItem_1 = FilemenuItem_1_1;
            },
            function (Logo_1_1) {
                Logo_1 = Logo_1_1;
            },
            function (Footer_1_1) {
                Footer_1 = Footer_1_1;
            },
            function (Conts_1_1) {
                Conts_1 = Conts_1_1;
            },
            function (StyleService_1_1) {
                StyleService_1 = StyleService_1_1;
            },
            function (angular2_redux_util_1_1) {
                angular2_redux_util_1 = angular2_redux_util_1_1;
            },
            function (Lib_1_1) {
                Lib_1 = Lib_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_7) {},
            function (_8) {},
            function (_9) {},
            function (parts_reducer_1_1) {
                parts_reducer_1 = parts_reducer_1_1;
            },
            function (cart_reducer_1_1) {
                cart_reducer_1 = cart_reducer_1_1;
            },
            function (films_reducer_1_1) {
                films_reducer_1 = films_reducer_1_1;
            },
            function (users_reducer_1_1) {
                users_reducer_1 = users_reducer_1_1;
            },
            function (NotifyReducer_1_1) {
                NotifyReducer_1 = NotifyReducer_1_1;
            },
            function (AppdbReducer_1_1) {
                AppdbReducer_1 = AppdbReducer_1_1;
            },
            function (TodoReducer_1_1) {
                TodoReducer_1 = TodoReducer_1_1;
            },
            function (AppdbAction_1_1) {
                AppdbAction_1 = AppdbAction_1_1;
            },
            function (App_routes_1_1) {
                App_routes_1 = App_routes_1_1;
            },
            function (LogoutDeactivate_1_1) {
                LogoutDeactivate_1 = LogoutDeactivate_1_1;
            },
            function (position_service_1_1) {
                position_service_1 = position_service_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (Welcome_1_1) {
                Welcome_1 = Welcome_1_1;
            },
            function (Digg_1_1) {
                Digg_1 = Digg_1_1;
            },
            function (Todos_1_1) {
                Todos_1 = Todos_1_1;
            },
            function (Settings_1_1) {
                Settings_1 = Settings_1_1;
            },
            function (LoginPanel_1_1) {
                LoginPanel_1 = LoginPanel_1_1;
            },
            function (Help_1_1) {
                Help_1 = Help_1_1;
            },
            function (App1_1_1) {
                App1_1 = App1_1_1;
            },
            function (App2_1_1) {
                App2_1 = App2_1_1;
            },
            function (App3_1_1) {
                App3_1 = App3_1_1;
            },
            function (ForgotPass_1_1) {
                ForgotPass_1 = ForgotPass_1_1;
            },
            function (AppManager_1_1) {
                AppManager_1 = AppManager_1_1;
            },
            function (EntryPanel_1_1) {
                EntryPanel_1 = EntryPanel_1_1;
            },
            function (Logout_1_1) {
                Logout_1 = Logout_1_1;
            },
            function (make_draggable_directive_1_1) {
                make_draggable_directive_1 = make_draggable_directive_1_1;
            },
            function (make_droppable_directive_1_1) {
                make_droppable_directive_1 = make_droppable_directive_1_1;
            },
            function (Sliderpanel_1_1) {
                Sliderpanel_1 = Sliderpanel_1_1;
            },
            function (Todo1_1_1) {
                Todo1_1 = Todo1_1_1;
            },
            function (Todo2_1_1) {
                Todo2_1 = Todo2_1_1;
            },
            function (Todolist_1_1) {
                Todolist_1 = Todolist_1_1;
            },
            function (SortBy_1_1) {
                SortBy_1 = SortBy_1_1;
            },
            function (OrderBy_1_1) {
                OrderBy_1 = OrderBy_1_1;
            },
            function (Menu_1_1) {
                Menu_1 = Menu_1_1;
            },
            function (MenuItem_1_1) {
                MenuItem_1 = MenuItem_1_1;
            },
            function (contributors_1_1) {
                contributors_1 = contributors_1_1;
            },
            function (Todoitem_1_1) {
                Todoitem_1 = Todoitem_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (tab_1_1) {
                tab_1 = tab_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (MyChart_1_1) {
                MyChart_1 = MyChart_1_1;
            },
            function (ng2_highcharts_1_1) {
                ng2_highcharts_1 = ng2_highcharts_1_1;
            },
            function (Nodelogger_1_1) {
                Nodelogger_1 = Nodelogger_1_1;
            },
            function (DividerPanel_1_1) {
                DividerPanel_1 = DividerPanel_1_1;
            },
            function (Properties_1_1) {
                Properties_1 = Properties_1_1;
            },
            function (Weather_1_1) {
                Weather_1 = Weather_1_1;
            },
            function (Contact_1_1) {
                Contact_1 = Contact_1_1;
            },
            function (ModalDialog_1_1) {
                ModalDialog_1 = ModalDialog_1_1;
            },
            function (Notes_1_1) {
                Notes_1 = Notes_1_1;
            },
            function (Notes3_1_1) {
                Notes3_1 = Notes3_1_1;
            },
            function (Notes4_1_1) {
                Notes4_1 = Notes4_1_1;
            },
            function (Notes5_1_1) {
                Notes5_1 = Notes5_1_1;
            },
            function (Notes1_1_1) {
                Notes1_1 = Notes1_1_1;
            },
            function (Notes2_1_1) {
                Notes2_1 = Notes2_1_1;
            },
            function (CreateEmbedDiffer_1_1) {
                CreateEmbedDiffer_1 = CreateEmbedDiffer_1_1;
            },
            function (InjectTemplateChild_1_1) {
                InjectTemplateChild_1 = InjectTemplateChild_1_1;
            },
            function (DisplayError_1_1) {
                DisplayError_1 = DisplayError_1_1;
            },
            function (CounterInputComponent_1_1) {
                CounterInputComponent_1 = CounterInputComponent_1_1;
            },
            function (Myip_1_1) {
                Myip_1 = Myip_1_1;
            },
            function (TrimmedInput_1_1) {
                TrimmedInput_1 = TrimmedInput_1_1;
            },
            function (Minitab_1_1) {
                Minitab_1 = Minitab_1_1;
            },
            function (Minitabs_1_1) {
                Minitabs_1 = Minitabs_1_1;
            },
            function (StarWarsSearch_1_1) {
                StarWarsSearch_1 = StarWarsSearch_1_1;
            },
            function (WikiSearch_1_1) {
                WikiSearch_1 = WikiSearch_1_1;
            },
            function (InfinityScroll_1_1) {
                InfinityScroll_1 = InfinityScroll_1_1;
            },
            function (MultiSlotTransclusion_1_1) {
                MultiSlotTransclusion_1 = MultiSlotTransclusion_1_1;
            },
            function (Clock_1_1) {
                Clock_1 = Clock_1_1;
            },
            function (CompElemBuilder_1_1) {
                CompElemBuilder_1 = CompElemBuilder_1_1;
            },
            function (EmbedView_1_1) {
                EmbedView_1 = EmbedView_1_1;
            },
            function (ToggleButton_1_1) {
                ToggleButton_1 = ToggleButton_1_1;
            },
            function (StreamButton_1_1) {
                StreamButton_1 = StreamButton_1_1;
            },
            function (ngBookRepeat_1_1) {
                ngBookRepeat_1 = ngBookRepeat_1_1;
            },
            function (InjectTemplateParent_1_1) {
                InjectTemplateParent_1 = InjectTemplateParent_1_1;
            },
            function (optionlistcomponent_1_1) {
                optionlistcomponent_1 = optionlistcomponent_1_1;
            },
            function (NotesDetailsItems_1_1) {
                NotesDetailsItems_1 = NotesDetailsItems_1_1;
            },
            function (NotesDetails_1_1) {
                NotesDetails_1 = NotesDetails_1_1;
            },
            function (CountDown_1_1) {
                CountDown_1 = CountDown_1_1;
            },
            function (Notes1Props_1_1) {
                Notes1Props_1 = Notes1Props_1_1;
            },
            function (SortableHeader_1_1) {
                SortableHeader_1 = SortableHeader_1_1;
            },
            function (films_component_1_1) {
                films_component_1 = films_component_1_1;
            },
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            },
            function (shopping_component_1_1) {
                shopping_component_1 = shopping_component_1_1;
            },
            function (Starwars_1_1) {
                Starwars_1 = Starwars_1_1;
            },
            function (users_view_1_1) {
                users_view_1 = users_view_1_1;
            },
            function (cart_view_1_1) {
                cart_view_1 = cart_view_1_1;
            },
            function (add_part_view_1_1) {
                add_part_view_1 = add_part_view_1_1;
            },
            function (Simplelist_1_1) {
                Simplelist_1 = Simplelist_1_1;
            },
            function (user_view_1_1) {
                user_view_1 = user_view_1_1;
            },
            function (film_selection_view_1_1) {
                film_selection_view_1 = film_selection_view_1_1;
            },
            function (film_view_1_1) {
                film_view_1 = film_view_1_1;
            },
            function (ng2_highstocks_1_1) {
                ng2_highstocks_1 = ng2_highstocks_1_1;
            },
            function (ng2_highmaps_1_1) {
                ng2_highmaps_1 = ng2_highmaps_1_1;
            },
            function (parts_view_1_1) {
                parts_view_1 = parts_view_1_1;
            },
            function (accordion_1_1) {
                accordion_1 = accordion_1_1;
            },
            function (button_checkbox_component_1_1) {
                button_checkbox_component_1 = button_checkbox_component_1_1;
            },
            function (button_radio_component_1_1) {
                button_radio_component_1 = button_radio_component_1_1;
            },
            function (tooltip_component_1_1) {
                tooltip_component_1 = tooltip_component_1_1;
            },
            function (HeightDirective_1_1) {
                HeightDirective_1 = HeightDirective_1_1;
            },
            function (SharedModule_1_1) {
                SharedModule_1 = SharedModule_1_1;
            },
            function (DynaFactoryRes_1_1) {
                DynaFactoryRes_1 = DynaFactoryRes_1_1;
            },
            function (DynaFactoryResHelloWorld_1_1) {
                DynaFactoryResHelloWorld_1 = DynaFactoryResHelloWorld_1_1;
            },
            function (PureDialog_1_1) {
                PureDialog_1 = PureDialog_1_1;
            },
            function (PureDialogDirective_1_1) {
                PureDialogDirective_1 = PureDialogDirective_1_1;
            },
            function (LoggingErrorHandlerOptions_1_1) {
                LoggingErrorHandlerOptions_1 = LoggingErrorHandlerOptions_1_1;
            },
            function (ErrorLogService_1_1) {
                ErrorLogService_1 = ErrorLogService_1_1;
            },
            function (AnimateCards_1_1) {
                AnimateCards_1 = AnimateCards_1_1;
            },
            function (AnimateBox_1_1) {
                AnimateBox_1 = AnimateBox_1_1;
            },
            function (App_html_text_1_1) {
                App_html_text_1 = App_html_text_1_1;
            }],
        execute: function() {
            providing = [{
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
                    provide: CommBroker_1.CommBroker,
                    useClass: CommBroker_1.CommBroker
                }, {
                    provide: CharCount_1.CharCount
                }, {
                    provide: Conts_1.Consts,
                    useClass: Conts_1.Consts
                }];
            Main = (function () {
                function Main(appStore, commBroker, styleService, appdbAction, _http) {
                    var _this = this;
                    this.appStore = appStore;
                    this.commBroker = commBroker;
                    this.appdbAction = appdbAction;
                    this._http = _http;
                    appStore.dispatch(appdbAction.appStartTime());
                    this.m_styleService = styleService;
                    this.commBroker.setService(Conts_1.Consts.Services().App, this);
                    Observable_1.Observable.fromEvent(window, 'resize').debounceTime(250).subscribe(function () {
                        _this.appResized();
                    });
                }
                Main.prototype.appResized = function () {
                    var appHeight = document.body.clientHeight;
                    var appWidth = document.body.clientWidth;
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
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof angular2_redux_util_1.AppStore !== 'undefined' && angular2_redux_util_1.AppStore) === 'function' && _a) || Object, CommBroker_1.CommBroker, StyleService_1.StyleService, AppdbAction_1.AppdbAction, (typeof (_b = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _b) || Object])
                ], Main);
                return Main;
                var _a, _b;
            }());
            exports_1("Main", Main);
            if (!Lib_1.Lib.DevMode())
                core_1.enableProdMode();
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, SharedModule_1.SharedModule.forRoot(), App_routes_1.routing],
                        providers: [
                            LogoutDeactivate_1.LogoutDeactivate,
                            ErrorLogService_1.ErrorLogService,
                            LoggingErrorHandlerOptions_1.LOGGING_ERROR_HANDLER_PROVIDERS,
                            {
                                provide: LoggingErrorHandlerOptions_1.LOGGING_ERROR_HANDLER_OPTIONS,
                                useValue: {
                                    rethrowError: false,
                                    unwrapError: false
                                }
                            }],
                        entryComponents: [DynaFactoryResHelloWorld_1.DynaFactoryResHelloWorld],
                        declarations: [Main, Welcome_1.Welcome, Digg_1.Digg, Todos_1.Todos, Settings_1.Settings, LoginPanel_1.LoginPanel, Help_1.Help, App1_1.App1, App2_1.App2, App3_1.App3, ForgotPass_1.ForgotPass, AppManager_1.AppManager, EntryPanel_1.EntryPanel, Logout_1.Logout, make_draggable_directive_1.MakeDraggable, make_droppable_directive_1.MakeDroppable, Sliderpanel_1.Sliderpanel, Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList, CharCount_1.CharCount, SortBy_1.SortBy, OrderBy_1.OrderBy, Filemenu_1.Filemenu, FilemenuItem_1.FilemenuItem, Logo_1.Logo, Footer_1.Footer, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, contributors_1.Contributors, Todos_1.Todos, Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList, Todoitem_1.TodoItem, Logout_1.Logout, Settings_1.Settings, tabs_1.Tabs, tab_1.Tab, Help_1.Help, MyChart_1.MyChart, ng2_bootstrap_1.AlertComponent, ng2_bootstrap_1.RatingComponent, tab_1.Tab, tabs_1.Tabs, contributors_1.Contributors, ng2_highcharts_1.Ng2Highcharts, Todoitem_1.TodoItem, Nodelogger_1.Nodelogger, DividerPanel_1.DividerPanel, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, Properties_1.Properties, Weather_1.Weather, Contact_1.Contact, ModalDialog_1.ModalDialog, Notes_1.Notes, Notes1_1.Notes1, Notes2_1.Notes2, Notes3_1.Notes3, Notes4_1.Notes4, Notes5_1.Notes5, Contact_1.Contact, ModalDialog_1.ModalDialog, CreateEmbedDiffer_1.CardComponent, InjectTemplateChild_1.InjectTemplateChild, DisplayError_1.DisplayError, CounterInputComponent_1.CounterInputComponent, TrimmedInput_1.TrimmedInput, Myip_1.MyIp, ModalDialog_1.ModalDialog, Minitab_1.Minitab, Minitabs_1.Minitabs, StarWarsSearch_1.StarWarsSearch, WikiSearch_1.WikiSearch, InfinityScroll_1.InfinityScroll, Clock_1.Clock, MultiSlotTransclusion_1.MultiSlotTransclusion, EmbedView_1.EmbedView, CompElemBuilder_1.CompElemBuilder, CreateEmbedDiffer_1.CreateEmbedDiffer, ToggleButton_1.ToggleButtonApp, StreamButton_1.StreamButton, ngBookRepeat_1.ngBookRepeatSample, CountDown_1.CountDown, InjectTemplateParent_1.InjectTemplateParent, tooltip_component_1.TooltipDirective, optionlistcomponent_1.OptionListComponent, NotesDetails_1.NotesDetails, NotesDetailsItems_1.NotesDetailsItems, StreamButton_1.IncrementingDisplay, StreamButton_1.ToggleBut, ToggleButton_1.ToggleButton, Notes1Props_1.Notes1Props, SortableHeader_1.SortableHeader, Starwars_1.Starwars, shopping_component_1.ShoppingComponent, admin_component_1.AdminComponent, films_component_1.FilmsComponent, users_view_1.UsersView, user_view_1.UserView, ng2_highcharts_1.Ng2Highcharts, ng2_highstocks_1.Ng2Highstocks, ng2_highmaps_1.Ng2Highmaps, film_selection_view_1.FilmSelectionView, film_view_1.FilmView, parts_view_1.PartsView, cart_view_1.CartView, add_part_view_1.AddPartsView, Simplelist_1.SimpleList, accordion_1.Accordion, accordion_1.AccordionGroup, button_checkbox_component_1.ButtonCheckbox, button_radio_component_1.ButtonRadio, ngBookRepeat_1.ngBookRepeat, HeightDirective_1.HeightDirective, DynaFactoryRes_1.DynaFactoryRes, PureDialog_1.PureDialog, PureDialogDirective_1.PureDialogDirective, DynaFactoryResHelloWorld_1.DynaFactoryResHelloWorld, AnimateCards_1.AnimateCards, AnimateBox_1.AnimateBox],
                        bootstrap: [Main],
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
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
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBZ0xJLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBVCxTQUFTLEdBQUcsQ0FBQztvQkFDYixPQUFPLEVBQUUsOEJBQVE7b0JBQ2pCLFVBQVUsRUFBRSxTQUFHLENBQUMsWUFBWSxDQUFDO3dCQUN6QixRQUFBLHVCQUFNO3dCQUNOLE9BQUEsc0JBQUs7d0JBQ0wsT0FBQSx1QkFBSzt3QkFDTCxNQUFBLHNCQUFJO3dCQUNKLE9BQUEsdUJBQUs7d0JBQ0wsT0FBQSx1QkFBSzt3QkFDTCxPQUFBLG1CQUFLO3FCQUNSLENBQUM7aUJBQ0wsRUFBRTtvQkFDQyxPQUFPLEVBQUUsa0NBQWU7b0JBQ3hCLFFBQVEsRUFBRSxrQ0FBZTtpQkFDNUIsRUFBRTtvQkFDQyxPQUFPLEVBQUUsdUJBQVU7b0JBQ25CLFFBQVEsRUFBRSx1QkFBVTtpQkFDdkIsRUFBRTtvQkFDQyxPQUFPLEVBQUUscUJBQVM7aUJBQ3JCLEVBQUU7b0JBQ0MsT0FBTyxFQUFFLGNBQU07b0JBQ2YsUUFBUSxFQUFFLGNBQU07aUJBQ25CLENBQUMsQ0FBQztZQWNIO2dCQUdJ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d0I7Z0JBQ25GLDZCQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsUUFBUTtnQkFDL0MsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7b0JBQzVDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO29CQUNsRCxRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztvQkFDeEIsaURBQXNCLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQXdCO3dCQUNuRiw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDbkMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFBIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBMaWNlbnNlIE1JVFxyXG4gKiovXHJcblxyXG5pbXBvcnQgXCJ6b25lLmpzL2Rpc3Qvem9uZVwiO1xyXG5pbXBvcnQgXCJ6b25lLmpzL2Rpc3QvbG9uZy1zdGFjay10cmFjZS16b25lXCI7XHJcbmltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcclxuaW1wb3J0IHtwbGF0Zm9ybUJyb3dzZXJEeW5hbWljfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljXCI7XHJcbmltcG9ydCB7XHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgZW5hYmxlUHJvZE1vZGUsXHJcbiAgICBOZ01vZHVsZVJlZixcclxuICAgIE5nTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IFwidHdicy9ib290c3RyYXBcIjtcclxuaW1wb3J0IFwidHdicy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyFcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzIVwiO1xyXG5pbXBvcnQge0NoYXJDb3VudH0gZnJvbSBcIi4vcGlwZXMvQ2hhckNvdW50XCI7XHJcbmltcG9ydCB7YXBwSW5qU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvQXBwSW5qU2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgSnNvbnBNb2R1bGUsXHJcbiAgICBIdHRwTW9kdWxlLFxyXG4gICAgSHR0cFxyXG59IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7Q29tbUJyb2tlcn0gZnJvbSBcIi4uL3NyYy9zZXJ2aWNlcy9Db21tQnJva2VyXCI7XHJcbmltcG9ydCB7RmlsZW1lbnV9IGZyb20gXCIuLi9zcmMvY29tcHMvZmlsZW1lbnUvRmlsZW1lbnVcIjtcclxuaW1wb3J0IHtGaWxlbWVudUl0ZW19IGZyb20gXCIuLi9zcmMvY29tcHMvZmlsZW1lbnUvRmlsZW1lbnVJdGVtXCI7XHJcbmltcG9ydCB7TG9nb30gZnJvbSBcIi4vY29tcHMvbG9nby9Mb2dvXCI7XHJcbmltcG9ydCB7Rm9vdGVyfSBmcm9tIFwiLi9jb21wcy9mb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCB7Q29uc3RzfSBmcm9tIFwiLi4vc3JjL0NvbnRzXCI7XHJcbmltcG9ydCB7U3R5bGVTZXJ2aWNlfSBmcm9tIFwiLi9zdHlsZXMvU3R5bGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXBwU3RvcmV9IGZyb20gXCJhbmd1bGFyMi1yZWR1eC11dGlsXCI7XHJcbmltcG9ydCB7TGlifSBmcm9tIFwiLi9MaWJcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnRcIjtcclxuaW1wb3J0IHBhcnRzIGZyb20gXCIuL2NvbXBzL2FwcDMvc3RhcndhcnMvcmVkdWNlcnMvcGFydHMtcmVkdWNlclwiO1xyXG5pbXBvcnQgY2FydCBmcm9tIFwiLi9jb21wcy9hcHAzL3N0YXJ3YXJzL3JlZHVjZXJzL2NhcnQtcmVkdWNlclwiO1xyXG5pbXBvcnQgZmlsbXMgZnJvbSBcIi4vY29tcHMvYXBwMy9zdGFyd2Fycy9yZWR1Y2Vycy9maWxtcy1yZWR1Y2VyXCI7XHJcbmltcG9ydCB1c2VycyBmcm9tIFwiLi9jb21wcy9hcHAzL3N0YXJ3YXJzL3JlZHVjZXJzL3VzZXJzLXJlZHVjZXJcIjtcclxuaW1wb3J0IG5vdGlmeSBmcm9tIFwiLi9yZWR1Y2Vycy9Ob3RpZnlSZWR1Y2VyXCI7XHJcbmltcG9ydCBhcHBkYiBmcm9tIFwiLi9yZWR1Y2Vycy9BcHBkYlJlZHVjZXJcIjtcclxuaW1wb3J0IHt0b2Rvc30gZnJvbSBcIi4vY29tcHMvYXBwMS90b2Rvcy9yZWR1Y2Vycy9Ub2RvUmVkdWNlclwiO1xyXG5pbXBvcnQge0FwcGRiQWN0aW9ufSBmcm9tIFwiLi9hY3Rpb25zL0FwcGRiQWN0aW9uXCI7XHJcbmltcG9ydCB7cm91dGluZ30gZnJvbSBcIi4vQXBwLnJvdXRlc1wiO1xyXG5pbXBvcnQge0xvZ291dERlYWN0aXZhdGV9IGZyb20gXCIuL2NvbXBzL2xvZ291dC9Mb2dvdXREZWFjdGl2YXRlXCI7XHJcbmltcG9ydCB7UG9zaXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9jb21wcy90b29sdGlwL3Bvc2l0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG4vLyBpbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tIFwibmcyLWJzMy1tb2RhbC9jb21wb25lbnRzL21vZGFsXCI7XHJcbmltcG9ydCB7V2VsY29tZX0gZnJvbSBcIi4vY29tcHMvd2VsY29tZS9XZWxjb21lXCI7XHJcbmltcG9ydCB7RGlnZ30gZnJvbSBcIi4vY29tcHMvZGlnZy9EaWdnXCI7XHJcbmltcG9ydCB7VG9kb3N9IGZyb20gXCIuL2NvbXBzL2FwcDEvdG9kb3MvVG9kb3NcIjtcclxuaW1wb3J0IHtTZXR0aW5nc30gZnJvbSBcIi4vY29tcHMvYXBwMS9zZXR0aW5ncy9TZXR0aW5nc1wiO1xyXG5pbXBvcnQge0xvZ2luUGFuZWx9IGZyb20gXCIuL2NvbXBzL2VudHJ5L0xvZ2luUGFuZWxcIjtcclxuaW1wb3J0IHtIZWxwfSBmcm9tIFwiLi9jb21wcy9hcHAxL2hlbHAvSGVscFwiO1xyXG5pbXBvcnQge0FwcDF9IGZyb20gXCIuL2NvbXBzL2FwcDEvQXBwMVwiO1xyXG5pbXBvcnQge0FwcDJ9IGZyb20gXCIuL2NvbXBzL2FwcDIvQXBwMlwiO1xyXG5pbXBvcnQge0FwcDN9IGZyb20gXCIuL2NvbXBzL2FwcDMvQXBwM1wiO1xyXG5pbXBvcnQge0ZvcmdvdFBhc3N9IGZyb20gXCIuL2NvbXBzL2VudHJ5L0ZvcmdvdFBhc3NcIjtcclxuaW1wb3J0IHtBcHBNYW5hZ2VyfSBmcm9tIFwiLi9jb21wcy9hcHBtYW5hZ2VyL0FwcE1hbmFnZXJcIjtcclxuaW1wb3J0IHtFbnRyeVBhbmVsfSBmcm9tIFwiLi9jb21wcy9lbnRyeS9FbnRyeVBhbmVsXCI7XHJcbmltcG9ydCB7TG9nb3V0fSBmcm9tIFwiLi9jb21wcy9sb2dvdXQvTG9nb3V0XCI7XHJcbmltcG9ydCB7TWFrZURyYWdnYWJsZX0gZnJvbSBcIi4vY29tcHMvZHJhZ25kcm9wL21ha2UtZHJhZ2dhYmxlLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge01ha2VEcm9wcGFibGV9IGZyb20gXCIuL2NvbXBzL2RyYWduZHJvcC9tYWtlLWRyb3BwYWJsZS5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHtTbGlkZXJwYW5lbH0gZnJvbSBcIi4vY29tcHMvc2xpZGVycGFuZWwvU2xpZGVycGFuZWxcIjtcclxuaW1wb3J0IHtUb2RvMX0gZnJvbSBcIi4vY29tcHMvYXBwMS90b2Rvcy9Ub2RvMVwiO1xyXG5pbXBvcnQge1RvZG8yfSBmcm9tIFwiLi9jb21wcy9hcHAxL3RvZG9zL1RvZG8yXCI7XHJcbmltcG9ydCB7VG9kb0xpc3R9IGZyb20gXCIuL2NvbXBzL2FwcDEvdG9kb3MvVG9kb2xpc3RcIjtcclxuaW1wb3J0IHtTb3J0Qnl9IGZyb20gXCIuL3BpcGVzL1NvcnRCeVwiO1xyXG5pbXBvcnQge09yZGVyQnl9IGZyb20gXCIuL3BpcGVzL09yZGVyQnlcIjtcclxuaW1wb3J0IHtNZW51fSBmcm9tIFwiLi9jb21wcy9zaWRlbWVudS9NZW51XCI7XHJcbmltcG9ydCB7TWVudUl0ZW19IGZyb20gXCIuL2NvbXBzL3NpZGVtZW51L01lbnVJdGVtXCI7XHJcbmltcG9ydCB7Q29udHJpYnV0b3JzfSBmcm9tIFwiLi9jb21wcy9hcHAxL2hlbHAvY29udHJpYnV0b3JzL2NvbnRyaWJ1dG9yc1wiO1xyXG5pbXBvcnQge1RvZG9JdGVtfSBmcm9tIFwiLi9jb21wcy9hcHAxL3RvZG9zL1RvZG9pdGVtXCI7XHJcbmltcG9ydCB7VGFic30gZnJvbSBcIi4vY29tcHMvdGFicy90YWJzXCI7XHJcbmltcG9ydCB7VGFifSBmcm9tIFwiLi9jb21wcy90YWJzL3RhYlwiO1xyXG5pbXBvcnQge1xyXG4gICAgQWxlcnRDb21wb25lbnQsXHJcbiAgICBSYXRpbmdDb21wb25lbnRcclxufSBmcm9tIFwibmcyLWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge015Q2hhcnR9IGZyb20gXCIuL2NvbXBzL2FwcDEvaGVscC9jb250cmlidXRvcnMvTXlDaGFydFwiO1xyXG5pbXBvcnQge05nMkhpZ2hjaGFydHN9IGZyb20gXCIuL2NvbXBzL25nMi1oaWdoY2hhcnRzL3NyYy9kaXJlY3RpdmVzL25nMi1oaWdoY2hhcnRzXCI7XHJcbmltcG9ydCB7Tm9kZWxvZ2dlcn0gZnJvbSBcIi4vY29tcHMvbm9kZWxvZ2dlci9Ob2RlbG9nZ2VyXCI7XHJcbmltcG9ydCB7RGl2aWRlclBhbmVsfSBmcm9tIFwiLi9jb21wcy9kaXZpZGVycGFuZWwvRGl2aWRlclBhbmVsXCI7XHJcbmltcG9ydCB7UHJvcGVydGllc30gZnJvbSBcIi4vY29tcHMvYXBwMi9wcm9wZXJ0aWVzL1Byb3BlcnRpZXNcIjtcclxuaW1wb3J0IHtXZWF0aGVyfSBmcm9tIFwiLi9jb21wcy9hcHAyL3dlYXRoZXIvV2VhdGhlclwiO1xyXG5pbXBvcnQge0NvbnRhY3R9IGZyb20gXCIuL2NvbXBzL2FwcDIvY29udGFjdC9Db250YWN0XCI7XHJcbmltcG9ydCB7TW9kYWxEaWFsb2d9IGZyb20gXCIuL2NvbXBzL21vZGFsZGlhbG9nL01vZGFsRGlhbG9nXCI7XHJcbmltcG9ydCB7Tm90ZXN9IGZyb20gXCIuL2NvbXBzL2FwcDIvbm90ZXMvTm90ZXNcIjtcclxuaW1wb3J0IHtOb3RlczN9IGZyb20gXCIuL2NvbXBzL2FwcDIvbm90ZXMvTm90ZXMzXCI7XHJcbmltcG9ydCB7Tm90ZXM0fSBmcm9tIFwiLi9jb21wcy9hcHAyL25vdGVzL05vdGVzNFwiO1xyXG5pbXBvcnQge05vdGVzNX0gZnJvbSBcIi4vY29tcHMvYXBwMi9ub3Rlcy9Ob3RlczVcIjtcclxuaW1wb3J0IHtOb3RlczF9IGZyb20gXCIuL2NvbXBzL2FwcDIvbm90ZXMvTm90ZXMxXCI7XHJcbmltcG9ydCB7Tm90ZXMyfSBmcm9tIFwiLi9jb21wcy9hcHAyL25vdGVzL05vdGVzMlwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ2FyZENvbXBvbmVudCxcclxuICAgIENyZWF0ZUVtYmVkRGlmZmVyXHJcbn0gZnJvbSBcIi4vY29tcHMvYXBwMi9ub3Rlcy9DcmVhdGVFbWJlZERpZmZlclwiO1xyXG5pbXBvcnQge0luamVjdFRlbXBsYXRlQ2hpbGR9IGZyb20gXCIuL2NvbXBzL2FwcDIvbm90ZXMvSW5qZWN0VGVtcGxhdGVDaGlsZFwiO1xyXG5pbXBvcnQge0Rpc3BsYXlFcnJvcn0gZnJvbSBcIi4vY29tcHMvZGlzcGxheWVycm9yL0Rpc3BsYXlFcnJvclwiO1xyXG5pbXBvcnQge0NvdW50ZXJJbnB1dENvbXBvbmVudH0gZnJvbSBcIi4vY29tcHMvY291bnRlcmlucHV0Y29tcG9uZW50L0NvdW50ZXJJbnB1dENvbXBvbmVudFwiO1xyXG5pbXBvcnQge015SXB9IGZyb20gXCIuL2NvbXBzL215aXAvTXlpcFwiO1xyXG5pbXBvcnQge1RyaW1tZWRJbnB1dH0gZnJvbSBcIi4vY29tcHMvdHJpbW1lZGlucHV0L1RyaW1tZWRJbnB1dFwiO1xyXG5pbXBvcnQge01pbml0YWJ9IGZyb20gXCIuL2NvbXBzL21pbml0YWJzL01pbml0YWJcIjtcclxuaW1wb3J0IHtNaW5pdGFic30gZnJvbSBcIi4vY29tcHMvbWluaXRhYnMvTWluaXRhYnNcIjtcclxuaW1wb3J0IHtTdGFyV2Fyc1NlYXJjaH0gZnJvbSBcIi4vY29tcHMvYXBwMi9ub3Rlcy9TdGFyV2Fyc1NlYXJjaFwiO1xyXG5pbXBvcnQge1dpa2lTZWFyY2h9IGZyb20gXCIuL2NvbXBzL2FwcDIvbm90ZXMvV2lraVNlYXJjaFwiO1xyXG5pbXBvcnQge0luZmluaXR5U2Nyb2xsfSBmcm9tIFwiLi9jb21wcy9hcHAyL25vdGVzL0luZmluaXR5U2Nyb2xsXCI7XHJcbmltcG9ydCB7TXVsdGlTbG90VHJhbnNjbHVzaW9ufSBmcm9tIFwiLi9jb21wcy9hcHAyL25vdGVzL011bHRpU2xvdFRyYW5zY2x1c2lvblwiO1xyXG5pbXBvcnQge0Nsb2NrfSBmcm9tIFwiLi9jb21wcy9hcHAyL25vdGVzL0Nsb2NrXCI7XHJcbmltcG9ydCB7Q29tcEVsZW1CdWlsZGVyfSBmcm9tIFwiLi9jb21wcy9hcHAyL25vdGVzL0NvbXBFbGVtQnVpbGRlclwiO1xyXG5pbXBvcnQge0VtYmVkVmlld30gZnJvbSBcIi4vY29tcHMvYXBwMi9ub3Rlcy9FbWJlZFZpZXdcIjtcclxuaW1wb3J0IHtcclxuICAgIFRvZ2dsZUJ1dHRvbkFwcCxcclxuICAgIFRvZ2dsZUJ1dHRvblxyXG59IGZyb20gXCIuL2NvbXBzL2FwcDIvbm90ZXMvVG9nZ2xlQnV0dG9uXCI7XHJcbmltcG9ydCB7XHJcbiAgICBTdHJlYW1CdXR0b24sXHJcbiAgICBJbmNyZW1lbnRpbmdEaXNwbGF5LFxyXG4gICAgVG9nZ2xlQnV0XHJcbn0gZnJvbSBcIi4vY29tcHMvYXBwMi9ub3Rlcy9TdHJlYW1CdXR0b25cIjtcclxuaW1wb3J0IHtcclxuICAgIG5nQm9va1JlcGVhdFNhbXBsZSxcclxuICAgIG5nQm9va1JlcGVhdFxyXG59IGZyb20gXCIuL2NvbXBzL25nRm9ySWYvbmdCb29rUmVwZWF0XCI7XHJcbmltcG9ydCB7SW5qZWN0VGVtcGxhdGVQYXJlbnR9IGZyb20gXCIuL2NvbXBzL2FwcDIvbm90ZXMvSW5qZWN0VGVtcGxhdGVQYXJlbnRcIjtcclxuaW1wb3J0IHtPcHRpb25MaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wcy9vcHRpb25saXN0Y29tcG9uZW50L29wdGlvbmxpc3Rjb21wb25lbnRcIjtcclxuaW1wb3J0IHtOb3Rlc0RldGFpbHNJdGVtc30gZnJvbSBcIi4vY29tcHMvYXBwMi9ub3Rlcy9Ob3Rlc0RldGFpbHNJdGVtc1wiO1xyXG5pbXBvcnQge05vdGVzRGV0YWlsc30gZnJvbSBcIi4vY29tcHMvYXBwMi9ub3Rlcy9Ob3Rlc0RldGFpbHNcIjtcclxuaW1wb3J0IHtDb3VudERvd259IGZyb20gXCIuL2NvbXBzL2NvdW50ZG93bi9Db3VudERvd25cIjtcclxuaW1wb3J0IHtOb3RlczFQcm9wc30gZnJvbSBcIi4vY29tcHMvYXBwMi9ub3Rlcy9Ob3RlczFQcm9wc1wiO1xyXG5pbXBvcnQge1NvcnRhYmxlSGVhZGVyfSBmcm9tIFwiLi9jb21wcy9hcHAyL3dlYXRoZXIvU29ydGFibGVIZWFkZXJcIjtcclxuaW1wb3J0IHtGaWxtc0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL2ZpbG1zLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FkbWluQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wcy9hcHAzL3N0YXJ3YXJzL2NvbXBvbmVudHMvYWRtaW4tY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2hvcHBpbmdDb21wb25lbnR9IGZyb20gXCIuL2NvbXBzL2FwcDMvc3RhcndhcnMvY29tcG9uZW50cy9zaG9wcGluZy1jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTdGFyd2Fyc30gZnJvbSBcIi4vY29tcHMvYXBwMy9zdGFyd2Fycy9TdGFyd2Fyc1wiO1xyXG5pbXBvcnQge1VzZXJzVmlld30gZnJvbSBcIi4vY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL3VzZXJzLXZpZXdcIjtcclxuaW1wb3J0IHtDYXJ0Vmlld30gZnJvbSBcIi4vY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL2NhcnQtdmlld1wiO1xyXG5pbXBvcnQge0FkZFBhcnRzVmlld30gZnJvbSBcIi4vY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL2FkZC1wYXJ0LXZpZXdcIjtcclxuaW1wb3J0IHtTaW1wbGVMaXN0fSBmcm9tIFwiLi9jb21wcy9zaW1wbGVsaXN0L1NpbXBsZWxpc3RcIjtcclxuaW1wb3J0IHtVc2VyVmlld30gZnJvbSBcIi4vY29tcHMvYXBwMy9zdGFyd2Fycy9jb21wb25lbnRzL3VzZXItdmlld1wiO1xyXG5pbXBvcnQge0ZpbG1TZWxlY3Rpb25WaWV3fSBmcm9tIFwiLi9jb21wcy9hcHAzL3N0YXJ3YXJzL2NvbXBvbmVudHMvZmlsbS1zZWxlY3Rpb24tdmlld1wiO1xyXG5pbXBvcnQge0ZpbG1WaWV3fSBmcm9tIFwiLi9jb21wcy9hcHAzL3N0YXJ3YXJzL2NvbXBvbmVudHMvZmlsbS12aWV3XCI7XHJcbmltcG9ydCB7TmcySGlnaHN0b2Nrc30gZnJvbSBcIi4vY29tcHMvbmcyLWhpZ2hjaGFydHMvc3JjL2RpcmVjdGl2ZXMvbmcyLWhpZ2hzdG9ja3NcIjtcclxuaW1wb3J0IHtOZzJIaWdobWFwc30gZnJvbSBcIi4vY29tcHMvbmcyLWhpZ2hjaGFydHMvc3JjL2RpcmVjdGl2ZXMvbmcyLWhpZ2htYXBzXCI7XHJcbmltcG9ydCB7UGFydHNWaWV3fSBmcm9tIFwiLi9jb21wcy9hcHAzL3N0YXJ3YXJzL2NvbXBvbmVudHMvcGFydHMtdmlld1wiO1xyXG5pbXBvcnQge1xyXG4gICAgQWNjb3JkaW9uR3JvdXAsXHJcbiAgICBBY2NvcmRpb25cclxufSBmcm9tIFwiLi9jb21wcy9uZzJBY2NvcmRpb24vYWNjb3JkaW9uXCI7XHJcbmltcG9ydCB7QnV0dG9uQ2hlY2tib3h9IGZyb20gXCIuL2NvbXBzL25nMmJ1dHRvbi9idXR0b24tY2hlY2tib3guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QnV0dG9uUmFkaW99IGZyb20gXCIuL2NvbXBzL25nMmJ1dHRvbi9idXR0b24tcmFkaW8uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VG9vbHRpcERpcmVjdGl2ZX0gZnJvbSBcIi4vY29tcHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0hlaWdodERpcmVjdGl2ZX0gZnJvbSBcIi4vY29tcHMvaGVpZ2h0ZGlyZWN0aXZlL0hlaWdodERpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge1NoYXJlZE1vZHVsZX0gZnJvbSBcIi4vY29tcHMvYXBwMS9sYXp5b25lL1NoYXJlZE1vZHVsZVwiO1xyXG5pbXBvcnQge0R5bmFGYWN0b3J5UmVzfSBmcm9tIFwiLi9jb21wcy9hcHAyL25vdGVzL0R5bmFGYWN0b3J5UmVzXCI7XHJcbmltcG9ydCB7RHluYUZhY3RvcnlSZXNIZWxsb1dvcmxkfSBmcm9tIFwiLi9jb21wcy9hcHAyL25vdGVzL0R5bmFGYWN0b3J5UmVzSGVsbG9Xb3JsZFwiO1xyXG5pbXBvcnQge1B1cmVEaWFsb2d9IGZyb20gXCIuL2NvbXBzL3B1cmVkaWFsb2cvUHVyZURpYWxvZ1wiO1xyXG5pbXBvcnQge1xyXG4gICAgUHVyZURpYWxvZ0RpcmVjdGl2ZVxyXG59IGZyb20gXCIuL2NvbXBzL3B1cmVkaWFsb2cvUHVyZURpYWxvZ0RpcmVjdGl2ZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgTE9HR0lOR19FUlJPUl9IQU5ETEVSX09QVElPTlMsXHJcbiAgICBMT0dHSU5HX0VSUk9SX0hBTkRMRVJfUFJPVklERVJTXHJcbn0gZnJvbSBcIi4vc2VydmljZXMvZXJyb3JoYW5kbGVyL0xvZ2dpbmdFcnJvckhhbmRsZXJPcHRpb25zXCI7XHJcbmltcG9ydCB7RXJyb3JMb2dTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9lcnJvcmhhbmRsZXIvRXJyb3JMb2dTZXJ2aWNlXCI7XHJcbmltcG9ydCB7QW5pbWF0ZUNhcmRzfSBmcm9tIFwiLi9jb21wcy9hcHAyL25vdGVzL0FuaW1hdGVDYXJkc1wiO1xyXG5pbXBvcnQge0FuaW1hdGVCb3h9IGZyb20gXCIuL2NvbXBzL2FwcDIvbm90ZXMvQW5pbWF0ZUJveFwiO1xyXG5pbXBvcnQgQXBwVGVtcGxhdGUgZnJvbSAnLi9BcHAuaHRtbCF0ZXh0JztcclxuXHJcbnZhciBwcm92aWRpbmcgPSBbe1xyXG4gICAgcHJvdmlkZTogQXBwU3RvcmUsXHJcbiAgICB1c2VGYWN0b3J5OiBMaWIuU3RvcmVGYWN0b3J5KHtcclxuICAgICAgICBub3RpZnksXHJcbiAgICAgICAgYXBwZGIsXHJcbiAgICAgICAgcGFydHMsXHJcbiAgICAgICAgY2FydCxcclxuICAgICAgICBmaWxtcyxcclxuICAgICAgICB1c2VycyxcclxuICAgICAgICB0b2Rvc1xyXG4gICAgfSlcclxufSwge1xyXG4gICAgcHJvdmlkZTogUG9zaXRpb25TZXJ2aWNlLFxyXG4gICAgdXNlQ2xhc3M6IFBvc2l0aW9uU2VydmljZVxyXG59LCB7XHJcbiAgICBwcm92aWRlOiBDb21tQnJva2VyLFxyXG4gICAgdXNlQ2xhc3M6IENvbW1Ccm9rZXJcclxufSwge1xyXG4gICAgcHJvdmlkZTogQ2hhckNvdW50XHJcbn0sIHtcclxuICAgIHByb3ZpZGU6IENvbnN0cyxcclxuICAgIHVzZUNsYXNzOiBDb25zdHNcclxufV07XHJcblxyXG4vKipcclxuIE1haW4gYXBwbGljYXRpb24gYm9vdHN0cmFwXHJcbiBAY2xhc3MgTWFpblxyXG4gKiovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAnLFxyXG4gICAgbW9kdWxlSWQ6IF9fbW9kdWxlTmFtZSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxyXG4gICAgcHJvdmlkZXJzOiBbU3R5bGVTZXJ2aWNlLCBBcHBkYkFjdGlvbiwgcHJvdmlkaW5nXSxcclxuICAgIHRlbXBsYXRlOiBBcHBUZW1wbGF0ZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1haW4ge1xyXG4gICAgcHJpdmF0ZSBtX3N0eWxlU2VydmljZTogU3R5bGVTZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwU3RvcmU6IEFwcFN0b3JlLCBwcml2YXRlIGNvbW1Ccm9rZXI6IENvbW1Ccm9rZXIsIHN0eWxlU2VydmljZTogU3R5bGVTZXJ2aWNlLCBwcml2YXRlIGFwcGRiQWN0aW9uOiBBcHBkYkFjdGlvbiwgcHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgICAgIGFwcFN0b3JlLmRpc3BhdGNoKGFwcGRiQWN0aW9uLmFwcFN0YXJ0VGltZSgpKTtcclxuICAgICAgICB0aGlzLm1fc3R5bGVTZXJ2aWNlID0gc3R5bGVTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY29tbUJyb2tlci5zZXRTZXJ2aWNlKENvbnN0cy5TZXJ2aWNlcygpLkFwcCwgdGhpcyk7XHJcbiAgICAgICAgT2JzZXJ2YWJsZS5mcm9tRXZlbnQod2luZG93LCAncmVzaXplJykuZGVib3VuY2VUaW1lKDI1MCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcHBSZXNpemVkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgT24gYXBwbGljYXRpb24gcmVzaXplIGRlYWwgd2l0aCBoZWlnaHQgY2hhbmdlc1xyXG4gICAgIEBtZXRob2QgYXBwUmVzaXplZFxyXG4gICAgICoqL1xyXG4gICAgcHVibGljIGFwcFJlc2l6ZWQoKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGFwcEhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHZhciBhcHBXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygncmVzaXplZCAnICsgYXBwSGVpZ2h0KTtcclxuICAgICAgICBqUXVlcnkoQ29uc3RzLkVsZW1zKCkuQVBQX05BVklHQVRPUl9FVkVSKS5oZWlnaHQoYXBwSGVpZ2h0IC0gMTE1KTtcclxuICAgICAgICBqUXVlcnkoQ29uc3RzLkVsZW1zKCkuQVBQX05BVklHQVRPUl9XQVNQKS5oZWlnaHQoYXBwSGVpZ2h0IC0gMTE1KTtcclxuICAgICAgICBqUXVlcnkoQ29uc3RzLkNsYXMoKS5DTEFTU19BUFBfSEVJR0hUKS5oZWlnaHQoYXBwSGVpZ2h0IC0gNDIwKTtcclxuICAgICAgICBqUXVlcnkoJyNtYWluUGFuZWxXcmFwJykuaGVpZ2h0KGFwcEhlaWdodCAtIDExNSk7XHJcbiAgICAgICAgalF1ZXJ5KCcjcHJvcFBhbmVsJykuaGVpZ2h0KGFwcEhlaWdodCAtIDEzMCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tbUJyb2tlci5zZXRWYWx1ZShDb25zdHMuVmFsdWVzKCkuQVBQX1NJWkUsIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhcHBIZWlnaHQsXHJcbiAgICAgICAgICAgIHdpZHRoOiBhcHBXaWR0aFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY29tbUJyb2tlci5maXJlKHtcclxuICAgICAgICAgICAgZnJvbUluc3RhbmNlOiBzZWxmLFxyXG4gICAgICAgICAgICBldmVudDogQ29uc3RzLkV2ZW50cygpLldJTl9TSVpFRCxcclxuICAgICAgICAgICAgY29udGV4dDogJycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXBwSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGFwcFdpZHRoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5pZiAoIUxpYi5EZXZNb2RlKCkpXHJcbiAgICBlbmFibGVQcm9kTW9kZSgpO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBTaGFyZWRNb2R1bGUuZm9yUm9vdCgpLCByb3V0aW5nXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIExvZ291dERlYWN0aXZhdGUsXHJcbiAgICAgICAgRXJyb3JMb2dTZXJ2aWNlLFxyXG5cclxuICAgICAgICAvLyBDQVVUSU9OOiBUaGlzIHByb3ZpZGVycyBjb2xsZWN0aW9uIG92ZXJyaWRlcyB0aGUgQ09SRSBFcnJvckhhbmRsZXIgd2l0aCBvdXJcclxuICAgICAgICAvLyBjdXN0b20gdmVyc2lvbiBvZiB0aGUgc2VydmljZSB0aGF0IGxvZ3MgZXJyb3JzIHRvIHRoZSBFcnJvckxvZ1NlcnZpY2UuXHJcbiAgICAgICAgTE9HR0lOR19FUlJPUl9IQU5ETEVSX1BST1ZJREVSUyxcclxuXHJcbiAgICAgICAgLy8gT1BUSU9OQUw6IEJ5IGRlZmF1bHQsIG91ciBjdXN0b20gTG9nZ2luZ0Vycm9ySGFuZGxlciBoYXMgYmVoYXZpb3IgYXJvdW5kXHJcbiAgICAgICAgLy8gcmV0aHJvd2luZyBhbmQgLyBvciB1bndyYXBwaW5nIGVycm9ycy4gSW4gb3JkZXIgdG8gZmFjaWxpdGF0ZSBkZXBlbmRlbmN5LVxyXG4gICAgICAgIC8vIGluamVjdGlvbiBpbnN0ZWFkIG9mIHJlc29ydGluZyB0byB0aGUgdXNlIG9mIGEgRmFjdG9yeSBmb3IgaW5zdGFudGlhdGlvbixcclxuICAgICAgICAvLyB0aGVzZSBvcHRpb25zIGNhbiBiZSBvdmVycmlkZGVuIGluIHRoZSBwcm92aWRlcnMgY29sbGVjdGlvbi5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IExPR0dJTkdfRVJST1JfSEFORExFUl9PUFRJT05TLFxyXG4gICAgICAgICAgICB1c2VWYWx1ZToge1xyXG4gICAgICAgICAgICAgICAgcmV0aHJvd0Vycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVud3JhcEVycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtEeW5hRmFjdG9yeVJlc0hlbGxvV29ybGRdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbTWFpbiwgV2VsY29tZSwgRGlnZywgVG9kb3MsIFNldHRpbmdzLCBMb2dpblBhbmVsLCBIZWxwLCBBcHAxLCBBcHAyLCBBcHAzLCBGb3Jnb3RQYXNzLCBBcHBNYW5hZ2VyLCBFbnRyeVBhbmVsLCBMb2dvdXQsIE1ha2VEcmFnZ2FibGUsIE1ha2VEcm9wcGFibGUsIFNsaWRlcnBhbmVsLCBUb2RvMSwgVG9kbzIsIFRvZG9MaXN0LCBDaGFyQ291bnQsIFNvcnRCeSwgT3JkZXJCeSwgRmlsZW1lbnUsIEZpbGVtZW51SXRlbSwgTG9nbywgRm9vdGVyLCBNZW51LCBNZW51SXRlbSwgU2xpZGVycGFuZWwsIERpZ2csIENvbnRyaWJ1dG9ycywgVG9kb3MsIFRvZG8xLCBUb2RvMiwgVG9kb0xpc3QsIFRvZG9JdGVtLCBMb2dvdXQsIFNldHRpbmdzLCBUYWJzLCBUYWIsIEhlbHAsIE15Q2hhcnQsIEFsZXJ0Q29tcG9uZW50LCBSYXRpbmdDb21wb25lbnQsIFRhYiwgVGFicywgQ29udHJpYnV0b3JzLCBOZzJIaWdoY2hhcnRzLCBUb2RvSXRlbSwgTm9kZWxvZ2dlciwgRGl2aWRlclBhbmVsLCBNZW51LCBNZW51SXRlbSwgU2xpZGVycGFuZWwsIERpZ2csIFByb3BlcnRpZXMsIFdlYXRoZXIsIENvbnRhY3QsIE1vZGFsRGlhbG9nLCBOb3RlcywgTm90ZXMxLCBOb3RlczIsIE5vdGVzMywgTm90ZXM0LCBOb3RlczUsIENvbnRhY3QsIE1vZGFsRGlhbG9nLCBDYXJkQ29tcG9uZW50LCBJbmplY3RUZW1wbGF0ZUNoaWxkLCBEaXNwbGF5RXJyb3IsIENvdW50ZXJJbnB1dENvbXBvbmVudCwgVHJpbW1lZElucHV0LCBNeUlwLCBNb2RhbERpYWxvZywgTWluaXRhYiwgTWluaXRhYnMsIFN0YXJXYXJzU2VhcmNoLCBXaWtpU2VhcmNoLCBJbmZpbml0eVNjcm9sbCwgQ2xvY2ssIE11bHRpU2xvdFRyYW5zY2x1c2lvbiwgRW1iZWRWaWV3LCBDb21wRWxlbUJ1aWxkZXIsIENyZWF0ZUVtYmVkRGlmZmVyLCBUb2dnbGVCdXR0b25BcHAsIFN0cmVhbUJ1dHRvbiwgbmdCb29rUmVwZWF0U2FtcGxlLCBDb3VudERvd24sIEluamVjdFRlbXBsYXRlUGFyZW50LCBUb29sdGlwRGlyZWN0aXZlLCBPcHRpb25MaXN0Q29tcG9uZW50LCBOb3Rlc0RldGFpbHMsIE5vdGVzRGV0YWlsc0l0ZW1zLCBJbmNyZW1lbnRpbmdEaXNwbGF5LCBUb2dnbGVCdXQsIFRvZ2dsZUJ1dHRvbiwgTm90ZXMxUHJvcHMsIFNvcnRhYmxlSGVhZGVyLCBTdGFyd2FycywgU2hvcHBpbmdDb21wb25lbnQsIEFkbWluQ29tcG9uZW50LCBGaWxtc0NvbXBvbmVudCwgVXNlcnNWaWV3LCBVc2VyVmlldywgTmcySGlnaGNoYXJ0cywgTmcySGlnaHN0b2NrcywgTmcySGlnaG1hcHMsIEZpbG1TZWxlY3Rpb25WaWV3LCBGaWxtVmlldywgUGFydHNWaWV3LCBDYXJ0VmlldywgQWRkUGFydHNWaWV3LCBTaW1wbGVMaXN0LCBBY2NvcmRpb24sIEFjY29yZGlvbkdyb3VwLCBCdXR0b25DaGVja2JveCwgQnV0dG9uUmFkaW8sIG5nQm9va1JlcGVhdCwgSGVpZ2h0RGlyZWN0aXZlLCBEeW5hRmFjdG9yeVJlcywgUHVyZURpYWxvZywgUHVyZURpYWxvZ0RpcmVjdGl2ZSwgRHluYUZhY3RvcnlSZXNIZWxsb1dvcmxkLCBBbmltYXRlQ2FyZHMsIEFuaW1hdGVCb3hdLFxyXG4gICAgYm9vdHN0cmFwOiBbTWFpbl0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxufVxyXG5cclxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHAsIHByb3ZpZGluZykudGhlbigoYXBwUmVmOiBOZ01vZHVsZVJlZjxhbnk+KSA9PiB7XHJcbiAgICBhcHBJbmpTZXJ2aWNlKGFwcFJlZi5pbmplY3Rvcik7XHJcbn0pO1xyXG5cclxud2luZG93WydociddICYmIHdpbmRvd1snaHInXS5vbignY2hhbmdlJywgKGZpbGVOYW1lKSA9PiB7XHJcbiAgICBpZiAoZmlsZU5hbWUuaW5kZXhPZignaHRtbCcpICE9PSAtMSkge1xyXG4gICAgICAgIHZhciBuZXdCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9keScpXHJcbiAgICAgICAgbmV3Qm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcHAnKSlcclxuICAgICAgICBkb2N1bWVudC5ib2R5ID0gbmV3Qm9keTtcclxuICAgICAgICBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcCwgcHJvdmlkaW5nKS50aGVuKChhcHBSZWY6IE5nTW9kdWxlUmVmPGFueT4pID0+IHtcclxuICAgICAgICAgICAgYXBwSW5qU2VydmljZShhcHBSZWYuaW5qZWN0b3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
