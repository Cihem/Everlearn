import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div>
                <h2><span className="ever">Ever</span><span className="learn">Learn</span></h2>
                <input placeholder="email" type="text" /><br></br><br></br>
                <input placeholder="password" type="password" /><br></br><br></br>
                <button className="loginButton">Sign in</button>
            </div>
        )
    }
}
