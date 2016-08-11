/**
 * License MIT
 **/

import "zone.js/dist/zone";
import "zone.js/dist/long-stack-trace-zone";
import "reflect-metadata";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {
    FormsModule,
    ReactiveFormsModule
} from "@angular/forms";
import {
    Component,
    ViewEncapsulation,
    PLATFORM_PIPES,
    enableProdMode,
    NgModuleRef,
    NgModule
} from "@angular/core";
import "twbs/bootstrap";
import "twbs/bootstrap/dist/css/bootstrap.css!";
import "./styles/style.css!";
import {CharCount} from "./pipes/CharCount";
import {AuthService} from "./services/AuthService";
import {appInjService} from "./services/AppInjService";
import {
    JSONP_PROVIDERS,
    HttpModule
} from "@angular/http";
import {CommBroker} from "../src/services/CommBroker";
import {Filemenu} from "../src/comps/filemenu/Filemenu";
import {FilemenuItem} from "../src/comps/filemenu/FilemenuItem";
import {Logo} from "./comps/logo/Logo";
import {Footer} from "./comps/footer/Footer";
import {Consts} from "../src/Conts";
import {StyleService} from "./styles/StyleService";
import {AppStore} from "angular2-redux-util";
import {Lib} from "./Lib";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/observable/fromEvent";
import parts from "./comps/app3/starwars/reducers/parts-reducer";
import cart from "./comps/app3/starwars/reducers/cart-reducer";
import films from "./comps/app3/starwars/reducers/films-reducer";
import users from "./comps/app3/starwars/reducers/users-reducer";
import notify from "./reducers/NotifyReducer";
import appdb from "./reducers/AppdbReducer";
import {todos} from "./comps/app1/todos/reducers/TodoReducer";
import {AppdbAction} from "./actions/AppdbAction";
import {
    routing,
    appRoutingProviders
} from "./App.routes";
import {LogoutDeactivate} from "./comps/logout/LogoutDeactivate";
import {PositionService} from "./comps/tooltip/position.service";
import {BrowserModule} from "@angular/platform-browser";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {Welcome} from "./comps/welcome/Welcome";
import {Digg} from "./comps/digg/Digg";
import {Todos} from "./comps/app1/todos/Todos";
import {Settings} from "./comps/app1/settings/Settings";
import {LoginPanel} from "./comps/entry/LoginPanel";
import {Help} from "./comps/app1/help/Help";
import {App1} from "./comps/app1/App1";
import {App2} from "./comps/app2/App2";
import {App3} from "./comps/app3/App3";
import {ForgotPass} from "./comps/entry/ForgotPass";
import {AppManager} from "./comps/appmanager/AppManager";
import {EntryPanel} from "./comps/entry/EntryPanel";
import {Logout} from "./comps/logout/Logout";
import {MakeDraggable} from "./comps/dragndrop/make-draggable.directive";
import {MakeDroppable} from "./comps/dragndrop/make-droppable.directive";
import {Sliderpanel} from "./comps/sliderpanel/Sliderpanel";
import {Todo1} from "./comps/app1/todos/Todo1";
import {Todo2} from "./comps/app1/todos/Todo2";
import {TodoList} from "./comps/app1/todos/Todolist";
import {SortBy} from "./pipes/SortBy";
import {OrderBy} from "./pipes/OrderBy";
import {Menu} from "./comps/sidemenu/Menu";
import {MenuItem} from "./comps/sidemenu/MenuItem";
import {Contributors} from "./comps/app1/help/contributors/contributors";
import {TodoItem} from "./comps/app1/todos/Todoitem";
import {Tabs} from "./comps/tabs/tabs";
import {Tab} from "./comps/tabs/tab";
import {
    AlertComponent,
    RatingComponent,
    TooltipDirective
} from "ng2-bootstrap";
import {MyChart} from "./comps/app1/help/contributors/MyChart";
import {Ng2Highcharts} from "./comps/ng2-highcharts/src/directives/ng2-highcharts";
import {Nodelogger} from "./comps/nodelogger/Nodelogger";
import {DividerPanel} from "./comps/dividerpanel/DividerPanel";
import {Properties} from "./comps/app2/properties/Properties";
import {Weather} from "./comps/app2/weather/Weather";
import {Contact} from "./comps/app2/contact/Contact";
import {ModalDialog} from "./comps/modaldialog/ModalDialog";
import {Notes} from "./comps/app2/notes/Notes";
import {Notes3} from "./comps/app2/notes/Notes3";
import {Notes4} from "./comps/app2/notes/Notes4";
import {Notes5} from "./comps/app2/notes/Notes5";
import {Notes1} from "./comps/app2/notes/Notes1";
import {Notes2} from "./comps/app2/notes/Notes2";
import {
    CardComponent,
    CreateEmbedDiffer
} from "./comps/app2/notes/CreateEmbedDiffer";
import {InjectTemplateChild} from "./comps/app2/notes/InjectTemplateChild";
import {DisplayError} from "./comps/displayerror/DisplayError";
import {CounterInputComponent} from "./comps/CounterInputComponent/CounterInputComponent";
import {MODAL_DIRECTIVES} from "ng2-bs3-modal/ng2-bs3-modal";
import {MyIp} from "./comps/myip/Myip";
import {TrimmedInput} from "./comps/trimmedinput/TrimmedInput";
import {Minitab} from "./comps/minitabs/Minitab";
import {Minitabs} from "./comps/minitabs/Minitabs";
import {StarWarsSearch} from "./comps/app2/notes/StarWarsSearch";
import {WikiSearch} from "./comps/app2/notes/WikiSearch";
import {InfinityScroll} from "./comps/app2/notes/InfinityScroll";
import {DynamicWebImport} from "./comps/app2/notes/DynamicWebImport";
import {MultiSlotTransclusion} from "./comps/app2/notes/MultiSlotTransclusion";
import {CompFactory} from "./comps/app2/notes/CompFactory";
import {Clock} from "./comps/app2/notes/Clock";
import {CompBuilder} from "./comps/app2/notes/CompBuilder";
import {CompElemBuilder} from "./comps/app2/notes/CompElemBuilder";
import {EmbedView} from "./comps/app2/notes/EmbedView";
import {
    ToggleButtonApp,
    ToggleButton
} from "./comps/app2/notes/ToggleButton";
import {
    StreamButton,
    IncrementingDisplay,
    ToggleBut
} from "./comps/app2/notes/StreamButton";
import {
    ngBookRepeatSample,
    ngBookRepeat
} from "./comps/ngForIf/ngBookRepeat";
import {InjectTemplateParent} from "./comps/app2/notes/InjectTemplateParent";
import {OptionListComponent} from "./comps/optionlistcomponent/optionlistcomponent";
import {NotesDetailsItems} from "./comps/app2/notes/NotesDetailsItems";
import {NotesDetails} from "./comps/app2/notes/NotesDetails";
import {CountDown} from "./comps/countdown/CountDown";
import {Notes1Props} from "./comps/app2/notes/Notes1Props";
import {SortableHeader} from "./comps/app2/weather/SortableHeader";
import {FilmsComponent} from "./comps/app3/starwars/components/films-component";
import {AdminComponent} from "./comps/app3/starwars/components/admin-component";
import {ShoppingComponent} from "./comps/app3/starwars/components/shopping-component";
import {Starwars} from "./comps/app3/starwars/Starwars";
import {UsersView} from "./comps/app3/starwars/components/users-view";
import {CartView} from "./comps/app3/starwars/components/cart-view";
import {AddPartsView} from "./comps/app3/starwars/components/add-part-view";
import {SimpleList} from "./comps/simplelist/Simplelist";
import {UserView} from "./comps/app3/starwars/components/user-view";
import {FilmSelectionView} from "./comps/app3/starwars/components/film-selection-view";
import {FilmView} from "./comps/app3/starwars/components/film-view";
import {Ng2Highstocks} from "./comps/ng2-highcharts/src/directives/ng2-highstocks";
import {Ng2Highmaps} from "./comps/ng2-highcharts/src/directives/ng2-highmaps";
import {PartsView} from "./comps/app3/starwars/components/parts-view";
import {
    AccordionGroup,
    Accordion
} from "./comps/ng2Accordion/accordion";
import {ButtonCheckbox} from "./comps/ng2button/button-checkbox.component";
import {ButtonRadio} from "./comps/ng2button/button-radio.component";

