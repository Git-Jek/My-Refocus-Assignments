function calcBMI(height,weight){
    let BMI = (weight / ((height * height) / 10000))
    console.log(BMI);
}

calcBMI(177,80)