import React from 'react';
import '../Header.scss';
import { reduxForm, Field } from 'redux-form';

const AddCityForm = ({lang, ...props}) => {
  return (
    <form className='header__searching' onSubmit={props.handleSubmit}>
        <Field className='header__searching-city' name='newCityBody' component='input' type='text' placeholder={lang ==='en' ? 'Search city' : 'Поиск города'} />
        <button className='header__searching-voice'><i className="fa fa-microphone" /></button>
        <button className='header__searching-bth'>{lang ==='en' ? 'SEARCH' : 'ПОИСК'}</button>
    </form>
  )
}

const AddCityFormRedux = reduxForm({form: 'cityAddCityForm'})(AddCityForm);
export default AddCityFormRedux;
