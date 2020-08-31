import React from 'react';
import '../Header.scss';
import { actionsAC } from '../../../redux/weather-reducer';
import { connect } from 'react-redux';
import { getCityData } from '../../../thunk/getCityData';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';

const CityForm = ({lang, city, getCityData, setCity}) => {

  const { transcript, resetTranscript } = useSpeechRecognition();
  let [listening, setListening] = useState(false);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  const changeCity = (e) => {
    setCity(e.currentTarget.value);
  }

  const onGetCity = () => {
    if (city) {
      city.trim().length > 0 && getCityData(city, lang);
    }
  }

  const onVoiceSearch = () => {
    listening === false ? setListening(listening=true) : setListening(listening=false);
    if (listening) {
      SpeechRecognition.startListening({language: `${lang}-${lang==='en'?'US':'RU'}`});
    }
    if(!listening) {
      SpeechRecognition.stopListening();
      if(transcript && transcript.trim().length > 0) {
        setCity(transcript);
        resetTranscript();
      }
    }
  }
  
  return (
    <div className='header__searching'>
        <input className='header__searching-city'
              type='text'
              value={city}
              onChange={changeCity}
              placeholder={lang ==='en' ? 'Search city' : 'Поиск города'} />
        <button className={(listening && `header__searching-voice active-voice`) || 'header__searching-voice'}
                onClick={onVoiceSearch} ><i className="fa fa-microphone" /></button>
        <button className='header__searching-bth' onClick={onGetCity}>{lang ==='en' ? 'SEARCH' : 'ПОИСК'}</button>
    </div>
  )
}

const mapStateToProps = state => ({
  lang: state.weatherBlock.lang,
  city: state.weatherBlock.city,
})

export default connect(mapStateToProps, {...actionsAC, getCityData})(CityForm);
