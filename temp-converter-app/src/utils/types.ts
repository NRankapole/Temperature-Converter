export type Metric = "celcius" | "fahrenheit";

export type TempInputProps = {
  label: string;
  value: string;
  onTempeChange: (value: string) => void;
};