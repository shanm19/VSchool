import React from "react";
import { Link } from "react-router";

export default class Navbar extends React.Component {

    render() {
        return (
            <nav>
                <brand className="navLink">Ye Olde Black Market</brand>
                <Link className="navLink" to="/">About Us</Link>
                <Link className="navLink" to="/shop">Shop</Link>
                <Link className="navLink" to="/shop/secret">Secret</Link>
            </nav>
        )
    }

}