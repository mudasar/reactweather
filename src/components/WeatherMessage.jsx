import React from 'react'

export const WeatherMessage = (props) => {
    return(
        <div>
            <hr/>
           <h3> its {props.temp} ℃ in {props.location}. </h3>
            {props.children}
        </div>
    )
}

WeatherMessage.defaultProps = {
    temp: 25,
    location: 'London'
}

export default WeatherMessage;