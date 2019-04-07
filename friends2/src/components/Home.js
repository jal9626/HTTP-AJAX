import React from 'react';

function Home(props) {
    const routeToFriendsList = event => {
        event.preventDefualt();
        props.history.push('/friend-list');
    };

    return (
        <div>
            <button onClick={routeToFriendsList}>
                Friends List!
            </button>
        </div>
    )

}

export default Home;