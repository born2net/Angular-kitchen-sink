import {Component} from "@angular/core";

export interface IHaveDynamicData {
    name?: string
    entity?: { description: string }
}

export class CustomComponentBuilder {
    public CreateTemplate() {
        let template = `
            <div>
                <h3>Dynamic component</h3>
                
                with dynamic data:
                <dl>
                  <dt>string value 'name'</dt>
                  <dd><b>{{name}}</b></dd>
                  <dt>reference value 'entity' and its 'description'</dt>
                  <dd><b>{{entity?.description}}</b></dd>
                </dl>
            </div>`;
        return template;
    }

    public CreateComponent(tmpl: string, injectDirectives: any[]): any {

        @Component({
            selector: 'dynamic-component',
            template: tmpl,
            directives: injectDirectives,
        })
        class CustomDynamicComponent implements IHaveDynamicData {

            public name: string;
            public entity: { description: string };
        }
        ;

        return CustomDynamicComponent;
    }
}