import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature =({ temperature, weatherState}) =>(
    <div>
        <span>
            <WeatherIcons name='day-sunny' size="2x" />
        </span>
        <span>
            {`${temperature} ºC`}
        </span>
    </div>
);

export default WeatherTemperature;