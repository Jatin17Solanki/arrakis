import React, { useEffect, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import Select from 'react-select';
// import { validateYearly } from './budgetValidation';
import { makeModalDateField, makeModalDropdownField, makeModalField } from '../../../common/modalFields';


const PartyModal = ({ handleAddEdit, partyDetails }) => {
    console.log(partyDetails);

    const detailsObj = {
        id: "",
        name: "",
    }

    const errorObj = {
        id: "",
        name: "",
    };

    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState(partyDetails?.id);
    const [details, setDetails] = useState(detailsObj);
    const [formErrors, setFormErrors] = useState(errorObj);

    useEffect(() => {
        // console.log("changed security");
        if (partyDetails?.id) {
            console.log("edit mode on");
            setDetails(partyDetails);
            setIsEdit(true);
        }
    }, [partyDetails])

    // useEffect(() => {
    //     console.log(partyDetails);
    // })

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
                    <Modal.Title>{isEdit ? 'Edit Security Info' : 'Add Security'}</Modal.Title>
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

                        {makeModalField("Name", "name", details, setDetails)}
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

export default PartyModal;
