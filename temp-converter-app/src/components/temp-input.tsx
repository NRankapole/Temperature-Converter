import "../styles/temp-input.css"
import type { TempInputProps } from "../utils/types";

function TempInput({ label, value, onTempChange, }:TempInputProps) {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onTempChange(event.target.value);
  }
    return (
            <div className="UnitInput">
                <label>Temprature in {label}:</label>
                <input
                    type="number"
                    value={value}
                    onChange={handleChange}
                />
            </div>
    )
}

export default TempInput;