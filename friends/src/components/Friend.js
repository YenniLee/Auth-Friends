import React from 'react';

const Friend = ({ friend }) => {
  return (
    <div id={friend.id}>
      <p>Name: {friend.name}</p>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
    </div>
  );
};

export default Friend;