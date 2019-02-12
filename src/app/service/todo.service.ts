import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IAppState } from "../store";
import { NgRedux } from "@angular-redux/store";
import { LOAD_TODO } from "../actions";

@Injectable()
export class ToDoService {

    constructor(private ngRedux : NgRedux<IAppState>, private http: HttpClient){

    }

    loadToDo(){
        this.http.get('assets/todos.json').subscribe(todos =>{
            console.log(todos);
            this.ngRedux.dispatch({type:LOAD_TODO, todo: todos})
        });
    }
}