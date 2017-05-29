import {BrowserModule} from "@angular/platform-browser";
import {NgModule, enableProdMode} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppStore} from "angular2-redux-util";
import {applyMiddleware, createStore, compose, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import "hammerjs";
import "gsap";
import notify from "../reducers/NotifyReducer";
import sample_reducer from "../reducers/SampleReducer";
import parts from "../comps/app3/starwars/reducers/parts-reducer";
import cart from "../comps/app3/starwars/reducers/cart-reducer";
import films from "../comps/app3/starwars/reducers/films-reducer";
import users from "../comps/app3/starwars/reducers/users-reducer";
import appdb from "../reducers/AppdbReducer";
import {todos} from "../comps/app1/todos/reducers/TodoReducer";
import {LocalStorage} from "../services/LocalStorage";
import {NgReduxModule, DevToolsExtension, NgRedux} from "ng2-redux";
import {createEpicMiddleware, combineEpics} from "redux-observable";
import {MsLibModule} from "ng-mslib/dist/mslib.module";
import {SampleActions, pingEpic, pongEpic2} from "../actions/SampleActions";
import {Sliderpanel} from "../comps/sliderpanel/Sliderpanel";
import {Slideritem} from "../comps/sliderpanel/Slideritem";
import {Todo} from "../comps/app1/todos/Todo";
import {Todo1} from "../comps/app1/todos/Todo1";
import {Todo2} from "../comps/app1/todos/Todo2";
import {Todo3} from "../comps/app1/todos/Todo3";
import {TodoItem} from "../comps/app1/todos/Todoitem";
import {Todos} from "../comps/app1/todos/Todos";
import {ModalModule, AlertModule, RatingModule, TooltipModule} from "ng2-bootstrap";
import {TodoList} from "../comps/app1/todos/Todolist";
import {SortBy} from "../pipes/SortBy";
import {Nodelogger} from "../comps/nodelogger/Nodelogger";
import {MakeDraggable} from "../comps/dragndrop/make-draggable.directive";
import {TodoService} from "../comps/app1/todos/TodoService";
import TodoStatsModel from "../comps/app1/todos/TodoStatsModel";
import {Starwars} from "../comps/app3/starwars/starwars";
import {AdminComponent} from "../comps/app3/starwars/components/admin-component";
import {ShoppingComponent} from "../comps/app3/starwars/components/shopping-component";
import {UserView} from "../comps/app3/starwars/components/user-view";
import {UsersView} from "../comps/app3/starwars/components/users-view";
import {FilmView} from "../comps/app3/starwars/components/film-view";
import {FilmSelectionView} from "../comps/app3/starwars/components/film-selection-view";
import {AddPartsView} from "../comps/app3/starwars/components/add-part-view";
import {FilmsComponent} from "../comps/app3/starwars/components/films-component";
import {PartsView} from "../comps/app3/starwars/components/parts-view";
import {CartView} from "../comps/app3/starwars/components/cart-view";
import {SimpleList} from "../comps/simplelist/Simplelist";
import DynamicComponent from "../comps/dynmiaccomp/dynamic-component";
import {ModuleExample} from "../modules/ModuleExample";
import {SharedModule} from "../comps/app1/lazyone/SharedModule";
import {routing} from "../App.routes";
import HelloWorldComponent from "../comps/dynmiaccomp/hello-world-component";
import WorldHelloComponent from "../comps/dynmiaccomp/world-hello-component";
import {EntryPanel} from "../comps/entry/EntryPanel";
import {Welcome} from "../comps/welcome/Welcome";
import {Digg} from "../comps/digg/Digg";
import {Settings} from "../comps/app1/settings/Settings";
import {LoginPanel} from "../comps/entry/LoginPanel";
import {Help} from "../comps/app1/help/Help";
import {App1} from "../comps/app1/App1";
import {App2} from "../comps/app2/App2";
import {App3} from "../comps/app3/App3";
import {ForgotPass} from "../comps/entry/ForgotPass";
import {AppManager} from "../comps/appmanager/AppManager";
import {Logout} from "../comps/logout/Logout";
import {MakeDroppable} from "../comps/dragndrop/make-droppable.directive";
import {CharCount} from "../pipes/CharCount";
import {OrderBy} from "../pipes/OrderBy";
import {Filemenu} from "../comps/filemenu/Filemenu";
import {FilemenuItem} from "../comps/filemenu/FilemenuItem";
import {Logo} from "../comps/logo/Logo";
import {Footer} from "../comps/footer/Footer";
import {Menu} from "../comps/sidemenu/Menu";
import {MenuItem} from "../comps/sidemenu/MenuItem";
import {Contributors} from "../comps/app1/help/contributors/contributors";
import {Tabs} from "../comps/tabs/tabs";
import {Tab} from "../comps/tabs/tab";
import {MyChart} from "../comps/app1/help/contributors/MyChart";
import {DividerPanel} from "../comps/dividerpanel/DividerPanel";
import {Properties} from "../comps/app2/properties/Properties";
import {Weather} from "../comps/app2/weather/Weather";
import {Contact} from "../comps/app2/contact/Contact";
import {ModalDialog} from "../comps/modaldialog/ModalDialog";
import {Notes} from "../comps/app2/notes/Notes";
import {Notes1} from "../comps/app2/notes/Notes1";
import {Notes2} from "../comps/app2/notes/Notes2";
import {Notes3} from "../comps/app2/notes/Notes3";
import {Notes4} from "../comps/app2/notes/Notes4";
import {Notes5} from "../comps/app2/notes/Notes5";
import {CardComponent, CreateEmbedDiffer} from "../comps/app2/notes/CreateEmbedDiffer";
import {InjectTemplateChild} from "../comps/app2/notes/InjectTemplateChild";
import {DisplayError} from "../comps/displayerror/DisplayError";
import {CounterInputComponent} from "../comps/counterinputcomponent/CounterInputComponent";
import {TrimmedInput} from "../comps/trimmedinput/TrimmedInput";
import {MyIp} from "../comps/myip/Myip";
import {Minitab} from "../comps/minitabs/Minitab";
import {Minitabs} from "../comps/minitabs/Minitabs";
import {StarWarsSearch} from "../comps/app2/notes/StarWarsSearch";
import {WikiSearch} from "../comps/app2/notes/WikiSearch";
import {InfinityScroll} from "../comps/app2/notes/InfinityScroll";
import {Clock} from "../comps/app2/notes/Clock";
import {MultiSlotTransclusion} from "../comps/app2/notes/MultiSlotTransclusion";
import {EmbedView} from "../comps/app2/notes/EmbedView";
import {CompElemBuilder} from "../comps/app2/notes/CompElemBuilder";
import {ToggleButtonApp, ToggleButton} from "../comps/app2/notes/ToggleButton";
import {StreamButton, IncrementingDisplay, ToggleBut} from "../comps/app2/notes/StreamButton";
import {ngBookRepeatSample, ngBookRepeat} from "../comps/ngForIf/ngBookRepeat";
import {CountDown} from "../comps/countdown/CountDown";
import {InjectTemplateParent} from "../comps/app2/notes/InjectTemplateParent";
import {OptionListComponent} from "../comps/optionlistcomponent/optionlistcomponent";
import {NotesDetails} from "../comps/app2/notes/NotesDetails";
import {NotesDetailsItems} from "../comps/app2/notes/NotesDetailsItems";
import {Notes1Props} from "../comps/app2/notes/Notes1Props";
import {SortableHeader} from "../comps/app2/weather/SortableHeader";
import {Accordion, AccordionGroup} from "../comps/ng2Accordion/accordion";
import {ButtonCheckbox} from "../comps/ng2button/button-checkbox.component";
import {ButtonRadio} from "../comps/ng2button/button-radio.component";
import {HeightDirective} from "../comps/heightdirective/HeightDirective";
import {DynaFactoryRes} from "../comps/app2/notes/DynaFactoryRes";
import {PureDialog} from "../comps/puredialog/PureDialog";
import {PureDialogDirective} from "../comps/puredialog/PureDialogDirective";
import {DynaFactoryResHelloWorld} from "../comps/app2/notes/DynaFactoryResHelloWorld";
import {AnimateCards} from "../comps/app2/notes/AnimateCards";
import {AnimateBox} from "../comps/app2/notes/AnimateBox";
import {DynamicApp} from "../comps/dynmiaccomp/dynamic-app";
import {ContentHero, ContentHeroes} from "../comps/app2/notes/ContentHeros";
import {ContentBarApp} from "../comps/contentbar/content-bar-app";
import {BarEditorComponent} from "../comps/contentbar/bar-editor.component";
import {EditorComponent} from "../comps/contentbar/editor.component";
import {FooEditorComponent} from "../comps/contentbar/foo-editor.component";
import {SwitchComponent} from "../comps/switchcomponent/SwitchComponent";
import {ShowHideDirective} from "../comps/showHideDirective/ShowHideDirective";
import {BreadcrumbComponent} from "../comps/breadcrumb/Breadcrumb";
import {MouseWheelDirective} from "../comps/Mousewheel/Mousewheel";
import * as jQuery from "jquery";
import {LogoutDeactivate} from "../comps/logout/LogoutDeactivate";
import {ErrorLogService} from "../services/errorhandler/ErrorLogService";
import {LOGGING_ERROR_HANDLER_PROVIDERS, LOGGING_ERROR_HANDLER_OPTIONS} from "../services/errorhandler/LoggingErrorHandlerOptions";
import {MyTemplateExample, MyTemplate} from "../comps/mytemplate/MyTemplate";
import {TListComponent} from "../comps/dynmiaccomp/tlist.component";
import {DynamicContentComponent, DynamicSample1Component, DynamicSample2Component, UnknownDynamicComponent} from "../comps/dynmiaccomp/dynamic-content.component";
import {ExampleHex} from "../validators/hexadvanced/example-hex";
import {HexadecimalValueValidator} from "../validators/hexadvanced/validators/hexadecimal-validator";
import {FormSelectComponent} from "../validators/hexadvanced/components/select";
import {FormTextComponent} from "../validators/hexadvanced/components/input";
import {ValidationComponent} from "../validators/hexadvanced/components/validation";
import {ObsRedux} from "../comps/obsredux/obs-redux";
import {Popup} from "../comps/popup/Popup";
import {ngTemplateOutletExample, TempRefContentExample, NestedComponent} from "../comps/ngtemplateoutlet/ngTemplateOutlet";
import {AnimateCallBack} from "../comps/animatecallback/AnimateCallBack";
import {TabsComponent, TabComponent, TabsTemplateRef} from "../comps/tabstempref/tabs.template.ref";
import {MatchHeightDirective, PageSameHeightComponent, CardSameHeightComponent} from "../comps/matchheight/matchhieght.component";
import {NgmslibService} from "ng-mslib/dist/services/ngmslib.service";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RangeDirective} from "../comps/range/range";
import {IconComponent} from "../comps/svgicon/svgicon";
import {OutputObservable} from "../comps/outputobs/outputobs";
window['jQuery'] = jQuery;


