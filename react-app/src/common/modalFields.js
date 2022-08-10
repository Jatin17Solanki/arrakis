import { Modal, Form } from 'react-bootstrap';
import Select from 'react-select';

export const makeModalField = (labelName, fieldName, details, setDetails, formErrors) => {
    return (<Form.Group className="mb-3" controlId={labelName}>
        <Form.Label>{labelName}</Form.Label>
        <Form.Control
            type="text"
            value={details[fieldName]}
            onChange={(e) => setDetails({ ...details, [fieldName]: e.target.value })}
        />
        {/* {formErrors.name ? (
            <p className="text-danger">{formErrors.fieldName}</p>
        ) : null} */}
    </Form.Group>);
}

export const makeModalDateField = (labelName, fieldName, details, setDetails, formErrors) => {
    return (<Form.Group className="mb-3" controlId={labelName}>
        <Form.Label>{labelName}</Form.Label>
        <Form.Control
            type="date"
            value={details[fieldName]}
            onChange={(e) => setDetails({ ...details, [fieldName]: e.target.value })}
        />
        {/* {formErrors.name ? (
            <p className="text-danger">{formErrors.fieldName}</p>
        ) : null} */}
    </Form.Group>);
}

export const makeModalDropdownField = (labelName, fieldName, details, setDetails, options, formErrors) => {
    return <Form.Group className="mb-3" controlId={labelName}>
        <Form.Label> {labelName} </Form.Label>
        <Select
            value={{ value: details[fieldName], label: details[fieldName] }}
            onChange={(e) => setDetails({ ...details, [fieldName]: e.value })}
            options={
                options
            }
        />
        {/* {formErrors.year ? (
                                <p className="text-danger">{formErrors.year}</p>
                            ) : null} */}
    </Form.Group>
}
