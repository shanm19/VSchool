import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/header";
import Footer from "../components/footer";
import Content from "../components/content";

class MainPage extends React.Component{
    render(){
        return (
            <div>
                <Navbar/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(<MainPage/>, document.getElementById("app"));