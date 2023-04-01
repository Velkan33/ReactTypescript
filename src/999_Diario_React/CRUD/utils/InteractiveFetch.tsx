const myInterFetch = async ({
 url,
 method = 'GET',
 body = null,
}: {
 url: string;
 method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
 body?: null | { nombre: string; constelacion: string };
}) => {
 try {
  const nextBody = body ? JSON.stringify(body) : null;
  const res = await fetch(url, {
   method,
   body: nextBody,
   headers: { 'Content-Type': 'application/json;charset=utf-8' },
  });
  const response = await res.json();

  return { ok: true };
 } catch (myError) {
  return myError;
 }
};

export default myInterFetch;
