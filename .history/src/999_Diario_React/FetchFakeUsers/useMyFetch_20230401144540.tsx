import React from 'react';
import { useImmer } from 'use-immer';

export default function useMyFetch({ limit, skip }) {
 const [responseArray, setResponseArray] = useImmer([]);
 useEffect(() => {
  fetch();
 }, []);
 return [responseArray];
}
