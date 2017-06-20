import React from 'react'
import logo from '../logo.svg';

import { WeatherForm } from './WeatherForm';
import { WeatherMessage } from './WeatherMessage';

import { getTemp } from '../api/openWeatherApi';

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handleWeatherSearch = this.handleWeatherSearch.bind(this);

        this.state =  {temp: 30, location:'London', isLoading:false};
    }

    handleWeatherSearch(location) {
        console.log(location);

        this.setState({isLoading:true});
        getTemp(location).then( (temp) => {
                this.setState( (prevState, props) => ({
            location: location,
            temp: temp,
            isLoading: false
        }));
    }, (err) => {
             this.setState({isLoading:false});
            alert(err);
        } ).catch(err => {
             this.setState({isLoading:false});
            alert(err);
        });
        
        
    }

    render() {

        var { temp, location, isLoading }  = this.state;
        
        function renderMessage(){
            if (isLoading) {
                return <h3>Loading... .</h3>
            } else if(temp && location) {
                return <WeatherMessage temp={temp} location={location} />
            }
        }

        return (
            <div>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    <h2>Get Current Weather</h2>
                    <WeatherForm onSearch={this.handleWeatherSearch} />
                    { renderMessage() }
                </div>
                <p className="App-intro">
                    To get started, edit
                    <code>src/App.js</code>
                    and save to reload.
                </p>
                {this.props.children}
            </div>
        )
    }
}
export default Home