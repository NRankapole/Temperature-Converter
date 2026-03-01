import "../styles/temp-input.css"
import type { TempInputProps } from "../utils/types";

function TempInput({ label, value, onTempChange, }:TempInputProps) {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onTempChange(event.target.value);
  }
    return (
        <div id="inputSection">
            <div className="UnitInput">
                <label>Temprature in {label}:</label>
                <input
                    type="number"
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default TempInput;