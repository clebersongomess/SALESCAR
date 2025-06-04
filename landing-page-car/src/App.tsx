import React from 'react';
import Banner from './components/Banner/Banner';
import Info from './components/Info/Info';
import Gallery from './components/Gallery/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.scss';

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <Banner />
        <Info />
        <Gallery />
      </div>
    </>
  );
}

export default App;