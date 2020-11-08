import React from 'react';
import './Button.scss';

const ButtonItem = ({сelsius, unit, getUnit, bool}) => {
return <button onClick={getUnit} className={сelsius === bool? `${'button-item'} ${'button-item-active'}`:'button-item'}>{unit}&deg;</button>
}

export default ButtonItem;
