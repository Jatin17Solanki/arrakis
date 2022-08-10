import BooksModal from "./BooksModal";

const BookActionColumn = (props) => {
   
    return (
        <>
            <span title="Edit Security">
                <BooksModal bookDetails={props.ditem} handleAddEdit={props.setList} />
            </span>
        </>
    );
};

const columns = [
    {
        dataField: 'id',
        text: 'id',
    },
    {
        dataField: 'book_name',
        text: 'Name',
    },
    // {
    //     dataField: 'managedBy',
    //     text: 'Managed By',
    //     format: 'array',
    // },
    // {
    //     dataField: 'status',
    //     text: 'status',
    // },
    {
        dataField: BookActionColumn,
        text: 'Actions',
        format: 'action',
    },
];

export {
    columns,
}