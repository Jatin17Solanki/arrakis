import React, { useEffect } from 'react'
import componentStyle from '../../../styles/componentStyle.scss';
import { useState } from 'react';
import { BaseTable } from '../../../common/BaseTable';
import './utils';
import { columns } from './utils';
import { getParties, postParty } from '../../../services/partyServices';
import PartyModal from './PartyModal';
import { getItem, setItem } from '../../../common/localStore';
import SetHeader from '../../../common/SetHeader';

function Party(props) {
    const [partyList, setPartyList] = useState([]);

    const fetchPartyList = async () => {
        // api call
        let resp = await getParties();
        if(resp.status === 200) {
            setPartyList(resp.data);
        }
    }

    useEffect(() => {
        // fetch emp details
        fetchPartyList(); 
    }, []);

    const handleAddEdit = async (details) => {
        console.log(details);
        if (details.id) {
            
            // let resp = await updateSecurity(details);
            // if(resp.status === 200) {
            //     let newpartyList = [];
            //     partyList.forEach((sec) => {
            //         if (sec.id !== details.id) {
            //             console.log(sec.id, details.id);
            //             newpartyList.push(sec);
            //         }
            //         else {
            //             newpartyList.push(details);
            //         }
            //     })
    
            //     setPartyList([
            //         ...newpartyList,
            //     ])
            // }
            // else {
            //     // ERROR
            // }
        }
        else {
            
            let tmp = getItem("partyNo");
            if(!tmp) {
                tmp = 100;
                setItem("partyNo", 100);
            }

            details = {
                ...details,
                id: tmp,
            }
            
            let resp = await postParty(details);
            // console.log(resp);
            
            if (resp.status === 200) {
                setItem("partyNo", 1 + parseInt(tmp));
                setPartyList((oldList) => ([
                    ...oldList,
                    details
                ]))
            }
        }
    }

    useEffect(() => {
        console.log(partyList);
    }, [partyList]);

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
            <SetHeader title="Manage Parties">
            <PartyModal handleAddEdit={handleAddEdit} className='col-sm-6' />

            </SetHeader>
            <BaseTable cols={columns} data={partyList} setList={handleAddEdit} />
        </div>
    )
}

export default Party