var modules = [JSONP_PROVIDERS, {
    provide: AppStore,
    useFactory: Lib.StoreFactory({
        notify,
        appdb,
        parts,
        cart,
        films,
        users,
        todos
    })
}, {
    provide: PositionService,
    useClass: PositionService
}, {
    provide: ModalComponent,
    useClass: ModalComponent
}, {
    provide: CommBroker,
    useClass: CommBroker
}, {
    provide: AuthService,
    useClass: AuthService
}, {
    provide: LogoutDeactivate,
    useClass: LogoutDeactivate
}, {
    provide: PLATFORM_PIPES,
    useValue: CharCount,
    multi: true
}, {
    provide: Consts,
    useClass: Consts
}];

/**
 Main application bootstrap
 @class Main
 **/
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.Emulated,
    providers: [StyleService, AppdbAction, modules],
    templateUrl: '/src/App.html'
})

export class Main {
    private m_styleService: StyleService;

    constructor(private appStore: AppStore, private commBroker: CommBroker, styleService: StyleService, private appdbAction: AppdbAction) {
        appStore.dispatch(appdbAction.appStartTime());
        this.m_styleService = styleService;
        this.commBroker.setService(Consts.Services().App, this);
        Observable.fromEvent(window, 'resize').debounceTime(250).subscribe(()=> {
            this.appResized();
        });
    }

