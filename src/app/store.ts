import { IToDos } from "./itodos";
import { ADD_TODO, TOGGLE_TODO, REMOVE_ALL_TODO, REMOVE_TODO } from "./actions";

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
        case TOGGLE_TODO : 
            var todo = state.todos.find(t => t.id === action.id);
            var index = state.todos.indexOf(todo);
            return Object.assign({}, state,{
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({},todo, { isCompleted: !todo.isCompleted }),
                    ...state.todos.slice(index + 1),
                  ],
                  lastUpdate: new Date()
            });
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