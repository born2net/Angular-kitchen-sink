import {NgModule, ANALYZE_FOR_ENTRY_COMPONENTS} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [/** include your default components **/],
    exports: [/** include your default components **/]
})
export class ModuleWithEntryComp {
    static withComponents(components: any[]) {
        return {
            ngModule: ModuleWithEntryComp,
            providers: [
                {provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true}
            ]
        }
    }
}

// @NgModule({
//     imports: [
//         BrowserModule,
//         FormsModule,
//         GridModule.withComponents([
//             CompExample1,
//             CompExample2,
//             CompExample3
//         ])
//     ],
//     declarations: [
//         AppComponent,
//         CompExample1,
//         CompExample2,
//         CompExample3
//     ],
//     bootstrap: [AppComponent]
// })
// export class AppModule {
// }