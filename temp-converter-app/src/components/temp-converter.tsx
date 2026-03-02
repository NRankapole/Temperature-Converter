import { useState } from "react";
import "../styles/temp-section.css"
import type { Metric } from "../utils/types";
import { convertToCelsius, convertToFahrenheit } from "../utils/conversion-function";
import TempInput from "./temp-input";

function TempConverter() {
    const [temperature, setTemperature] = useState("");
    const [metric, setMetric] = useState<Metric>("celsius");

    function handleCelsiusChange(value: string) {
        setTemperature(value);
        setMetric("celsius");
    }

    function handleFahrenheitChange(value: string) {
        setTemperature(value);
        setMetric("fahrenheit");
    }

    const celsiusTemp =
        (metric === "fahrenheit" && temperature !== "")
            ? convertToCelsius(parseFloat(temperature)).toString()
            : parseFloat(temperature).toString();

    const fahrenheitTemp =
        (metric === "celsius" && temperature !== "")
            ? convertToFahrenheit(parseFloat(temperature)).toString()
            : parseFloat(temperature).toString();

    return (
        <div>
            <h1>Temperature Converter</h1>
            <TempInput
                label="Celsius"
                value={celsiusTemp}
                onTempChange={handleCelsiusChange}
            />
             <TempInput
                label="Fahrenheit"
                value={fahrenheitTemp}
                onTempChange={handleFahrenheitChange}
            />
        </div>
    );
}



export default TempConverter;