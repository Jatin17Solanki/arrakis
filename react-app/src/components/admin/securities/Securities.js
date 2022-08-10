import React, { useEffect } from 'react'
import Sidebar from '../../../common/Sidebar'
import componentStyle from '../../../styles/componentStyle.scss';
import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Select from 'react-select';
import { MyTable } from '../../../common/MyTable';
import { BaseTable } from '../../../common/BaseTable';
import SecuritiyModal from './SecuritiesModal';
import './utils';
import { columns } from './utils';
import { getSecurities, postSecurity, updateSecurity } from '../../../services/securityServices';
import { getItem, setItem } from '../../../common/localStore';
import { ShowSecurityModal } from '../../../common/showModal';
import SetHeader from '../../../common/SetHeader';

function Securities(props) {
    // const dummyData = [
    //     {
    //         id: "1",
    //         isin: "1",
    //         cusip: "1",
    //         issuer: "1",
    //         maturityDate: "1",
    //         coupon: "1",
    //         type: "1",
    //         faceValue: "1",
    //         status: "1",
    //     },
    //     {
    //         id: "2",
    //         isin: "2",
    //         cusip: "2",
    //         issuer: "2",
    //         maturityDate: "2",
    //         coupon: "2",
    //         type: "2",
    //         faceValue: "2",
    //         status: "2",
    //     },
    //     {
    //         id: "3",
    //         isin: "3",
    //         cusip: "3",
    //         issuer: "1",
    //         maturityDate: "1",
    //         coupon: "1",
    //         type: "1",
    //         faceValue: "1",
    //         status: "1",
    //     },

    // ]
    const [secList, setSecList] = useState([]);

    const fetchSecurityList = async () => {
        // api call
        let resp = await getSecurities();
        console.log(resp);
        setSecList(resp.data);
    }

    useEffect(() => {
        // fetch emp details
        fetchSecurityList();
    }, []);

    const handleAddEdit = async (details) => {
        console.log(details);
        if (details.id) {

            let resp = await updateSecurity(details);
            if (resp.status === 200) {
                let newsecList = [];
                secList.forEach((sec) => {
                    if (sec.id !== details.id) {
                        console.log(sec.id, details.id);
                        newsecList.push(sec);
                    }
                    else {
                        newsecList.push(details);
                    }
                })

                setSecList([
                    ...newsecList,
                ])
            }
            else {
                // ERROR
            }
        }
        else {

            let tmp = getItem("secNo");
            if (!tmp) {
                tmp = 100;
                setItem("secNo", 100);
            }

            details = {
                ...details,
                id: tmp,
            }

            let resp = await postSecurity(details);
            console.log(resp);

            if (resp.status === 200) {
                setItem("secNo", 1 + parseInt(tmp));
                setSecList((oldList) => ([
                    ...oldList,
                    details
                ]))
            }
        }
    }

    useEffect(() => {
        console.log(secList);
    }, [secList]);

    return (
        <div style={{ ...componentStyle, }}>
            {/* <div className='row justify-content-between align-items-end '>
                <div className='col col-sm-6'>
                    Hello World
                </div>
                <div className='col col-sm-6'>
                    Hello World
                </div>
            </div> */}
            {/* <div className="d-flex justify-content-between align-items-center pb-3">
                <h1 className='display-5 text-muted font-weight-bold'>Manage Securities</h1>
            </div> */}
            <SetHeader title="Manage Securities"> <SecuritiyModal handleAddEdit={handleAddEdit} className='col-sm-6' /> </SetHeader>
            <BaseTable showModal={ShowSecurityModal} cols={columns} data={secList} setList={handleAddEdit} />
        </div>
    )
}

export default Securities