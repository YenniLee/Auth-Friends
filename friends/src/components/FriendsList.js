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
      <h2>FriendsList</h2>
      {friends.map(friend => (
        <Friend friend={friend} />
      ))}
      <AddFriend />
    </div>
  );
}

export default FriendsList;