import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import * as actions from './_redux/landingAction';
// import { getUserRoleNameFromLS, USER_ROLES } from '../../shared/utils';
import { Form } from 'react-bootstrap';
import { validateLoginInfo } from '../../common/validations';
import { setItem } from '../../common/localStore';

const Login = () => {

    console.log("Insidee");
    
    const navigate = useNavigate();
    // let history = useHistory();
    // const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({
        userName: '',
        password: '',
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);

    // let goToDashBoard = () => {
    //     navigate.push('/');
    // };

    
    const login = (role) => {
        if(role === "admin") {
            setItem("role", "admin");
            navigate({ pathname: "/Securities"});
        }
        else {
            setItem("role", "employee");
            navigate({ pathname: "/Dashboard"});
        }
    }

    return (
        <div className="vh-100 overflow-hidden">
            <div className="h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-6 col-lg-6 d-none d-md-block h-100">
                        <img
                            src="/assets/images/login_photu.svg"
                            alt="login form"
                            className="img-fluid vh-100"
                        />
                    </div>
                    <div className="col-md-6 col-lg-6 d-flex align-items-center justify-content-center px-5">
                        <Form
                            className="form w-75"
                            onSubmit={(e) => {
                                e.preventDefault();
                                login();
                            }}
                        >
                            <h1 className="fw-bold mb-0 text-primary text-center pb-3">BONDS APP</h1>
                            <div className='p-3'></div>
                            {/* <h5 className="fw-bold mb-3 pb-3">Sign into your account</h5> */}
                            {/* <Form.Group className="input-with-margin">
                                <Form.Control
                                    type="text"
                                    value={userName}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setUserName(e.target.value);
                                    }}
                                    className="form-control-lg rounded-pill"
                                    placeholder="Username"
                                />
                                <span className="error-text ms-3">{formErrors.userName}</span>
                            </Form.Group>
                            <Form.Group className="input-with-margin">
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setPassword(e.target.value);
                                    }}
                                    className="form-control-lg rounded-pill"
                                    placeholder="Password"
                                />
                                <span className="error-text ms-3">{formErrors.password}</span>
                            </Form.Group> */}
                            <div className="pt-1 mb-4">
                                <button
                                    className="btn btn-primary btn-lg w-100 rounded-pill"
                                    type="submit"
                                    disabled={buttonDisabled}
                                    onClick={() => login("admin")}
                                >
                                    <span className="me-2">
                                        {/* <i class="fas fa-sign-in-alt"></i> */}
                                    </span>
                                    Login as a Manager
                                </button>
                            </div>
                            <div className="pt-1 mb-4">
                                <button
                                    className="btn btn-primary btn-lg w-100 rounded-pill"
                                    type="submit"
                                    disabled={buttonDisabled}
                                    onClick={() => login("employee")}
                                >
                                    <span className="me-2">
                                        {/* <i class="fas fa-sign-in-alt"></i> */}
                                    </span>
                                    Login as an Emplpoyee
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
