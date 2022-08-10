import React, { useEffect, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import Select from 'react-select';
// import * as actions from '../_redux/budgetAction';
// import { validateYearly } from './budgetValidation';

const EmployeeModal = ({ handleAddEdit, empDetails }) => {
    console.log(empDetails);
    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState(empDetails?.id);
    const [formErrors, setFormErrors] = useState({
        "name": "",
        "email": "",
    });

    const detailsObj = {
        id: "",
        name: "",
        email: "",
        role: "",
        // books: [],
    }

    useEffect(() => {
        console.log("Changed employee");
        if (empDetails?.id) {
            setDetails(empDetails);
            setIsEdit(true);
        }
    }, [empDetails])

    const [details, setDetails] = useState(detailsObj);

    const handleClose = () => {
        setShow(false);
        setFormErrors({ name: "", email: "", });
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
                    <Modal.Title>{isEdit ? 'Edit Employee Info' : 'Add an Employee'}</Modal.Title>
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
                        <Form.Group className="mb-3" controlId="budget">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={details.name}
                                onChange={(e) => setDetails({ ...details, name: e.target.value })}
                            />
                            {formErrors.name ? (
                                <p className="text-danger">{formErrors.name}</p>
                            ) : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="budget">
                            <Form.Label>Email ID</Form.Label>
                            <Form.Control
                                type="text"
                                value={details.email}
                                onChange={(e) => setDetails({ ...details, email: e.target.value })}
                            />
                            {formErrors.name ? (
                                <p className="text-danger">{formErrors.name}</p>
                            ) : null}
                        </Form.Group>
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

export default EmployeeModal;
