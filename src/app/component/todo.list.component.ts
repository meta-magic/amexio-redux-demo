import { Component } from "@angular/core";
import { select, NgRedux } from "@angular-redux/store";
import { IAppState } from "../store";
import { IToDos } from "../itodos";
import { ADD_TODO } from "../actions";
import { Priority } from "../models/priority.model";

@Component({
    selector: 'todo-list',
    templateUrl: './todo.list.component.html'
})
export class ToListComponent {

    @select('todos') todos;

    @select('lastUpdate') lastUpdate;

    priorties: Priority[];

    model: IToDos = {
        id: "0",
        description: "",
        priority: "1",
        isCompleted: false
    }

    constructor(private ngRedux: NgRedux<IAppState>) {
        this.priorties = [];
        this.priorties.push(new Priority('1','Low'));
        this.priorties.push(new Priority('2','Medium'));
        this.priorties.push(new Priority('3','High'));
    }

    addToDo() {
        debugger;
        this.ngRedux.dispatch({ type: ADD_TODO, todo: this.model });
        
    }

}