import React from 'react'
import Securities from '../components/admin/securities/Securities';
import DashBoard from '../components/employee/Dashboard';
import Login from '../components/login/Login';
import { getItem } from './localStore'

function ProtectedRoute() {

    const isManager = getItem("role");

    return (
        !isManager ? <Login /> : isManager === "admin" ? <Securities /> : <DashBoard />
    )
}

export default ProtectedRoute