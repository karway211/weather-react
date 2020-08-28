import React from 'react';
import './App.scss';
import MainContainer from './components/Main/MainContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <MainContainer />
    </div>
  );
}

export default App;
