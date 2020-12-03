import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css'
import { CLOUD, SUN } from '../../constants/weathers';


const location = "Buenos Aires,ar";
const api_key = "0f2e51ebb8755757475557b787981a3b";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

//&units=metric

const data = {
    temperature: 5,
    weatherState: CLOUD,
    humidity: 10,
    wind: '40 m/s',
}


class WeatherLocation extends Component {
    
    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    };

    getTemp = kelvin => {
        return convert(kelvin).from("K").to("C").toFixed(2);
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp} = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp);

        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
        }
        
        return data;
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather= this.getData(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data : newWeather
            });
        });
    }
    render() {
        const { city, data }= this.state
        return (
            <div className="wheatherLocationCont"> 
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }   
}

export default WeatherLocation;