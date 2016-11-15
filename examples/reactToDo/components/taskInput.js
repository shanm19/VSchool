import React from "react";
import styles from "../app/styles.js";

export default class TaskInput extends React.Component{
    render(){
        return (
            <div className="form-group col-xs-6 col-xs-offset-3 row">
                <input  className="form-control"
                        type="text"
                        placeholder="Add a new todo"
                        style={styles.center}/>
            </div>
        );
    }
}