import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import Login from "./components/login/Login";
import Securities from "./components/admin/securities/Securities";
import Employees from "./components/admin/addEmployee/Employees";
import Trades from "./components/admin/trades/Trades";
import ErrorPage from "./components/ErrorPage";
import componentStyle from './styles/componentStyle.scss';
import Sidebar from "./common/Sidebar";
import AppLayout from "./common/AppLayout";
import Books from "./components/admin/books/Books";
import Party from "./components/admin/party/Party";
import DashBoard from "./components/employee/Dashboard";
import ProtectedRoute from "./common/ProtectedRoute";

const App = () => {

    return <Router>
        <div className="app-wrapper" >
            <div
                className="app-bg"
                style={{
                    backgroundImage: 'url("/assets/images/landing_bg.jpg")',
                }}
            />

            <div className="app-content" style={componentStyle}>

                <Routes>

                    <Route path="/" exact element={<ProtectedRoute />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/Securities" element={
                        <AppLayout role="admin">
                            <Securities />
                        </AppLayout>
                    } />
                    <Route path="/Trades" element={
                        <AppLayout role="admin">
                            <Trades />
                        </AppLayout>
                    } />
                    <Route path="/Employees" element={
                        <AppLayout role="admin">
                            <Employees />
                        </AppLayout>
                    } />
                    <Route path="/Books" element={
                        <AppLayout role="admin">
                            <Books />
                        </AppLayout>
                    } />
                    <Route path="/Dashboard" element={
                        <AppLayout role="employee">
                            <DashBoard />
                        </AppLayout>
                    } />
                    <Route path="/Party" element={
                        <AppLayout role="admin">
                            <Party />
                        </AppLayout>
                    } />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>;
            </div>
        </div>
    </Router >;
};

export default App;
