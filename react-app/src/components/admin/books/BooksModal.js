import React, { useEffect, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import Select from 'react-select';
// import { validateYearly } from './budgetValidation';
import { makeModalDateField, makeModalDropdownField, makeModalField } from '../../../common/modalFields';


const BooksModal = ({ handleAddEdit, bookDetails }) => {
    console.log(bookDetails);

    const detailsObj = {
        id: "",
        book_name: "",
        managedBy: [],
    }

    const errorObj = {
        id: "",
        book_name: "",
        managedBy: "",
    };

    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState(bookDetails?.id);
    const [details, setDetails] = useState(detailsObj);
    const [formErrors, setFormErrors] = useState(errorObj);

    const employeeOptions = [
        { label: "kartik", value: "kartik" }
    ]

    useEffect(() => {
        console.log("changed book");
        if (bookDetails?.id) {
            console.log("edit mode on");
            setDetails(bookDetails);
            setIsEdit(true);
        }
    }, [bookDetails])

    useEffect(() => {
        console.log(bookDetails);
    })

    const handleClose = () => {
        setShow(false);
        setFormErrors(errorObj);
    };

    const handleOpen = () => {
        setShow(true);
    }

    return (
        <>
            <div className={`d-flex ${isEdit ? 'justify-content-center' : 'justify-content-end'} align-items-center`}>
                <button
                    type="button"
                    className={`btn  ${isEdit ? 'btn btn-lg text-icon-gray' : 'btn-primary'
                        }`}
                    onClick={handleOpen}
                >
                    {isEdit ? <i className='fas fa-edit' />  : 'Add new'}
                </button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                fullscreen="sm-down"
                contentClassName="rounded-xl"
                centered
            >
                <Modal.Header>
                    <Modal.Title>{isEdit ? 'Edit Book Info' : 'Add Book'}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pb-5 pt-4 px-sm-5 px-4">
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        console.log(details);
                        // api call to the backend
                        handleAddEdit(details);
                        setShow(false);
                        setDetails(detailsObj);
                    }}>
                        {makeModalField("Book Name", "book_name", details, setDetails)}
                        {makeModalDropdownField("Managed By", "managedBy", details, setDetails, employeeOptions)}
                        
                        <div className="d-flex justify-content-center">
                            <button
                                type="button"
                                className="btn btn-outline-primary me-3"
                                onClick={handleClose}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>);
};

export default BooksModal;
