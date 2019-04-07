import React from 'react';
import '../Styles.css';

function Home(props) {
    const routeToFriendsList = event => {
        event.preventDefault();
        props.history.push('/friend-list');
    };

    return (
        <div className='home-button'>
            <button onClick={routeToFriendsList}>
                Friends List!
            </button>
        </div>
    )

}

export default Home;