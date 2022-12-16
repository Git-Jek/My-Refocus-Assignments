function calcBMI(height,weight){
    let BMI = (weight / ((height * height) / 10000))
    return BMI;
}

console.log(calcBMI(177,80));

// Manual Testing

function testCalcBMI(){
    const result = calcBMI(177, 80);
    const expected = 25.535446391522232;

    console.assert(
        result === expected,
        `The result ${result} doesn't match the expected value ${expected}.`
    )
}

testCalcBMI();