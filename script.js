function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const sourceUnit = document.getElementById('sourceUnit').value;
    const targetUnit = document.getElementById('targetUnit').value;
  
    let convertedTemperature;
  
    if (sourceUnit === 'celsius') {
      if (targetUnit === 'fahrenheit') {
        convertedTemperature = (temperatureInput * 9/5) + 32;
      } else if (targetUnit === 'kelvin') {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
      } else {
        convertedTemperature = temperatureInput;
      }
    } else if (sourceUnit === 'fahrenheit') {
      if (targetUnit === 'celsius') {
        convertedTemperature = (temperatureInput - 32) * 5/9;
      } else if (targetUnit === 'kelvin') {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9 + 273.15;
      } else {
        convertedTemperature = temperatureInput;
      }
    } else if (sourceUnit === 'kelvin') {
      if (targetUnit === 'celsius') {
        convertedTemperature = parseFloat(temperatureInput) - 273.15;
      } else if (targetUnit === 'fahrenheit') {
        convertedTemperature = (parseFloat(temperatureInput) - 273.15) * 9/5 + 32;
      } else {
        convertedTemperature = temperatureInput;
      }
    }
  
    document.getElementById('result').textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${targetUnit}`;
  }
  