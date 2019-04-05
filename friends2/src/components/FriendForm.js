import React from 'react';

class FriendForm extends React.Component() {
   constructor(props) {
       super(props);
       this.state = {
           friend: {
                name: '',
                age: '',
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
    
   }

   render() {
   return (
        <div>

        </div>
    )
   }
}

export default FriendForm;