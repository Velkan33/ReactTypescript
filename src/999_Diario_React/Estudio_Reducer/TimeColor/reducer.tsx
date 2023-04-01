type ActType =
 | {
    type: true;
    color: string;
   }
 | { type: false; color: string };

export default function changeColor(draft: string, action: ActType) {
 switch (action.type) {
  case true: {
   return action.color;
  }
  case false: {
   return action.color;
  }
  default: {
   return "red-500";
  }
 }
}
