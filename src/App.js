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
      val.bmivalue = (val.WeightKg / (val.HeightCm/100 * val.HeightCm/100)).toFixed(2))
    }
    
    function getCategory() {
      data.map((val)=>{
        if (val.bmivalue < 18.5) {
          val.cat =  "Underweight";
        }
        if (val.bmivalue >= 18.5 && val.bmivalue < 24.9) {
          val.cat = "Normal weight";
        }
        if (val.bmivalue >= 25 && val.bmivalue < 29.9) {
          val.cat =  "Overweight";
        }
        if (val.bmivalue >= 30 && val.bmivalue < 34.9) {
          val.cat =  "Moderately obese";
        }
        if (val.bmivalue >= 35 && val.bmivalue < 39.9) {
          val.cat =  "Severely obese";
        }
        if (val.bmivalue >= 40) {
          val.cat = "Very severely obese";
        } 
        return val
      })
    }

    const count = `${ " Number of person overweight is:" + data.filter((val)=>val.cat ===  "Overweight" ).length }`; 
  
    function getHealthRisk() {
       data.map(val=>{
         if (val.bmivalue < 18.5) {
           val.hr = "Malnutrition risk";
          }
         if (val.bmivalue>= 18.5 && val.bmivalue < 24.9) {
           val.hr ="Low risk";
          }
         if (val.bmivalue >= 25 && val.bmivalue < 29.9) {
           val.hr ="Enhanced risk";
          }
         if (val.bmivalue>= 30 && val.bmivalue < 34.9) {
           val.hr = "Medium risk";
          }
         if (val.bmivalue>= 35 && val.bmivalue < 39.9) {
           val.hr = "High risk";
          }
         if (val.bmivalue>= 40) {
           val.hr = "Very high risk";
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
            <td>{row.bmivalue}</td>
            <td>{row.cat}</td>
            <td>{row.hr}</td>
          </tr>
        ))}
      </table>
      <div className="Count">
         <strong>{count}</strong>
      </div>
    </div>
  );
}