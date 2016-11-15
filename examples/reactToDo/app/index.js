// Node Imports
import React from "react";
import ReactDOM from "react-dom";

// Components
import styles from "./styles";
import TaskInput from "../components/taskInput";
import ToDoList from "../components/toDoList";

class Hello extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            todos: ["Wash dishes", "Walk the dog", "Paint the fridge"]
        };
    }

    render(){
        return (
            <div className="container text-center">
                <h1>Yet another todo app</h1>
                <div className="row">
                    <TaskInput/>
                </div>
                <div className="row">
                    <ToDoList todos={this.state.todos}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Hello/>, document.getElementById("app"));