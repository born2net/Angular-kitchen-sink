System.register(["zone.js/dist/zone", "zone.js/dist/long-stack-trace-zone", "reflect-metadata", "@angular/platform-browser-dynamic", "@angular/forms", "@angular/core", "twbs/bootstrap", "twbs/bootstrap/dist/css/bootstrap.css!", "./styles/style.css!", "./pipes/CharCount", "./services/AuthService", "./services/AppInjService", "@angular/http", "../src/services/CommBroker", "../src/comps/filemenu/Filemenu", "../src/comps/filemenu/FilemenuItem", "./comps/logo/Logo", "./comps/footer/Footer", "../src/Conts", "./styles/StyleService", "angular2-redux-util", "./Lib", "rxjs/Observable", "rxjs/add/operator/map", "rxjs/add/operator/debounceTime", "rxjs/add/observable/fromEvent", "./comps/app3/starwars/reducers/parts-reducer", "./comps/app3/starwars/reducers/cart-reducer", "./comps/app3/starwars/reducers/films-reducer", "./comps/app3/starwars/reducers/users-reducer", "./reducers/NotifyReducer", "./reducers/AppdbReducer", "./comps/app1/todos/reducers/TodoReducer", "./actions/AppdbAction", "./App.routes", "./comps/logout/LogoutDeactivate", "./comps/tooltip/position.service", "@angular/platform-browser", "ng2-bs3-modal/components/modal", "./comps/welcome/Welcome", "./comps/digg/Digg", "./comps/app1/todos/Todos", "./comps/app1/settings/Settings", "./comps/entry/LoginPanel", "./comps/app1/help/Help", "./comps/app1/App1", "./comps/app2/App2", "./comps/app3/App3", "./comps/entry/ForgotPass", "./comps/appmanager/AppManager", "./comps/entry/EntryPanel", "./comps/logout/Logout", "./comps/dragndrop/make-draggable.directive", "./comps/dragndrop/make-droppable.directive", "./comps/sliderpanel/Sliderpanel", "./comps/app1/todos/Todo1", "./comps/app1/todos/Todo2", "./comps/app1/todos/Todolist", "./pipes/SortBy", "./pipes/OrderBy", "./comps/sidemenu/Menu", "./comps/sidemenu/MenuItem", "./comps/app1/help/contributors/contributors", "./comps/app1/todos/Todoitem", "./comps/tabs/tabs", "./comps/tabs/tab", "ng2-bootstrap", "./comps/app1/help/contributors/MyChart", "./comps/ng2-highcharts/src/directives/ng2-highcharts", "./comps/nodelogger/Nodelogger", "./comps/dividerpanel/DividerPanel", "./comps/app2/properties/Properties", "./comps/app2/weather/Weather", "./comps/app2/contact/Contact", "./comps/modaldialog/ModalDialog", "./comps/app2/notes/Notes", "./comps/app2/notes/Notes3", "./comps/app2/notes/Notes4", "./comps/app2/notes/Notes5", "./comps/app2/notes/Notes1", "./comps/app2/notes/Notes2", "./comps/app2/notes/CreateEmbedDiffer", "./comps/app2/notes/InjectTemplateChild", "./comps/displayerror/DisplayError", "./comps/CounterInputComponent/CounterInputComponent", "ng2-bs3-modal/ng2-bs3-modal", "./comps/myip/Myip", "./comps/trimmedinput/TrimmedInput", "./comps/minitabs/Minitab", "./comps/minitabs/Minitabs", "./comps/app2/notes/StarWarsSearch", "./comps/app2/notes/WikiSearch", "./comps/app2/notes/InfinityScroll", "./comps/app2/notes/DynamicWebImport", "./comps/app2/notes/MultiSlotTransclusion", "./comps/app2/notes/CompFactory", "./comps/app2/notes/Clock", "./comps/app2/notes/CompBuilder", "./comps/app2/notes/CompElemBuilder", "./comps/app2/notes/EmbedView", "./comps/app2/notes/ToggleButton", "./comps/app2/notes/StreamButton", "./comps/ngForIf/ngBookRepeat", "./comps/app2/notes/InjectTemplateParent", "./comps/optionlistcomponent/optionlistcomponent", "./comps/app2/notes/NotesDetailsItems", "./comps/app2/notes/NotesDetails", "./comps/countdown/CountDown", "./comps/app2/notes/Notes1Props", "./comps/app2/weather/SortableHeader", "./comps/app3/starwars/components/films-component", "./comps/app3/starwars/components/admin-component", "./comps/app3/starwars/components/shopping-component", "./comps/app3/starwars/Starwars", "./comps/app3/starwars/components/users-view", "./comps/app3/starwars/components/cart-view", "./comps/app3/starwars/components/add-part-view", "./comps/simplelist/Simplelist", "./comps/app3/starwars/components/user-view", "./comps/app3/starwars/components/film-selection-view", "./comps/app3/starwars/components/film-view", "./comps/ng2-highcharts/src/directives/ng2-highstocks", "./comps/ng2-highcharts/src/directives/ng2-highmaps", "./comps/app3/starwars/components/parts-view", "./comps/ng2Accordion/accordion", "./comps/ng2button/button-checkbox.component", "./comps/ng2button/button-radio.component"], function(exports_1, context_1) {
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
    var platform_browser_dynamic_1, forms_1, core_1, CharCount_1, AuthService_1, AppInjService_1, http_1, CommBroker_1, Filemenu_1, FilemenuItem_1, Logo_1, Footer_1, Conts_1, StyleService_1, angular2_redux_util_1, Lib_1, Observable_1, parts_reducer_1, cart_reducer_1, films_reducer_1, users_reducer_1, NotifyReducer_1, AppdbReducer_1, TodoReducer_1, AppdbAction_1, App_routes_1, LogoutDeactivate_1, position_service_1, platform_browser_1, modal_1, Welcome_1, Digg_1, Todos_1, Settings_1, LoginPanel_1, Help_1, App1_1, App2_1, App3_1, ForgotPass_1, AppManager_1, EntryPanel_1, Logout_1, make_draggable_directive_1, make_droppable_directive_1, Sliderpanel_1, Todo1_1, Todo2_1, Todolist_1, SortBy_1, OrderBy_1, Menu_1, MenuItem_1, contributors_1, Todoitem_1, tabs_1, tab_1, ng2_bootstrap_1, MyChart_1, ng2_highcharts_1, Nodelogger_1, DividerPanel_1, Properties_1, Weather_1, Contact_1, ModalDialog_1, Notes_1, Notes3_1, Notes4_1, Notes5_1, Notes1_1, Notes2_1, CreateEmbedDiffer_1, InjectTemplateChild_1, DisplayError_1, CounterInputComponent_1, ng2_bs3_modal_1, Myip_1, TrimmedInput_1, Minitab_1, Minitabs_1, StarWarsSearch_1, WikiSearch_1, InfinityScroll_1, DynamicWebImport_1, MultiSlotTransclusion_1, CompFactory_1, Clock_1, CompBuilder_1, CompElemBuilder_1, EmbedView_1, ToggleButton_1, StreamButton_1, ngBookRepeat_1, InjectTemplateParent_1, optionlistcomponent_1, NotesDetailsItems_1, NotesDetails_1, CountDown_1, Notes1Props_1, SortableHeader_1, films_component_1, admin_component_1, shopping_component_1, Starwars_1, users_view_1, cart_view_1, add_part_view_1, Simplelist_1, user_view_1, film_selection_view_1, film_view_1, ng2_highstocks_1, ng2_highmaps_1, parts_view_1, accordion_1, button_checkbox_component_1, button_radio_component_1;
    var modules, Main, App;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
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
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
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
            function (modal_1_1) {
                modal_1 = modal_1_1;
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
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
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
            function (DynamicWebImport_1_1) {
                DynamicWebImport_1 = DynamicWebImport_1_1;
            },
            function (MultiSlotTransclusion_1_1) {
                MultiSlotTransclusion_1 = MultiSlotTransclusion_1_1;
            },
            function (CompFactory_1_1) {
                CompFactory_1 = CompFactory_1_1;
            },
            function (Clock_1_1) {
                Clock_1 = Clock_1_1;
            },
            function (CompBuilder_1_1) {
                CompBuilder_1 = CompBuilder_1_1;
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
            }],
        execute: function() {
            modules = [http_1.JSONP_PROVIDERS, {
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
                    provide: modal_1.ModalComponent,
                    useClass: modal_1.ModalComponent
                }, {
                    provide: CommBroker_1.CommBroker,
                    useClass: CommBroker_1.CommBroker
                }, {
                    provide: AuthService_1.AuthService,
                    useClass: AuthService_1.AuthService
                }, {
                    provide: LogoutDeactivate_1.LogoutDeactivate,
                    useClass: LogoutDeactivate_1.LogoutDeactivate
                }, {
                    provide: core_1.PLATFORM_PIPES,
                    useValue: CharCount_1.CharCount,
                    multi: true
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
                        encapsulation: core_1.ViewEncapsulation.Emulated,
                        providers: [StyleService_1.StyleService, AppdbAction_1.AppdbAction, modules],
                        templateUrl: '/src/App.html'
                    }), 
                    __metadata('design:paramtypes', [angular2_redux_util_1.AppStore, CommBroker_1.CommBroker, StyleService_1.StyleService, AppdbAction_1.AppdbAction, http_1.Http])
                ], Main);
                return Main;
            }());
            exports_1("Main", Main);
            if (!Lib_1.Lib.DevMode())
                core_1.enableProdMode();
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, forms_1.ReactiveFormsModule, App_routes_1.routing],
                        providers: [App_routes_1.appRoutingProviders],
                        declarations: [Main, Welcome_1.Welcome, Digg_1.Digg, Todos_1.Todos, Settings_1.Settings, LoginPanel_1.LoginPanel, Help_1.Help, App1_1.App1, App2_1.App2, App3_1.App3, ForgotPass_1.ForgotPass, AppManager_1.AppManager, EntryPanel_1.EntryPanel, Logout_1.Logout, make_draggable_directive_1.MakeDraggable, make_droppable_directive_1.MakeDroppable, Sliderpanel_1.Sliderpanel, Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList, CharCount_1.CharCount, SortBy_1.SortBy, OrderBy_1.OrderBy, Filemenu_1.Filemenu, FilemenuItem_1.FilemenuItem, Logo_1.Logo, Footer_1.Footer, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, contributors_1.Contributors, Todos_1.Todos, Todo1_1.Todo1, Todo2_1.Todo2, Todolist_1.TodoList, Todoitem_1.TodoItem, Logout_1.Logout, Settings_1.Settings, tabs_1.Tabs, tab_1.Tab, Help_1.Help, MyChart_1.MyChart, ng2_bootstrap_1.AlertComponent, ng2_bootstrap_1.RatingComponent, tab_1.Tab, tabs_1.Tabs, contributors_1.Contributors, ng2_highcharts_1.Ng2Highcharts, Todoitem_1.TodoItem, Nodelogger_1.Nodelogger, DividerPanel_1.DividerPanel, Menu_1.Menu, MenuItem_1.MenuItem, Sliderpanel_1.Sliderpanel, Digg_1.Digg, Properties_1.Properties, Weather_1.Weather, Contact_1.Contact, ModalDialog_1.ModalDialog, Notes_1.Notes, Notes1_1.Notes1, Notes2_1.Notes2, Notes3_1.Notes3, Notes4_1.Notes4, Notes5_1.Notes5, Contact_1.Contact, ModalDialog_1.ModalDialog, CreateEmbedDiffer_1.CardComponent, InjectTemplateChild_1.InjectTemplateChild, ModalDialog_1.ModalDialog, DisplayError_1.DisplayError, CounterInputComponent_1.CounterInputComponent, TrimmedInput_1.TrimmedInput, Myip_1.MyIp, ModalDialog_1.ModalDialog, ModalDialog_1.ModalDialog, ng2_bs3_modal_1.MODAL_DIRECTIVES, Minitab_1.Minitab, Minitabs_1.Minitabs, StarWarsSearch_1.StarWarsSearch, WikiSearch_1.WikiSearch, InfinityScroll_1.InfinityScroll, Clock_1.Clock, MultiSlotTransclusion_1.MultiSlotTransclusion, CompFactory_1.CompFactory, EmbedView_1.EmbedView, DynamicWebImport_1.DynamicWebImport, CompBuilder_1.CompBuilder, CompElemBuilder_1.CompElemBuilder, CreateEmbedDiffer_1.CreateEmbedDiffer, ToggleButton_1.ToggleButtonApp, StreamButton_1.StreamButton, ngBookRepeat_1.ngBookRepeatSample, CountDown_1.CountDown, InjectTemplateParent_1.InjectTemplateParent, ng2_bootstrap_1.TooltipDirective, optionlistcomponent_1.OptionListComponent, NotesDetails_1.NotesDetails, NotesDetailsItems_1.NotesDetailsItems, StreamButton_1.IncrementingDisplay, StreamButton_1.ToggleBut, ToggleButton_1.ToggleButton, Notes1Props_1.Notes1Props, SortableHeader_1.SortableHeader, Starwars_1.Starwars, shopping_component_1.ShoppingComponent, admin_component_1.AdminComponent, films_component_1.FilmsComponent, users_view_1.UsersView, user_view_1.UserView, ng2_highcharts_1.Ng2Highcharts, ng2_highstocks_1.Ng2Highstocks, ng2_highmaps_1.Ng2Highmaps, film_selection_view_1.FilmSelectionView, film_view_1.FilmView, parts_view_1.PartsView, cart_view_1.CartView, add_part_view_1.AddPartsView, Simplelist_1.SimpleList, accordion_1.Accordion, accordion_1.AccordionGroup,
                            button_checkbox_component_1.ButtonCheckbox, button_radio_component_1.ButtonRadio, ngBookRepeat_1.ngBookRepeat],
                        bootstrap: [Main],
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(App, modules).then(function (appRef) {
                AppInjService_1.appInjService(appRef.injector);
            });
            window['hr'] && window['hr'].on('change', function (fileName) {
                if (fileName.indexOf('html') !== -1) {
                    var newBody = document.createElement('body');
                    newBody.appendChild(document.createElement('app'));
                    document.body = newBody;
                    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(App, modules).then(function (appRef) {
                        AppInjService_1.appInjService(appRef.injector);
                    });
                }
            });
        }
    }
});
//# sourceMappingURL=App.js.map