import type { EmployeeListProps } from "../utils/types";

function EmployeeList({ employees }: EmployeeListProps) {
    if (employees.length === 0) {
        return <p>Employee not found</p>
    }
    
    return (
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                           <tr>
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