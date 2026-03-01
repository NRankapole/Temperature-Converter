export function convertToCelsius(fahrenheitTemp: number) {
    return ((fahrenheitTemp - 32) * 5) / 9;
}

export function convertToFahrenheit(celsiusTemp: number) {
    return (celsiusTemp * 9) / 5 + 32;
}