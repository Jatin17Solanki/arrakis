import TradesModal from "./TradesModal";
import SecuritiyModal from "./TradesModal";

const tradeActionColumn = (props) => {

    return (
        <div className="d-flex justify-content-center align-items-center">
            <span title="Edit Security">
                <TradesModal tradeDetails={props.ditem} handleAddEdit={props.setList} />
            </span>
            {/* <span>
                <button type="button" className="btn btn-lg text-icon-gray">
                    <i className="fas fa-trash"></i>
                </button>
            </span> */}
        </div>
    );
};

const columns = [
    {
        dataField: 'bookId',
        text: 'Book Id',
    },
    {
        dataField: 'counterPartyId',
        text: 'Counter Party Id',
    },
    {
        dataField: 'securityId',
        text: 'Security Id',
    },
    {
        dataField: 'quantity',
        text: 'Quantity',
    },
    {
        dataField: 'status',
        text: 'Status',
    },
    {
        dataField: 'price',
        text: 'Price',
    },
    {
        dataField: 'buySell',
        text: 'Buy / Sell',
    },
    {
        dataField: 'tradeDate',
        text: 'Trade Date',
    },
    {
        dataField: 'settlementDate',
        text: 'Settlement Date',
    },
    {
        dataField: tradeActionColumn,
        text: 'Actions',
        format: 'action',
    },
];

export {
    columns,
}