export function appStoreFactory(ngRedux: NgRedux<any>, devTools: DevToolsExtension) {
    const reducers = combineReducers({
        parts, cart, films, users, appdb, notify, todos, sample_reducer
    });
    const rootEpic = combineEpics(pingEpic, pongEpic2);
    const epicMiddleware = createEpicMiddleware(rootEpic)
    const middlewareEnhancer = applyMiddleware(<any>thunkMiddleware, epicMiddleware);
    const isDebug = window['devToolsExtension']
    const applyDevTools = () => isDebug ? window['devToolsExtension']() : f => f;
    const enhancers: any = compose(middlewareEnhancer, applyDevTools());
    const store = createStore(reducers, enhancers);
    ngRedux.provideStore(store);
    return new AppStore(store);
}

var providing = [{
    provide: AppStore, useFactory: appStoreFactory, deps: [NgRedux, DevToolsExtension]
}, {
    provide: "OFFLINE_ENV",
    useValue: false
}, {
    provide: LocalStorage,
    useClass: LocalStorage
}, {
    provide: SampleActions,
    useClass: SampleActions
}, {
    provide: TodoService,
    useClass: TodoService
}, {
    provide: TodoStatsModel,
    useClass: TodoStatsModel
}];



@NgModule({
    declarations: [
        Accordion,
        AccordionGroup,
        AddPartsView,
        AdminComponent,
        AnimateBox,
        AnimateCallBack,
        AnimateCards,
        App1,
        App2,
        App3,
        AppComponent,
        AppManager,
        BarEditorComponent,
        BreadcrumbComponent,
        ButtonCheckbox,
        ButtonRadio,
        CardComponent,
        CardSameHeightComponent,
        CartView,
        CharCount,
        Clock,
        CompElemBuilder,
        Contact,
        ContentBarApp,
        ContentHero,
        ContentHeroes,
        Contributors,
        CountDown,
        CounterInputComponent,
        CreateEmbedDiffer,
        Digg,
        DisplayError,
        DividerPanel,
        DynaFactoryRes,
        DynaFactoryResHelloWorld,
        DynamicApp,
        DynamicComponent,
        DynamicContentComponent,
        DynamicSample1Component,
        DynamicSample2Component,
        EditorComponent,
        EmbedView,
        EntryPanel,
        ExampleHex,
        Filemenu,
        FilemenuItem,
        FilmSelectionView,
        FilmView,
        FilmsComponent,
        FooEditorComponent,
        Footer,
        ForgotPass,
        FormSelectComponent,
        FormTextComponent,
        HeightDirective,
        HelloWorldComponent,
        Help,
        HexadecimalValueValidator,
        IconComponent,
        IncrementingDisplay,
        InfinityScroll,
        InjectTemplateChild,
        InjectTemplateParent,
        LoginPanel,
        Logo,
        Logout,
        MatchHeightDirective,
        MakeDraggable,
        MakeDroppable,
        Menu,
        Menu,
        MenuItem,
        MenuItem,
        Minitab,
        Minitabs,
        ModalDialog,
        ModalDialog,
        MouseWheelDirective,
        MultiSlotTransclusion,
        MyChart,
        MyIp,
        MyTemplate,
        MyTemplateExample,
        NestedComponent,
        Nodelogger,
        Notes,
        Notes1,
        Notes1Props,
        Notes2,
        Notes3,
        Notes4,
        Notes5,
        NotesDetails,
        NotesDetailsItems,
        ObsRedux,
        OptionListComponent,
        OrderBy,
        OutputObservable,
        PageSameHeightComponent,
        PartsView,
        Popup,
        Properties,
        PureDialog,
        PureDialogDirective,
        RangeDirective,
        Settings,
        ShoppingComponent,
        ShowHideDirective,
        SimpleList,
        Slideritem,
        Sliderpanel,
        Sliderpanel,
        SortBy,
        SortableHeader,
        StarWarsSearch,
        Starwars,
        StreamButton,
        SwitchComponent,
        TListComponent,
        Tab,
        Tabs,
        TabsTemplateRef,
        TabsComponent,
        TabComponent,
        TempRefContentExample,
        Todo,
        Todo1,
        Todo2,
        Todo3,
        TodoItem,
        TodoList,
        Todos,
        ToggleBut,
        ToggleButton,
        ToggleButtonApp,
        TrimmedInput,
        UnknownDynamicComponent,
        UserView,
        UsersView,
        ValidationComponent,
        Weather,
        Welcome,
        WikiSearch,
        WorldHelloComponent,
        ngBookRepeat,
        ngBookRepeatSample,
        ngTemplateOutletExample
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ModalModule.forRoot(),
        AlertModule.forRoot(),
        RatingModule.forRoot(),
        TooltipModule.forRoot(),
        ModuleExample.withComponents([DynamicComponent]),
        SharedModule.forRoot(),
        routing,
        HttpModule,
        ToastrModule.forRoot(),
        MsLibModule.forRoot({a: 1}),
        NgReduxModule.forRoot()
    ],
    entryComponents: [
        DynaFactoryResHelloWorld,
        DynamicSample1Component,
        DynamicSample2Component,
        UnknownDynamicComponent
    ],
    providers: [...providing,
        LogoutDeactivate,
        ErrorLogService,

        // CAUTION: This providers collection overrides the CORE ErrorHandler with our
        // custom version of the service that logs errors to the ErrorLogService.
        LOGGING_ERROR_HANDLER_PROVIDERS,

        // OPTIONAL: By default, our custom LoggingErrorHandler has behavior around
        // rethrowing and / or unwrapping errors. In order to facilitate dependency-
        // injection instead of resorting to the use of a Factory for instantiation,
        // these options can be overridden in the providers collection.
        {
            provide: LOGGING_ERROR_HANDLER_OPTIONS,
            useValue: {
                rethrowError: false,
                unwrapError: false
            }
        }],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private appStore: AppStore, private ngmslibService: NgmslibService) {
        console.log(`running in dev mode: ${ngmslibService.inDevMode()}`);
        this.ngmslibService.globalizeStringJS();
        console.log(StringJS('app-loaded-and-ready').humanize().s);
        if (!ngmslibService.inDevMode())
            enableProdMode();
    }
}

