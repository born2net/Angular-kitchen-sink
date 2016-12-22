import {Component} from "@angular/core";

@Component({
    selector: 'Todos',
    styles: [`
        :host /deep/ .show_border {
          border: 2px white solid;
          font-size: 3em;
        }
    `],
    template: `
        <br/>
        <br/>
        <br/>
        <br/>
        <Sliderpanel>
            <div class="campaignSlider noScroll">
              <Slideritem class="page center todo1 selected" [toDirection]="'left'" [to]="'todo2'">
                  <Todo1>
                    <div class="yScroll">
                      <hr/>
                      <h3>To do sample application with remote server save</h3>
                      <h5>uses your ip address as unique token and keeps data on server for 2 days</h5>
                      <hr/>
                      <todo-list>
                      </todo-list>
                    </div>
                  </Todo1>
              </Slideritem>
              <Slideritem class="page right todo2" class="page right todo2" [toDirection]="'left'" [fromDirection]="'right'" [from]="'todo1'" [to]="'todo3'">
                <Todo2 [style.height.px]="boxWidth" style="overflow-y: scroll !important;" [color]="'gray'" [show_border]="false" (onMyEvent)="doSomething($event)">
                <hr/>
                <h3>To do remote server statistics</h3>
                <h5>display your total CRUD operations to remote node server</h5>
                <hr/>
              </Todo2>
              </Slideritem>
              <Slideritem class="page right todo3" [fromDirection]="'right'" [from]="'todo2'" >
                  <Todo3>
                  </Todo3>
              </Slideritem>
            </div>
          </Sliderpanel>
    `
})

export class Todos {
    boxWidth = 400;

    private doSomething(e) {
        console.log('okClicked ' + e);
    }
}
