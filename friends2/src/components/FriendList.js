import React from 'react';
import './FriendList.css';

function FriendList(props) {
    return (
        <div className='friendContainer'>
        
            <h1>{props.friend.name}</h1>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>

        </div>
    )
} 

export default FriendList;