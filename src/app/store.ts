import { IToDos } from "./itodos";
import { ADD_TODO,  REMOVE_ALL_TODO, REMOVE_TODO, LOAD_TODO } from "./actions";
import { ToDoActions } from "./todo.actions";

export interface IAppState {
    todos: IToDos[];
    lastUpdate: Date;
    severityStatus: SeverityState
}

export interface SeverityState {
    low: number;
    medium: number;
    high: number;
}

export const INITIAL_STATE: IAppState = { 
    todos: [],
    lastUpdate: new Date(),
    severityStatus : {
        low : 0,
        medium : 0,
        high : 0,
    }
}

export function rootReducer(state: IAppState, action){
    const todoAction = new ToDoActions(state,action);
    switch(action.type){
        case LOAD_TODO : return todoAction.loadToDo(); 
        case ADD_TODO : return todoAction.addToDo();        
        case REMOVE_ALL_TODO : return todoAction.removeAllToDo();
        case REMOVE_TODO : return todoAction.removeToDo();
        
    }
    return state;
}