import type { EmployeeListProps } from "../utils/types";
function EmployeeList({ employees }: EmployeeListProps) {
    if (employees.length === 0) {
        return <p>Employee not found</p>
    }

    return (
            <div className="overflow-x-auto">
                <table className="table-sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                           <tr key={employee.id}>
                                <th>{employee.id}</th>
                                <td>{employee.name}</td>
                                <td>{employee.role}</td>
                           </tr>
                        ))}
                    </tbody>       
                </table>
            </div>
    );
}

export default EmployeeList;