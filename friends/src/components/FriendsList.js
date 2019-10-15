import React from 'react';
import Friend from './Friend';
import AddFriend from './AddFriend';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res  => {
                console.log('response: ', res.data)
                this.setState({friends: res.data})
            })
            .catch(err => console.log('get request error', err))
    };


    render() {

        return (
            <>
            <h3>Friends List</h3>
            {this.state.friends.map(friend => (
             <Friend
                key={friend.id}
                name={friend.name}
                age={friend.age}
                email={friend.email}
                />
            ))}
                <AddFriend />
            </>
        )
    }

}

export default FriendsList;