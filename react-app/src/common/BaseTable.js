import React, { useState } from 'react';
import Moment from 'react-moment';
import "../styles/baseTable.scss"
import showModal from '../common/showModal';

const makeTile = (data) => {
    console.log(data);
    return <div style={{ padding: "10px", border: "10px solid black" }}>
        {data}
    </div>
}

const getClassName = (item) => {
    console.log(item);
    if ("status" in item) {
        if (item.status === "Active") {
            return 'table-warning';
        }
        if (item.status === "Settled") {
            return 'table-success';
        }
        if (item.status === "Failed") {
            return 'table-danger';
        }
    }
}

export function BaseTable(props) {
    let cols = props.cols ?? [];
    let data = props.data ?? [];

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleClose = () => setShow(false);

    console.log(props);

    return (
        <>
            {props.showModal && props.showModal(show, handleClose, modalData)}
            <div className="baseTable">
                <table className="table table-hover mt-2 text-center">
                    <thead className="text-center text-primary">
                        <tr className="text-center">
                            {/* <th className="">Sr. No</th> */}
                            {cols.map((hitem, index) => {
                                return (
                                    <th key={`th-${index}`}>
                                        {hitem.format == 'action' ? (
                                            <> {hitem.text} </>
                                        ) : (
                                            <span
                                                className="hov"
                                                onClick={() => props.handelSort(hitem.dataField)}
                                            >
                                                {hitem.text}
                                            </span>
                                        )}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((ditem, index) => {
                            return (
                                <tr
                                    className={`align-middle ${getClassName(ditem)}`}

                                >
                                    {/* <td className="align-middle">
                                        {index + 1 + (props.page * 10 - 10)}
                                    </td> */}
                                    {cols.map((citem, index) => {
                                        return (
                                            <td
                                                className="align-middle"
                                                key={`tr-${index}`}
                                                onClick={() => {
                                                    if (citem.format !== "action") {
                                                        setShow(true);
                                                        setModalData(ditem);
                                                    }
                                                }}
                                            >
                                                {citem.format ? (
                                                    <>
                                                        {citem.format === "array" ? (<div style={{ padding: "1px", border: "1px solid black" }}>
                                                            {ditem[citem.dataField]}
                                                        </div>) :
                                                            citem.format === 'date' ? (
                                                                <Moment format="DD/MM/YYYY">
                                                                    {ditem[citem.dataField]}
                                                                </Moment>
                                                            ) : (
                                                                <>
                                                                    {citem.format === 'action'
                                                                        ? citem.dataField({ ...props, ditem }, citem.kwargs ?? {})
                                                                        : null}
                                                                </>
                                                            )}
                                                    </>
                                                ) : (
                                                    ditem[citem.dataField]
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
