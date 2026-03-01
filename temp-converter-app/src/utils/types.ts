export type Metric = "celsius" | "fahrenheit";

export type TempInputProps = {
  label: string;
  value: string;
  onTempChange: (value: string) => void;
};

export type Employee = {
  id: number;
  name: string;
  role: string;
};