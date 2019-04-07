import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends Component {
  
  constructor() {
    super();
    this.state ={
      friends: []
    };
  }
  
  updateItems = newFriends => {
    this.setState({ friends: newFriends})
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
        <nav>
          <h1>Ashley's Friends</h1>
          <NavLink exact to ="/">
            Home
          </NavLink>
        </nav>

        {/* {this.state.friends.map(friend =>
          <FriendList friend={friend} key={friend.id}/>
        )}   */}

        <Route exact path="/friend-list"
          render={props => (
              <FriendList {...props} friends={this.state.friends} />
            )}
        />
        <Route path="/friend-form"
          render={props => (
          <FriendForm {...props} updateItems={this.updateItems} />
          )}
        />    
      </div>
    );
  }
}

export default App;
