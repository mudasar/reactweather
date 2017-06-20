import React from 'react'

export const About = (props) => {
    return(
        <div>
            <p>About Us!</p>
            {props.children}
        </div>
    )
}

export default About;