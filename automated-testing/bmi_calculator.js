function calcBMI(height,weight){
    let BMI = (weight / ((height * height) / 10000))
    return BMI;
}

console.log(calcBMI(177,80));

module.exports = calcBMI();