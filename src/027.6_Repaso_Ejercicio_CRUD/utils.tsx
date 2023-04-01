import { PetitionProps } from "./typeUtils";
import { ResponseType } from "./typeUtils";

export const petition = async ({
 url,
 method = "GET",
 body = null,
 headers = { "Content-type": "application/json;charset=UTF-8" },
}: PetitionProps): Promise<ResponseType | ResponseType[] | void> => {
 try {
  let res = await fetch(url, {
   method,
   headers,
   body,
  });
  let json = await res.json();
  // if (!res.ok) throw res;
  return json;
 } catch (err) {
  console.warn(err);
 }
};
