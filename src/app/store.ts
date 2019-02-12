import { IToDos } from "./itodos";
import { ADD_TODO,  REMOVE_ALL_TODO, REMOVE_TODO } from "./actions";

export interface IAppState {
    todos: IToDos[];
    lastUpdate: Date; 
}


export const INITIAL_STATE: IAppState = { 
    todos: [],
    lastUpdate: new Date()
  }

  
export function rootReducer(state: IAppState, action){
    switch(action.type){

        case ADD_TODO : 
        debugger;
            console.log(state.todos);
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({},action.todo)),
                lastUpdate: new Date()
            })
        case REMOVE_ALL_TODO : 
            return Object.assign({},state, {
                todos: [],
                lastUpdate: new Date()
            });
        case REMOVE_TODO : 
            return Object.assign({},state, {
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            });
    }
    return state;
}