import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

class Wrapper extends React.Component {
    render(){
        return (
            <div>
                <Navbar/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default Wrapper;