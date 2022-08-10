import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal, Form } from 'react-bootstrap';
import { hostNameUrl } from './config';
import { tradeKeyLabel } from './keyLabel';

export function ShowBookModal(show, handleClose, data) {
    console.log("show modal");
    const [empData, setEmpData] = useState([]);

    const getEmpData = async () => {
        console.log("get");
        const resp = await axios.get(`${hostNameUrl}/api/user/getNames?bookId=${data.id}`);
        if (resp.status === 200) {
            setEmpData(resp.data);
        }
    }

    useEffect(() => {
        getEmpData();
    }, [data]);

    return (<Modal
        show={show}
        onHide={handleClose}
        fullscreen="sm-down"
        contentClassName="rounded-xl"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title>Managed By</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-5 pt-4 px-sm-5 px-4">
            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th className='text-center'>Name</th>
                        <th className='text-center'>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {empData.map(row => {
                        return <tr>
                            <td className='text-center'>{row.name}</td>
                            <td className='text-center'>{row.role}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </Modal.Body>
    </Modal>);
}

export function ShowSecurityModal(show, handleClose, data) {
    console.log("show modal");
    const [secData, setSecData] = useState([]);

    const getSecData = async () => {
        console.log("get");
        const resp = await axios.get(`${hostNameUrl}/api/trade/securityId?securityId=${data.id}`);
        if (resp.status === 200) {
            setSecData(resp.data);
        }
    }

    useEffect(() => {
        getSecData();
    }, [data]);

    useEffect(() => {
        console.log(secData);
    })

    const mapping = [
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
    ];

    return (<Modal
        show={show}
        size="xl"
        onHide={handleClose}
        // fullscreen="sm-down"
        // contentClassName="rounded-xl"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title>Trades related to this Security</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-5 pt-4 px-sm-5 px-4">
            <table className='table'>
                <thead>
                    <tr>
                        {mapping.map(obj => {
                            return <th className='text-center'> {obj.text} </th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>Hello</td>
                        <td>Hello</td>
                        <td>Hello</td>
                        <td>Hello</td>
                    </tr> */}
                    {secData.map(row => {
                        console.log(row);
                        return <tr>
                            <td className='text-center'>{row.bookId}</td>
                            <td className='text-center'>{row.counterPartyId}</td>
                            <td className='text-center'>{row.securityId}</td>
                            <td className='text-center'>{row.quantity}</td>
                            <td className='text-center'>{row.status}</td>
                            <td className='text-center'>{row.price}</td>
                            <td className='text-center'>{row.buySell}</td>
                            <td className='text-center'>{row.tradeDate}</td>
                            <td className='text-center'>{row.settlementDate}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </Modal.Body>
    </Modal>);
}

export function ShowTradeModal(show, handleClose, data) {
    console.log("show modal");
    const [tradeData, setTradeData] = useState([]);

    const getTradeData = async () => {
        console.log("get");
        const resp = await axios.get(`${hostNameUrl}/api/trade/${data.id}/security`);
        if (resp.status === 200) {
            setTradeData(resp.data);
        }
    }

    useEffect(() => {
        getTradeData();
    }, [data]);

    const mapping = [
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
    ];

    return (<Modal
        show={show}
        size="xl"
        onHide={handleClose}
        fullscreen="sm-down"
        contentClassName="rounded-xl"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title>Security</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-5 pt-4 px-sm-5 px-4">
            
            <table className='table table-striped'>
                <tbody>
                    {mapping.map(obj => {
                        return <tr>
                            <th> {obj.text} </th>
                            <td> {tradeData[obj.dataField]} </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </Modal.Body>
    </Modal>);
}