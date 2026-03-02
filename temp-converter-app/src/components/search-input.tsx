import type { SearchInputProps } from "../utils/types";

function SearchInput({ value, onSearchChange }: SearchInputProps) {
    
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        onSearchChange(event.target.value);
    }

    return (
        <div>
            <label>
                Search employees:
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="Enter employee name"
                />
            </label>
        </div>
    );
}

export default SearchInput;