import { Component } from "@angular/core";
import { select, NgRedux } from "@angular-redux/store";
import { IAppState } from "../store";
import { REMOVE_ALL_TODO } from "../actions";

@Component({
    selector : 'app-todo-overview',
    templateUrl:'./todo.overview.component.html'
})
export class ToDoOverviewComponent {

    @select('todos') todos;

    @select('lastUpdate') lastUpdate;

    constructor(private ngRedux : NgRedux<IAppState>){
        
    }

    clearToDos(){
        debugger;
        this.ngRedux.dispatch({type: REMOVE_ALL_TODO});
    }
}