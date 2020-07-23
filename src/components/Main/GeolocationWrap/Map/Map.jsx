import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Maps = () => (
  <YMaps>
    <div>
      <Map className='map' defaultState={{ center: [52.26, 30.58], zoom: 9 }}><Placemark geometry={[52.26, 30.58]}/></Map>
    </div>
  </YMaps>
)

export default Maps;
