import React from 'react';

const Friend = ({ friend }) => {
  return (
    <div id={friend.id} className='friend'>
      <h3>Name: {friend.name}</h3>
      <p>Age: {friend.age}</p>
      <p>Favorite Food: {friend.food}</p>
      <p>Email: {friend.email}</p>
    </div>
  );
};

export default Friend;