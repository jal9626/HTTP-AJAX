import React, { Component } from 'react';
import axios from 'axios';

class FriendForm extends Component {
   constructor(props) {
       super(props);
       this.state = {
           friend: {
                name: '',
                age: Number,
                email: ''
           }
       };
   }
   
   changeHandler = event => {
       event.persist();
       let value = event.target.value;
       this.setState(prevState => ({
        friend: { ...prevState.friend, [event.target.name]: value}
       }));
   }

   handleSubmit = event => {
       event.preventDefault();
       axios
        .post("http://localhost:5000/friends", this.state.friend)
        .then(response => {
            this.props.updateItems(response.data)
            this.props.history.push('/friend-list')
        })

   }

   render() {
   return (
        <div>
            <h2>Add New Friend</h2>
            <form onSubmit={this.handleSubmit}>
            
                <input 
                    type='text'
                    name='name'
                    onChange={this.changeHandler}
                    placeholder='Name'
                    value={this.state.friend.name}
                />
                <div className="baseline" />
                <input 
                    type='number'
                    name='age'
                    onChange={this.changeHandler}
                    placeholder='Age'
                    value={this.state.friend.age}
                />
                <div className="baseline" />
                <input 
                    type='text'
                    name='email'
                    onChange={this.changeHandler}
                    placeholder='Email'
                    value={this.state.friend.email}
                />
                <div className="baseline" />
                <button type='submit'>Add New Friend</button>
                    
                
            
            </form>
        </div>
    );
   }
}

export default FriendForm;