    /**
     On application resize deal with height changes
     @method appResized
     **/
    public appResized(): void {
        var appHeight = document.body.clientHeight;
        var appWidth = document.body.clientWidth;
        //console.log('resized ' + appHeight);
        jQuery(Consts.Elems().APP_NAVIGATOR_EVER).height(appHeight - 115);
        jQuery(Consts.Elems().APP_NAVIGATOR_WASP).height(appHeight - 115);
        jQuery(Consts.Clas().CLASS_APP_HEIGHT).height(appHeight - 420);
        jQuery('#mainPanelWrap').height(appHeight - 115);
        jQuery('#propPanel').height(appHeight - 130);

        this.commBroker.setValue(Consts.Values().APP_SIZE, {
            height: appHeight,
            width: appWidth
        });

        this.commBroker.fire({
            fromInstance: self,
            event: Consts.Events().WIN_SIZED,
            context: '',
            message: {
                height: appHeight,
                width: appWidth
            }
        })
    }
}

if (!Lib.DevMode())
    enableProdMode();

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, ReactiveFormsModule, routing],
    providers: [appRoutingProviders],
    declarations: [Main, Welcome, Digg, Todos, Settings, LoginPanel, Help, App1, App2, App3, ForgotPass, AppManager, EntryPanel, Logout, MakeDraggable, MakeDroppable, Sliderpanel, Todo1, Todo2, TodoList, CharCount, SortBy, OrderBy, Filemenu, FilemenuItem, Logo, Footer, Menu, MenuItem, Sliderpanel, Digg, Contributors, Todos, Todo1, Todo2, TodoList, TodoItem, Logout, Settings, Tabs, Tab, Help, MyChart, AlertComponent, RatingComponent, Tab, Tabs, Contributors, Ng2Highcharts, TodoItem, Nodelogger, DividerPanel, Menu, MenuItem, Sliderpanel, Digg, Properties, Weather, Contact, ModalDialog, Notes, Notes1, Notes2, Notes3, Notes4, Notes5, Contact, ModalDialog, CardComponent, InjectTemplateChild, ModalDialog, DisplayError, CounterInputComponent, TrimmedInput, MyIp, ModalDialog, ModalDialog, MODAL_DIRECTIVES, Minitab, Minitabs, StarWarsSearch, WikiSearch, InfinityScroll, Clock, MultiSlotTransclusion, CompFactory, EmbedView, DynamicWebImport, CompBuilder, CompElemBuilder, CreateEmbedDiffer, ToggleButtonApp, StreamButton, ngBookRepeatSample, CountDown, InjectTemplateParent, TooltipDirective, OptionListComponent, NotesDetails, NotesDetailsItems, IncrementingDisplay, ToggleBut, ToggleButton, Notes1Props, SortableHeader, Starwars, ShoppingComponent, AdminComponent, FilmsComponent, UsersView, UserView, Ng2Highcharts, Ng2Highstocks, Ng2Highmaps, FilmSelectionView, FilmView, PartsView, CartView, AddPartsView, SimpleList, Accordion, AccordionGroup,
        ButtonCheckbox, ButtonRadio, ngBookRepeat],
    bootstrap: [Main],
})
export class App {
}
platformBrowserDynamic().bootstrapModule(App, modules).then((appRef: NgModuleRef<any>) => {
    appInjService(appRef.injector);
});

window['hr'] && window['hr'].on('change', (fileName) => {
    if (fileName.indexOf('html') !== -1) {
        var newBody = document.createElement('body')
        newBody.appendChild(document.createElement('app'))
        document.body = newBody;
        platformBrowserDynamic().bootstrapModule(App, modules).then((appRef: NgModuleRef<any>) => {
            appInjService(appRef.injector);
        });
    }
})

