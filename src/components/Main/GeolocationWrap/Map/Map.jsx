import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Maps = ({latitude, longitude}) => (
  <YMaps>
    <div>
      <Map className='map' defaultState={{ center: [latitude, longitude], zoom: 9 }}><Placemark geometry={[latitude, longitude]}/></Map>
    </div>
  </YMaps>
)

export default Maps;
