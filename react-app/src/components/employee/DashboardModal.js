import React, { useEffect, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import Select from 'react-select';
import { makeModalDateField, makeModalDropdownField, makeModalField } from '../../common/modalFields';
import { getbooks } from '../../services/bookServices';
import { getParties } from '../../services/partyServices';
import { getSecurities } from '../../services/securityServices';
// import { validateYearly } from './budgetValidation';

const DashBoardModal = ({ handleAddEdit, tradeDetails }) => {
    console.log(tradeDetails);
    
    const detailsObj = {
        id: "",
        bookId: "",
        counterPartyId: "",
        securityId: "",
        quantity: "",
        status: "",
        price: "",
        buySell: "",
        tradeDate: "",
        settlementDate: "",
    }

    const errorObj = {
        id: "",
        bookId: "",
        counterPartyId: "",
        securityId: "",
        quantity: "",
        status: "",
        price: "",
        buySell: "",
        tradeDate: "",
        settlementDate: "",
    };

    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit] = useState(tradeDetails?.id);
    const [details, setDetails] = useState(detailsObj);
    const [formErrors, setFormErrors] = useState(errorObj);
    const [booksOptions, setBookOptions] = useState([]);
    const [partyOptions, setPartyOptions] = useState([]);
    const [securtyOptions, setSecurtyOptions] = useState([]);

    const buyOptions = [
        { value: "Buy", label: "Buy" },
        { value: "Sell", label: "Sell" },
    ]

    const getBooksOptions = async () => {
        let resp = await getbooks();
        if(resp.status === 200) {
            console.log(resp.data);
            let tmp = resp.data.map(book => {
                return {
                    value: book.id,
                    label: book.book_name,
                }
            })
            setBookOptions(tmp);
        }
    }
    const getPartyOptions = async () => {
        let resp = await getParties();
        if(resp.status === 200) {
            console.log(resp.data);
            let tmp = resp.data.map(party => {
                return {
                    value: party.id,
                    label: party.name,
                }
            })
            setPartyOptions(tmp);
        }
    }
    const getSecurityOptions = async () => {
        let resp = await getSecurities();
        if(resp.status === 200) {
            console.log(resp.data);
            let tmp = resp.data.map(sec => {
                return {
                    value: sec.id,
                    label: sec.issuer,
                }
            })
            setSecurtyOptions(tmp);
        }
    }

    useEffect(() => {
        if(show === true) {
            getBooksOptions();
            getSecurityOptions();
            getPartyOptions();
        }
    }, [show])

    useEffect(() => {
        console.log("changed Trade");
        if (tradeDetails?.id) {
            console.log("edit mode on");
            setDetails(tradeDetails);
            setIsEdit(true);
        }
    }, [tradeDetails])

    useEffect(() => {
        console.log(tradeDetails);
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
                    className={`btn  ${isEdit ? 'btn-lg text-icon-gray' : 'btn-primary'
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

                        {makeModalDropdownField("Book ID", "bookId", details, setDetails, booksOptions)}
                        {makeModalDropdownField("counter Party ID", "counterPartyId", details, setDetails, partyOptions)}
                        {makeModalDropdownField("Security Id", "securityId", details, setDetails, securtyOptions)}
                        {makeModalField("Quantity", "quantity", details, setDetails)}
                        {makeModalField("Status", "status", details, setDetails)}
                        {makeModalField("Price", "price", details, setDetails)}
                        {makeModalDropdownField("Buy/Sell", "buySell", details, setDetails, buyOptions)}
                        {makeModalDateField("Trade Date", "tradeDate", details, setDetails)}
                        {makeModalDateField("Settlement Date", "settlementDate", details, setDetails)}

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

export default DashBoardModal;
