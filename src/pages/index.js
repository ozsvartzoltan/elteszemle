import React from 'react';
import Preloader from '../components/Preloader/Preloader';
import Timer from '../components/Countdown/Timer';
import './../styles.css';

function Home() {
  return (
    <div className="App">
      <div className="container">
        <h1>Hamarosan érkezünk...</h1>
        <Timer />
        <Preloader />
      </div>
    </div>
  );
}

export default Home;
