import React, { useEffect, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import Select from 'react-select';
// import { validateYearly } from './budgetValidation';
import { makeModalDateField, makeModalDropdownField, makeModalField } from '../../../common/modalFields';


const SecuritiyModal = ({ handleAddEdit, secDetails }) => {
    console.log(secDetails);

    const detailsObj = {
        id: "",
        isin: "",
        cusip: "",
        issuer: "",
        maturityDate: "",
        coupon: "",
        type: "",
        faceValue: "",
        status: "",
    }

    const errorObj = {
        id: "",
        isin: "",
        cusip: "",
        issuer: "",
        maturityDate: "",
        coupon: "",
        type: "",
        faceValue: "",
        status: "",
    };

    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState(secDetails?.id);
    const [details, setDetails] = useState(detailsObj);
    const [formErrors, setFormErrors] = useState(errorObj);

    useEffect(() => {
        console.log("changed security");
        if (secDetails?.id) {
            console.log("edit mode on");
            setDetails(secDetails);
            setIsEdit(true);
        }
    }, [secDetails])

    useEffect(() => {
        console.log(secDetails);
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
                        {/* <Form.Group className="mb-3" controlId="budget">
                            <Form.Label>ISIN</Form.Label>
                            <Form.Control
                                type="text"
                                value={details.isin}
                                onChange={(e) => setDetails({ ...details, isin: e.target.value })}
                            />
                            {formErrors.name ? (
                                <p className="text-danger">{formErrors.isin}</p>
                            ) : null}
                        </Form.Group> */}

                        {makeModalField("ISIN", "isin", details, setDetails)}
                        {makeModalField("CUSIP", "cusip", details, setDetails)}
                        {makeModalField("Issuer", "issuer", details, setDetails)}
                        {makeModalDateField("Maturity", "maturityDate", details, setDetails)}
                        {makeModalField("Coupon", "coupon", details, setDetails)}
                        {makeModalField("Type", "type", details, setDetails)}
                        {makeModalField("Face Value", "faceValue", details, setDetails)}
                        {makeModalField("Status", "status", details, setDetails)}
                        
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

export default SecuritiyModal;
