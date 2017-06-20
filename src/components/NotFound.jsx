import React from 'react'

export const NotFound = (props) => {
    return(
        <div className="error">
            <p>The page you are looking for could not be found.</p>
            {props.children}
        </div>
    )
}

export default NotFound;