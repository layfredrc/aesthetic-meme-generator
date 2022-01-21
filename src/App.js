import React from 'react';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';
import WaveBackground from './components/WaveBackground';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WaveBackground />
      <MemeGenerator />
    </div>
  );
}

export default App;
