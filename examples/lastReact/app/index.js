import React from "react";
import ReactDOM from "react-dom";
import Devtools from "mobx-react-devtools";
import { observer } from "mobx-react";
import ToDoStore from "../stores/todoStore";

import ToDoInput from "../components/todoInput";
import ToDoListDisplay from "../components/todoListDisplay";

@observer
class MainPage extends React.Component {

    store = this.props.ToDoStore;

   render(){
       return (
           <div>
                <Devtools/>
                <ToDoInput/>
                <ToDoListDisplay/>
           </div>
       )
   }

}

ReactDOM.render(<MainPage/>, document.getElementById("app"));