interface MyParam {
 url: string;
 method?: string;
 body?: string | null;
 headers?: { [arg: string]: string };
}
export interface Element {
 id: number;
 nombre: string;
 constelacion: string;
}

export default async function request({
 url,
 method = 'GET',
 body,
 headers,
}: MyParam): Promise<Element[] | string | unknown> {
 try {
  const res = await fetch(url, { method, body, headers });
  if (!res.ok) throw new Error(JSON.stringify(res.status));
  const json = await res.json();
  return json;
 } catch (error) {
  return error;
 }
}
