import React, { useEffect } from 'react';
import './App.scss';
import MainContainer from './components/Main/MainContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import ErrorPopup from './components/ErrorPopup/ErrorPopup';
import { connect } from 'react-redux';
import { getLinkToImage } from './thunk/getLinkToImage';
import backgrDefault from './assets/images/bg3.png';

const App = ({linkToImage, getLinkToImage}) => {

  const divStyle = {
    backgroundImage: linkToImage?`url(${linkToImage})`: `url(${backgrDefault})`,
  };

  useEffect(() => {
    getLinkToImage();
  }, [getLinkToImage]);
  return (
    <div style={divStyle} className='App'>
      <HeaderContainer getLinkToImage={getLinkToImage} />
      <MainContainer />
      <ErrorPopup />
    </div>
  );
}

const mapStateToProps = (state) => ({
  linkToImage: state.weatherBlock.linkToImage,
})

export default connect(mapStateToProps, {getLinkToImage})(App);
