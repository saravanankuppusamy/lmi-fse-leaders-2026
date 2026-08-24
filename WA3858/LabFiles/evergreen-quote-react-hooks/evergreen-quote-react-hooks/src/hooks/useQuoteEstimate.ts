// useQuoteEstimate.ts (Starter)
// A CUSTOM HOOK is just a function whose name starts with "use" and that calls
// other hooks. In the lab you will move the form's state and premium logic here
// so it becomes reusable.
import { useState } from "react";
import { calculatePremium } from "../premium";
import type { CoverageType } from "../types";

export function useQuoteEstimate() {
  // TODO 1: move the three pieces of state here:
  //   const [type, setType] = useState<CoverageType>("auto");
  //   const [age, setAge] = useState(35);
  //   const [coverageAmount, setCoverageAmount] = useState(50000);

  // TODO 2: compute isValid, premium, and error (same logic as Week 3).

  // TODO 3: return everything the component needs as an object:
  //   return { type, setType, age, setAge, coverageAmount, setCoverageAmount,
  //            premium, error, isValid };
  return {};
}
