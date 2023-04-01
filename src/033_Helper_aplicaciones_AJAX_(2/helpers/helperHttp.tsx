interface MyOptions {
 signal?: AbortSignal;
 method: 'GET' | 'POST' | 'PUT' | 'DELETE';
 headers?: unknown;
 body?: { nombre: string; constelacion: string } | null;
}
/** En esta clase 33 creamos el helper */
// --El cual que se encarga de hacer las peticiones http

const helpHttp = () => {
 const customFetch = (endpoint: string, options?: MyOptions | null) => {
  const defaultHeader = { 'Content-type': 'application/json' };
  const controller = new AbortController();
  const { signal } = controller;
  const method = options ? options.method : 'GET';
  const headers =
   options && options.headers ? { ...options.headers } : defaultHeader;
  const body = options && options.body ? JSON.stringify(options.body) : null;
  setTimeout(() => controller.abort(), 3000);
  const nextOptions = {
   signal,
   method,
   headers,
   body,
  };
  return fetch(endpoint, nextOptions)
   .then((res) => (res.ok ? res.json() : Promise.reject(res)))
   .catch((err) => err);
 };

 const get = (url: string, options = {}) => {
  return customFetch(url);
 };

 const post = (url: string, options = {}) => {
  const method = 'POST' as const;
  const nextOptions = { ...options, method };
  return customFetch(url, nextOptions);
 };

 const put = (url: string, options = {}) => {
  const method = 'PUT' as const;
  const nextOptions = { ...options, method };
  return customFetch(url, nextOptions);
 };

 const del = (url: string, options = {}) => {
  const method = 'DELETE' as const;
  const nextOptions = { ...options, method };
  return customFetch(url, nextOptions);
 };

 return {
  customFetch,
  get,
  post,
  put,
  del,
 };
};

export default helpHttp;
