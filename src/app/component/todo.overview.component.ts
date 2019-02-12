import { Component, OnInit } from "@angular/core";
import { select, NgRedux } from "@angular-redux/store";
import { IAppState } from "../store";
import { REMOVE_ALL_TODO } from "../actions";
import { ToDoService } from "../service/todo.service";

@Component({
    selector : 'app-todo-overview',
    templateUrl:'./todo.overview.component.html'
})
export class ToDoOverviewComponent implements OnInit {

    @select('todos') todos;

    @select('lastUpdate') lastUpdate;


    constructor(private ngRedux : NgRedux<IAppState>, private todoService : ToDoService){
        
    }

    ngOnInit(){
        this.todoService.loadToDo();
    }


    clearToDos(){
        debugger;
        this.ngRedux.dispatch({type: REMOVE_ALL_TODO});
    }
}