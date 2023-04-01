import React, { useState, useEffect } from 'react';

const useFetch = (url: string) => {
 const [data, setData] = useState(null);
 const [error, setError] = useState<null | unknown>(null);
 const [loading, setLoading] = useState(false);
 useEffect(() => {
  const abortController = new AbortController();
  const { signal } = abortController;

  const fetchData = async () => {
   setLoading(true);
   try {
    const res = await fetch(url);
    if (!res.ok) {
     const err = new Error('Error al realizar la petición');

     err.cause = {
      status: res.status || '00',
      statusText: res.statusText || 'Ocurrio un error',
     };
     throw err;
    }
    const json = await res.json();

    if (!signal.aborted) {
     setData(json);
     setError(null);
    }
   } catch (myError) {
    if (!signal.aborted) {
     setData(null);
     setError(myError);
    }
   } finally {
    if (!signal.aborted) {
     setLoading(false);
    }
   }
  };
  fetchData();
  return () => abortController.abort();
 }, [url]);
 return { data, error, loading };
};

export default useFetch;
