import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './Styles.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import Home from './components/Home';

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
        <div className='nav-container'>
          <h1>Ashley's Friends</h1>
          <nav>
            <NavLink exact to ="/">
              Home
            </NavLink>
            <NavLink to="/friend-list" >
              Friends
            </NavLink> 
            <NavLink to="/friend-form" >
              Enter New Friend
            </NavLink>
          </nav>
        </div>
        {/* {this.state.friends.map(friend =>
          <FriendList friend={friend} key={friend.id}/>
        )}   */}

        <Route exact path='/' render={props =>(
          <Home {...props} />
        )} 
        />
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
