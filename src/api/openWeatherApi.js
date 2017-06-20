import axios from 'axios';

const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/find?units=metric&appid=0e372f70724e35517b20becc4b1c23a2`;

export function getTemp(location) {
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${location}`;
    return axios
        .get(requestUrl)
        .then((resp) => {
            if (resp.data.cod !== '200' && resp.data.message) {
                throw new Error(resp.data.message);
            } else {
                if (resp.data.list.length > 0) {
                    return resp.data.list[0].main.temp;
                }
                throw new Error( "Invalid Location");
            }
        }, (err) => {
            throw err;
        });
}