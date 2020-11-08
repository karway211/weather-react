import React from 'react';
import { connect } from 'react-redux';
import { actionsAC } from '../../redux/weather-reducer';
import './ErrorPopup.scss';

const ErrorPopup = ({setNewErr, errorName}) => {
  const onClosePopup = () => {
    setNewErr('');
  }
  return (
    <div className={errorName ? 'error-popup-wrapper-active': 'popup'}>
      <div className={'error-popup'}>
        {errorName}
        <button className='error-popup-bth' onClick={onClosePopup}><i className='far fa-times-circle'></i></button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  errorName: state.weatherBlock.errorName,
});

export default connect(mapStateToProps, {...actionsAC})(ErrorPopup);
