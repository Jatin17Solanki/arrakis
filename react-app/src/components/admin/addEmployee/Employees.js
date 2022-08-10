import React, { useEffect } from 'react'
import Sidebar from '../../../common/Sidebar'
import componentStyle from '../../../styles/componentStyle.scss';
import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Select from 'react-select';
import { MyTable } from '../../../common/MyTable';
import { BaseTable } from '../../../common/BaseTable';
import EmployeeModal from './EmployeeModal';
import './utils';
import { columns } from './utils';
import { getEmp, postEmp, updateEmp } from '../../../services/empServices';
import { getItem, setItem } from '../../../common/localStore';
import SetHeader from '../../../common/SetHeader';


function Employees(props) {
    // const dummyData = [
    //     {
    //         id: "1",
    //         name: "kartik",
    //         emailId: "gmail",
    //         role: "1",
    //     },
    //     {
    //         id: "2",
    //         name: "bhanderi",
    //         emailId: "gmail",
    //         role: "2",
    //     },
    // ]
    const [empList, setEmpList] = useState([]);

    const fetchEmpList = async () => {
        // api call
        let resp = await getEmp();
        if (resp.status === 200) {
            setEmpList(resp.data);
        }
    }

    useEffect(() => {
        // fetch emp details
        fetchEmpList();
    }, []);

    const handleAddEdit = async (details) => {
        console.log(details);
        if (details.id) {
            // edit

            // call to update emp Info

            const resp = await updateEmp(details);
            if (resp.status === 200) {
                let newEmpList = [];
                empList.forEach((emp) => {
                    if (emp.id !== details.id) {
                        console.log(emp.id, details.id);
                        newEmpList.push(emp);
                    }
                    else {
                        newEmpList.push(details);
                    }
                })

                setEmpList([
                    ...newEmpList,
                ])
            }
        }
        else {

            let tmp = getItem("empNo");
            if (!tmp) {
                setItem("empNo", 100);
                tmp = 100;
            }

            details = {
                ...details,
                id: tmp,
                role: "FIC",
            }

            console.log(details);

            const resp = await postEmp(details);

            if (resp.status === 200) {
                setItem("empNo", 1 + parseInt(tmp));
                setEmpList((oldList) => ([
                    ...oldList,
                    details
                ]))
            }
        }
    }

    useEffect(() => {
        console.log(empList);
    }, [empList]);

    return (
        <div style={{ ...componentStyle, }}>

            <SetHeader title="Manage Employees">

                <EmployeeModal handleAddEdit={handleAddEdit} />
            </SetHeader>
            <BaseTable cols={columns} data={empList} setList={handleAddEdit} />
        </div>
    )
}

export default Employees