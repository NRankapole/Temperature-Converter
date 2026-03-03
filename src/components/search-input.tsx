import type { SearchInputProps } from "../utils/types";
import '../styles/search-input.css'

function SearchInput({ value, onSearchChange }: SearchInputProps) {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        onSearchChange(event.target.value);
    }

    return (
        <div className="searchInput">
            <label>
                Search employees:
            </label>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="Enter employee name"
            />

        </div>
    );
}

export default SearchInput;