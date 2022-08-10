import { deleteSecurity } from "../../../services/securityServices";
import SecuritiyModal from "./SecuritiesModal";

const securityActionColumn = (props) => {

    const handleDeleteSecurity = async (data) => {
        const resp = await deleteSecurity(data);
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <span title="Edit Security">
                <SecuritiyModal secDetails={props.ditem} handleAddEdit={props.setList} />
            </span>
            <span>
                <button type="button" className="btn btn-lg text-icon-gray" onClick={() => handleDeleteSecurity(props.ditem)}>
                    <i className="fas fa-trash"></i>
                </button>
            </span>
        </div>
    );
};

const columns = [
    {
        dataField: 'isin',
        text: 'ISIN',
    },
    {
        dataField: 'cusip',
        text: 'CUSIP',
    },
    {
        dataField: 'issuer',
        text: 'Issuer',
    },
    {
        dataField: 'maturityDate',
        text: 'Maturity Date',
    },
    {
        dataField: 'coupon',
        text: 'Coupon',
    },
    {
        dataField: 'type',
        text: 'type',
    },
    {
        dataField: 'faceValue',
        text: 'Face Value',
    },
    {
        dataField: 'status',
        text: 'status',
    },
    {
        dataField: securityActionColumn,
        text: 'Actions',
        format: 'action',
    },
];

export {
    columns,
}