import React from "react";
import styles from "../app/styles";

export default class ToDoList extends React.Component {
    render() {
        let toDoList = this.props.todos.map((task, index) => (
            <div id={index} key={index}>
                <h3>{task}</h3>
            </div>
        ));

        return (
            <div className="col-xs-6 col-xs-offset-3">
                {toDoList}
            </div>
        );
    }
}