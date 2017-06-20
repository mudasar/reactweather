import React from 'react'

export class WeatherForm extends React.Component {
    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit (e) {
        e.preventDefault();

        var location = this.refs.location.value;
        if (location.length > 0) {
            this.props.onSearch(location);
            this.refs.location.value = '';
        }
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
<input ref="location" placeholder="Enter your city" type="text" /> 
                    </div>
                    <div>
                        <button>Get Weather</button>
                    </div>
                </form>
                {this.props.children}
            </div>
        )
    }
}

export default WeatherForm;