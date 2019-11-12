import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import AddFriend from './AddFriend';

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <AddFriend />
      <h2>FriendsList</h2>
      <div className='friend-box'>
        {friends.map(friend => (
          <Friend friend={friend} />
        ))}
      </div>
    </div>
  );
}

export default FriendsList;