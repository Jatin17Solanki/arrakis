import React, { useEffect } from 'react'
import componentStyle from '../../styles/componentStyle.scss';
import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import { BaseTable } from '../../common/BaseTable';
import './utils';
import { columns } from './utils';
import { getTrades, postTrade, updateTrade } from '../../services/tradeServices';
import { getItem, setItem } from '../../common/localStore';
import Select from 'react-select';
import { getBookList, getTradesById } from '../../services/dashboardServices';
import { getEmp } from '../../services/empServices';
import { ShowTradeModal } from '../../common/showModal';
import { hostNameUrl } from '../../common/config';
import axios from 'axios';


function DashBoard(props) {
    const [tradeList, setTradeList] = useState([]);
    const [status, setStatus] = useState("Active");
    const [empList, setEmpList] = useState([]);
    const [currentEmp, setCurrentEmp] = useState("1");

    const [bookList, setBookList] = useState([]);

    const [currentBook, setCurrentBook] = useState();

    const fetchTradeList = async (stat) => {
        // api call
        console.log("fetchigng ng nknk");
        let resp = await getTradesById(currentBook);
        if (resp.status === 200) {
            let tmp = [];
            resp.data.forEach((row) => {
                console.log(row);
                console.log(row.status, stat);
                if (row.status === stat) {
                    tmp.push(row);
                }
            })
            setTradeList(tmp);
        }
        else {

        }
    }

    useEffect(() => {
        console.log("status changed");
        fetchTradeList(status);
    }, [status, currentBook])

    const fetchBooksList = async () => {
        console.log("fetch books");
        let resp = await getBookList(currentEmp);
        if (resp.status === 200) {
            setBookList(resp.data);
            if (resp.data.length > 0) {
                setCurrentBook(resp.data[0].bookId);
            }
        }
    }
    const fetchEmpList = async () => {
        let resp = await getEmp();
        if (resp.status === 200) {
            setEmpList(resp.data);
            if (resp.data.length > 0) {
                setCurrentEmp(resp.data[0].id);
            }
        }
    }

    useEffect(() => {
        console.log("emp changed");
        fetchBooksList();
    }, [currentEmp]);

    useEffect(() => {
        // fetch emp details
        // setCurrentBook("101");
        fetchEmpList();
    }, []);

    const handleAddEdit = async (props) => {
        console.log(props);
        const details = props.ditem;

        const resp = await axios({
            method: "PUT",
            url: `${hostNameUrl}/api/trade/updateManager?tradeId=${props.ditem.id}&userId=${props.empId}`,
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (resp.status === 200) {
            let newtradeList = [];
            tradeList.forEach((trade) => {
                if (trade.id !== details.id) {
                    // console.log(trade.id, details.id);
                    newtradeList.push(trade);
                }
                else {
                    newtradeList.push({...details, assigned_to: currentEmp});
                }
            })

            setTradeList([
                ...newtradeList,
            ])
        }
    }

    // const handleAddEdit = async (details) => {
    //     console.log(details);
    //     if (details.id) {
    //         // edit

    //         // call to update sec Info

    //         const resp = await updateTrade(details);
    //         console.log(resp);
    //         if (resp.status === 200) {
    //             let newtradeList = [];
    //             tradeList.forEach((sec) => {
    //                 if (sec.id !== details.id) {
    //                     console.log(sec.id, details.id);
    //                     newtradeList.push(sec);
    //                 }
    //                 else {
    //                     newtradeList.push(details);
    //                 }
    //             })

    //             setTradeList([
    //                 ...newtradeList,
    //             ])
    //         }
    //     }
    //     else {
    //         let tmp = getItem("tradeNo");
    //         if (!tmp) {
    //             tmp = 100;
    //             setItem("tradeNo", 100);
    //         }

    //         details = {
    //             ...details,
    //             id: tmp,
    //         }

    //         const resp = await postTrade(details);

    //         if (resp.status === 200) {
    //             setItem("tradeNo", 1 + parseInt(tmp));
    //             setTradeList((oldList) => ([
    //                 ...oldList,
    //                 details
    //             ]))
    //         }
    //     }
    // }

    return (
        <div style={{ ...componentStyle, }}>
            {/* <TradesModal handleAddEdit={handleAddEdit} /> */}
            <div className="d-flex justify-content-between align-items-center pb-3">
                <h1 className='col-6'>
                    Employee Dashboard
                </h1>

                <div>
                    <select
                        className='form-select'
                        onChange={(e) => {
                            console.log(e.target);
                            setCurrentEmp(e.target.value);
                        }}
                        value={currentEmp}
                    >
                        {empList.map(emp => {
                            return <option value={emp.id}> {emp.name} </option>
                        })}

                    </select>
                </div>
                <div>
                    <select
                        className='form-select'
                        onChange={(e) => setCurrentBook(e.target.value)}
                        value={currentBook}
                    >
                        {bookList.map(book => {
                            return <option value={book.bookId}>{book.bookId}</option>
                        })}
                    </select>
                </div>
                <div>
                    <select
                        className='form-select'
                        onChange={(e) => {
                            console.log(e.target);
                            setStatus(e.target.value);
                        }}
                        value={status}
                    >
                        <option value="Active">Active</option>
                        <option value="Settled">Settled</option>
                        <option value="Failed">Failed</option>
                    </select>
                </div>

            </div>
            <BaseTable showModal={ShowTradeModal} cols={columns} data={tradeList} setList={handleAddEdit} empId={currentEmp} />
        </div>
    )
}

export default DashBoard