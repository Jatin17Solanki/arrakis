import EmployeeModal from "./EmployeeModal";

const employeeActionColumn = (props) => {
    console.log(props, "+++hell");
    console.log("__________________________");
    const link = `/budget/logs?yearRef=${props._id}`;

    return (
        <>
            <span title="Edit yearly budget">
                <EmployeeModal empDetails={props.ditem} handleAddEdit={props.setList} />
            </span>
        </>
    );
};

const columns = [
    {
        dataField: 'name',
        text: 'Name',
    },
    {
        dataField: 'email',
        text: 'Email ID',
    },
    {
        dataField: 'role',
        text: 'Role',
    },
    {
        dataField: employeeActionColumn,
        text: 'Actions',
        format: 'action',
    },
];

export {
    columns,
}