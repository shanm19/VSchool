// import React from "react";
// import ReactDOM from "react-dom";
// import routes from "../config/routes";

// ReactDOM.render(routes, document.getElementById("app"));

import React from "react";
import ReactDOM from "react-dom";


class ToDoInput extends React.Component{

    componentWillMount(){
        this.setState({
            newTask: ""
        });
    }

    addNewTask(e){
        console.log(e.target.value);
        this.setState({
            newTask: e.target.value
        })
        if(e.which === 13){
            this.props.addNewTask(this.state.newTask);
            e.target.value = "";
        }
    }

    render(){
        return (
            <div style={{textAlign: "center"}}>
                <input type="text" onKeyPress={this.addNewTask.bind(this)} placeholder="Add a new task"/>
                <button>Add ToDo</button>
            </div>
        )
    }

}



class ToDoList extends React.Component{

    render(){

        let toDoList =  this.props.tasks.map((task, index)=> <h4 key = {index}>{task}</h4>);

        return (
            <div style={{textAlign: "center"}}>
                <h3>Yet Another To-Do List</h3>
                {toDoList}
            </div>
        )
    }
}




class ToDoContainer extends React.Component{

    handleAddNewTask(newTask){
        var updatedToDoList = this.state.tasks.push(newTask);
        this.setState({
            tasks: updatedToDoList
        });
    }

    componentWillMount(){
        this.setState({
            tasks: ["get milk", "walk dog", "Wash dishes"]
        })
    }

    render () {
       return  (
           <div>
               <ToDoInput addNewTask={handleAddNewTask.bind(this)}></ToDoInput>
               <ToDoList tasks={this.state.tasks}></ToDoList>
           </div>
       )
    }
}




ReactDOM.render(<ToDoContainer/>, document.getElementById("app"));