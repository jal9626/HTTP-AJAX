import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendList from './components/FriendList';

class App extends Component {
  
  constructor() {
    super();
    this.state ={
      friends: []
    };
  }
  
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }
  

  render() {
    return (
      <div>
        {this.state.friends.map(friend =>
          <FriendList friend={friend} key={friend.id}/>
        )}  
      </div>
    );
  }
}

export default App;
