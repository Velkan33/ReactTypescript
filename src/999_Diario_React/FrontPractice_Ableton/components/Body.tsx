import React from "react";
import BoldText from "./body/TextBold";
import TextNormal from "./body/TextNormal";
import {
 Inter1,
 Inter2,
 Inter3,
 Inter4,
 Inter5,
 Inter6,
} from "./body/InterMediaChildren/Inter";
import { articles } from "../utils/articles";

export default function Body() {
 return (
  <>
   <BoldText>{articles("Bold1")}</BoldText>
   <TextNormal>{articles("Normal1")}</TextNormal>
   <Inter1 />
   <BoldText>{articles("Bold2")}</BoldText>
   <TextNormal>{articles("Normal2")}</TextNormal>
   <Inter2 />
   <BoldText>{articles("Bold3")}</BoldText>
   <TextNormal>{articles("Normal3")}</TextNormal>
   <Inter3 />
   <BoldText>{articles("Bold4")}</BoldText>
   <TextNormal>{articles("Normal4")}</TextNormal>
   <Inter4 />
   <BoldText>{articles("Bold5")}</BoldText>
   <TextNormal>{articles("Normal5")}</TextNormal>
   <Inter5 />
   <BoldText>{articles("Bold6")}</BoldText>
   <TextNormal>{articles("Normal6")}</TextNormal>
   <Inter6 />
   <hr />
  </>
 );
}
