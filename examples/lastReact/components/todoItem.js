import React from 'react';
import { observer } from 'mobx-react';
import ToDoStore from '../stores/todoStore';

@observer
export default class ToDoItem extends React.Component {

    deleteTodo(e) {
        let index = e.target.parentNode.id;
        ToDoStore.deleteTodo(index);
    }

    render() {

        return (
            <div key={index} id={index}>
                <button onClick={this.deleteTodo.bind(this)}>X</button>{task.title}
            </div>
        )

    }
}