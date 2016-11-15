/**
 * Node imports
 */
import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./styles";

/**
 * component imports
 */
import ToDoInput from "../components/todoInput";
import ToDoList from "../components/todoList";

class ToDoContainer extends React.Component {
  // set initial state with constructor
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [{
        title: "buy Milk",
        completed: false,
        isBeingEdited: false
      }, {
        title: "Walk Dog",
        completed: false,
        isBeingEdited: false
      }, {
        title: "Wash dishes",
        completed: false,
        isBeingEdited: false
      },]
    }
  }

  /**
   * Add a task to state
   * @param {string} task
   */
  handleAddTask(task) {
    var newTask = {
      title: task,
      completed: false,
      isBeingEdited: false
    };

    this.state.toDoList.push(newTask);
    this.setState({
      toDoList: this.state.toDoList
    });
  }

  /**
   * set a task to being edited, sets any other objects in editing state to not being edited
   * @param {numer} index
   */
  handleToggleEditTask(index) {
    this.state.toDoList[index].isBeingEdited = !this.state.toDoList[index].isBeingEdited;
    console.log(this.state.toDoList instanceof Array);
    // set all other items to not being edited
    this.state.toDoList.forEach((task)=> {
      console.log(task);
      if(task !== this.state.toDoList[index] && task.isBeingEdited === true) {
        task.isBeingEdited = false;
      }
    });

    this.setState({
      toDoList: this.state.toDoList
    });
  }

  /**
   * deletes a task and sets state
   * @param {numer} index
   */
  handleDeleteTask(index) {
    this.state.toDoList.splice(index, 1);
    this.setState({
      toDoList: this.state.toDoList
    });
  }

  /**
   * updates a task and sets state
   * @param {object} updatedTask
   * @param {number} index
   */
  handleUpdateTask(updatedTask, index) {
    this.state.toDoList[index] = updatedTask;

    this.setState({
      toDoList: this.state.toDoList
    });
  }


  render() {
    return (
      <div className="container">
        <h1 className="text-center">Yet Another ToDo List</h1>
        <div className="row">
          <ToDoInput addTask={this.handleAddTask.bind(this)}/>
        </div>
        <div className="row">
          <ToDoList todos={this.state.toDoList}
                    updateTask={this.handleUpdateTask.bind(this)}
                    toggleEditTask={this.handleToggleEditTask.bind(this)}
                    deleteTask={this.handleDeleteTask.bind(this)}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(< ToDoContainer />, document.getElementById("app"));