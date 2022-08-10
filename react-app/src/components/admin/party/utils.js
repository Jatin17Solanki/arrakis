import PartyModal from "./PartyModal";
import SecuritiyModal from "./PartyModal";

const  partyActionColumn = (props) => {
   
    return (
        <>
            <span title="Edit Security">
                <PartyModal secDetails={props.ditem} handleAddEdit={props.setList} />
            </span>
        </>
    );
};

const columns = [
    {
        dataField: 'id',
        text: 'Id',
    },
    {
        dataField: 'name',
        text: 'Name',
    },
    
    // {
    //     dataField: partyActionColumn,
    //     text: 'Actions',
    //     format: 'action',
    // },
];

export {
    columns,
}