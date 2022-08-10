import React from 'react'
import { getItem } from './localStore'
import Sidebar from './Sidebar'
import ErrorPage from '../components/ErrorPage'

const AppLayout = ({ children, role }) => {

    const done = (getItem("role") ?? "admin") === role;

    return (
        !done ? <ErrorPage /> : <>
            <Sidebar />
            <div id="wrapper">
                <div className='px-4 px-sm-5 py-3'>
                    {children}
                </div>
            </div></>
    )
}

export default AppLayout