import { observable, action, computed } from 'mobx';
import ToDo from './toDoClass';

class Store {
    
    @observable todos = [];

    /*
     * @prop {string} task
     */
    @action addNewTodo(task){
        let newTodo = new ToDo(task);
        this.todos.push(newTodo);
    }

    @action deleteTodo(index){
        this.todos.splice(index, 1);
    }

}

let ToDoStore = new Store();

export default ToDoStore;