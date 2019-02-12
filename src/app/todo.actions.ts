export class ToDoActions {

    constructor(private state, private action){

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