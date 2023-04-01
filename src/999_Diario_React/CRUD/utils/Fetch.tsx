import React, { useState, useCallback, useEffect } from 'react';

const useMyFetch = ({ url }: { url: string }) => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 const fetchData = useCallback(async () => {
  try {
   const response = await fetch(url);
   const nextData = await response.json();
   setData(nextData);
  } catch (myError: any) {
   setError(myError);
  } finally {
   setLoading(false);
  }
 }, [url]);

 return { data, loading, error, fetchData };
};

export default useMyFetch;
