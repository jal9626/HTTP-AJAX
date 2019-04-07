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
        friend: { ...prevState.item, [event.target.name]: value}
       }));
   }

   handleSubmit = event => {
       event.preventDefault();
       axios
        .post("http://localhost:5000/friends", this.state.friend)
        .then(response => {this.props.updateItems(response.data)
        })

   }

   render() {
   return (
        <div>

        </div>
    )
   }
}

export default FriendForm;