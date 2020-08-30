import React, { useEffect } from 'react';
import './WeatherDate.scss';

const WeatherDate = ({time, setTime, lang, timezone}) => {
// console.log(time)
  useEffect(() => {
    if (timezone) {
    const interval = setInterval(() => {
          setTime(timezone, lang);
        }, 1000);
        return () => clearInterval(interval);
    }
  }, [timezone, lang, setTime]);

  return (
    <div className='weather__date'>
      <span className='weather__date-current--date'>{`${time}`}</span>
    </div>
  )
};

export default WeatherDate;
