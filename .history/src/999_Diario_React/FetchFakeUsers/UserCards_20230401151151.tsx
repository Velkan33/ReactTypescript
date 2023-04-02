import React from 'react';
import useMyFetch from './useMyFetch';
import UserCard from './UserCard';

export default function UserCards() {
 const responseArray = useMyFetch({ limit: 25, skip: 0 });
 return {
 {responseArray.map(el => <UserCard data={el} key={el.id}/>) }
 };
}
