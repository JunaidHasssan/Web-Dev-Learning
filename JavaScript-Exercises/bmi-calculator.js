//  Calculate BMI

function bmiCalculator(weight, height) {
  let squareHeight = Math.pow(height, 2);
  let calculation = weight / squareHeight;
  let bmi = Math.round(calculation);
  return bmi;
}

let bmi = bmiCalculator(65, 1.8);
console.log(bmi);
