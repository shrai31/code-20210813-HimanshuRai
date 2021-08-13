// import {useState} from 'react';
import "./App.css";
import GetCategory from './Category';


const data = [
  { Gender: "Male", HeightCm: 171, WeightKg: 96 },
  { Gender: "Male", HeightCm: 175, WeightKg: 85 },
  { Gender: "Male", HeightCm: 180, WeightKg: 77 },
  { Gender: "Female", HeightCm: 166, WeightKg: 62 },
  { Gender: "Female", HeightCm: 150, WeightKg: 70 },
  { Gender: "Female", HeightCm: 167, WeightKg: 82 },
];

 var BMI =0;

function bmiCalculate (weight, height) {
  BMI = (weight / (height * height)).toFixed(2);
  // setBmi(BMI);
  return BMI;
}
//  var obj = {category:"",healthRisk:""};
const x = data.map((row , index) => {
  return(
  <tr key={index}>
  <td>{row.Gender}</td>
  <td>{row.HeightCm}</td>
  <td>{row.WeightKg}</td>
  <td>{bmiCalculate(row.WeightKg, row.HeightCm / 100)}</td>
  <GetCategory bmi={BMI} />

  {/* <td>
  {console.log(BMI)}
       {getCategory(BMI).category}
       {console.log("mjhfgdfdfdghj",getCategory(20).category)}
  </td>
  <td>{getCategory(BMI).health}</td> */}
</tr>)
})




// function getCategory(bmi) {
//   // setBmi(100);
//   // console.log("123243546578",bmi)
//   switch(bmi){
//     case bmi < 18.5:
//       // obj.category=  "Underweight";
//       // obj.healthRisk= "Malnutrition risk"
//       return bmi ;
  
//     case bmi >= 18.5 && bmi < 24.9:
//     // return "Normal weight";
//     return {category:"Normal weight" , health:"Malnutrition risk"} ;

  
    // case bmi >= 25 && bmi < 29.9:
    // // return "Overweight";
    // return bmi ;

  
    // case bmi >= 30 && bmi < 34.9:
    // // return "Moderately obese";
    // return {category:"Moderately obese" , health:"Malnutrition risk"} ;

  
    // case bmi >= 35 && bmi < 39.9:
    // // return "Severely obese";
    // return {category:"Severely obese" , health:"Malnutrition risk"} ;

  
    // case bmi >= 40:
    // // return "Very severely obese";
    // return {category:"Very severely obese" , health:"Malnutrition risk"} ;


//     default :
//     return "";
//   }
  

// }
// console.log("function",getCategory(20));

// function getHealthRisk(bmi) {
//   if (bmi < 18.5) {
//     return "Malnutrition risk";
//   }
//   if (bmi >= 18.5 && bmi < 24.9) {
//     return "Low risk";
//   }
//   if (bmi >= 25 && bmi < 29.9) {
//     return "Enhanced risk";
//   }
//   if (bmi >= 30 && bmi < 34.9) {
//     return "Medium risk";
//   }
//   if (bmi >= 35 && bmi < 39.9) {
//     return "High risk";
//   }
//   if (bmi >= 40) {
//     return "Very high risk";
//   }
// }

function Invoice() {
  // const [bmi, setBmi] = useState(0);
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
        {/* {data.map((row) => (
          <tr>
            <td>{row.Gender}</td>
            <td>{row.HeightCm}</td>
            <td>{row.WeightKg}</td>
            <td>{bmiCalculate(row.WeightKg, row.HeightCm / 100)}</td>
            <td>
              {getCategory(bmiCalculate(row.WeightKg, row.HeightCm / 100))}
            </td>
            <td>{getHealthRisk(bmiCalculate(row.WeightKg, row.HeightCm / 100))}</td>
          </tr>
        ))} */}
        {x}
      </table>
    </div>
  );
}

export default Invoice;
