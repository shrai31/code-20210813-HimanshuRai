import "./App.css";

export default function App() {
  const data = [
    { Gender: "Male",   HeightCm: 171, WeightKg: 96 },
    { Gender: "Male",   HeightCm: 175, WeightKg: 85 },
    { Gender: "Male",   HeightCm: 180, WeightKg: 77 },
    { Gender: "Female", HeightCm: 166, WeightKg: 62 },
    { Gender: "Female", HeightCm: 150, WeightKg: 70 },
    { Gender: "Female", HeightCm: 167, WeightKg: 82 },
  ];

    bmiCalculate();
    getCategory();
    getHealthRisk();

    function bmiCalculate() {
      data.map((val)=>
      val.bmiValue = (val.WeightKg / (val.HeightCm/100 * val.HeightCm/100)).toFixed(2))
    }
    
    function getCategory() {
      data.map((val)=>{
        if (val.bmiValue < 18.5) {
          val.category =  "Underweight";
        }
        if (val.bmiValue >= 18.5 && val.bmiValue < 24.9) {
          val.category = "Normal weight";
        }
        if (val.bmiValue >= 25 && val.bmiValue < 29.9) {
          val.category =  "Overweight";
        }
        if (val.bmiValue >= 30 && val.bmiValue < 34.9) {
          val.category =  "Moderately obese";
        }
        if (val.bmiValue >= 35 && val.bmiValue < 39.9) {
          val.category =  "Severely obese";
        }
        if (val.bmiValue >= 40) {
          val.category = "Very severely obese";
        } 
        return val
      })
    }

    const count = `${ " Number of person overweight is:" + data.filter((val)=>val.category ===  "Overweight" ).length }`; 
  
    function getHealthRisk() {
       data.map(val=>{
         if (val.bmiValue < 18.5) {
           val.healthRisk = "Malnutrition risk";
          }
         if (val.bmiValue>= 18.5 && val.bmiValue < 24.9) {
           val.healthRisk ="Low risk";
          }
         if (val.bmiValue >= 25 && val.bmiValue < 29.9) {
           val.healthRisk ="Enhanced risk";
          }
         if (val.bmiValue>= 30 && val.bmiValue < 34.9) {
           val.healthRisk = "Medium risk";
          }
         if (val.bmiValue>= 35 && val.bmiValue < 39.9) {
           val.healthRisk = "High risk";
          }
         if (val.bmiValue>= 40) {
           val.healthRisk = "Very high risk";
          }
      return val
    })
  }
  
  return (
    <div className="App">
      <table>
        <tr>
          <th>Gender</th>
          <th>HeightCm</th>
          <th>WeightKg</th>
          <th>BMI (Body Mass Index)</th>
          <th>BMI Category</th>
          <th> Health risk</th>
        </tr>
        {data.map((row,key) => (
          <tr key={key}>
            <td>{row.Gender}</td>
            <td>{row.HeightCm}</td>
            <td>{row.WeightKg}</td>
            <td>{row.bmiValue}</td>
            <td>{row.category}</td>
            <td>{row.healthRisk}</td>
          </tr>
        ))}
      </table>
      <div className="Count">
         <strong>{count}</strong>
      </div>
    </div>
  );
}