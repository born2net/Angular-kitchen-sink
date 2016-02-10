import {Component} from "angular2/core";
import {Sliderpanel} from "../../sliderpanel/Sliderpanel";
import {Todo1} from "./Todo1";
import {Todo2} from "./Todo2";
import {TodoList} from "./Todolist";

@Component({
    selector: 'Todos',
    directives: [Sliderpanel, Todo1, Todo2, TodoList],
    template: `
        <br/>
        <br/>
        <br/>
        <br/>
        <Sliderpanel>
            <div class="campaignSlider noScroll">
              <Todo1 class="page center todo1 selected">
                <div class="yScroll">
                  <hr/>
                  <h3>To do sample application with remote server save</h3>
                  <h5>uses your ip address as unique token and keeps data on server for 2 days</h5>
                  <hr/>
                  <todo-list>
                  </todo-list>
                </div>
              </Todo1>
              <Todo2 class="page right todo2">
                <hr/>
                <h3>To do remote server statistics</h3>
                <h5>display your total CRUD operations to remote node server</h5>
                <hr/>
              </Todo2>
            </div>
          </Sliderpanel>
    `
})

export class Todos {
    constructor() {
    }
}
