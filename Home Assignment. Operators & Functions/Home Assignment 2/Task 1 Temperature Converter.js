function CelciusToKelvin(tempCelcius){
    let tempKelvin = tempCelcius + 273.15
    return tempKelvin;
}

console.log(CelciusToKelvin(32));

function FahrenheitToKelvin(tempFahrenheit){
    let tempKelvin = (tempFahrenheit + 459.67) * 5/9
    return tempKelvin;
}

console.log(FahrenheitToKelvin(32));