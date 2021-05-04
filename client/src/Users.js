import React, { Component } from 'react'
import fire from './fire';

export default class Users extends Component {
    constructor() {
        super();
        this.state = {
         email: "",
         fullName: "",
       
    
        };
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      addUser = e => {
        e.preventDefault();
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection('users').add({
      fullName: this.state.fullName,
      email: this.state.email
    });
    this.setState({
      fullName: '',
      email: ''
    });
  };

    
  
    render() {
        return (
            <div>
                 <form onSubmit={this.addUser}>
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            onChange={this.updateInput}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.updateInput}
          />
          <button type="submit">Submit</button>
        </form>
            </div>
        )
    }

}