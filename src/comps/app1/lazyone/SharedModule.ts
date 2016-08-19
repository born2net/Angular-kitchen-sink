import {
    NgModule,
    ModuleWithProviders
} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
    FormsModule,
    ReactiveFormsModule
} from "@angular/forms";
import {AuthService} from "../../../services/AuthService";
import {
    HttpModule,
    JsonpModule
} from "@angular/http";
@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, JsonpModule, ReactiveFormsModule],
    declarations: [],
    exports: [CommonModule, FormsModule, HttpModule, JsonpModule, ReactiveFormsModule]
})

// here we are loading the AuthService ONLY when this shated module is loaded by the app and not
// by a feature or lazy loaded module, this making sure we share a single instance of AuthService
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [AuthService]
        };
    }
}