import React from 'react';
import './FriendList.css';

function FriendList(props) {
    return (
        <div>
        
            {/* <h1>{props.friend.name}</h1>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p> */}

            {props.friends.map(friend => (
               <div className='friendContainer'> 
                <h1>{friend.name}</h1>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
               </div> 
            ))}

        </div>
    )
} 

export default FriendList;