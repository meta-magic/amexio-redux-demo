import { IToDos } from "./itodos";
import { ADD_TODO,  REMOVE_ALL_TODO, REMOVE_TODO } from "./actions";
import { ToDoActions } from "./todo.actions";

export interface IAppState {
    todos: IToDos[];
    lastUpdate: Date; 
}

export const INITIAL_STATE: IAppState = { 
    todos: [],
    lastUpdate: new Date()
}

export function rootReducer(state: IAppState, action){
    const todoAction = new ToDoActions(state,action);
    switch(action.type){
        case ADD_TODO : return todoAction.addToDo();        
        case REMOVE_ALL_TODO : return todoAction.removeAllToDo();
        case REMOVE_TODO : return todoAction.removeToDo();
    }
    return state;
}