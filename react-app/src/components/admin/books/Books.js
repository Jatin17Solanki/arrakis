import React, { useEffect } from 'react'
import Sidebar from '../../../common/Sidebar'
import componentStyle from '../../../styles/componentStyle.scss';
import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Select from 'react-select';
import { MyTable } from '../../../common/MyTable';
import { BaseTable } from '../../../common/BaseTable';
import BooksModal from './BooksModal';
import './utils';
import { columns } from './utils';
import { getbooks } from '../../../services/bookServices';
import { ShowBookModal } from '../../../common/showModal';
import SetHeader from '../../../common/SetHeader';

function Books(props) {

    // const dummyData = [
    //     {
    //         id: "1",
    //         bookName: "book1",
    //         managedBy: ["1"],
    //     },
    //     {
    //         id: "2",
    //         bookName: "book2",
    //         managedBy: ["2"],
    //     },
    //     {
    //         id: "3",
    //         bookName: "book3",
    //         managedBy: ['3'],
    //     },
    // ]
    const [booksList, setBooksList] = useState([]);

    const fetchbooksList = async () => {
        // api call
        let resp = await getbooks();
        if (resp.status === 200) {
            let tmp = resp.data.map(book => {
                return {
                    ...book,
                    managedBy: [],
                }
            })
            setBooksList(tmp);
        }
        else {

        }
    }

    useEffect(() => {
        // fetch emp details
        fetchbooksList();
    }, []);

    const handleAddEdit = (details) => {
        console.log(details);
        if (details.id) {
            // edit

            // call to update sec Info
            let newbooksList = [];
            booksList.forEach((sec) => {
                if (sec.id !== details.id) {
                    console.log(sec.id, details.id);
                    newbooksList.push(sec);
                }
                else {
                    newbooksList.push(details);
                }
            })

            setBooksList([
                ...newbooksList,
            ])
        }
        else {



            setBooksList((oldList) => ([
                ...oldList,
                details
            ]))
        }
    }

    useEffect(() => {
        console.log(booksList);
    }, [booksList]);

    return (
        <div style={{ ...componentStyle, }}>
            <SetHeader title="Manage Books">
                <BooksModal handleAddEdit={handleAddEdit} />

            </SetHeader>
            <BaseTable showModal={ShowBookModal} cols={columns} data={booksList} setList={handleAddEdit} />
        </div>
    )
}

export default Books