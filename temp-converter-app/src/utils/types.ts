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

export type SearchInputProps = {
  value: string;
  onSearchChange: (value: string) => void;
};

export type EmployeeListProps = {
  employees: Employee[];
};