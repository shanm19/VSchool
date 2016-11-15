import React from 'react';
import styles from "../app/styles";

export default class ToDoInput extends React.Component {

  /**
   * Use contructor to set initial state
   */
  constructor(props) {
    super(props);

    //create and concat initial date value
    let today = new Date();
    let day = today.getDate();
    if(day < 10) {
      day = "0" + day;
    }
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    this.state = {
      newTask: "",
      date: year + "-" + month + "-" + day

    };
  }

  // onChange(e) {
  //   console.log(e.target.value)
  // }


  /**
   * new todo task
   *@param {event} e
   */
  addTask(e) {
    this.setState({
      newTask: e.target.value
    }, function () {
    });

    // only submit if length is greater than 2
    if(e.which === 13 && e.target.value.length > 2) {
      this.props.addTask(this.state.newTask);
      e.target.value = "";
    }

  }

  /**
   * Update a task
   *@param {event} e
   */
  updateNewTask(e) {
    this.state.newTask = e.target.value;
    this.setState({
      newTask: this.state.newTask
    })
  }


  render() {
    return (
      <div className="form-group">
        <div className="col-xs-6 col-xs-offset-3">
          {/*<label htmlFor="newTask">New Todo</label>*/}
          <input className="form-control"
                 id="newTask"
                 onKeyUp={this.addTask.bind(this)}
                 onChange={this.updateNewTask.bind(this)}
                 style={this.state.newTask.length > 2 ? styles.taskInputValid : styles.taskInputInvalid}
                 type="text" placeholder="Add a new to-do"/>
        </div>
        {/*<div className="col-xs-6 col-xs-offset-3">*/}
        {/*<label htmlFor="taskDate">Todo due date</label>*/}
        {/*<input className="form-control"*/}
        {/*id="taskDate"*/}
        {/*style={styles.taskInputValid}*/}
        {/*type="date"*/}
        {/*defaultValue={this.state.date}*/}
        {/*onChange={this.onChange}/>*/}
        {/*</div>*/}
      </div>
    )
  }
}