import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Friend = ({ friend, setFriends }) => {

  const deleteFriend = () => {
    axiosWithAuth()
    .delete(`/friends/${friend.id}`)
    .then(res => {
      console.log(res);
      setFriends(res.data);
    })
    .catch(err => console.error(err));
  }

  return (
    <div id={friend.id} className='friend'>
      <h3>Name: {friend.name}</h3>
      <p>Age: {friend.age}</p>
      <p>Favorite Food: {friend.food}</p>
      <p>Email: {friend.email}</p>
      <button id='x' onClick={deleteFriend}>X</button>
    </div>
  );
};

export default Friend;