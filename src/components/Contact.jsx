import React from 'react'

export const Contact = (props) => {
    return(
        <div>
            <p>Contact Us!</p>
            {props.children}
        </div>
    )
}

export default Contact;