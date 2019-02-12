import { IAppState } from "./store";

export class ToDoActions {

    constructor(private state: IAppState, private action){

    }

    loadToDo(){
        return Object.assign({},this.state, {
            todos: this.state.todos.concat(this.action.todo),
            lastUpdate: new Date()
        })
    }
    
    addToDo(){
        return Object.assign({},this.state, {
            todos: this.state.todos.concat(Object.assign({},this.action.todo)),
            lastUpdate: new Date()
        })
    }

    removeToDo(){
        return Object.assign({},this.state, {
            todos: this.state.todos.filter(t => t.id !== this.action.id),
            lastUpdate: new Date()
        });
    }

    removeAllToDo(){
        return Object.assign({},this.state, {
            todos: [],
            lastUpdate: new Date()
        });
    }
    
}