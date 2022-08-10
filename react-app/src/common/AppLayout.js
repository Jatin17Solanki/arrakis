import React from 'react'
import Sidebar from './Sidebar'

const AppLayout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <div id="wrapper">
                <div className='px-4 px-sm-5 py-3'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default AppLayout