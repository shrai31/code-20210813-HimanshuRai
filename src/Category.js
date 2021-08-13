import { useState } from "react";

function GetCategory({ bmi }) {
  const [state, setstate] = useState({ category: "", healthRisk: "" });
  switch (bmi) {
    case bmi < 18.5:
      setstate({ category: "Underweight", healthRisk: "Malnutrition risk" });
      break;

    case bmi >= 18.5 && bmi < 24.9:
      //   return "Normal weight";
      setstate({ category: "Underweight", healthRisk: "Malnutrition risk" });
      break;

    case bmi >= 25 && bmi < 29.9:
      //   return "Overweight";

      setstate({ category: "Underweight", healthRisk: "Malnutrition risk" });
      break;

    case bmi >= 30 && bmi < 34.9:
      //   return "Moderately obese";
      setstate({ category: "Underweight", healthRisk: "Malnutrition risk" });
      break;

    case bmi >= 35 && bmi < 39.9:
      //   return "Severely obese";
      setstate({ category: "Underweight", healthRisk: "Malnutrition risk" });
      break;

    case bmi >= 40:
      //   return "Very severely obese";
      setstate({ category: "Underweight", healthRisk: "Malnutrition risk" });
      break;

    default:
      setstate({ category: "", healthRisk: "" });
  }
  return (
    <>
      <td>{state.category}</td>
      <td>{state.healthRisk}</td>
    </>
  );
}

export default GetCategory;
