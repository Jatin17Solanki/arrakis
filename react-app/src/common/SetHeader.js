import React, { Children } from 'react'

function SetHeader({ title, children }) {
    return (
        <div className="d-flex justify-content-between align-items-center pb-3">
            {/* <h1 className='display-5 text-muted font-weight-bold'>{title}</h1> */}
            <h1>
                {title}
            </h1>
            {children}
        </div>
    )
}

export default SetHeader