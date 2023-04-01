export function Test() {
 interface Image {
  url: string;
  height: string | number;
  width: number | string;
 }

 type Res = "url" | "height" | "width";

 let image: Record<Res, string | number> = {
  url: "hola",
  height: 4,
  width: "small",
 };

 //is - satisfies - Record - Partial - Omit

 let random: Omit<Image, "width" | "height"> = {
  url: "nat",
 };

 interface Tor {
  name: string;
  id: number;
  color: string | number;
 }

 let obj = {
  name: "ken",
  id: 4,
  color: "hel",
 };

 return <></>;
}
