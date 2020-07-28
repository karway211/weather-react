import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
// import Main from './components/Main/Main';
import MainContainer from './components/Main/MainContainer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
