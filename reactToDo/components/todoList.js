import React from 'react';
import styles from "../app/styles";

export default class ToDoList extends React.Component {

  /**
   * delete task
   * @param {event} e
   */
  deleteTask(e) {
    this.props.deleteTask(e.target.parentNode.id);
  };

  /**
   *  set a task to being edited
   * @param {event} e
   */
  toggleEditTask(e) {
    this.props.toggleEditTask(e.target.parentNode.id);
  }

  /**
   * update a task
   * @param {event} e
   */
  updateTask(e) {
    if(e.which === 13) {
      var updatedTask = this.props.todos[e.target.parentNode.id] = {
        title: e.target.value,
        completed: false,
        isBeingEdited: false
      };
      console.log(updatedTask);
      this.props.updateTask(updatedTask);
    }
  }

  /**
   * Cancel updating of a task
   * @param {event} e
   */
  cancelUpdate(e) {
    var updatedTask = this.props.todos[e.target.parentNode.id];
    updatedTask.isBeingEdited = false;
    this.props.updateTask(updatedTask);
  }

  render() {

//conditionally render display or editable input
    var toDoList = this.props.todos.map((task, index)=> {
      if(!task.isBeingEdited) {
        return (
          <div key={index}
               id={index}
               style={styles.taskItem}>
            <button className="btn btn-xs btn-primary"
                    onClick={this.toggleEditTask.bind(this)}
                    style={styles.buttonDefault}>Edit
            </button>
            <button className="btn btn-xs btn-danger"
                    onClick={this.deleteTask.bind(this)}
                    style={styles.buttonDefault}>X
            </button>
            {task.title}
            {task.isBeingEdited}
            <hr/>

          </div>)
      } else {
        return (
          <div key={index}
               id={index}
               style={styles.updateBlock}>
            <h6 className="text-center">Press enter to update</h6>
            <input onKeyUp={this.updateTask.bind(this)}
                   className="form-control"
                   style={styles.updateInput}
                   defaultValue={task.title}
                   type="text"
                   autoFocus="true"/>
            <button className="btn btn-xs btn-warning"
                    onClick={this.cancelUpdate.bind(this)}
                    style={styles.slimMargTop}>Cancel
            </button>
          </div>
        )
      }
    });


    return (
      <div className="col-xs-6 col-xs-offset-3">
        {toDoList}
      </div>
    )
  }
}