import { useState } from "react";

type Metric = "celcius" | "fahrenheit";

function TempSection(){
    const [temperature, setTemperature] = useState("");
    const [metric, setMetric] = useState<Metric>("celcius");

    function convertToCelsius(fahrenheitTemp: number) {
    return ((fahrenheitTemp - 32) * 5) / 9;
  }

   function convertToFahrenheit(celsiusTemp: number) {
    return (celsiusTemp * 9) / 5 + 32;
  }

    function handleCelsiusChange(value: string) {
    setTemperature(value);
    setMetric("celcius");
  }

  function handleFahrenheitChange(value: string) {
    setTemperature(value);
    setMetric("fahrenheit");
  }
}

  

export default TempSection;