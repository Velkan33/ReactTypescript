import React from 'react';

export default function UserCard(data) {
 const { firstName } = data;
 return (
  <div>
   <img src="" alt="userImg" />
   <div>
    <p>{firstName}</p>
    <p>user</p>
   </div>{' '}
  </div>
 );
}
