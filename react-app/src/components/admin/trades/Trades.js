import React, { useEffect } from 'react'
import componentStyle from '../../../styles/componentStyle.scss';
import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import { BaseTable } from '../../../common/BaseTable';
import './utils';
import { columns } from './utils';
import TradesModal from './TradesModal';
import { getTrades, postTrade, updateTrade } from '../../../services/tradeServices';
import { getItem, setItem } from '../../../common/localStore';
import { ShowSecurityModal, ShowTradeModal } from '../../../common/showModal';
import SetHeader from '../../../common/SetHeader';

function Trades(props) {

    // const dummyData = [
    //     {
    //         id: "1",
    //         bookId: "1",
    //         counterPartyId: "1",
    //         securityId: "1",
    //         quantity: "1",
    //         status: "1",
    //         price: "1",
    //         buySell: "1",
    //         tradeDate: "1",
    //         settlementDate: "1",
    //     },
    //     {
    //         id: "2",
    //         bookId: "1",
    //         counterPartyId: "1",
    //         securityId: "1",
    //         quantity: "1",
    //         status: "1",
    //         price: "1",
    //         buySell: "1",
    //         tradeDate: "1",
    //         settlementDate: "1",
    //     },
    // ]
    const [tradeList, setTradeList] = useState([]);

    const fetchTradeList = async () => {
        // api call
        let resp = await getTrades();
        if (resp.status === 200) {
            setTradeList(resp.data);
        }
        else {

        }
    }

    useEffect(() => {
        // fetch emp details
        fetchTradeList();
    }, []);

    const handleAddEdit = async (details) => {
        console.log(details);
        if (details.id) {
            // edit

            // call to update sec Info

            const resp = await updateTrade(details);
            console.log(resp);
            if (resp.status === 200) {
                let newtradeList = [];
                tradeList.forEach((sec) => {
                    if (sec.id !== details.id) {
                        console.log(sec.id, details.id);
                        newtradeList.push(sec);
                    }
                    else {
                        newtradeList.push(details);
                    }
                })

                setTradeList([
                    ...newtradeList,
                ])
            }
        }
        else {
            let tmp = getItem("tradeNo");
            if (!tmp) {
                tmp = 100;
                setItem("tradeNo", 100);
            }

            details = {
                ...details,
                id: tmp,
            }

            const resp = await postTrade(details);

            if (resp.status === 200) {
                setItem("tradeNo", 1 + parseInt(tmp));
                setTradeList((oldList) => ([
                    ...oldList,
                    details
                ]))
            }
        }
    }

    useEffect(() => {
        console.log(tradeList);
    }, [tradeList]);

    return (
        <div style={{ ...componentStyle, }}>
            <SetHeader title="Manage Trades">
                <TradesModal handleAddEdit={handleAddEdit} />
            </SetHeader>
            <BaseTable showModal={ShowTradeModal} cols={columns} data={tradeList} setList={handleAddEdit} />
        </div>
    )
}

export default Trades