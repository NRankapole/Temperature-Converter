export function convertToCelsius(fahrenheitTemp: number) {
    return roundToTwoDecimals(((fahrenheitTemp - 32) * 5) / 9);
}

export function convertToFahrenheit(celsiusTemp: number) {
    return roundToTwoDecimals((celsiusTemp * 9) / 5 + 32);
}

function roundToTwoDecimals(num:number) {
  return Math.round(num * 100) / 100;
}