// ref: https://netbasal.com/handling-multiple-checkboxes-in-angular-forms-57eb8e846d21

import {ChangeDetectionStrategy, Component} from "@angular/core";
import {FormArray, FormBuilder} from "@angular/forms";

@Component({
    selector: 'dynamic-check-box',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <form [formGroup]="form" (submit)="submit(form.value)">
            <div *ngFor="let skill of skills.controls; let i=index">
                <input type="checkbox" [formControl]="skill"/>{{user.skills[i].name}}
            </div>
            <button type="submit">Submit</button>
        </form>

        {{ form.value | json }}
    `,
})
export class DynamicCheckBox {
    user = {
        skills: [
            {name: 'JS', selected: true, id: 12},
            {name: 'CSS', selected: false, id: 2},
        ]
    }
    form;

    constructor(private fb: FormBuilder) {
        console.clear();

        this.form = this.fb.group({
            skills: this.buildSkills()
        });

        console.log(this.form.get("skills"))
    }

    get skills(): FormArray {
        return this.form.get('skills') as FormArray;
    };

    buildSkills(): FormArray {
        const arr = this.user.skills.map(s => {
            return this.fb.control(s.selected);
            // return this.fb.group({
            //   selected: [s.selected],
            //   id: [s.id]
            // }
        })
        return this.fb.array(arr);
    }

    submit(value) {

        const f = Object.assign({}, value, {
            skills: value.skills.map((s, i) => {
                return {
                    id: this.user.skills[i].id,
                    selected: s
                }
            })
        });

        console.log('send to server ' + f);
    }


}

