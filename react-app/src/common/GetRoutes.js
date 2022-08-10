import { Routes, Route } from 'react-router-dom';

import Dashboard from "../components/admin/Dashboard";
import Securities from "../components/admin/Securities";
import Trades from "../components/admin/Trades";
import Employees from "../components/admin/Employees";
import Sidebar from "./Sidebar";
import MySidebar from "./MySideBar";

import React from 'react'

function GetRoutes(props) {
    console.log("get routes");
    const isAdmin = props.roleId === "1";

    const adminRoutes = <Routes>
            <Route path="/admin-dashboard" exact element={<Dashboard />} />
            <Route path="/Securities" element={<Securities />} />
            <Route path="/Trades" element={<Trades />} />
            <Route path="/Employees" element={<Employees />} />
        </Routes>;

    const employeeRoutes = <Routes>
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/Securities" element={<Securities />} />
            <Route path="/Trades" element={<Trades />} />
            <Route path="/Employees" element={<Employees />} />
        </Routes>;

    if(isAdmin) {
        return adminRoutes;
    }
    return employeeRoutes;
}

export default GetRoutes;