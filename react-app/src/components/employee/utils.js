import TradesModal from "./DashboardModal";
import axios from "axios";
import { hostNameUrl } from "../../common/config";

const dashboardActionColumn = (props) => {
    console.log(props);
    // const handleAssignTrade = async () => {
    //     console.log(props);
    //     const resp = await axios({
    //         method: "PUT",
    //         url: `${hostNameUrl}/api/trade/updateManager?tradeId=${props.ditem.id}&userId=${props.empId}`,
    //         headers: {
    //             "Content-Type": "application/json",
    //         }
    //     });

    //     if (resp.status === 200) {
    //         window.location.reload();
    //     }
    // }

    return (
        <>
            {props.ditem.status == "Settled" ?
                <button type="button" className="btn btn-secondary">
                    -
                </button>
                :
                props.ditem.assigned_to == "0" ?
                    <button type="button" className="btn btn-primary" onClick={() => props.setList(props)}>
                        Assign to Me
                    </button>
                    :
                    <button type="button" className="btn btn-secondary">
                        Assigned
                    </button>
            }
        </>
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
        dataField: dashboardActionColumn,
        text: 'Actions',
        format: 'action',
    },
];

export {
    columns,
}