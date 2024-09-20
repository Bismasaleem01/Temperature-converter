function fromFahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }
  function fromFahrenheitToKelvin(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    let Kelvin = celsius + 273.15;
    return Kelvin;
  }
  function fromCelsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  function fromCelsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  function fromKelvinToFahrenheit(Kelvin) {
    const celsius = Kelvin - 273.15;
    const fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
  }
  function fromKelvinToCelsius(Kelvin) {
    return Kelvin - 273.15;
  }
  function convertedTemperature() {
    let temp = parseFloat(document.getElementById('temperature').value);
    let fromUnit = document.getElementById('fromUnit').value;
    let toUnit = document.getElementById('toUnit').value;
    let result = 0;
    if (fromUnit === toUnit) {
      result = temp;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
      result = fromFahrenheitToCelsius(temp);
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
      result = fromFahrenheitToKelvin(temp);
    } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
      result = fromCelsiusToFahrenheit(temp);
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
      result = fromCelsiusToKelvin(temp);
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
      result = fromKelvinToFahrenheit(temp);
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
      result = fromKelvinToCelsius(temp);
    }
    document.getElementById("convertedTemperature").innerText = `ConvertedTemperature: ${result.toFixed(2)} ${toUnit}`;
  }
  function refreshPage(){
    document.getElementById('temperature').value = '';
        document.getElementById('fromUnit').selectedIndex = 0;
        document.getElementById('toUnit').selectedIndex = 0;
        document.getElementById('convertedTemperature').innerText = '';
  }