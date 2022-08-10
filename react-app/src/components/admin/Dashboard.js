import React from 'react'
import MySidebar from '../../common/MySideBar'
import Navbar from '../../common/Navbar'
import Sidebar from '../../common/Sidebar'
import componentStyle from '../../styles/componentStyle.scss'

function Dashboard() {
    console.log("dashboard");
    return (
        <div style={componentStyle}>
            <Sidebar />
            <div> Dashboard</div>
        </div>
    )
}

export default Dashboard