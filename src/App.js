import React from 'react';
import './App.css';
import ButtonAppBar from './components/header/Header';
import TextFields from './components/form/Form';
import ImageZone from './components/imagezone/ImageZone';
import ResultImg from './components/dialog/ResultImg';
import Instructions from './components/dialog/Instructions';
import About from './components/dialog/About';

function App() {

  return (
      <div className="App">
        <ButtonAppBar />
        <TextFields />
        <About />
        <ImageZone />
        <ResultImg />
        <Instructions />
      </div>
  );
}

export default App;
