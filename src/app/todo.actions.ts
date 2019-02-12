import { IAppState } from "./store";

export class ToDoActions {

    constructor(private state: IAppState, private action){

    }

    loadToDo(){
        const todos =  this.state.todos.concat(this.action.todo);
        return Object.assign({},this.state, {
            todos: todos,
            severityStatus: this.updateSeverityStatus(todos),
            lastUpdate: new Date()
        })
    }
    
    addToDo(){
        const todos =  this.state.todos.concat(Object.assign({},this.action.todo));
        return Object.assign({},this.state, {
            todos: todos,
            severityStatus: this.updateSeverityStatus(todos),
            lastUpdate: new Date()
        })
    }

    removeToDo(){
        const todos = this.state.todos.filter(t => t.id !== this.action.id);
        return Object.assign({},this.state, {
            todos: todos,
            severityStatus: this.updateSeverityStatus(todos),
            lastUpdate: new Date()
        });
    }

    removeAllToDo(){
        return Object.assign({},this.state, {
            todos: [],
            severityStatus: this.updateSeverityStatus([]),
            lastUpdate: new Date()
        });
    }
    
    private updateSeverityStatus(todos){
        return {
            low: todos.filter(t => t.priority == '1').length,
            medium: todos.filter(t => t.priority == '2').length,
            high: todos.filter(t => t.priority == '3').length
        };
    }
}