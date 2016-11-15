import React from 'react';
import { observer } from 'mobx-react';
import ToDoStore from '../stores/todoStore';
import ToDoItem from "./todoItem";

@observer
export default class ToDoListDisplay extends React.Component {

    deleteTodo(e){
        let index = e.target.parentNode.id;
        ToDoStore.deleteTodo(index);
    }

    render() {
        let toDoList = ToDoStore.todos.map((task, index) => (
            <ToDoItem key={index} index={index} task={task} />
        ));

        return (
            <div style={{textAlign: "center"}}>
                <h3>My to-dos:</h3>
                {toDoList}
            </div>
        )

    }
}