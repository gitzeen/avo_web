import React from 'react';

import { Footer } from './containers';
import { Crew, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Crew />
    <Footer />
  </div>
);

export default App;
