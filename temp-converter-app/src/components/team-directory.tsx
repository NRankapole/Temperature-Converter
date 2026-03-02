import { useState } from "react";
import { employees } from "../data/employee-list";
import SearchInput from "./search-input";
import EmployeeList from "./employee-list";

function TeamDirectory() {
    const [search, setSearch] = useState("");

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().startsWith(search.toLowerCase())
    );

    return (
        <>
            <h2>Team Directory</h2>

            <SearchInput
                value={search}
                onSearchChange={setSearch}
            />

            <EmployeeList employees={filteredEmployees}/>
        </>
    )
}

export default TeamDirectory;