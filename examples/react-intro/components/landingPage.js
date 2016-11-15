import React from "react";


export default class LandingInfo extends React.Component {

    render() {
        return (
            <div className="company-info">
                <h1>Ye Olde Black Market</h1>
                <p>This company sells the best black market items.</p>
                <ul>
                    <li>Sleep</li>
                    <li>Bootstrap Skills</li>
                    <li>RPGs</li>
                    <li>AI Companions</li>
                    <li>Firefly season 2</li>
                    <li>Galaxy Note 7</li>
                    <li>The Man With Secret Kung Fu</li>
                    <li>The Room</li>
                </ul>
                <p>
                    Check out our products and pricing pages for more info.
                    {this.props.children}
                </p>
                
            </div>
        )
    }

}