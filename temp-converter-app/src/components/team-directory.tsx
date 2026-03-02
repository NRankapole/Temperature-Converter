import { useState } from "react";
import { employees } from "../data/employee-list";
import SearchInput from "./search-input";
import EmployeeList from "./employee-list";
import '../styles/team-directory.css'

function TeamDirectory() {
    const [search, setSearch] = useState("");

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().startsWith(search.toLowerCase())
    );

    return (
        <div className="card-Info">
            <h2>Team Directory</h2>

            <SearchInput
                value={search}
                onSearchChange={setSearch}
            />

            <EmployeeList employees={filteredEmployees}/>
        </div>
    )
}

export default TeamDirectory;