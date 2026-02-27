import "../styles/temp-input.css"

function TempInput() {
    return (
        <div id="inputSection">

            <div className="UnitInput">
                <label>Temp in Celsius:</label>
                <input />
            </div>

            <div className="UnitInput">
                <label>Temp in Fahrenheit:</label>
                <input />
            </div>
            
        </div>
    )
}

export default TempInput;